# ElevenLabs Balkanski Glasovi — Istraživanje za Glasovni Generator + Pregled API Cijena

Kompletan presjek svih glasova iz ElevenLabs javne biblioteke vezanih za srpski/hrvatski/bosanski/crnogorski/makedonski/slovenački jezik, prikupljeno direktno preko ElevenLabs API-ja (`/v1/shared-voices`) 14. 8. 2026. Dopunjeno istog dana pregledom stvarne cijene/brzine po modelu (Multilingual v2 naspram Flash v2.5), izmjereno na 615 stvarnih generisanja po modelu, ne procjenom.

**Metod:** pretraga po ključnim riječima (Croatian, Serbian, Bosnian, Montenegrin, Balkan, Macedonian, Slovenian) preko `search` parametra, deduplicirano po `voice_id`, uklonjeno 5 lažnih pogodaka (fuzzy search je izvukao glasove bez stvarne veze sa regionom, npr. rumunski glumac "Serban Popescu").

**Ukupno:** 41 jedinstvenih glasova. **10 je trenutno u Glasovni Generator widgetu** (`apps/glasovni-generator/server_ext.py`), ostalih 31 su dodatne opcije iz iste biblioteke.

**Napomena o kompletnosti:** ovih 41 je pouzdan MINIMUM, ne garantovan maksimum. Metoda hvata svaki glas koji eksplicitno pominje neku od traženih riječi u nazivu/opisu — teoretski postoji glas sa generičkim opisom (bez pomena jezika/regiona) koji bi nama bio nevidljiv. Pokušala sam provjeriti preko šireg `language=hr` filtera (bez keyword-a) da procijenim veličinu te "slijepe zone", ali otkrila sam da je taj filter na ElevenLabs API-ju nepouzdan — vraćao je i glasove sasvim drugih jezika (kanadski engleski, japanski, britanski engleski) kad se filtrira po `hr`. Zato ne postoji pouzdan način da se izmjeri koliko bismo mogli propustiti — vjerovatno malo, ali nemam čvrst broj.

---

## Brzi pregled — svi glasovi sortirani po popularnosti

`7d`/`1g` = broj generisanih karaktera u zadnjih 7 dana / godinu dana (mjera koliko se glas stvarno koristi u praksi — veći broj = ElevenLabs ima veći finansijski interes da ga ne ukloni). `Kloniran` = koliko puta su drugi korisnici dodali ovaj glas u svoj nalog.

| Glas | U widgetu | Pol | Jezik-akcent | 7d karaktera | 1g karaktera | Klonirano | Cijena | Free-tier | Moderacija | Notice period |
|---|---|---|---|---:|---:|---:|---|---|---|---|
| Maja - Engaging, Narrative | ✅ (Maja) | Ž | hr/standard | 257.283 | 491.532.705 | 16.239 | 1.0x | da | da | 90d |
| Luka - Calm, Narrative | ✅ (Luka) | M | hr/standard | 5.652.861 | 126.853.581 | 20.311 | 1.0x | da | ne | 730d |
| Slobodan - Persuasive, Narrative | ✅ (Slobodan) | M | hr/- | 813.583 | 94.141.335 | 38.886 | 1.0x | da | ne | 730d |
| Tomislav - Calm, Clear and Narrative | ✅ (Tomislav) | M | hr/standard | 587.733 | 38.973.537 | 9.340 | 1.0x | ne | da | 730d |
| Balkanika - Expressive Universal Slavic Narrator | ✅ (Balkanika) | Ž | hr/standard | 846.750 | 24.675.731 | 4.078 | 3.0x +$0.2 | ne | ne | 730d |
| Nikola – Balkan Pro (Serbian, Croatian) | ✅ (Nikola) | M | hr/standard | 266.892 | 12.699.925 | 6.193 | 1.0x | da | ne | 730d |
| Ana - Authoritative, Informative | ✅ (Ana) | Ž | hr/standard | 553.587 | 10.973.416 | 4.319 | 3.0x +$0.2 | ne | ne | 730d |
| Ida - Clear, Confident Serbian | ✅ (Ida) | Ž | hr/standard | 526.754 | 8.957.516 | 3.223 | 1.0x | da | da | 365d |
| Milena – Female Balkan Premium (Serbian/Croatian) | ✅ (Milena) | Ž | hr/standard | 267.251 | 5.782.040 | 3.759 | 1.0x | da | ne | 730d |
| Ivan - Deep Serbian & Croatian (Balkan) | ✅ (Ivan) | M | hr/standard | 84.389 | 4.485.930 | 2.520 | 1.0x | ne | ne | 730d |
| Dylan - Profesional, Warm |  | M | hr/standard | 435.420 | 30.303.180 | 10.353 | 1.0x | da | ne | 730d |
| Adnan - Energetic, Educational |  | M | hr/standard | 164.969 | 20.843.121 | 7.666 | 1.0x | ne | ne | 365d |
| Sofia |  | Ž | el/macedonian | 392.805 | 19.755.095 | 9.870 | 1.0x | da | ne | 180d |
| Fran - Calm, Narrative |  | M | hr/zagreb | 268.493 | 17.842.750 | 11.474 | 1.0x | da | ne | 730d |
| Davor - Conversational, Casual |  | M | hr/standard | 291.882 | 12.635.321 | 7.292 | 1.0x | da | ne | nepoznato |
| Ivan - Informative, Educational |  | M | hr/zagreb | 74.897 | 10.236.912 | 7.321 | 1.0x | da | da | 180d |
| Zlata - Calm, Narrative and Relaxed |  | Ž | hr/standard | 283.820 | 9.385.198 | 5.865 | 1.0x | da | ne | nepoznato |
| Amber - Calm, Elegant and Dreamy |  | Ž | en/croatian | 473.121 | 9.016.700 | 8.861 | 1.0x | da | ne | 365d |
| Karlo - Calm, Clear & Friendly  |  | M | hr/zagreb | 260.709 | 6.990.552 | 2.492 | 1.0x | da | ne | 730d |
| Lara - Positive, Formal |  | Ž | hr/standard | 123.690 | 4.653.777 | 1.581 | 3.0x +$0.2 | ne | ne | 730d |
| Ana SRB - Call center voice |  | Ž | hr/standard | 82.955 | 4.533.646 | 1.951 | 1.0x | da | ne | 730d |
| Nina - Calm, Warm & Resonant |  | Ž | hr/standard | 45.119 | 3.764.890 | 2.686 | 1.0x | ne | da | 730d |
| Uros Novak  |  | M | en/croatian | 1.799.023 | 3.530.347 | 1.040 | 1.0x | da | ne | 30d |
| Marko - Deep, Calm and Narrative |  | M | hr/standard | 96.574 | 3.063.497 | 2.128 | 1.0x | ne | ne | 730d |
| Ana - Corporate, SaaS, IVR |  | Ž | en/croatian | 85.946 | 2.489.726 | 983 | 1.0x | da | ne | 365d |
| Sini - Calm, Clear & Narrative |  | M | hr/standard | 34.639 | 2.475.956 | 972 | 1.0x | ne | da | 730d |
| Marko -  Conversational, Detached |  | M | hr/standard | 66.200 | 2.331.040 | 1.474 | 1.0x | da | ne | 730d |
| Mateo - Deep, Monotone, and Steady |  | M | en/croatian | 3.646 | 2.072.172 | 1.404 | 1.0x | da | ne | 180d |
| Luka |  | M | hr/standard | 68.372 | 1.327.502 | 1.105 | 1.0x | da | ne | 730d |
| Jusuf - Calm, Narrative |  | M | hr/standard | 12.280 | 854.302 | 1.393 | 3.0x +$0.2 | ne | ne | 90d |
| Branimir - Professional Croatian Studio |  | M | hr/standard | 229.720 | 760.466 | 152 | 1.0x | ne | da | 730d |
| Mihael - Croatian Radio TV host |  | M | hr/standard | 27.675 | 658.122 | 284 | 1.0x | ne | da | 730d |
| Ivana - Calm, Slow & Friendly |  | Ž | hr/standard | 43.830 | 522.428 | 182 | 1.0x | ne | ne | nepoznato |
| Christian - Smooth and Laid-back |  | M | hr/standard | 16.839 | 519.537 | 317 | 1.0x +$0.02 | ne | da | 90d |
| Ella |  | Ž | en/croatian | 6.120 | 31.054 | 34 | 1.0x | ne | ne | 730d |
| Mila - Pleasant and gentle |  | Ž | hr/standard | 0 | 0 | 141 | 1.0x | da | ne | 4015d |
| Elena - Confident and articulate |  | Ž | hr/standard | 0 | 0 | 73 | 1.0x | da | ne | 4015d |
| Ivana - Energetic and spirited |  | Ž | hr/standard | 0 | 0 | 79 | 1.0x | da | ne | 4015d |
| Marko - Energetic and lively |  | M | hr/standard | 0 | 0 | 66 | 1.0x | da | ne | 4015d |
| Ana - Pleasant and warm |  | Ž | hr/standard | 0 | 0 | 103 | 1.0x | da | ne | 4015d |
| Luka - Pleasant and approachable |  | M | hr/standard | 0 | 0 | 39 | 1.0x | da | ne | 4015d |

