import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';

export default function CertificationCard({ cert, index }) {
  return (
    <motion.article
      className="card flex flex-col p-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <HiAcademicCap className="mb-4 h-6 w-6 text-teal-600 dark:text-teal-400" />
      <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">{cert.issuer}</span>
      <h3 className="mt-2 text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-50">{cert.title}</h3>
    </motion.article>
  );
}
