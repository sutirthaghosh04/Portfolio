import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import Contact from './sections/Contact';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div
        className="relative min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100"
        data-theme={theme}
      >
        {!loading && (
          <>
            <ScrollProgress />
            <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Certifications />
              <Education />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