---

## Ključni nalazi

**Najpopularniji (najsigurniji dugoročan izbor):**
- **Maja - Engaging, Narrative** — 491.532.705 karaktera/god, klonirano 16.239x — već u widgetu kao Maja
- **Luka - Calm, Narrative** — 126.853.581 karaktera/god, klonirano 20.311x — već u widgetu kao Luka
- **Slobodan - Persuasive, Narrative** — 94.141.335 karaktera/god, klonirano 38.886x — već u widgetu kao Slobodan
- **Tomislav - Calm, Clear and Narrative** — 38.973.537 karaktera/god, klonirano 9.340x — već u widgetu kao Tomislav
- **Dylan - Profesional, Warm** — 30.303.180 karaktera/god, klonirano 10.353x — NIJE u widgetu

**Potpuno nekorišćeni / novi glasovi (0 karaktera u zadnjih godinu dana, tek dodati — imaju pristup najnovijem `eleven_v4` modelu što stariji glasovi nemaju):**
- Mila - Pleasant and gentle (klonirano 141x — nema usage podatke, ali ima potražnju)
- Elena - Confident and articulate (klonirano 73x — nema usage podatke, ali ima potražnju)
- Ivana - Energetic and spirited (klonirano 79x — nema usage podatke, ali ima potražnju)
- Marko - Energetic and lively (klonirano 66x — nema usage podatke, ali ima potražnju)
- Ana - Pleasant and warm (klonirano 103x — nema usage podatke, ali ima potražnju)
- Luka - Pleasant and approachable (klonirano 39x — nema usage podatke, ali ima potražnju)

**Skupi glasovi (3x cijena + doplata):** Ana - Authoritative Informative, Balkanika, Jusuf, Lara — svi `rate: 3.0`, `fiat_rate: 0.2`.

**Rizični notice period (mogu nestati bez najave ili sa vrlo kratkom najavom):** Uros Novak (30 dana), Davor / Ivana-Calm,Slow&Friendly / Zlata (nema navedenog perioda uopšte).

---

## Podržani modeli po glasu (brzina/kvalitet)

Ne rade svi glasovi sa svim TTS modelima. Bitno za odluku brzina-vs-kvalitet: `eleven_flash_v2_5` je najbrži/najjeftiniji, `eleven_multilingual_v2` je trenutni standard (najbolji kvalitet za širu paletu), `eleven_v4`/`eleven_v4_hq` je najnoviji model dostupan SAMO na par najnovijih glasova.

