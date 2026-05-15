import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-padding section-alt" aria-labelledby="about-heading">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="About"
          title="Who I am"
          description="A brief introduction to my background and interests."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <motion.div
            className="mx-auto w-full max-w-[280px] lg:mx-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
              <img
                src="/assets/profile-placeholder.svg"
                alt="Sutirtha Ghosh"
                className="aspect-square w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              I&apos;m a <strong className="font-medium text-zinc-900 dark:text-zinc-50">B.Tech student</strong> at{' '}
              <strong className="font-medium text-zinc-900 dark:text-zinc-50">Techno Main Salt Lake</strong>, pursuing
              Electronics and Computer Science.
            </p>
            <p>
              My interests span Data Analytics, Artificial Intelligence, Machine Learning, and
              Software Development — I enjoy turning complex problems into clear, practical
              solutions.
            </p>
            <p>
              I&apos;m passionate about applying technology to real-world challenges, from
              intelligent models and analytics dashboards to reliable software systems.
            </p>
            <a href="#contact" className="btn-primary mt-2 inline-flex">
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
