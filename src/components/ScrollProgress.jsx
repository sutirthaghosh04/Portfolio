import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 35 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-teal-600 dark:bg-teal-500"
      style={{ scaleX }}
      role="progressbar"
      aria-label="Page scroll progress"
    />
  );
}