| Glas | Podržani modeli |
|---|---|
| Maja - Engaging, Narrative | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard) |
| Luka - Calm, Narrative | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Slobodan - Persuasive, Narrative | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard) |
| Tomislav - Calm, Clear and Narrative | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Balkanika - Expressive Universal Slavic Narrator | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Nikola – Balkan Pro (Serbian, Croatian) | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Ana - Authoritative, Informative | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Ida - Clear, Confident Serbian | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Milena – Female Balkan Premium (Serbian/Croatian) | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Ivan - Deep Serbian & Croatian (Balkan) | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Dylan - Profesional, Warm | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Adnan - Energetic, Educational | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Sofia | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Fran - Calm, Narrative | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Davor - Conversational, Casual | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Ivan - Informative, Educational | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard) |
| Zlata - Calm, Narrative and Relaxed | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Amber - Calm, Elegant and Dreamy | Flash v2 (starije, brzo), Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2 (starije), Turbo v2.5 (brzo), v2.5 Flash (alias), v2 Flash (alias) |
| Karlo - Calm, Clear & Friendly  | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Lara - Positive, Formal | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Ana SRB - Call center voice | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Nina - Calm, Warm & Resonant | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Uros Novak  | Flash v2 (starije, brzo), Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2 (starije), Turbo v2.5 (brzo), v2.5 Flash (alias), v2 Flash (alias) |
| Marko - Deep, Calm and Narrative | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Ana - Corporate, SaaS, IVR | Flash v2 (starije, brzo), Multilingual v2 (najbolji kvalitet, standard), Turbo v2 (starije), v2 Flash (alias) |
| Sini - Calm, Clear & Narrative | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Marko -  Conversational, Detached | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Mateo - Deep, Monotone, and Steady | Flash v2 (starije, brzo), Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2 (starije), Turbo v2.5 (brzo), v2.5 Flash (alias), v2 Flash (alias) |
| Luka | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Jusuf - Calm, Narrative | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Branimir - Professional Croatian Studio | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Mihael - Croatian Radio TV host | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Ivana - Calm, Slow & Friendly | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Christian - Smooth and Laid-back | Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias) |
| Ella | Flash v2 (starije, brzo), Flash v2.5 (brzo/jeftino), Multilingual STS v2 (speech-to-speech), Multilingual v2 (najbolji kvalitet, standard), Turbo v2 (starije), Turbo v2.5 (brzo), v2.5 Flash (alias), v2 Flash (alias) |
| Mila - Pleasant and gentle | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias), v4 (najnoviji, najviši kvalitet), v4 Fast, v4 HQ |
| Elena - Confident and articulate | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias), v4 (najnoviji, najviši kvalitet), v4 HQ |
| Ivana - Energetic and spirited | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias), v4 (najnoviji, najviši kvalitet), v4 HQ |
| Marko - Energetic and lively | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias), v4 (najnoviji, najviši kvalitet), v4 HQ |
| Ana - Pleasant and warm | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias), v4 (najnoviji, najviši kvalitet), v4 HQ |
| Luka - Pleasant and approachable | Flash v2.5 (brzo/jeftino), Multilingual v2 (najbolji kvalitet, standard), Turbo v2.5 (brzo), v2.5 Flash (alias), v4 (najnoviji, najviši kvalitet), v4 HQ |

**Glasovi sa pristupom najnovijem `eleven_v4` modelu** (viši kvalitet, ali usage=0 jer su tek dodati — nema još real-world potvrde kvaliteta): Mila, Elena, Ivana - Energetic and spirited, Marko - Energetic and lively, Ana - Pleasant and warm, Luka - Pleasant and approachable.

---

## Kompletan dosje — svaki glas pojedinačno

### Maja - Engaging, Narrative — 🟢 U WIDGETU kao "Maja"

- **voice_id:** `0jvpZ98RZwx5FBOSZAc3`
- **Pol / starost:** female / young
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** A young female voice for engaging narrations and audiobooks. Perfect for Balkan languages like Croatian, Serbian, Bosnian and Montenegrin and English with Slavic or Eastern European accent.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** pleasant
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** da
- **Notice period (garancija dostupnosti):** 90 dana
- **Korišćenje — zadnjih 7 dana:** 257.283 karaktera
- **Korišćenje — zadnjih godinu dana:** 491.532.705 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 16.239
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/rYCSsa1P6SP8cO23wL8zOyAON8C2/voices/0jvpZ98RZwx5FBOSZAc3/f6345350-d393-4e50-b33d-a968e35f5b12.mp3)

### Luka - Calm, Narrative — 🟢 U WIDGETU kao "Luka"

- **voice_id:** `ZLYZToA7aDsMbHwM9AOr`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Middle aged Croatian male with a neutral voice and Croatian accent. Perfect for narration.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** calm
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 5.652.861 karaktera
- **Korišćenje — zadnjih godinu dana:** 126.853.581 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 20.311
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://api.us.elevenlabs.io/v1/voices/ZLYZToA7aDsMbHwM9AOr/previews/audio?payload=eyJ2b2ljZV9zb3VyY2UiOiJjdXN0b20iLCJ1c2VyX2lkIjoid3F6UnNaTHpoeUxkWXVxOVVhT0c4RTRobXNUMiIsImZpbGVuYW1lIjoidHBLYTU1QVpTdG85cUxyRFZ2VWoubXAzIiwidGltZXN0YW1wIjoxNzg2NzIzMjAwMDAwMDAwfQ%3D%3D)

### Slobodan - Persuasive, Narrative — 🟢 U WIDGETU kao "Slobodan"

- **voice_id:** `adxhr4Ei7ASJ3Cz7fxwX`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / (nenavedeno)
- **Opis (ElevenLabs):** A calm voice with Serbian accent, being steady with clarity. Ideal for narrating Croatian/Bosnian or Serbian language.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** calm
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 813.583 karaktera
- **Korišćenje — zadnjih godinu dana:** 94.141.335 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 38.886
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/syjNf9g6SwUCrX6i9O9x6sWdOkJ3/voices/adxhr4Ei7ASJ3Cz7fxwX/02bb0f7c-500b-40cc-a528-5217cf9d2258.mp3)

### Tomislav - Calm, Clear and Narrative — 🟢 U WIDGETU kao "Tomislav"

- **voice_id:** `O9XgmQnaZveORWl6mTHm`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** A calm voice with Croatian accent. Steady and clear. Great for stories and conversations. Ideal for Balkan languages (Croatian, Serbian, Bosnian).
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** calm
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** da
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 587.733 karaktera
- **Korišćenje — zadnjih godinu dana:** 38.973.537 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 9.340
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://api.us.elevenlabs.io/v1/voices/O9XgmQnaZveORWl6mTHm/previews/audio?payload=eyJ2b2ljZV9zb3VyY2UiOiJjdXN0b20iLCJ3b3Jrc3BhY2VfaWQiOiJlMTMxOTBhYTA4YzY0M2RjOGY5N2U4MThlYmY5Y2ZkMSIsImZpbGVuYW1lIjoiaDIzQ1RnUDVDaEttem1NanlZQ1YubXAzIiwidGltZXN0YW1wIjoxNzg2NzIzMjAwMDAwMDAwfQ%3D%3D)

### Balkanika - Expressive Universal Slavic Narrator — 🟢 U WIDGETU kao "Balkanika"

- **voice_id:** `VB7D8zswiztJjyl8LI3a`
- **Pol / starost:** female / young
- **Kategorija:** high_quality
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** High quality versatile polished voice designed for excellence in any professional or casual setting. With its clear tone, articulate delivery and natural cadence, Balkanika is perfect for Balkan languages like Croatian, Serbian, Bosnian and Montenegrin or English with Slavic / Eastern European accent. Whether you need a trustworthy guide for instructional content or a compelling voice for advertisements, Balkanika delivers with passion and precision - ensuring your message resonates every time!
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** professional
- **Cijena:** 3.0x standardne kvote, + $0.2 direktna doplata
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 846.750 karaktera
- **Korišćenje — zadnjih godinu dana:** 24.675.731 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 4.078
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/user/z709Q6TJY7Trwof5RH640tEc5Rs2/voices/VB7D8zswiztJjyl8LI3a/ybETghOU8x0D1VjynRCV.mp3)

