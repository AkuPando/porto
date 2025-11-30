import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PreLoader from "./components/PreLoader.jsx";
import About from "./components/About.jsx";
import Tools from "./components/Tools.jsx";
import Lenis from "@studio-freight/lenis";
import 'remixicon/fonts/remixicon.css';
import "./loader-animations.css";

// INIT LENIS
const lenis = new Lenis({
  duration: 1.3,
  easing: t => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 0.75,
});

// Lenis RAF
function raf(time) {
  lenis.raf(time);

  // Update event
  const scrollEvent = new CustomEvent("lenis-raf");
  document.dispatchEvent(scrollEvent);

  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// RENDER
createRoot(document.getElementById("root")).render(
  <>
    <PreLoader />
    <Navbar />
    <App />
    {/* <About /> */}
    <Tools />
    <Footer />
  </>
);
