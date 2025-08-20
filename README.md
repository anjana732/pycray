# Event Manager — Professional Dark Theme (Next-Forge / Next.js App Router)

A detailed README describing how to run, understand, and extend the **Event Manager** built inside a **Next-Forge monorepo**.  
This project demonstrates state management with **Zustand + persist**, client-only storage, and a professional dark-themed UI.

---

## Table of Contents
- [Project summary](#project-summary)
- [What’s included / Features](#whats-included--features)
- [Tech stack](#tech-stack)
- [Assumptions & notes about structure](#assumptions--notes-about-structure)
- [Prerequisites](#prerequisites)
- [Install & run (step-by-step)](#install--run-step-by-step)
- [Files & folders — explanation (what-why)](#files--folders---explanation-what-why)
- [Lottie animation: where to put it and how to use it](#lottie-animation-where-to-put-it-and-how-to-use-it)
- [TypeScript declaration for lottie-react (if needed)](#typescript-declaration-for-lottie-react-if-needed)
- [UUID — installing or using native crypto.randomUUID()](#uuid---installing-or-using-native-cryptrandomuuid)
- [How the store / form / list work (detailed flow)](#how-the-store--form--list-work-detailed-flow)
- [Acceptance checklist (mapping to assignment)](#acceptance-checklist-mapping-to-assignment)
- [Troubleshooting & common errors](#troubleshooting--common-errors)
- [How to take a screenshot & include it for submission](#how-to-take-a-screenshot--include-it-for-submission)
- [Recommended Git commits / branch naming](#recommended-git-commits--branch-naming)
- [Possible next improvements (nice-to-have)](#possible-next-improvements-nice-to-have)
- [Contact / Attribution / License](#contact--attribution--license)

---

## Project summary
This app is a small **Event Manager page (/events)** built inside a **Next-Forge monorepo (`apps/web`)**.  
It keeps all data client-side using **Zustand with persist (localStorage)**.  

UI is a **dark theme**, with a **two-column layout**:
- Left column → Add Event form  
- Right column → Search + Event List  
- **Empty state**: shows a Lottie animation  
- Includes **Clear All (localStorage)** option  
- Footer with your **name & links**

### File locations (modular components version assumed)
- `apps/web/store/eventStore.ts`
- `apps/web/components/EventForm.tsx`
- `apps/web/components/EventList.tsx`
- `apps/web/app/events/page.tsx`

---

## What’s included / Features
- `/events` page (App Router)
- **Add event** (title, date, optional description)
- **Event list** with delete per item
- **Search/filter** (title/date/description)
- **Local persistence** (Zustand persist → localStorage)
- **Lottie animation** for empty state
- **Clear All** button
- **Dark theme styling** (Tailwind)
- **Lucide icons** on buttons/inputs
- **Footer** with your info + links

---

## Tech stack
- Next.js (App Router, inside Next-Forge Turbo monorepo)
- TypeScript
- Tailwind CSS
- pnpm (package manager)
- Zustand + persist
- react-hook-form
- lottie-react
- lucide-react
- uuid (or `crypto.randomUUID()`)

---

## Assumptions & notes about structure
- App is inside: `apps/web/`
- Routes: `/app/events/page.tsx → http://localhost:3000/events`
- Public assets: `apps/web/public/`
  - Example animation: `apps/web/public/animations/empty.json`
- Custom typings go in: `apps/web/types/`

---

## Prerequisites
- Node.js (>= 18)
- pnpm (v7+ or v8+)
- Git (optional, for cloning)

---

## Install & run (step-by-step)

1. **Clone repo**
```bash
git clone <repo-url>
cd <repo-root>
```


2. **Install dependencies (monorepo root)**
```bash
pnpm install
_If install fails at root:_
cd apps/web
pnpm install
```

3. **Install runtime dependencies**
```bash
pnpm add zustand react-hook-form lottie-react lucide-react
```

4. **Install dev types**
```bash
pnpm add -D @types/uuid
```

5. **Start dev server**

```bash
pnpm dev
```

Navigate to: `http://localhost:3000/events`

---

## Files & folders — explanation (what-why)

### `store/eventStore.ts`
- Zustand + persist (localStorage) store.  
- Provides: `events`, `addEvent`, `removeEvent`, `clearEvents`.  
- **Why?** Centralized state, persistence, reactivity.

### `components/EventForm.tsx`
- Uses `react-hook-form`.  
- Adds new events `{ id, title, date, description }`.  
- **Why?** Clean validation & controlled reset.

### `components/EventList.tsx`
- Renders events from store.  
- Includes **search/filter**, **delete per item**, **Clear All**, and **Lottie animation when empty**.  
- **Why?** Separation of concerns; list logic isolated.

### `app/events/page.tsx`
- Renders full two-column UI layout.  
- Includes header, form, list, footer.

---

## Lottie animation: where to put it and how to use it

### Recommended location
`apps/web/public/animations/empty.json`

### Use in `EventList`:
