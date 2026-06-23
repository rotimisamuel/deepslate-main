/**
 * DeepSlate image generation script
 * Uses FLUX.1-Krea-dev via HuggingFace Inference API (routed through fal-ai)
 *
 * Prerequisites:
 *   1. Accept the model terms at https://huggingface.co/black-forest-labs/FLUX.1-Krea-dev
 *   2. Create a HF token at https://huggingface.co/settings/tokens (read access is enough)
 *   3. export HF_TOKEN=hf_...
 *
 * Run once locally:
 *   npm run generate-images
 *
 * Already-generated files are skipped (delete to regenerate).
 */

import { InferenceClient } from '@huggingface/inference'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '..', 'public', 'images')
fs.mkdirSync(OUT_DIR, { recursive: true })

const TOKEN = process.env.HF_TOKEN
if (!TOKEN) {
  console.error('Error: HF_TOKEN environment variable is required.')
  console.error('  1. Accept model terms: https://huggingface.co/black-forest-labs/FLUX.1-Krea-dev')
  console.error('  2. Create token: https://huggingface.co/settings/tokens')
  console.error('  3. export HF_TOKEN=hf_...')
  process.exit(1)
}

// FLUX.1-Krea-dev — correct model ID, routed via fal-ai (the only live provider)
const MODEL = 'black-forest-labs/FLUX.1-Krea-dev'
const client = new InferenceClient(TOKEN, { provider: 'fal-ai' })

const IMAGES = [
  {
    file: 'hero-bg.jpg',
    prompt:
      'Abstract dark corporate technology background, sparse constellation of glowing geometric polygon nodes connected by thin luminous green lines, deep black background, lime green #76b900 accent glow from center, subtle radial depth, ultra wide cinematic, photorealistic, no text, no UI, no people',
    width: 1920,
    height: 1080,
  },
  {
    file: 'team-founder.jpg',
    prompt:
      'Professional corporate headshot portrait of a confident Black British male academic executive, late 30s, wearing a dark navy suit with white shirt, neutral dark grey studio background, soft directional side lighting, photorealistic, sharp focus, 4K quality, clean professional look',
    width: 768,
    height: 1024,
  },
  {
    file: 'team-ai.jpg',
    prompt:
      'Professional corporate headshot portrait of a confident Black British woman AI strategy consultant, early 30s, wearing smart black business blazer with minimal jewellery, neutral dark charcoal studio background, soft professional studio lighting, photorealistic, sharp focus, 4K quality, elegant authoritative presence',
    width: 768,
    height: 1024,
  },
  {
    file: 'team-education.jpg',
    prompt:
      'Professional corporate headshot portrait of a confident Black British male education executive, mid 40s, wearing a dark charcoal blazer, warm professional smile, neutral grey studio background, warm directional lighting, photorealistic, sharp focus, 4K quality, distinguished scholarly presence',
    width: 768,
    height: 1024,
  },
  {
    file: 'insight-ai-leadership.jpg',
    prompt:
      'Minimalist dark editorial photograph, lone executive silhouette standing before a vast glowing data network visualisation on a massive screen, green and white light beams, pure black background, dramatic cinematic wide shot, atmospheric fog, no text, no logos',
    width: 1200,
    height: 630,
  },
  {
    file: 'insight-edu-fails.jpg',
    prompt:
      'Minimalist dark editorial photograph, empty modern executive lecture hall with lime green accent lighting from floor spotlights, rows of empty leather chairs facing a glowing dark screen, moody atmospheric light, deep shadows, no text, cinematic',
    width: 1200,
    height: 630,
  },
  {
    file: 'insight-slide-deck.jpg',
    prompt:
      'Minimalist dark editorial photograph, scattered presentation slides on a dark glass boardroom table, one slide glowing bright green, dramatic overhead lighting casting long shadows, corporate atmosphere, no text visible, cinematic',
    width: 1200,
    height: 630,
  },
  {
    file: 'insight-board-ai.jpg',
    prompt:
      'Minimalist dark editorial photograph, long executive boardroom table with soft green glow from laptop screens, business executives in silhouette against floor-to-ceiling windows, dramatic side lighting, no text, cinematic, corporate atmosphere',
    width: 1200,
    height: 630,
  },
  {
    file: 'insight-culture.jpg',
    prompt:
      'Minimalist dark editorial photograph, diverse team of professionals collaborating in a modern open office at dusk, warm backlighting through large windows, green accent screen glow, cinematic depth of field, no text',
    width: 1200,
    height: 630,
  },
  {
    file: 'insight-stop-buying.jpg',
    prompt:
      'Minimalist dark editorial photograph, single laptop on a dark minimalist table, surrounded by scattered AI product boxes and packaging in shadow, one focused green light on the screen, stark dramatic contrast lighting, no text',
    width: 1200,
    height: 630,
  },
  {
    file: 'about-mission.jpg',
    prompt:
      'Minimalist dark corporate photograph, two diverse professionals in animated conversation against a floor-to-ceiling window overlooking a night cityscape with green accent reflections, dramatic atmospheric lighting, wide format, no text',
    width: 1400,
    height: 800,
  },
]

async function generate(item) {
  const outPath = path.join(OUT_DIR, item.file)
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 10000) {
    console.log(`⏭  Skipping ${item.file} (already exists)`)
    return
  }

  console.log(`🎨 Generating ${item.file}...`)
  try {
    const blob = await client.textToImage({
      model: MODEL,
      inputs: item.prompt,
      parameters: {
        width: item.width,
        height: item.height,
        num_inference_steps: 28,
        guidance_scale: 3.5,
      },
    })

    const buffer = Buffer.from(await blob.arrayBuffer())
    fs.writeFileSync(outPath, buffer)
    console.log(`✅ Saved ${item.file} (${Math.round(buffer.length / 1024)}KB)`)
  } catch (err) {
    console.error(`❌ Failed ${item.file}: ${err.message}`)
  }
}

console.log(`\n🚀 Generating images with ${MODEL} via fal-ai\n`)
for (const img of IMAGES) {
  await generate(img)
  await new Promise((r) => setTimeout(r, 2000))
}
console.log('\n✨ Done! Images saved to public/images/')
