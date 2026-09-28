# Rohit Bedse — Portfolio

A clean, modern, single-page portfolio for an AI Engineer / Data Scientist. Dark theme, one accent color, subtle motion — built to look professional, not gimmicky.

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for scroll-in animations
- **Lucide** for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # run production build
npm run lint    # lint
```

## Structure

```
src/
├── app/
│   ├── layout.tsx      # metadata, JSON-LD, navbar shell
│   ├── page.tsx        # assembles the sections
│   └── globals.css      # design tokens: cards, buttons, inputs, layout helpers
└── components/
    ├── Navbar.tsx       # fixed nav with scroll-spy
    ├── Hero.tsx         # intro, rotating role text, CTAs, socials
    ├── About.tsx        # journey cards, quick facts, stats
    ├── Skills.tsx        # skills grouped by category
    ├── Projects.tsx      # project grid + detail modal
    ├── Contact.tsx       # validated contact form
    └── Footer.tsx        # links + socials
```

Seven components total — no particle canvas, no chatbot widget. Content lives directly in each section file (`roles`, `journey`, `facts`, `categories`, `projects`), so updating copy just means editing arrays in place.

## Customizing

- **Colors**: `tailwind.config.ts` (`bg`, `surface`, `accent`, `ink.*`) and the matching classes in `globals.css`.
- **Content**: name, role text, bio, skills, and projects are inline arrays at the top of each component — edit directly.
- **Socials/contact**: update the `socials` arrays in `Hero.tsx` and `Footer.tsx`, and the form submit handler in `Contact.tsx` (currently a simulated send — wire it to Formspree, EmailJS, or an API route).

## Deployment

Deploy to [Vercel](https://vercel.com) (recommended) or any Node.js host.

```bash
npm install -g vercel
vercel
```
