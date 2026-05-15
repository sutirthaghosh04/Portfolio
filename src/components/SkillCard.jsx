import { motion } from 'framer-motion';

export default function SkillCard({ title, skills, index }) {
  return (
    <motion.article
      className="card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-50">{title}</h3>
      <ul className="space-y-4">
        {skills.map((skill) => (
          <li key={skill.name}>
            <motion.div className="mb-1.5 flex justify-between text-sm">
              <span className="text-zinc-600 dark:text-zinc-400">{skill.name}</span>
              <span className="font-medium text-teal-600 dark:text-teal-400">{skill.level}%</span>
            </motion.div>
            <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
              <motion.div
                className="h-full rounded-full bg-teal-600 dark:bg-teal-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.03, ease: 'easeOut' }}
              />
            </div>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
