const { Redis } = require('@upstash/redis');

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

const VALID_MODELS = new Set(['multi', 'flash']);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method not allowed' });
    return;
  }

  const { voiceId, model, score } = req.body || {};

  if (
    typeof voiceId !== 'string' || voiceId.length < 3 || voiceId.length > 64 ||
    !VALID_MODELS.has(model) ||
    !Number.isInteger(score) || score < 1 || score > 5
  ) {
    res.status(400).json({ error: 'invalid payload' });
    return;
  }

  const key = `ratings:${voiceId}:${model}`;
  await redis.rpush(key, { score, ts: Date.now() });

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ ok: true });
};
