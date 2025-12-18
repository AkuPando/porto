import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import PreLoader from "./components/PreLoader.jsx";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import { LENIS_CONFIG} from "./utils/constants";

// Styles
import "./index.css";
import "./loader-animations.css";
// import "remixicon/fonts/remixicon.css"; // Commented: using @remixicon/react instead
import "animate.css";
import "aos/dist/aos.css";

// Initialize AOS with proper configuration
AOS.init({
  once: true,
  offset: 100,
  duration: 800,
  easing: 'ease-out-cubic',
});

// Refresh AOS on Lenis scroll
document.addEventListener('lenis-raf', () => {
  AOS.refresh();
});

// Initialize Lenis smooth scroll
const lenis = new Lenis(LENIS_CONFIG);
  
  // Lenis animation frame
  function raf(time) {
    lenis.raf(time);
    document.dispatchEvent(new CustomEvent("lenis-raf"));
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

// Render app
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PreLoader />
    <App />
  </React.StrictMode>
);
