import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="card group overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="relative h-44 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-teal-600 dark:text-teal-400">
          {project.subtitle}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <a
            href={project.github}
            className="flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiCode className="h-4 w-4" /> Source
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiExternalLink className="h-4 w-4" /> View
          </a>
        </div>
      </div>
    </motion.article>
  );
}
