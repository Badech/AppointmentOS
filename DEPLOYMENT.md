# Deployment Guide - AppointmentOS Landing Page

## Quick Start

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site.

### Production Build

```bash
npm run build
npm start
```

## Deployment Options

### 1. Vercel (Recommended - Free)

**Easiest deployment for Next.js:**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Or use Vercel CLI:**

```bash
npm install -g vercel
vercel
```

### 2. Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### 3. AWS Amplify

1. Push code to GitHub
2. Go to AWS Amplify Console
3. Click "New app" → "Host web app"
4. Connect your repository
5. Build settings will auto-detect Next.js
6. Click "Save and deploy"

### 4. Custom Server (VPS/DigitalOcean/etc.)

```bash
# On your server
git clone your-repo
cd your-repo
npm install
npm run build

# Install PM2 for process management
npm install -g pm2
pm2 start npm --name "appointmentos" -- start
pm2 save
pm2 startup
```

**Configure Nginx as reverse proxy:**

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Configuration

### Custom Domain Setup

After deploying, configure your custom domain in your hosting provider's dashboard.

### SSL Certificate

Most hosting providers (Vercel, Netlify, etc.) automatically provide free SSL certificates.

For custom servers, use Let's Encrypt:

```bash
sudo certbot --nginx -d yourdomain.com
```

## Performance Optimization

The landing page is already optimized for performance:

✅ Static site generation (pre-rendered at build time)  
✅ Minimal JavaScript bundle (~87KB)  
✅ Optimized fonts with `display: swap`  
✅ No external dependencies  
✅ Tailwind CSS purging enabled  

### Expected Lighthouse Scores:

- **Performance:** 95-100
- **Accessibility:** 95-100
- **Best Practices:** 95-100
- **SEO:** 95-100

## Post-Deployment Checklist

- [ ] Verify all links work (WhatsApp, Email)
- [ ] Test mobile responsiveness
- [ ] Check page load speed
- [ ] Verify meta tags with [metatags.io](https://metatags.io)
- [ ] Test on multiple browsers
- [ ] Submit sitemap to Google Search Console
- [ ] Set up analytics (Google Analytics, Plausible, etc.)

## Analytics Setup (Optional)

### Google Analytics

Add to `app/layout.tsx` inside the `<head>`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR-GA-ID');
  `}
</Script>
```

## Maintenance

### Update Content

All content is in individual component files in `components/` directory. Simply edit the files and redeploy.

### Update Dependencies

```bash
npm update
npm run build  # Test the build
```

## Support

For issues or questions, contact: Bader.echchalh1@gmail.com
