import { motion } from 'framer-motion';

/** label = small caps tag, title = main heading, description = optional subtext */
export default function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      className="mb-14 md:mb-16"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
    >
      {label && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-teal-600 dark:text-teal-400">
          {label}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-xl text-base text-zinc-600 dark:text-zinc-400">{description}</p>
      )}
      <div className="accent-line mt-5" />
    </motion.div>
  );
}
