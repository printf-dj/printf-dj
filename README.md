# Dixit Jhinkwan — Developer Portfolio & Interactive Terminal

A modern, high-performance portfolio and interactive developer console built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## ✨ Features

- **Dynamic Dark / Light Themes**: Automatically respects system color preference with seamless manual toggle and persistence.
- **Interactive Particle Network**: HTML5 Canvas particle simulation with mouse repulsion and distance-based alpha connections.
- **Motion Accessibility Control**: Live Reduce Motion toggle in header to pause/resume particle simulation, persisted in `localStorage`.
- **Ambient Glow Orbs**: Subtle background radial gradients with mouse and scroll parallax movement.
- **Glassmorphic Navigation Bar**: Responsive header featuring brand logo hover effects, smooth-scroll anchor links, and mobile drawer.
- **Profile & Philosophy**: Highlighting modern frontend design systems, clean code, performance optimization, and core technical focus.
- **Tech Ecosystem & Filters**: Interactive category filtering (Frontend, Backend & DB, Cloud & Tools, Media & Design) with devicon integration and proficiency star ratings.
- **Interactive Shell Terminal**:
  - Emulates an Ubuntu Linux workstation (`dixit@dev-workstation:~`)
  - Supports commands: `neofetch`, `ls`, `pwd`, `whoami`, `about`, `skills`, `contact`, `socials`, `date`, `quote`, `echo`, `sudo`, `help`, `theme`, and `clear`
  - Keyboard history navigation (Arrow Up / Down) and Tab autocompletion
  - Interactive quick-command buttons
  - Responsive column/row dimension calculation
- **Direct Email & Security Challenge**: Math CAPTCHA verification modal before triggering the native mail client, accompanied by success notifications.
- **Online Social Presence**: Branded hover states and tooltips for GitHub, Twitter/X, LinkedIn, and Instagram.

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4 with glassmorphism effects
- **Icons**: Lucide React & Devicon

## 🚀 Development & Scripts

```bash
# Start development server on port 3000
npm run dev

# Build production bundle
npm run build

# Preview build
npm run preview
```