### Nikola – Balkan Pro (Serbian, Croatian) — 🟢 U WIDGETU kao "Nikola"

- **voice_id:** `DAGnQ7r9sMtV0Q44g1Mi`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Professional Serbian male voice with a deep, authoritative, and calm tone. Perfect for Balkan languages like Serbian, Croatian, Bosnian, and Montenegrin. Designed for Finance, Psychology, Social Media Educational Content, Documentaries, Online Courses, Stories, and Conversations.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** confident
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 266.892 karaktera
- **Korišćenje — zadnjih godinu dana:** 12.699.925 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 6.193
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://api.us.elevenlabs.io/v1/voices/DAGnQ7r9sMtV0Q44g1Mi/previews/audio?payload=eyJ2b2ljZV9zb3VyY2UiOiJjdXN0b20iLCJ1c2VyX2lkIjoiRHhSNXFmMU8xSlVWZ21ENHgwbEtXNUF6V2FWMiIsImZpbGVuYW1lIjoiQ0hxZ3J6Z2UwMUxMbVJuTVBadHQubXAzIiwidGltZXN0YW1wIjoxNzg2NzIzMjAwMDAwMDAwfQ%3D%3D)

### Ana - Authoritative, Informative — 🟢 U WIDGETU kao "Ana"

- **voice_id:** `NfdaqpoTPn7nF7WBBRTv`
- **Pol / starost:** female / young
- **Kategorija:** high_quality
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** High quality -  professional Female Croatian Voice Actor  - conversational and friendly.
- **Namjena (use_case):** conversational
- **Karakter (descriptive):** crisp
- **Cijena:** 3.0x standardne kvote, + $0.2 direktna doplata
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 553.587 karaktera
- **Korišćenje — zadnjih godinu dana:** 10.973.416 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 4.319
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/user/J6HGcvrW5BSTnjjNmstSIgDPZku2/voices/NfdaqpoTPn7nF7WBBRTv/lAc4md6vjnS6dbuuG9au.mp3)

### Ida - Clear, Confident Serbian — 🟢 U WIDGETU kao "Ida"

- **voice_id:** `d3l4f3HgkE3P6Fo91lYA`
- **Pol / starost:** female / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Serbian female voice. Calm, confident, and inviting. Clear, natural delivery with an easy pace, well suited to hospitality, customer service, and professional narration.
- **Namjena (use_case):** informative_educational
- **Karakter (descriptive):** confident
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** da
- **Notice period (garancija dostupnosti):** 365 dana
- **Korišćenje — zadnjih 7 dana:** 526.754 karaktera
- **Korišćenje — zadnjih godinu dana:** 8.957.516 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 3.223
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://api.us.elevenlabs.io/v1/voices/d3l4f3HgkE3P6Fo91lYA/previews/audio?payload=eyJ2b2ljZV9zb3VyY2UiOiJjdXN0b20iLCJ3b3Jrc3BhY2VfaWQiOiJjNzg5YjJmODM5NGE0NmY3YmVjMmIxNjM4MjAxZjJhZiIsImZpbGVuYW1lIjoidUJOeHozdEE0SDdkZlFSN2JMd2YubXAzIiwidGltZXN0YW1wIjoxNzg2NzIzMjAwMDAwMDAwfQ%3D%3D)

### Milena – Female Balkan Premium (Serbian/Croatian) — 🟢 U WIDGETU kao "Milena"

- **voice_id:** `7IVTG9LKLYndnFiFDLU2`
- **Pol / starost:** female / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Professional Serbian (Balkan) female voice with a clear, confident, and calm tone.

Ideal for YouTube content, educational videos, and voiceovers across Serbian, Croatian, Bosnian, and Montenegrin.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** casual
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 267.251 karaktera
- **Korišćenje — zadnjih godinu dana:** 5.782.040 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 3.759
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/ca69848b60bc43b39969ac00cad98e4c/voices/7IVTG9LKLYndnFiFDLU2/mtqAVSZ15xJ6o57ESMrV.mp3)

### Ivan - Deep Serbian & Croatian (Balkan) — 🟢 U WIDGETU kao "Ivan"

- **voice_id:** `j96cp162VcYdsYfSp1nc`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Professional Serbian male voice with a deep, authoritative, and calm tone. Designed for Psychology and Motivational Videos, Social Media Educational Content, Documentaries, Stories and More.. Perfect for Balkan languages like Serbian, Croatian, Bosnian, and Montenegrin.
- **Namjena (use_case):** social_media
- **Karakter (descriptive):** professional
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 84.389 karaktera
- **Korišćenje — zadnjih godinu dana:** 4.485.930 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 2.520
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/7ff1b234eed243f3903035c82ee087af/voices/j96cp162VcYdsYfSp1nc/rtADjcCgXD1CAWcYgdB0.mp3)

### Dylan - Profesional, Warm

- **voice_id:** `F2kYsMGahtg8auErVXgY`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Professional, warm, and grounded male voice with over 30 years in broadcast and narration. Calm, credible, and emotionally resonant, ideal for storytelling, advertising, and educational content. Fluent in Balkan languages (Serbian, Montenegrin, Bosnian, and Croatian) and English with a subtle Eastern European accent and global clarity.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** wise
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 435.420 karaktera
- **Korišćenje — zadnjih godinu dana:** 30.303.180 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 10.353
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/user/p1RXf5gigAh7WUOGUtta2JxaFTi2/voices/F2kYsMGahtg8auErVXgY/43fc2374-9ef3-4c9f-b6db-4a3ffa98ad42.mp3)

### Adnan - Energetic, Educational

- **voice_id:** `FXFcxnjikw0naYO1PPrU`
- **Pol / starost:** male / young
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Croatian male voice in their 30s, ideal for news, informational videos, narration, and other content. The voice is clear, confident, and versatile, with a warm, engaging tone that draws in the audience and conveys authority while maintaining relatability.
- **Namjena (use_case):** informative_educational
- **Karakter (descriptive):** casual
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 365 dana
- **Korišćenje — zadnjih 7 dana:** 164.969 karaktera
- **Korišćenje — zadnjih godinu dana:** 20.843.121 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 7.666
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/9d161a9ddf144dd08b59c7c0bd25c0f1/voices/FXFcxnjikw0naYO1PPrU/eDFCKwcEyyQGhcRdt8Mm.mp3)

