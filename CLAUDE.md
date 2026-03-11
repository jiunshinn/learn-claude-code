# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static website (Korean language) that serves as a beginner-friendly guide to Claude Code for non-developers. Deployed via GitHub Pages on push to `main`.

## Architecture

- **Static site** — no build step, no bundler, no framework
- `index.html` — landing page with 14 module cards linking to subpages
- `pages/*.html` — individual guide pages (intro, install, commands, tips, etc.)
- `css/style.css` — single stylesheet with CSS custom properties for light/dark theming (`data-theme` attribute on `<html>`)
- `js/main.js` — shared JS: scroll progress, nav hide/show, theme toggle, mobile menu, OS tabs, FAQ accordion, copy-to-clipboard, scroll reveal animations
- Font: Pretendard (loaded via CDN)

## Key Conventions

- All content is in Korean
- Each subpage in `pages/` includes the same nav, mobile menu, and footer structure as `index.html`, with relative paths (`../css/style.css`, `../js/main.js`)
- Theme persistence uses `localStorage` key `theme`
- Interactive components use global functions on `window` (e.g., `window.copyCode`, `window.toggleFaq`)
- CSS uses `color-mix()` and CSS custom properties extensively — no preprocessor

## Deployment

Auto-deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`. No build step — the entire repo root is uploaded as the artifact.
