import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects, projectFilters } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="Research and analytics projects I've built."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                filter === f.id
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-50 dark:hover:bg-zinc-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