### Sofia

- **voice_id:** `0oYUKTNPbymIKVAkDQqh`
- **Pol / starost:** female / young
- **Kategorija:** professional
- **Jezik / lokal / akcent:** el / None / macedonian
- **Opis (ElevenLabs):** sweet female voice for radio, TV spots, telemarketer presentations, call center and e-learning
- **Namjena (use_case):** advertisement
- **Karakter (descriptive):** pleasant
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 180 dana
- **Korišćenje — zadnjih 7 dana:** 392.805 karaktera
- **Korišćenje — zadnjih godinu dana:** 19.755.095 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 9.870
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/4591ca1a9cd04cd69284c8b9a3993491/voices/0oYUKTNPbymIKVAkDQqh/DSuiEb9R6pqwbd0iK5xg.mp3)

### Fran - Calm, Narrative

- **voice_id:** `TRnNlYQWHAJwo9K75wNE`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / zagreb
- **Opis (ElevenLabs):** Croatian male voice, medium-to-deep, warm, and calm, with a grounded, soft tone. Mature, steady delivery — not too fast — suitable for narration, storytelling, thoughtful content, or podcasts. Trained on 2 hours of studio-quality documentary-style/audiobook narration in Croatian language.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** neutral
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 268.493 karaktera
- **Korišćenje — zadnjih godinu dana:** 17.842.750 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 11.474
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/user/JkoetqVlgtYT5YGja7DSXiMBISJ2/voices/TRnNlYQWHAJwo9K75wNE/hG9D0F6eKur3B0GyY86B.mp3)

### Davor - Conversational, Casual

- **voice_id:** `kpx2bGcCm6NK1UJ5jxMH`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Middle-aged male Croatian professional native speaker.
- **Namjena (use_case):** conversational
- **Karakter (descriptive):** 
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period:** nije naveden (rizik)
- **Korišćenje — zadnjih 7 dana:** 291.882 karaktera
- **Korišćenje — zadnjih godinu dana:** 12.635.321 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 7.292
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/user/M5Dr4AITg4Tk8PT9wphFwuMXklJ3/voices/kpx2bGcCm6NK1UJ5jxMH/CL62Wm3ydjGXGJoORMG9.mp3)

### Ivan - Informative, Educational

- **voice_id:** `vFQACl5nAIV0owAavYxE`
- **Pol / starost:** male / young
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / zagreb
- **Opis (ElevenLabs):** Standard Croatian voice of a Croatian male in his 20s with a slight Zagreb accent. Works well for Informative videos.
- **Namjena (use_case):** informative_educational
- **Karakter (descriptive):** calm
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** da
- **Notice period (garancija dostupnosti):** 180 dana
- **Korišćenje — zadnjih 7 dana:** 74.897 karaktera
- **Korišćenje — zadnjih godinu dana:** 10.236.912 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 7.321
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/custom/voices/vFQACl5nAIV0owAavYxE/OumjZMasrILczYcEWSzI.mp3)

### Zlata - Calm, Narrative and Relaxed

- **voice_id:** `V5O4WAcdw7w3Ccfvma8Z`
- **Pol / starost:** female / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Middle-aged Female voice with Balkan accent. Works well for Narrations.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** calm
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period:** nije naveden (rizik)
- **Korišćenje — zadnjih 7 dana:** 283.820 karaktera
- **Korišćenje — zadnjih godinu dana:** 9.385.198 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 5.865
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/user/Ftqljm09z4hBzS3ZzdbEv4vMI733/voices/V5O4WAcdw7w3Ccfvma8Z/88028689-2447-4c44-b5c4-22a9cc038bb2.mp3)

### Amber - Calm, Elegant and Dreamy

- **voice_id:** `2t85BBUECtLLKQzxLD95`
- **Pol / starost:** female / young
- **Kategorija:** professional
- **Jezik / lokal / akcent:** en / en-US / croatian
- **Opis (ElevenLabs):** For YouTube narration, podcasts, and social media, Amber Sky’s smooth Eastern European accent brings a serene, slightly mysterious charm. Her measured delivery and elegant tone make her ideal for cinematic narration, artful commentary, or polished brand storytelling.
- **Namjena (use_case):** conversational
- **Karakter (descriptive):** calm
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 365 dana
- **Korišćenje — zadnjih 7 dana:** 473.121 karaktera
- **Korišćenje — zadnjih godinu dana:** 9.016.700 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 8.861
- **Podržani modeli:** eleven_flash_v2, eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2, eleven_turbo_v2_5, eleven_v2_5_flash, eleven_v2_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/fa8c6f99cbd64f20b7b86f795d457895/voices/2t85BBUECtLLKQzxLD95/xTZIQxUIbT3U6NLPfflr.mp3)

### Karlo - Calm, Clear & Friendly 

- **voice_id:** `pTD8166KADi6ZFJ5FEXi`
- **Pol / starost:** male / young
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / zagreb
- **Opis (ElevenLabs):** My voice sounds calm, clear, and friendly. I speak naturally and at an easy pace, so overall it comes across as pleasant and articulate.
- **Namjena (use_case):** informative_educational
- **Karakter (descriptive):** gentle
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 260.709 karaktera
- **Korišćenje — zadnjih godinu dana:** 6.990.552 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 2.492
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/user/user_4301kdzp6ez1epea4z69a05pd5ee/voices/pTD8166KADi6ZFJ5FEXi/tJCFJpJNx0sQUvC6oyAF.mp3)

### Lara - Positive, Formal

- **voice_id:** `L1kQ6rz0P1bI4L5Av3Ow`
- **Pol / starost:** female / young
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Young adult Croatian voice, upbeat and casual. Perfect for commercials, videos and stories.
- **Namjena (use_case):** social_media
- **Karakter (descriptive):** casual
- **Cijena:** 3.0x standardne kvote, + $0.2 direktna doplata
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 123.690 karaktera
- **Korišćenje — zadnjih godinu dana:** 4.653.777 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 1.581
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/user/J6HGcvrW5BSTnjjNmstSIgDPZku2/voices/L1kQ6rz0P1bI4L5Av3Ow/wOhuzZVTdFjrpABYn3tu.mp3)

### Ana SRB - Call center voice

- **voice_id:** `eWKPI657Btpf4xbqX4x6`
- **Pol / starost:** female / young
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Ana is the Serbian voice for call centers.
- **Namjena (use_case):** conversational
- **Karakter (descriptive):** calm
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 82.955 karaktera
- **Korišćenje — zadnjih godinu dana:** 4.533.646 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 1.951
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/802421b080714f9eb05103b34e2b55e2/voices/eWKPI657Btpf4xbqX4x6/223557e5-be95-4ca5-b358-c7f3618459dc.mp3)

