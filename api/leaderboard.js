const { Redis } = require('@upstash/redis');

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

function avg(arr) {
  return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'method not allowed' });
    return;
  }

  const keys = await redis.keys('ratings:*');
  const perVoice = {};

  await Promise.all(keys.map(async (key) => {
    const [, voiceId, model] = key.split(':');
    const entries = await redis.lrange(key, 0, -1);
    const scores = entries
      .map((e) => (e && typeof e === 'object' ? e.score : null))
      .filter((s) => typeof s === 'number');
    if (!perVoice[voiceId]) perVoice[voiceId] = {};
    perVoice[voiceId][model] = scores;
  }));

  const result = {};
  for (const voiceId of Object.keys(perVoice)) {
    const multiScores = perVoice[voiceId].multi || [];
    const flashScores = perVoice[voiceId].flash || [];
    result[voiceId] = {
      avgMulti: avg(multiScores),
      countMulti: multiScores.length,
      avgFlash: avg(flashScores),
      countFlash: flashScores.length,
      avg: avg([...multiScores, ...flashScores]),
      count: multiScores.length + flashScores.length,
    };
  }

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json(result);
};
