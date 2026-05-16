import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { socialLinks } from '../data/navLinks';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding section-alt" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Contact"
          title="Get in touch"
          description="Open to opportunities, collaborations, and conversations."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            className="card space-y-5 p-6 md:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="input-field"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="input-field"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="input-field resize-none"
                placeholder="Your message..."
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Send message
            </button>
            {submitted && (
              <p className="text-sm text-teal-600 dark:text-teal-400">
                Thank you — your message has been received.
              </p>
            )}
          </motion.form>

          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-zinc-600 dark:text-zinc-400">
              Prefer email or social? Reach out through any of these channels.
            </p>
            <ul className="space-y-3">
              {[
                { href: socialLinks.email, icon: HiMail, text: 'sutirthaghosh04@gmail.com' },
                { href: socialLinks.linkedin, icon: FaLinkedinIn, text: 'LinkedIn' },
                { href: socialLinks.github, icon: FaGithub, text: 'GitHub' },
              ].map(({ href, icon: Icon, text }) => (
                <li key={text}>
                  <a
                    href={href}
                    target={text.includes('@') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="card flex items-center gap-4 p-4 text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                  >
                    <Icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
