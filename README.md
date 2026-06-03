# Shekinah React Site

React + Vite + TypeScript starter to recreate shekinah.ac.ug with a turquoise-first visual language and improved frontend security defaults.

## Run

1. Install dependencies:
   npm install
2. Start development server:
   npm run dev
3. Build production bundle:
   npm run build
4. Preview build:
   npm run preview

## Environment

Copy `.env.example` to `.env` and set values:

- `VITE_API_BASE_URL` - backend API base URL

## Security Baseline

- CSP fallback meta tag in `index.html`
- Security headers for static hosting in `public/_headers`
- Dev/preview response headers configured in `vite.config.ts`
- `frame-ancestors 'none'` and `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` restricts high-risk browser APIs

## Notes

- Current content/text is a starter mirror structure and should be replaced with official school copy and media.
- If deploying outside Netlify-style hosts, map `public/_headers` values into your platform-specific header config.
