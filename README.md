# Jokes PWA

A lightweight, installable **Progressive Web App (PWA)** that fetches and displays jokes. This project serves as a technical demonstration of how to convert a standard web utility into a native-like experience using Service Workers and Web App Manifests.

## 🚀 Live Demo
You can view the live application here: **[jokes-fawn.vercel.app](https://jokes-fawn.vercel.app)**

## ✨ Features
* **Installable:** Add the app to your home screen or desktop via the browser "Install" prompt.
* **Offline Ready:** Uses a Service Worker (`sw.js`) to cache essential assets for offline access.
* **Vanilla Implementation:** Built with pure HTML, CSS, and JavaScript without heavy frameworks.
* **Mobile-First Design:** Fully responsive layout optimized for all screen dimensions.

## 🛠️ Technology Stack
* **HTML5:** Semantic document structure.
* **CSS3:** Custom styling and responsive design.
* **Vanilla JavaScript:** Logic for API fetching and DOM updates.
* **Service Worker:** Background script for caching and offline support.
* **Web App Manifest:** Metadata for PWA installation (icons, theme colors, display mode).

## 📁 Repository Structure
* `index.html` — The main interface and entry point.
* `script.js` — Handles joke fetching and Service Worker registration.
* `style.css` — Contains all visual styling.
* `sw.js` — The Service Worker script managing the cache.
* `manifest.json` — Configuration for the web app's installability.
* `icon-192.png` / `icon-512.png` — High-resolution icons for different device sizes.

## ⚙️ How to Run Locally
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/gomugomucode/Jokes.git](https://github.com/gomugomucode/Jokes.git)
