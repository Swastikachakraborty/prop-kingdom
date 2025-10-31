import { Variants } from "framer-motion";

// Cinematic easing curves
export const easeOutQuart = [0.25, 1, 0.5, 1];
export const easeInOutCubic = [0.65, 0, 0.35, 1];
export const easeOutExpo = [0.16, 1, 0.3, 1];
export const easeOutSine = [0.61, 1, 0.88, 1];
export const easeOutCirc = [0, 0.55, 0.45, 1];
export const easeInOutSine = [0.37, 0, 0.63, 1];
export const easeInOut = [0.45, 0, 0.55, 1];

// Fade in from bottom (for headlines and CTAs)
export const fadeInUp: Variants = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: easeInOutCubic,
    },
  },
};

// Fade in from top
export const fadeInDown: Variants = {
  initial: {
    y: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: easeInOutCubic,
    },
  },
};

// Fade in from left
export const fadeInLeft: Variants = {
  initial: {
    x: -60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: easeOutExpo,
    },
  },
};

// Fade in from right
export const fadeInRight: Variants = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: easeOutExpo,
    },
  },
};

// Simple fade in (for sections)
export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: easeOutExpo,
    },
  },
};

// Scale in
export const scaleIn: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: easeInOutCubic,
    },
  },
};

// Stagger children (30-50ms delays)
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

// For property cards grid (50ms stagger)
export const cardStagger: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Hero animation (800ms page load)
export const heroVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutQuart,
      staggerChildren: 0.15,
    },
  },
};

// Gold line animation
export const lineVariants: Variants = {
  initial: {
    width: 0,
    opacity: 0,
  },
  animate: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeOutQuart,
    },
  },
};

// Floating animation for WhatsApp button
export const floatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: easeInOutSine,
  },
};

// Pulse animation for WhatsApp button (1.5s loop)
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: easeInOutSine,
  },
};

// Page transition (500ms fade in/out)
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

// Button hover (200-250ms)
export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.22,
    ease: easeOutSine,
  },
};

// Card hover lift (250-300ms)
export const cardHover = {
  y: -8,
  transition: {
    duration: 0.28,
    ease: easeInOutCubic,
  },
};

// Image zoom hover
export const imageZoom = {
  scale: 1.1,
  transition: {
    duration: 0.6,
    ease: easeOutExpo,
  },
};
