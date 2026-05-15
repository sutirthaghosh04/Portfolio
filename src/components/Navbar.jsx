import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks } from '../data/navLinks';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-zinc-200/80 bg-zinc-50/90 py-3 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90'
          : 'bg-transparent py-5'
      }`}
    >
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Sutirtha Ghosh
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.slice(1, 6).map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`text-sm transition-colors ${
                  activeSection === link.id
                    ? 'font-medium text-teal-600 dark:text-teal-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              Contact
            </button>
          </li>
        </ul>

        <motion.div className="flex items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-900 dark:text-zinc-50 lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
          </button>
        </motion.div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="flex flex-col px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className={`block w-full py-3 text-left text-sm ${
                      activeSection === link.id
                        ? 'font-medium text-teal-600 dark:text-teal-400'
                        : 'text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
