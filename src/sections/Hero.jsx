import { motion } from 'framer-motion';
import { HiDownload, HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { heroTitles, socialLinks } from '../data/navLinks';

export default function Hero() {
  const typedTitle = useTypingEffect(heroTitles);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center section-padding pt-28"
      aria-label="Hero"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          className="mb-6 text-sm font-medium tracking-wide text-teal-600 dark:text-teal-400"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.p>

        <motion.h1
          className="text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Sutirtha Ghosh
        </motion.h1>

        <motion.div
          className="mt-5 flex min-h-[2rem] items-center text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <span>{typedTitle}</span>
          <span className="ml-0.5 inline-block h-6 w-px animate-pulse bg-teal-600 dark:bg-teal-400" />
        </motion.div>

        <motion.div
          className="accent-line mt-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ transformOrigin: 'left center' }}
        />

        <motion.p
          className="mt-8 max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          B.Tech student focused on data analytics, AI, and building thoughtful software
          solutions.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <button type="button" onClick={() => scrollTo('projects')} className="btn-primary">
            View Projects
          </button>
          <a href="/resume.pdf" download className="btn-secondary">
            <HiDownload className="h-4 w-4" />
            Resume
          </a>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          {[
            { href: socialLinks.linkedin, icon: FaLinkedinIn, label: 'LinkedIn' },
            { href: socialLinks.github, icon: FaGithub, label: 'GitHub' },
            { href: socialLinks.email, icon: HiMail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label === 'Email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
        aria-label="Scroll to about"
      >
        <HiArrowDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
}
