# ML Portfolio - Advanced 3D Next.js Portfolio

A sophisticated, production-ready portfolio for ML/GenAI engineers, showcasing deep technical expertise and modern UI design. Built with cutting-edge technologies and designed to impress recruiters.

## 🚀 Features

- **7 Pages**: Home, About, Skills, Projects, Learning, Blog, Contact
- **3D Animations**: Particle effects, smooth transitions, interactive elements
- **Modern Design**: Dark theme, glassmorphism, neon accents, responsive layout
- **Performance Optimized**: Fast loading, optimized animations, SEO-ready
- **Interactive Components**: Skill cards, project showcases, animated timelines
- **Mobile Responsive**: Beautiful on all devices

## 💻 Tech Stack

- **Frontend Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS + custom animations
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **UI Components**: ShadCN, Lucide Icons
- **Language**: TypeScript
- **Build Tool**: Turbopack (via Next.js)

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun package manager

## 🛠️ Installation & Setup

1. **Install Node.js**
   - Download from [nodejs.org](https://nodejs.org) (LTS recommended)
   - Verify installation: `node --version` and `npm --version`

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - Changes auto-refresh (Fast Refresh enabled)

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout + navbar/footer
│   ├── page.tsx             # Home/Landing page
│   ├── about/page.tsx       # About section
│   ├── skills/page.tsx      # Skills showcase
│   ├── projects/page.tsx    # Projects portfolio
│   ├── learning/page.tsx    # Learning roadmap
│   ├── blog/page.tsx        # Blog/Insights
│   ├── contact/page.tsx     # Contact form
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer component
│   └── HeroBackground.tsx   # 3D particle background
└── README.md
```

## 🎨 Customization

### Personal Information
- **Home Page** (`src/app/page.tsx`): Update name, tagline, and social links
- **About Page** (`src/app/about/page.tsx`): Customize journey timeline and mindset
- **Projects Page** (`src/app/projects/page.tsx`): Add your actual projects
- **Contact Page** (`src/app/contact/page.tsx`): Update email and social links

### Colors & Theme
Edit `tailwind.config.ts` to customize colors:
```typescript
colors: {
  'neon-cyan': '#00ffff',
  'neon-pink': '#ff006e',
  'neon-green': '#00ff41',
  'dark-bg': '#0a0e27',
  'dark-card': '#1a1f3a',
}
```

### Animations
Framer Motion animations are throughout the components. Modify animation props:
- `initial`, `animate`, `exit` - states
- `transition` - timing and easing
- `whileHover`, `whileTap` - interactions

## 🔧 Key Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Run ESLint
```

## 📊 Performance Metrics

- **Lighthouse Score**: 90+
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The app can be deployed to any Node.js hosting:
- Netlify
- AWS Amplify
- Railway
- Render
- DigitalOcean

## 📝 Content Guidelines

- **Projects**: Include problem statement, solution, tech stack, challenges, learnings
- **Skills**: 3 categories (ML, Deep Learning, GenAI/Tools)
- **Learning Journey**: 7 phases from ML foundations to multimodal AI
- **Blog**: Technical deep-dives on ML concepts, not tutorials

## 🎯 Important Notes

1. **Update Resume Link**: Add your resume PDF path in the landing page button
2. **Replace Social Links**: Update GitHub, LinkedIn, Twitter URLs in:
   - `src/components/Navbar.tsx`
   - `src/components/Footer.tsx`
   - `src/app/contact/page.tsx`
3. **Add Your Projects**: Customize the projects array in `src/app/projects/page.tsx`
4. **Personalize Content**: Replace all placeholder text with your actual experience

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Module not found errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails?**
```bash
npm run lint
npm run build -- --debug
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js Basics](https://threejs.org)

## 🤝 Support & Questions

For development issues, check:
- [Next.js Issues](https://github.com/vercel/next.js/issues)
- [Tailwind CSS Community](https://tailwindcss.com/community)
- Stack Overflow with relevant tags

## 📄 License

This portfolio template is open for personal use. Modify and deploy freely.

---

**Remember**: This isn't just a portfolio. It's a statement that you understand systems, design, and engineering. Make it count.

**Built with 💙 by Rohit Bedse**
