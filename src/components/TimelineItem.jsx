import { motion } from 'framer-motion';

export default function TimelineItem({ item, index, isLast = false }) {
  return (
    <motion.div
      className="relative flex gap-6 pb-10 last:pb-0"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="flex flex-col items-center pt-1">
        <motion.div className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-teal-600 bg-zinc-50 dark:border-teal-400 dark:bg-zinc-950" />
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        )}
      </div>

      <article className="card flex-1 p-6">
        {item.current && (
          <span className="mb-2 inline-block text-xs font-medium text-teal-600 dark:text-teal-400">
            Present
          </span>
        )}
        <time className="text-sm text-zinc-600 dark:text-zinc-400">{item.period}</time>
        <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">{item.institution}</h3>
        <p className="mt-0.5 text-zinc-600 dark:text-zinc-400">{item.degree}</p>
        {item.detail && <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.detail}</p>}
      </article>
    </motion.div>
  );
}
