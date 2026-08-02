# 🚀 Masum 9T9 — Senior Graphic Designer, UI/UX Specialist, Frontend Developer & Content Creator

> **Crafting High-Converting Visuals, Modern UI/UX Experiences, and Responsive Full-Stack Web Applications.**

[![Live Website](https://img.shields.io/badge/Live_Portfolio-9t9.pro.bd-0284C7?style=for-the-badge&logo=googlechrome&logoColor=white)](https://9t9.pro.bd)
[![Version](https://img.shields.io/badge/Version-2.0.0-10B981?style=for-the-badge)](https://9t9.pro.bd)
[![License](https://img.shields.io/badge/License-Copyright_2026-6366F1?style=for-the-badge)](#17-license--copyright)

---

## 📖 Table of Contents
1. [Project Header](#1-project-header)
2. [About The Project](#2-about-the-project)
3. [Professional Identity](#3-professional-identity)
4. [Key Features](#4-key-features)
5. [Technologies Used](#5-technologies-used)
6. [Project Structure](#6-project-structure)
7. [Installation & Setup](#7-installation--setup)
8. [Environment Setup](#8-environment-setup)
9. [Development Workflow](#9-development-workflow)
10. [Design System & UI/UX Approach](#10-design-system--uiux-approach)
11. [Responsive Design](#11-responsive-design)
12. [Performance Optimization](#12-performance-optimization)
13. [Screenshots / Preview](#13-screenshots--preview)
14. [Live Demo](#14-live-demo)
15. [Future Improvements](#15-future-improvements)
16. [Version / Release](#16-version--release)
17. [Contact Information](#17-contact-information)
18. [License & Copyright](#18-license--copyright)

---

## 1. Project Header

- **Project Name:** Masum 9T9 Official Portfolio (`9t9.pro.bd`)
- **Tagline:** Empowering Brands, Content Creators, and Businesses through High-Impact Graphics, Intuitive UI/UX, and Modern Web Applications.
- **Introduction:** Welcome to the official digital portfolio of **Md. Masum Billah (Masum 9T9)**. This repository houses a production-grade, highly responsive full-stack web application designed to showcase custom graphic design, YouTube thumbnail psychology, UI/UX systems, frontend web development projects, and educational digital content creation.
- **Live Website:** [https://9t9.pro.bd](https://9t9.pro.bd)

---

## 2. About The Project

### What this project is
The **Masum 9T9 Portfolio** is a custom-built, full-stack web application featuring an interactive visual showcase, dynamic client project inquiry system, multi-category skill matrix, 3D testimonial slider, and localized language switcher (Bangla & English).

### Why this project was created
In a fast-evolving digital landscape, standing out requires a synthesis of **Visual Design** and **Engineering Precision**. This project was created to:
1. Provide an official, modern portal for clients and collaborators to view high-CTR graphics, UI/UX prototypes, and web applications.
2. Deliver a seamless client onboarding experience with real-time project inquiries delivered directly to Telegram, Email (Brevo), and Google Sheets.
3. Serve as a central media hub for **Parahin Academy**, an educational initiative empowering creators and tech enthusiasts.

### Purpose & Vision
To bridge the gap between creative artistry and robust frontend engineering—delivering fast, high-converting digital products for global brands and content creators.

---

## 3. Professional Identity

### Creator: **Md. Masum Billah (Masum 9T9)**
- **Graphics Designer:** Photoshop & Illustrator expert specializing in high-CTR YouTube thumbnails, photo compositing, poster art, and brand identity systems.
- **UI/UX Designer:** Figma prototype architect designing clean, accessible, and high-conversion web & mobile interfaces.
- **Frontend Developer:** React, TypeScript, and Tailwind CSS engineer crafting fast, responsive, and SEO-friendly web apps.
- **Content Creator:** Founder & lead instructor at **Parahin Academy**, producing tech media, design tutorials, and creative guides.

---

## 4. Key Features

- **🎨 Modern Premium UI:** Deep navy slate theme featuring glassmorphism, glowing micro-accents, and interactive card physics.
- **📱 Responsive Across All Devices:** Optimized layouts engineered specifically for 4K Desktops, Laptops, Tablets, Phablets, and Mobile screens.
- **⚡ Full-Stack Contact Engine:** Interactive multi-select project inquiry form that dispatches client details in parallel to:
  - **Telegram Bot API** (Instant push notification)
  - **Brevo REST API** (Admin email notification & automated client thank-you response)
  - **Google Sheets Webhook** (Automated spreadsheet backup)
- **🛠️ Interactive Skills Matrix:** Categorized filter tabs (Design, Development, Content) with animated proficiency bars and tool tags.
- **💼 Portfolio Showcase & Modal Preview:** Filterable project showcase featuring high-resolution graphics, web app previews, and detailed lightbox overlays.
- **💬 3D Testimonials Carousel:** Interactive 3D perspective slider displaying verified client reviews, ratings, and avatars.
- **🌐 Dual Language Support (Bangla / English):** Seamless stateful toggle switching typography and copy instantly.
- **🔍 Quick Search & Navigation Dock:** Floating desktop/mobile dock with instant search capabilities.
- **♿ Accessibility & Performance:** WCAG AA contrast compliant, keyboard navigable, and optimized for 60FPS animations.

---

## 5. Technologies Used

### **Frontend & UI Framework**
- **React 19:** Functional component library with modern hooks.
- **TypeScript:** Strict type safety and compile-time error prevention.
- **Tailwind CSS v4:** Utility-first styling with custom fluid responsive clamps.
- **Motion (Framer Motion):** GPU-accelerated motion transitions and micro-interactions.
- **Lucide React:** Minimalist, consistent icon library.
- **Canvas-Confetti:** Interactive celebratory animations upon inquiry completion.

### **Backend & Infrastructure**
- **Node.js & Express:** Lightweight, high-performance API server.
- **Dotenv:** Secure environment variable management.
- **Esbuild & TSX:** Lightning-fast CommonJS bundling (`dist/server.cjs`) for production runtime.
- **Vite:** High-speed development server and static asset bundler.

### **Integrations & Services**
- **Brevo API (v3):** Transactional email delivery and client auto-responders.
- **Telegram Bot API:** Instant mobile push notification system.
- **Google Apps Script:** Webhook spreadsheet logging.

---

## 6. Project Structure

```ascii
masum-9t9-portfolio/
├── .env.example              # Environment variables template (no secrets)
├── .gitignore                # Git exclusion rules
├── index.html                # Main HTML entry point
├── package.json              # Node dependencies & npm scripts
├── server.ts                 # Full-Stack Express backend entry point
├── tsconfig.json             # TypeScript compiler configuration
├── vite.config.ts            # Vite build configuration
├── assets/                   # Static visual assets & branding logos
├── public/                   # Public static files & favicon
└── src/                      # Frontend Application Source
    ├── App.tsx               # Main application component & state provider
    ├── main.tsx              # React DOM mounting entry point
    ├── index.css             # Global CSS & Tailwind imports
    ├── types.ts              # Global TypeScript interfaces & data types
    ├── components/           # Modular React Components
    │   ├── NavigationDock.tsx# Responsive floating navigation & search dock
    │   ├── Hero.tsx          # Hero section with role badges & CTAs
    │   ├── About.tsx         # Story, vision, education & career goals
    │   ├── Services.tsx      # Services grid & turnaround details
    │   ├── Skills.tsx        # Categorized skills matrix
    │   ├── Projects.tsx      # Filterable portfolio & modal preview
    │   ├── Experience.tsx    # Professional career timeline
    │   ├── Testimonials3D.tsx# 3D perspective client reviews slider
    │   ├── Contact.tsx       # Multi-channel client inquiry form
    │   ├── Footer.tsx        # Footer navigation & social links
    │   ├── Header.tsx        # Top bar with status & language toggle
    │   └── SearchModal.tsx   # Global site search modal
    └── data/                 # Data Models & Localization
        ├── config.ts         # Portfolio configuration & state loader
        └── translations.ts   # English & Bangla localization dictionaries
```

---

## 7. Installation & Setup

### **Prerequisites**
- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher (or `bun` / `pnpm`)

### **1. Clone the Repository**
```bash
git clone https://github.com/masum-9t9/masum-9t9-portfolio.git
cd masum-9t9-portfolio
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Environment Setup**
Create a `.env` file in the root directory by copying `.env.example`:
```bash
cp .env.example .env
```
Fill in your credentials as detailed in the [Environment Setup](#8-environment-setup) section.

### **4. Start Development Server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### **5. Production Build & Start**
```bash
npm run build
npm start
```

---

## 8. Environment Setup

To keep sensitive keys and API tokens secure, the application uses `dotenv`. **Never commit your `.env` file to version control.**

### **Required Environment Variables**

| Variable Name | Description | Required | Example / Format |
| :--- | :--- | :---: | :--- |
| `APP_URL` | Canonical production domain URL | Yes | `https://9t9.pro.bd` |
| `GEMINI_API_KEY` | Google Gemini AI API key | Optional | `AIzaSy...` |
| `BREVO_API_KEY` | Brevo (Sendinblue) Transactional REST API Key | Yes | `xkeysib-...` |
| `BREVO_SMTP_USER` | Brevo SMTP username | Optional | `b4077...@smtp-brevo.com` |
| `BREVO_SMTP_PASS` | Brevo SMTP password | Optional | `xsmtpsib-...` |
| `FROM_NAME` | Sender display name for emails | Yes | `Masum 9T9` |
| `FROM_EMAIL` | Official verified sender email address | Yes | `hello@9t9.pro.bd` |
| `TELEGRAM_BOT_TOKEN` | Telegram Bot API token for notification alerts | Yes | `8833148612:AAHihj...` |
| `TELEGRAM_CHAT_ID` | Telegram chat/user ID to receive inquiry alerts | Yes | `8634088852` |
| `GOOGLE_SHEETS_CONFIG` | Google Apps Script macro Webhook URL for backup | Optional | `https://script.google.com/macros/s/.../exec` |

### **Security Guidelines**
1. **No Hardcoded Secrets:** All secret keys remain strictly on the Express backend (`server.ts`).
2. **Frontend Security:** Client-side bundles contain zero API keys or bot tokens. All notifications are proxied via `/api/contact`.
3. **Git Hygiene:** `.gitignore` automatically excludes `.env`, `.env.local`, `.env.*.local`, `node_modules/`, and build outputs.

---

## 9. Development Workflow

- **Component-Driven Architecture:** Each section is isolated in `/src/components/` for readability and modularity.
- **Express + Vite Integration:** In development, Express mounts Vite middleware (`middlewareMode: true`) for instant hot-reloading.
- **Production Compilation:** During `npm run build`, `vite build` bundles client assets into `/dist/`, while `esbuild` compiles `server.ts` into a self-contained CommonJS runtime (`dist/server.cjs`).
- **Strict Linting & Validation:** Executed via TypeScript `tsc --noEmit`.

---

## 10. Design System & UI/UX Approach

- **Color Palette:**
  - Backgrounds: `#0B1220` (Midnight Navy), `#131C2E` (Deep Slate)
  - Accents: `#38BDF8` (Sky Blue), `#0EA5E9` (Cyan), `#10B981` (Emerald)
  - Typography: `#F8FAFC` (High-contrast Slate White), `#94A3B8` (Muted Metallic)
- **Typography:**
  - Headings: *Playfair Display* / *Plus Jakarta Sans* (Bold, high-hierarchy tracking)
  - Body: *Hind Siliguri* (Bangla readability) / *Plus Jakarta Sans* (English clarity)
- **Visual Polish:** Glassmorphic cards with subtle `1px border-white/10` stroke borders and optical inner spacing.

---

## 11. Responsive Design

The application is thoroughly tested across multiple viewport breakpoints:

- **Ultra-Wide & Desktop (1920px - 1440px):** Multi-column grid, expanded floating dock, 3D perspective sliders.
- **Laptops & Large Tablets (1024px - 768px):** Adaptive 2-column layouts, touch-friendly hover cards.
- **Mobiles & Phablets (430px - 390px):** Single-column stacked cards, compact touch buttons (min 44px height), vertical button stacks, overflow-free carousels.
- **Small Android Devices (320px+):** Elastic fluid font scales (`clamp()`) ensuring zero horizontal scroll.

---

## 12. Performance Optimization

- **Zero-Flicker Bundling:** Single CJS server bundle (`dist/server.cjs`) eliminates module load friction.
- **Image Optimizations:** Lazy loaded portfolio thumbnails with web-optimized image hostings.
- **GPU Acceleration:** Framer Motion animations utilize hardware-accelerated CSS properties (`transform`, `opacity`).
- **Parallel Dispatch:** Backend contacts Telegram, Brevo, and Google Sheets simultaneously using `Promise.allSettled()`.

---

## 13. Screenshots / Preview

*Preview cards and screenshots of the portfolio can be viewed below:*

| Hero Section (Desktop) | Responsive Mobile View |
| :---: | :---: |
| ![Hero Section Desktop](https://i.postimg.cc/FzTMvwBb/Profile-pic.png) | ![Mobile Portfolio](https://i.postimg.cc/7Z3fjNN9/photoshop.png) |

---

## 14. Live Demo

Experience the live, interactive portfolio application at:
👉 **[https://9t9.pro.bd](https://9t9.pro.bd)**

---

## 15. Future Improvements

- [ ] **Case Studies Platform:** In-depth breakdowns of YouTube thumbnail CTR growth analytics and client UI design systems.
- [ ] **Interactive Client Portal:** Real-time project status tracker for ongoing client design deliverables.
- [ ] **AI Asset Generator Tool:** Internal utility for generating custom thumbnail mockups and color palettes.
- [ ] **Blog & Tutorial Section:** Integrated tech articles and design guides published directly by Parahin Academy.

---

## 16. Version / Release

### **v2.0.0 — Complete Portfolio Redesign** *(August 2026)*
- **Major Architecture Upgrade:** Rebuilt into a full-stack Express + React 19 application.
- **Brand Identity Refresh:** Updated professional roles (Graphics Designer \| UI/UX Specialist \| Frontend Developer \| Content Creator).
- **Multi-Channel Contact System:** Integrated Brevo REST API, Telegram Bot notifications, and Google Sheets fallback.
- **Redesigned Mobile Experience:** Enhanced touch controls, responsive typography, and mobile dock navigation.

---

## 17. Contact Information

- **Website:** [https://9t9.pro.bd](https://9t9.pro.bd)
- **Primary Email:** [hello@9t9.pro.bd](mailto:hello@9t9.pro.bd)
- **Secondary Email:** [masum.9t9.gd@gmail.com](mailto:masum.9t9.gd@gmail.com)
- **GitHub:** [https://github.com/masum-9t9](https://github.com/masum-9t9)
- **Behance:** [https://www.behance.net/masum_9t9_official](https://www.behance.net/masum_9t9_official)
- **Telegram:** [@masum_9t9_official](https://t.me/masum_9t9_official)
- **WhatsApp:** [+880 1303-623838](https://wa.me/8801303623838)
- **YouTube:** [Parahin Academy](https://www.youtube.com/@ParahinAcademy)

---

## 18. License & Copyright

**Copyright © 2026 Masum 9T9. All Rights Reserved.**

This repository contains the personal portfolio, creative artwork, source code, and brand identity of **Masum 9T9**. Unlawful copying, reproduction, modification, distribution, or public display of any assets, design elements, or code without explicit prior written consent is strictly prohibited.
