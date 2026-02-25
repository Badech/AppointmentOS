# Quick Start Guide - AppointmentOS Landing Page

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

Visit: **http://localhost:3000**

---

## 📝 Making Changes

### Update Content

All content is in the `components/` folder. Edit these files to change text:

- `components/Hero.tsx` - Main headline and CTAs
- `components/Problem.tsx` - Problem statements
- `components/Workflow.tsx` - How it works steps
- `components/Demo.tsx` - Demo section
- `components/Results.tsx` - Benefits list
- `components/WhoItsFor.tsx` - Target industries
- `components/WhatsIncluded.tsx` - Features
- `components/Founder.tsx` - Founder info
- `components/FinalCTA.tsx` - Bottom CTA

### Update Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    500: '#0ea5e9',  // Your brand color
    600: '#0284c7',  // Darker shade
  },
}
```

### Update SEO Metadata

Edit `app/layout.tsx` to change:

- Page title
- Meta description
- OpenGraph tags
- Twitter card info

### Add Images/Videos

1. Add files to `public/` folder
2. Reference in components: `/your-image.png`
3. Use Next.js Image component for optimization:

```typescript
import Image from 'next/image'

<Image 
  src="/your-image.png" 
  alt="Description"
  width={800}
  height={600}
/>
```

---

## 🎨 Customization Examples

### Change Gradient Colors

Edit `app/globals.css`:

```css
.gradient-bg {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}

.gradient-text {
  @apply bg-gradient-to-r from-YOUR_COLOR_1 to-YOUR_COLOR_2 bg-clip-text text-transparent;
}
```

### Add a New Section

1. Create `components/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add to the page order

```typescript
import YourSection from '@/components/YourSection'

export default function Home() {
  return (
    <main>
      {/* Existing sections */}
      <YourSection />
    </main>
  )
}
```

---

## 🌐 Deploy to Production

### Option 1: Vercel (Easiest)

```bash
npm install -g vercel
vercel
```

### Option 2: Build & Export

```bash
npm run build
npm start
```

See `DEPLOYMENT.md` for detailed deployment guides.

---

## ✅ Testing Checklist

Before deploying, test:

- [ ] Page loads on mobile (Chrome DevTools)
- [ ] WhatsApp link works: `https://wa.me/15716904684`
- [ ] Email link works: `Bader.echchalh1@gmail.com`
- [ ] All sections display correctly
- [ ] Smooth scrolling works
- [ ] Hover effects work on desktop
- [ ] Build completes without errors: `npm run build`

---

## 📱 Test on Mobile

Use Chrome DevTools:

1. Press `F12` to open DevTools
2. Click the device icon (or `Ctrl+Shift+M`)
3. Select different devices to test
4. Test common sizes:
   - iPhone SE (375px)
   - iPhone 12/13 (390px)
   - iPad (768px)
   - Desktop (1920px)

---

## 🐛 Common Issues

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Styling Not Updating

```bash
# Restart dev server
# Press Ctrl+C
npm run dev
```

---

## 📚 Documentation

- **README.md** - Project overview
- **FEATURES.md** - Complete feature list
- **DEPLOYMENT.md** - Deployment guides
- **QUICK_START.md** - This file

---

## 💡 Pro Tips

1. **Hot Reload**: Changes auto-refresh in dev mode
2. **TypeScript**: Get type checking and autocomplete
3. **Tailwind**: Use utility classes instead of custom CSS
4. **Components**: Keep sections modular and reusable
5. **Performance**: Keep bundle size small (<100KB)

---

## 🆘 Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Contact: Bader.echchalh1@gmail.com

---

**You're all set! Happy building! 🎉**
