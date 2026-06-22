/**
 * DeepSlate image generation script
 * Uses FLUX.1-Krea-dev via HuggingFace Inference API
 *
 * Run once locally:
 *   node scripts/generate-images.mjs
 *
 * Requires: HF_TOKEN env var (or edit the token below)
 *   export HF_TOKEN=hf_...
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
  console.error('Error: HF_TOKEN environment variable is required.\n  export HF_TOKEN=your_token_here')
  process.exit(1)
}
const MODEL = 'krea-ai/FLUX.1-krea-dev'
const client = new InferenceClient(TOKEN)

const IMAGES = [
  {
    file: 'hero-bg.jpg',
    prompt:
      'Abstract dark corporate technology background, sparse constellation of glowing geometric polygon nodes connected by thin luminous green lines, deep black background, NVIDIA lime green (#76b900) accent glow from center, subtle radial depth, ultra wide 16:9, photorealistic, cinematic lighting, no text, no UI',
    width: 1920,
    height: 1080,
  },
  {
    file: 'team-founder.jpg',
    prompt:
      'Professional corporate headshot portrait of a confident Black British male academic executive, late 30s, wearing a dark suit, neutral dark grey studio background, soft directional lighting, photorealistic, 4K, sharp focus',
    width: 768,
    height: 960,
  },
  {
    file: 'team-ai.jpg',
    prompt:
      'Professional corporate headshot portrait of a confident Black British female AI strategy consultant, early 30s, wearing smart business attire, neutral dark grey studio background, soft studio lighting, photorealistic, 4K, sharp focus',
    width: 768,
    height: 960,
  },
  {
    file: 'team-education.jpg',
    prompt:
      'Professional corporate headshot portrait of a confident Black British male education executive, mid 40s, wearing a dark blazer, neutral charcoal studio background, warm professional lighting, photorealistic, 4K, sharp focus',
    width: 768,
    height: 960,
  },
  {
    file: 'insight-ai-leadership.jpg',
    prompt:
      'Minimalist dark editorial photograph, lone executive silhouette standing before a vast glowing data network visualisation, green and white light beams, black background, dramatic cinematic wide shot, no text',
    width: 1200,
    height: 630,
  },
  {
    file: 'insight-edu-fails.jpg',
    prompt:
      'Minimalist dark editorial photograph, empty modern lecture hall with green accent lighting, rows of empty chairs facing a glowing screen, moody atmospheric light, no text, cinematic',
    width: 1200,
    height: 630,
  },
  {
    file: 'insight-slide-deck.jpg',
    prompt:
      'Minimalist dark editorial photograph, scattered presentation slides on a dark glass table, one slide glowing bright green, dramatic overhead lighting, corporate atmosphere, no text, cinematic',
    width: 1200,
    height: 630,
  },
  {
    file: 'insight-board-ai.jpg',
    prompt:
      'Minimalist dark editorial photograph, boardroom table with soft green glow from laptop screens, executives in silhouette, dramatic side lighting, no text, cinematic, corporate',
    width: 1200,
    height: 630,
  },
  {
    file: 'insight-culture.jpg',
    prompt:
      'Minimalist dark editorial photograph, diverse team of professionals in a modern open office, warm backlighting, collaborative atmosphere, green accent lighting, no text, cinematic depth of field',
    width: 1200,
    height: 630,
  },
  {
    file: 'insight-stop-buying.jpg',
    prompt:
      'Minimalist dark editorial photograph, single laptop on a dark table, surrounded by scattered AI product boxes and packaging, one glowing green light on the screen, stark dramatic lighting, no text',
    width: 1200,
    height: 630,
  },
  {
    file: 'about-mission.jpg',
    prompt:
      'Minimalist dark corporate photograph, two professionals in conversation against a floor-to-ceiling window overlooking a night cityscape, green accent reflections, dramatic atmospheric lighting, no text, wide format',
    width: 1400,
    height: 800,
  },
]

async function generate(item) {
  const outPath = path.join(OUT_DIR, item.file)
  if (fs.existsSync(outPath)) {
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

// Run sequentially to avoid rate limits
console.log(`\n🚀 Generating ${IMAGES.length} images with ${MODEL}\n`)
for (const img of IMAGES) {
  await generate(img)
  // Brief pause between requests
  await new Promise((r) => setTimeout(r, 1500))
}
console.log('\n✨ Done! Images saved to public/images/')