### Nina - Calm, Warm & Resonant

- **voice_id:** `FXlzTee7Zx2caYKIAwBF`
- **Pol / starost:** female / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** A clear, stable, and natural female voice, with a Croatian accent. It sounds professional and confident, with a calm but steady intonation, easy to understand, and pleasant for long listening. Ideal for narrations, podcasts,s and audiobooks.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** pleasant
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** da
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 45.119 karaktera
- **Korišćenje — zadnjih godinu dana:** 3.764.890 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 2.686
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/f582e3ff2d5b487aa74dbc881787785f/voices/FXlzTee7Zx2caYKIAwBF/q69Hg6KvHuoy4hY1eq0f.mp3)

### Uros Novak 

- **voice_id:** `aJsqu0q7bXgzYrPDRSFx`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** en / en-US / croatian
- **Opis (ElevenLabs):** Slovenian voice
- **Namjena (use_case):** social_media
- **Karakter (descriptive):** casual
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 30 dana
- **Korišćenje — zadnjih 7 dana:** 1.799.023 karaktera
- **Korišćenje — zadnjih godinu dana:** 3.530.347 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 1.040
- **Podržani modeli:** eleven_flash_v2, eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2, eleven_turbo_v2_5, eleven_v2_5_flash, eleven_v2_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/user/vfWRU8RzGkbI6JcCjWngkeleQzq2/voices/aJsqu0q7bXgzYrPDRSFx/u37aeMx9HfCIwMtiIytv.mp3)

### Marko - Deep, Calm and Narrative

- **voice_id:** `ocaele7kOTNS1wQzhbSM`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Very deep voice with Croatian accent. Great for stories and conversations. Ideal for Balkan languages (Croatian, Serbian, Bosnian).
- **Namjena (use_case):** advertisement
- **Karakter (descriptive):** confident
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 96.574 karaktera
- **Korišćenje — zadnjih godinu dana:** 3.063.497 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 2.128
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/83e16d942dd643188ff4a5c282920a5e/voices/ocaele7kOTNS1wQzhbSM/ocL3QtP5axHxqkMKJvE1.mp3)

### Ana - Corporate, SaaS, IVR

- **voice_id:** `jCQ8uWWBzw3HoBe23v4N`
- **Pol / starost:** female / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** en / en-US / croatian
- **Opis (ElevenLabs):** Professional Eastern European female voice with calm, clear, and trustworthy tone. Designed for SaaS platforms, e-learning, corporate training, IVR systems, and AI assistants. Smooth, structured delivery that enhances user experience, simplifies complex information, and supports long-form listening. Optimized for consistency and high-quality AI voice application.
- **Namjena (use_case):** informative_educational
- **Karakter (descriptive):** professional
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 365 dana
- **Korišćenje — zadnjih 7 dana:** 85.946 karaktera
- **Korišćenje — zadnjih godinu dana:** 2.489.726 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 983
- **Podržani modeli:** eleven_flash_v2, eleven_multilingual_v2, eleven_turbo_v2, eleven_v2_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/868b9560c9e24f7abdc4c38fee089c71/voices/jCQ8uWWBzw3HoBe23v4N/g7FT1fU4kGhKWoqiCtXO.mp3)

### Sini - Calm, Clear & Narrative

- **voice_id:** `7rIwwKpExfJ59KPHgRnT`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** A professional radio voice with Croatian accent. Steady and calm. Great for stories and conversations. Ideal for Balkan languages (Croatian, Serbian, Bosnian).
- **Namjena (use_case):** conversational
- **Karakter (descriptive):** calm
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** da
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 34.639 karaktera
- **Korišćenje — zadnjih godinu dana:** 2.475.956 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 972
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/6004495218ee4cb49706037e625dc6ec/voices/7rIwwKpExfJ59KPHgRnT/uoMJJMkCK4uhM8CQNQs0.mp3)

### Marko -  Conversational, Detached

- **voice_id:** `peXmQaCErbfrWCM5FqjH`
- **Pol / starost:** male / young
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** A warm and clear baritone voice, natural and convincing. Versatile and expressive – ideal for storytelling, commercials, and dialogue. Balanced tempo and excellent articulation make it perfect for professional narration, promotional campaigns, and AI voice applications. A voice that conveys confidence, authenticit,y and authority, while remaining approachable and pleasant.
- **Namjena (use_case):** conversational
- **Karakter (descriptive):** calm
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 66.200 karaktera
- **Korišćenje — zadnjih godinu dana:** 2.331.040 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 1.474
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/user/LaQGQBDmUFXskpnSMZvHBUi0q1J2/voices/peXmQaCErbfrWCM5FqjH/d3ff791e-e755-46e1-b267-c78fd29141a0.mp3)

### Mateo - Deep, Monotone, and Steady

- **voice_id:** `y1ORRnLsPhYkUEggxyAY`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** en / en-US / croatian
- **Opis (ElevenLabs):** Deep baritone male voice. Suitable for Narration.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** 
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 180 dana
- **Korišćenje — zadnjih 7 dana:** 3.646 karaktera
- **Korišćenje — zadnjih godinu dana:** 2.072.172 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 1.404
- **Podržani modeli:** eleven_flash_v2, eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2, eleven_turbo_v2_5, eleven_v2_5_flash, eleven_v2_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/user/Mfh0Dr7ygBUKNsArkxNEppNsbnD3/voices/y1ORRnLsPhYkUEggxyAY/add2275c-9d9a-4489-990e-c17e6b85ed54.mp3)

### Luka

- **voice_id:** `FEuh1dGiuX8Don6bZygL`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Perfect audio quality. A 34-year-old Croatian male speaking fluent Croatian. Warm, trustworthy, and genuinely helpful tone, like a knowledgeable advisor who cares about finding the right solution. Medium pitch, steady and relaxed pacing with natural pauses. Clear and articulate pronunciation. Friendly and patient, never rushed or pushy. The kind of voice that makes you feel comfortable asking questions.
- **Namjena (use_case):** conversational
- **Karakter (descriptive):** calm
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 68.372 karaktera
- **Korišćenje — zadnjih godinu dana:** 1.327.502 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 1.105
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/cfd3b190f7e04524b0af74019bffd9dc/voices/FEuh1dGiuX8Don6bZygL/c62c8826-9877-4937-9c24-d51dc6316ef2.mp3)

### Jusuf - Calm, Narrative

