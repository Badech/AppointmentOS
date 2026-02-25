# AppointmentOS Landing Page

A high-conversion, mobile-first SaaS landing page built with Next.js 14 and Tailwind CSS.

## Features

- ⚡ Fast loading with Next.js App Router
- 📱 Mobile-first responsive design
- 🎨 Clean, minimal SaaS aesthetic
- 🔍 SEO optimized with metadata
- ♿ Accessible with semantic HTML
- 🚀 Optimized for Lighthouse performance

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section with CTAs
│   ├── Problem.tsx      # Problem statement section
│   ├── Workflow.tsx     # How it works workflow
│   ├── Demo.tsx         # Demo and screenshots
│   ├── Results.tsx      # Typical results
│   ├── WhoItsFor.tsx    # Target industries
│   ├── WhatsIncluded.tsx # Features list
│   ├── Founder.tsx      # Founder attribution
│   └── FinalCTA.tsx     # Final call-to-action
├── public/
│   └── favicon.ico      # Favicon
└── tailwind.config.ts   # Tailwind configuration
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Font:** Inter (Google Fonts)

## Customization

### Colors

The color scheme uses a blue-to-purple gradient. Modify colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Content

All content is stored in individual component files in the `components/` directory. Edit the text, icons, and layout directly in each component.

## Performance Optimizations

- Next.js automatic code splitting
- Google Fonts with `display: swap`
- Optimized images (when added)
- Minimal CSS with Tailwind purging
- No heavy third-party libraries

## SEO

SEO metadata is configured in `app/layout.tsx` including:
- Title and description
- OpenGraph tags
- Twitter card
- Keywords
- Robots directives

## License

Built by Bader Echchalh for AppointmentOS.
