import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="h-8 w-8 rounded-full border-2 border-zinc-200 border-t-teal-600 dark:border-zinc-800 dark:border-t-teal-400"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
      />
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Loading</p>
    </motion.div>
  );
}
