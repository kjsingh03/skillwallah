import { defineConfig, minimalPreset as preset } from '@vite-pwa/assets-generator/config'

export default defineConfig({
  preset,
  images: [
    "src/assets/logo.png",
    "src/assets/logo-nobg.png",
    "src/assets/smallLogo.png",
]
})