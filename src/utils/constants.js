// Navigation constants
export const NAV_ITEMS = [
  { label: "Dashboard", to: "/" },
  { label: "Project", to: "/project" },
  { label: "Product", to: "/product" },
  { label: "Contact", to: "/contact" },
];

// Footer constants
export const FOOTER_LINKS = ["Satu", "Dua", "Tiga"];

export const SOCIAL_LINKS = [
  { icon: "ri-github-fill", href: "#", label: "GitHub" },
  { icon: "ri-instagram-fill", href: "#", label: "Instagram" },
  { icon: "ri-facebook-fill", href: "#", label: "Facebook" },
];

// Lenis configuration
export const LENIS_CONFIG = {
  duration: 1.3,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 0.75,
};
