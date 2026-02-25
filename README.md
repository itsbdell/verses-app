# Verses

Turn poems into lock screen wallpapers.

Pick a poem, choose a theme, select your phone — download a full-resolution PNG ready to set as your wallpaper. 28 curated poems from Dickinson to Angelou, or paste your own.

**Live:** [verses-app-tau.vercel.app](https://verses-app-tau.vercel.app)

---

## How It Works

1. **Pick a device** — iPhone 16 Pro Max, SE, Galaxy S24, Pixel 9, etc. Exports at actual screen resolution.
2. **Choose a theme** — Six options from deep darks to warm parchment, each with layered gradient backgrounds, radial glows, and noise texture.
3. **Select a poem** — Browse 28 curated poems by author, or paste your own title, author, and text.
4. **Preview live** — See exactly what your lock screen will look like, scaled to fit.
5. **Export** — One click downloads a full-resolution PNG.

## Themes

| Theme | Vibe |
|-------|------|
| Midnight | Deep blue-indigo, cool and introspective |
| Ember | Warm dark ambers, fire-toned |
| Forest | Deep greens with teal glow, earthy |
| Dawn | Dark purples and pinks, ethereal |
| Obsidian | True black, stark minimalist |
| Parchment | Warm cream, aged paper, literary |

Each theme layers a CSS gradient background, three positioned radial glows, and an SVG Perlin noise texture to create depth without images.

## Devices

**iPhone:** 16 Pro Max (1320×2868), 16 Pro (1206×2622), 16/15 (1179×2556), SE (750×1334)
**Android:** Galaxy S24 (1440×3120), Pixel 9 (1080×2424)

## Stack

- **Next.js 16** + React 19 + TypeScript
- **Tailwind CSS 4** for layout and UI
- **html-to-image** for DOM-to-PNG export
- **Cormorant Garamond** for poem text, **Spectral** for UI labels
- Deployed on **Vercel**

## Run Locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Project Structure

```
components/
  VersesApp.tsx          # Main app — state, layout, preview scaling
  LockScreenPreview.tsx  # Renders the wallpaper (gradients, glows, noise, text)
  DevicePicker.tsx       # Device dropdown grouped by platform
  ThemePicker.tsx        # Theme swatch grid
  PoemPicker.tsx         # Poem dropdown grouped by author
  ExportButton.tsx       # Download PNG trigger

lib/
  poems.ts               # 28 curated poems with metadata
  devices.ts             # 6 device presets with resolutions
  themes.ts              # 6 theme configs (gradients, glows, noise, text colors)
  render.ts              # Export function (html-to-image + font loading)
  types.ts               # TypeScript interfaces
```

## How Rendering Works

No canvas — wallpapers are pure CSS rendered as DOM elements:

1. **Background**: Multi-stop linear gradient
2. **Glows**: Three radial gradients positioned and sized per theme
3. **Noise**: SVG `feTurbulence` filter encoded as a data URI, overlaid at configurable opacity
4. **Text**: Cormorant Garamond for titles/verses, Spectral for author/footer. Font scaling adjusts automatically for longer poems.
5. **Export**: `html-to-image` converts the hidden full-resolution DOM element to PNG after waiting for font loading to complete.

---

Made by [Brian Dell](https://briandell.xyz)
