import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-padding section-alt" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Experience"
          title="Work history"
          description="Internships and professional experience."
        />

        {experiences.map((exp, index) => (
          <motion.article
            key={exp.company}
            className="card p-6 md:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <time className="text-sm text-zinc-600 dark:text-zinc-400">{exp.duration}</time>
            <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">{exp.company}</h3>
            <p className="text-teal-600 dark:text-teal-400">{exp.role}</p>
            <ul className="mt-5 space-y-2.5 border-t border-zinc-100 pt-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 dark:border-zinc-800">
              {exp.responsibilities.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-600 dark:bg-teal-400" />
                  {r}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
