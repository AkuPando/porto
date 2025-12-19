import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import { LENIS_CONFIG } from "./utils/constants";

// Styles
import "./index.css";
import "./loader-animations.css";
import "animate.css";
import "aos/dist/aos.css";

// Initialize AOS with optimized configuration
AOS.init({
  once: true,
  offset: 100,
  duration: 600,
  easing: 'ease-out-cubic',
  throttleDelay: 99,
});

// Initialize Lenis smooth scroll
const lenis = new Lenis(LENIS_CONFIG);

// Optimized RAF loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Render app
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