- **voice_id:** `mP6GNwIkel9neaN9zZIg`
- **Pol / starost:** male / middle_aged
- **Kategorija:** high_quality
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Balkan storyteller. Authentic voice of a Balkan narrator. Great for audiobooks, documentaries, Conversational AI, and cultural projects. 

Autentični glas starog balkanskog pripovjedača sa dubokim, hrapavim timbrom i dramatičnim načinom pripovijedanja. Jusuf oživljava dušu Balkana kroz tradicionalno pripovijedanje.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** wise
- **Cijena:** 3.0x standardne kvote, + $0.2 direktna doplata
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 90 dana
- **Korišćenje — zadnjih 7 dana:** 12.280 karaktera
- **Korišćenje — zadnjih godinu dana:** 854.302 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 1.393
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://api.us.elevenlabs.io/v1/voices/mP6GNwIkel9neaN9zZIg/previews/audio?payload=eyJ2b2ljZV9zb3VyY2UiOiJjdXN0b20iLCJ1c2VyX2lkIjoiSmtNdE15YnRpN2RTbkdqa0RzVnFBa1VnY2NFMyIsImZpbGVuYW1lIjoiakVnMkVNakZJOFVQUWhvU1VmZ1EubXAzIiwidGltZXN0YW1wIjoxNzg2NzIzMjAwMDAwMDAwfQ%3D%3D)

### Branimir - Professional Croatian Studio

- **voice_id:** `WxQSzlR1UORgKEiMk1n4`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Crystal-clear, deep and articulate standard Croatian male voice. Recorded in a premium professional studio using high-end 48kHz/24-bit equipment. Perfectly suited for high-quality audiobooks, long-form narration, corporate presentations, e-learning modules, and commercial dubbing. Clear accent, professional tone, and flawless delivery.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** confident
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** da
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 229.720 karaktera
- **Korišćenje — zadnjih godinu dana:** 760.466 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 152
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/12453ca4d45f4f788fad4841908b75cd/voices/WxQSzlR1UORgKEiMk1n4/cPSs6PaeAQfKy4OdGuqI.mp3)

### Mihael - Croatian Radio TV host

- **voice_id:** `jVBTQrP67HZEE22UqQGF`
- **Pol / starost:** male / young
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Young, energetic Croatian voice over suitable for promos, radio, TV, online promotions.
- **Namjena (use_case):** advertisement
- **Karakter (descriptive):** excited
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** da
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 27.675 karaktera
- **Korišćenje — zadnjih godinu dana:** 658.122 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 284
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/fd0037352ce64d14a76b9134e46fa828/voices/jVBTQrP67HZEE22UqQGF/41c296ec-f615-408d-865c-73a31014a696.mp3)

### Ivana - Calm, Slow & Friendly

- **voice_id:** `JDYfAX20MbYfJGIjPTZz`
- **Pol / starost:** female / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** Great voice for Social Media.
- **Namjena (use_case):** social_media
- **Karakter (descriptive):** calm
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** ne
- **Notice period:** nije naveden (rizik)
- **Korišćenje — zadnjih 7 dana:** 43.830 karaktera
- **Korišćenje — zadnjih godinu dana:** 522.428 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 182
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/520bd9f95097497390691939edf8591d/voices/JDYfAX20MbYfJGIjPTZz/a7409a1a-101e-4462-8d29-e53630f94518.mp3)

### Christian - Smooth and Laid-back

- **voice_id:** `yphrIdMc2DLlL0Ux5uvG`
- **Pol / starost:** male / young
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** A young male voice that is good for formal speaking and reading audio books.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** casual
- **Cijena:** 1.0x standardne kvote, + $0.02 direktna doplata
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** da
- **Notice period (garancija dostupnosti):** 90 dana
- **Korišćenje — zadnjih 7 dana:** 16.839 karaktera
- **Korišćenje — zadnjih godinu dana:** 519.537 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 317
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://api.us.elevenlabs.io/v1/voices/yphrIdMc2DLlL0Ux5uvG/previews/audio?payload=eyJ2b2ljZV9zb3VyY2UiOiJjdXN0b20iLCJ1c2VyX2lkIjoidmtjYXIwdEVYelhQMTBqOVAzYzd6WmkycGNHMiIsImZpbGVuYW1lIjoiZDNmYmUyMDktODI2NS00MTk2LWI5ZmItOTVmODE0ZjRmNTBkLm1wMyIsInRpbWVzdGFtcCI6MTc4NjcyMzIwMDAwMDAwMH0%3D)

### Ella

- **voice_id:** `3WOiQKby7odOR8Z57fNQ`
- **Pol / starost:** female / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** en / en-US / croatian
- **Opis (ElevenLabs):** Natural Croatian voice with a clear Slavic accent.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** confident
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** ne
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 730 dana
- **Korišćenje — zadnjih 7 dana:** 6.120 karaktera
- **Korišćenje — zadnjih godinu dana:** 31.054 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 34
- **Podržani modeli:** eleven_flash_v2, eleven_flash_v2_5, eleven_multilingual_sts_v2, eleven_multilingual_v2, eleven_turbo_v2, eleven_turbo_v2_5, eleven_v2_5_flash, eleven_v2_flash
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://api.us.elevenlabs.io/v1/voices/3WOiQKby7odOR8Z57fNQ/previews/audio?payload=eyJ2b2ljZV9zb3VyY2UiOiJjdXN0b20iLCJ3b3Jrc3BhY2VfaWQiOiIwMzMxZTJmZDhhY2M0MjZhOGI4YzE5Y2FiMjQ0ZTE3OSIsImZpbGVuYW1lIjoiMmE2OWVjZmEtODU0Yi00ZjY5LWJlNGUtNmJhZGNhYTNkY2VkLm1wMyIsInRpbWVzdGFtcCI6MTc4NjcyMzIwMDAwMDAwMH0%3D)

### Mila - Pleasant and gentle

- **voice_id:** `eqAqnItEUARzEkoDCTJ1`
- **Pol / starost:** female / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** A smooth, warm voice of a Croatian female with a soft, welcoming tone.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** pleasant
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 4015 dana
- **Korišćenje — zadnjih 7 dana:** 0 karaktera
- **Korišćenje — zadnjih godinu dana:** 0 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 141
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash, eleven_v4, eleven_v4_fast, eleven_v4_hq
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/1da06ea679a54975ad96a2221fe6530d/voices/eqAqnItEUARzEkoDCTJ1/4126e25c-1b4c-4147-9c43-1e336be36391.mp3)

### Elena - Confident and articulate

