// Navigation constants
export const NAV_ITEMS = [
  { label: "Dashboard", to: "/" },
  { label: "Project", to: "/project" },
  { label: "Product", to: "/product" },
  { label: "Contact", to: "/contact" },
];

// Footer constants
export const FOOTER_LINKS = ["Satu", "Dua", "Tiga"];

import {
  RiGithubFill,
  RiInstagramFill,
  RiFacebookFill,
  RiWhatsappFill,
} from "@remixicon/react";

export const SOCIAL_LINKS = [
  // Old format: { icon: "ri-github-fill", ... }
  { Icon: RiGithubFill, href: "https://github.com/AkuPando", target: "_blank", rel: "noopener noreferrer", label: "GitHub" },
  { Icon: RiInstagramFill, href: "https://www.instagram.com/dsnchntdvan", target: "_blank", rel: "noopener noreferrer", label: "Instagram" },
  { Icon: RiFacebookFill, href: "https://www.facebook.com/irvanda.aldo", target: "_blank", rel: "noopener noreferrer", label: "Facebook" },
  { Icon: RiWhatsappFill, href: "https://wa.me/62895323717136", target: "_blank", rel: "noopener noreferrer", label: "WhatsApp" },
];

// Lenis configuration
export const LENIS_CONFIG = {
  duration: 1.3,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 0.75,
};
