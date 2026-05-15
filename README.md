<<<<<<< HEAD
# Sutirtha Ghosh — Personal Portfolio

A modern, fully responsive personal portfolio website for **Sutirtha Ghosh**, a B.Tech student in Electronics and Computer Science with interests in Data Analytics, AI, and Software Development.

Built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## Live Demo

After deployment, add your live URL here:

```
https://your-portfolio.vercel.app
```

---

## Features

| Feature | Description |
|--------|-------------|
| **Glassmorphism UI** | Frosted-glass cards, gradient accents, dark modern theme |
| **Fully responsive** | Optimized for mobile, tablet, and desktop |
| **Hero section** | Full-screen landing with typing animation for roles |
| **Animated sections** | Scroll-reveal animations via Framer Motion |
| **Skills** | Animated skill cards with progress bars |
| **Experience** | Timeline-style internship card |
| **Projects** | Filterable project cards with tech stack badges |
| **Certifications** | NPTEL course cards |
| **Education** | Academic timeline |
| **Contact** | Form + email, LinkedIn, GitHub links |
| **Dark / light mode** | Theme toggle with localStorage persistence |
| **Loading screen** | Entry animation on first load |
| **Scroll progress** | Top bar showing scroll position |
| **Particle background** | Animated particles (dark mode) |
| **Sticky navbar** | Mobile hamburger menu + smooth scroll |
| **SEO** | Meta tags, semantic HTML, favicon |

---

## Tech Stack

- **React 18** — UI library
- **Vite 6** — Build tool & dev server
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Animations & transitions
- **React Icons** — Social & UI icons

---

## Sections

1. **Hero** — Name, typing titles, CTAs, social links  
2. **About Me** — Introduction & background  
3. **Skills** — Programming, web, DB, ML libraries, tools, CS fundamentals  
4. **Experience** — ROADS TO INDIA (Data Analyst Intern)  
5. **Projects** — Photonic AI design, Amazon analytics dashboard  
6. **Certifications** — NPTEL courses  
7. **Education** — Techno Main Salt Lake, Bagnan High School  
8. **Contact** — Form and direct links  
9. **Footer** — Copyright & credits  

---

## Project Structure

```
Portfolio/
├── public/
│   ├── assets/              # Images & SVG placeholders
│   │   ├── profile-placeholder.svg
│   │   ├── project-photonic.svg
│   │   └── project-analytics.svg
│   ├── favicon.svg
│   └── resume.pdf             # Replace with your resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── SkillCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── TimelineItem.jsx
│   │   └── CertificationCard.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── navLinks.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── experience.js
│   │   ├── education.js
│   │   └── certifications.js
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useTypingEffect.js
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **18+** (includes npm)

### Installation

```bash
# Navigate to the project folder
cd Portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (usually **http://localhost:5173**).

### Production Build

```bash
npm run build
npm run preview
```

The production files are output to the `dist/` folder.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview the production build locally |

---

## Customization Guide

### Personal info & social links

Edit **`src/data/navLinks.js`**:

- LinkedIn, GitHub, and email URLs  
- Hero typing titles  

### Skills, experience, education, certifications

Update the corresponding files in **`src/data/`**:

- `skills.js`
- `experience.js`
- `education.js`
- `certifications.js`
- `projects.js`

### Resume

Replace **`public/resume.pdf`** with your actual PDF. The Hero “Download Resume” button links to this file.

### Profile photo

Replace **`public/assets/profile-placeholder.svg`** with your image (e.g. `profile.jpg`) and update the `src` in **`src/sections/About.jsx`**.

### Project links

In **`src/data/projects.js`**, set real `github` and `demo` URLs for each project.

### Contact form

The form in **`src/sections/Contact.jsx`** currently shows a success message locally. To send emails, integrate:

- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com/)
- Your own backend API  

### Colors & theme

Adjust brand colors in **`tailwind.config.js`** under `theme.extend.colors`.

---

## Deployment

### Vercel (recommended)

1. Push the project to **GitHub**
2. Sign in at [vercel.com](https://vercel.com)
3. Click **Add New Project** → import your repository
4. Use these settings:
   - **Framework Preset:** Vite  
   - **Build Command:** `npm run build`  
   - **Output Directory:** `dist`  
5. Click **Deploy**

**CLI:**

```bash
npm install -g vercel
vercel
```

### Netlify

1. Push the project to **GitHub**
2. Sign in at [netlify.com](https://netlify.com)
3. **Add new site** → **Import from Git**
4. Settings:
   - **Build command:** `npm run build`  
   - **Publish directory:** `dist`  
5. Deploy

A **`netlify.toml`** is included for SPA routing (all routes → `index.html`).

**Manual deploy:** Run `npm run build` and drag the `dist` folder into Netlify’s deploy UI.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm` not recognized | Install Node.js and restart your terminal |
| Port already in use | Vite will try the next port (e.g. 5174) |
| Build errors | Run `npm install` again, then `npm run build` |
| Blank page after deploy | Ensure publish directory is `dist` and SPA redirects are configured |

---

## Author

**Sutirtha Ghosh**  
B.Tech — Electronics and Computer Science  
Techno Main Salt Lake  

- Data Analyst · AI Enthusiast · Software Developer  

---

## License

MIT License — free to use and modify for your own portfolio.

---

## Acknowledgments

Built with React & Tailwind CSS · Animations by Framer Motion
=======
# Portfolio
>>>>>>> a37346de85d8ee289d2697a9468209a2554a46c5