- **voice_id:** `iahPPG34ls0Mm3W0DBhh`
- **Pol / starost:** female / middle_aged
- **Kategorija:** high_quality
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** A strong, poised voice of a middle-aged female with a clear, self-assured tone.
- **Namjena (use_case):** conversational
- **Karakter (descriptive):** confident
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 4015 dana
- **Korišćenje — zadnjih 7 dana:** 0 karaktera
- **Korišćenje — zadnjih godinu dana:** 0 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 73
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash, eleven_v4, eleven_v4_hq
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/1da06ea679a54975ad96a2221fe6530d/voices/iahPPG34ls0Mm3W0DBhh/733e8f1e-00d6-40c8-80e8-f8e1391c355b.mp3)

### Ivana - Energetic and spirited

- **voice_id:** `jEKeTj7nqDtk1QSNwXkO`
- **Pol / starost:** female / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** A vibrant, dynamic voice of a Croatian female with a lively, engaging tone.
- **Namjena (use_case):** conversational
- **Karakter (descriptive):** excited
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 4015 dana
- **Korišćenje — zadnjih 7 dana:** 0 karaktera
- **Korišćenje — zadnjih godinu dana:** 0 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 79
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash, eleven_v4, eleven_v4_hq
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://api.us.elevenlabs.io/v1/voices/jEKeTj7nqDtk1QSNwXkO/previews/audio?payload=eyJ2b2ljZV9zb3VyY2UiOiJjdXN0b20iLCJ3b3Jrc3BhY2VfaWQiOiIxZGEwNmVhNjc5YTU0OTc1YWQ5NmEyMjIxZmU2NTMwZCIsImZpbGVuYW1lIjoiM2Q5YzAzYmUtODdmYy00Nzg3LTlkMzYtNzYwM2MzN2MyMTg5Lm1wMyIsInRpbWVzdGFtcCI6MTc4NjcyMzIwMDAwMDAwMH0%3D)

### Marko - Energetic and lively

- **voice_id:** `ErUfHRm63bBA07FTUPZG`
- **Pol / starost:** male / middle_aged
- **Kategorija:** professional
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** A dynamic, vibrant voice of a Croatian male with a spirited, engaging tone.
- **Namjena (use_case):** entertainment_tv
- **Karakter (descriptive):** excited
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 4015 dana
- **Korišćenje — zadnjih 7 dana:** 0 karaktera
- **Korišćenje — zadnjih godinu dana:** 0 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 66
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash, eleven_v4, eleven_v4_hq
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/1da06ea679a54975ad96a2221fe6530d/voices/ErUfHRm63bBA07FTUPZG/7727eb5d-725d-43a2-9cfe-a6720e7d1b40.mp3)

### Ana - Pleasant and warm

- **voice_id:** `rmUck1qkzTjuEjdC6Cav`
- **Pol / starost:** female / young
- **Kategorija:** high_quality
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** A smooth, gentle voice of a Croatian female with a friendly, welcoming tone.
- **Namjena (use_case):** narrative_story
- **Karakter (descriptive):** pleasant
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 4015 dana
- **Korišćenje — zadnjih 7 dana:** 0 karaktera
- **Korišćenje — zadnjih godinu dana:** 0 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 103
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash, eleven_v4, eleven_v4_hq
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://api.us.elevenlabs.io/v1/voices/rmUck1qkzTjuEjdC6Cav/previews/audio?payload=eyJ2b2ljZV9zb3VyY2UiOiJjdXN0b20iLCJ3b3Jrc3BhY2VfaWQiOiIxZGEwNmVhNjc5YTU0OTc1YWQ5NmEyMjIxZmU2NTMwZCIsImZpbGVuYW1lIjoiNGE2YzgxMzEtM2M2ZS00NTNiLThmNjYtZTY4Y2UxZjdlYjc5Lm1wMyIsInRpbWVzdGFtcCI6MTc4NjcyMzIwMDAwMDAwMH0%3D)

### Luka - Pleasant and approachable

- **voice_id:** `olecVpv03asgm9w2Vs6l`
- **Pol / starost:** male / middle_aged
- **Kategorija:** high_quality
- **Jezik / lokal / akcent:** hr / hr-HR / standard
- **Opis (ElevenLabs):** A smooth, warm voice of a Croatian male with a friendly, inviting tone.
- **Namjena (use_case):** conversational
- **Karakter (descriptive):** casual
- **Cijena:** 1.0x standardne kvote
- **Dostupan free-tier korisnicima:** da
- **Live moderacija sadržaja:** ne
- **Notice period (garancija dostupnosti):** 4015 dana
- **Korišćenje — zadnjih 7 dana:** 0 karaktera
- **Korišćenje — zadnjih godinu dana:** 0 karaktera
- **Broj korisnika koji su klonirali (dodali u svoj nalog):** 39
- **Podržani modeli:** eleven_flash_v2_5, eleven_multilingual_v2, eleven_turbo_v2_5, eleven_v2_5_flash, eleven_v4, eleven_v4_hq
- **Featured (ElevenLabs urednička preporuka):** ne
- **Preview:** [poslušaj original ElevenLabs demo](https://storage.googleapis.com/eleven-public-prod/database/workspace/1da06ea679a54975ad96a2221fe6530d/voices/olecVpv03asgm9w2Vs6l/b94de270-35b8-46e5-aaa5-085246cf9bc3.mp3)

---

## Napomene o metodologiji

- ElevenLabs nema poseban jezički kod za srpski/bosanski/crnogorski — sve je tagovano `language: hr`, razlika se vidi samo u tekstualnom opisu glasa.
- Makedonski i slovenački imaju samo po 1 glas u cijeloj biblioteci, i oba su tehnički pogrešno tagovana pod drugim jezikom (Sofia pod grčkim, Uros Novak pod engleskim).
- `usage_character_count_1y` može biti nekonzistentan sa `_7d` kod nekih glasova (npr. Maja ima ogroman 1y broj ali relativno nizak 7d) — vjerovatno je bio popularniji ranije u godini, ili je 7d prozor podložan kratkoročnim oscilacijama.
- Vidi i `wiki/pages/concepts/elevenlabs-voice-library-api-gotchas.md` za tehničke detalje o API-ju (npr. `verified_languages` nije pouzdan za "native speaker" filtriranje, treba `labels.language`/`labels.accent`).
- Svi API pozivi su išli preko glavnog Ignis ključa, ne preko `.env` u `apps/glasovni-generator/` — taj je trenutno neispravan (upisan je API key ID umjesto pravog ključa) i treba ga popraviti da widget stvarno radi.
