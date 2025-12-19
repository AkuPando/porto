import {
  RiGithubFill,
  RiInstagramFill,
  RiFacebookFill,
  RiWhatsappFill,
} from "@remixicon/react";

export const SOCIAL_LINKS = [
  { Icon: RiGithubFill, href: "https://github.com/AkuPando", target: "_blank", rel: "noopener noreferrer", label: "GitHub" },
  { Icon: RiInstagramFill, href: "https://www.instagram.com/dsnchntdvan", target: "_blank", rel: "noopener noreferrer", label: "Instagram" },
  { Icon: RiFacebookFill, href: "https://www.facebook.com/irvanda.aldo", target: "_blank", rel: "noopener noreferrer", label: "Facebook" },
  { Icon: RiWhatsappFill, href: "https://wa.me/62895323717136", target: "_blank", rel: "noopener noreferrer", label: "WhatsApp" },
];

// Optimized Lenis configuration for smoother scrolling
export const LENIS_CONFIG = {
  duration: 1.0,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1.0,
  lerp: 0.1,
};
