# Project Rules & Agent Guidelines: Designer Portfolio (V2)

## 1. Core Philosophy
* **Simplicity & Scale:** Build a scalable web application with clean, readable code. Avoid unnecessary abstractions.
* **Pixel-Perfect Execution:** The Figma design is the single source of truth.
* **The "Clean Room" Architecture:** We use `shadcn/ui` for out-of-the-box accessibility and interactivity, but we strictly manage our own layout and aesthetic math using **CSS Modules**.

## 2. Tech Stack Strictness
* **Framework:** Next.js (App Router).
* **Language:** JavaScript (JSX). **Strictly NO TypeScript.** Do not generate `.ts` or `.tsx` files. Do not write interfaces or types.
* **Component Library:** `shadcn/ui` (Used for atomic, accessible primitives).
* **Styling Engine:** CSS Modules (`.module.css`) for all custom layout and paint. Tailwind CSS is installed *only* to power the underlying shadcn/ui components.
* **Utility:** `clsx` + `tailwind-merge` (via the `cn()` utility).
* **Animation:** Framer Motion.

## 3. Strict Hybrid Styling Architecture
* **The Paradigm:** We do NOT write inline Tailwind utility classes (e.g., `w-full flex-col md:w-[70%] gap-4`) for custom layouts. 
* **Shadcn Integration:** Shadcn components come pre-styled with Tailwind. To customize them or place them in a layout, pass CSS Module classes into them using the `className` prop.
  * *Example:* `<Card className={cn(styles.myCustomCard)}>`
* **CSS Modules for Everything Custom:** All structural layouts (Grid/Flex), responsive breakpoints, fluid typography clamps, aspect ratios, and glassmorphic paint must be written in `.module.css` files.
* **Media Queries:** Use standard CSS `@media` queries for breakpoints (e.g., `@media (min-width: 768px)`).

## 4. Folder Structure & Component Architecture
* **`src/app/`:** Next.js routing (pages, layouts).
* **`src/components/ui/`:** Shadcn UI primitives only (Button, Card, Badge). Do not modify these files unless absolutely necessary.
* **`src/components/sections/`:** Your custom layout components (Hero, Navbar, Work). 
  * Every component here must have a paired CSS module. 
  * *Example:* `Hero.jsx` and `Hero.module.css`.
* **Exporting:** Use named exports for all custom components. Default exports are reserved for Next.js `page.jsx` and `layout.jsx` files.
* **Micro-Layout Isolation:** Extract complex inner component structures (like Navbars inside Headers) into dedicated sub-components (e.g., `<HeroNav />`) to keep the parent layout macro-focused.
* **Bulletproof SVGs:** Extract raw SVG paths into custom functional components (`fill="currentColor"`) instead of relying on brittle third-party icon libraries that may lack brand logos.

## 5. Layout & Responsive Strategy
* **Fluid Container Scaling (`cqw` over `vw`):** For typography, padding, and border-radii inside components, always use Container Query Width (`cqw`). Avoid `vw` for component internals. 
  * *Requirement:* The parent wrapper must be explicitly defined (`container-type: inline-size; container-name: component-name;`).
* **Calibrate `clamp()` Floors:** Ensure the `MIN` floor in fluid functions (`clamp(MIN, FLUID, MAX)`) is low enough (e.g., `1.25rem` vs `2rem`) to prevent layout breaking before a breakpoint.
* **Ban Rigid Arbitrary Spacing:** Never hardcode rigid Tailwind classes (e.g., `gap-6`, `mt-12 md:mt-0`) inside a fluid container. Internal spacing must consume fluid CSS variables.
* **Graceful Degradation (`flex-wrap`):** Use `flex-wrap` with fluid gaps for action rows/navs so elements drop to the next line naturally instead of relying on hidden elements or breaking parent heights. Let flexbox dictate gravity (`justify-content: center`).
* **Aspect Ratios:** Protect the dimensions of image cards and containers using the `aspect-ratio` property in CSS. 
* **Mobile-First Protocol:** Write base CSS for mobile (single-column, stacked). Use `@media (min-width: 768px)` and `@media (min-width: 1280px)` for larger layouts.

## 6. Hydration & Rendering Strategy (The Composition Pattern)
* **Server-First Default:** All page layouts and major section components MUST remain Server Components.
* **Leaf-Level Hydration:** Never place `"use client"` on a layout component just to animate it. 
* **The RSC Composition Rule:** Create isolated wrapper components (e.g., `<SpringReveal>`) that contain the `"use client"` directive. Pass your heavy, server-rendered UI components into these wrappers as `children`. This isolates JavaScript execution and preserves zero-JS initial load times for the DOM.

## 7. Motion & Interaction Standards
* **Physics over Easing (The Apple Standard):** Do not use linear or ease-in-out curves for macro-animations. Use Framer Motion with Spring Physics to give elements physical weight. 
  * *Standard UI Spring Config:* `type: "spring", mass: 1, stiffness: 260, damping: 25`. This mimics the snappy, underdamped physics of iOS.
* **Staggered Cascades:** When revealing side-by-side or stacked elements, apply a micro-delay (e.g., `0.1s` to `0.15s`) to the secondary elements to create a spatial cascade effect.
* **Hardware Acceleration:** Strictly animate only GPU-accelerated properties (`transform` and `opacity`). 
* **`will-change` Hinting:** Always apply `style={{ willChange: "transform, opacity" }}` to animated motion wrappers to force the browser to composite the layer on the GPU *before* the animation triggers, preventing frame drops.

## 8. Asset & Performance Workflow
* **Images:** All images must use `next/image` with proper `alt` tags and explicit sizes.
* **Sanitize Complex Renders:** High-fidelity 3D exports and AI images must be laundered through Figma or Squoosh and exported as **8-bit WebP** files to prevent Next.js optimizer crashes (rainbow static).
* **MIME Type Accuracy:** Turbopack is strict. Ensure the file extension in `<Image src="..." />` exactly matches the physical file (`.jpg` vs `.png`) to avoid memory corruption during compilation.
* **Phasing:** Complete one full component's JSX and CSS Module before moving to the next.