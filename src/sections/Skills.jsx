import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section-padding" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Skills"
          title="Technical expertise"
          description="Languages, tools, and fundamentals I work with."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} title={cat.title} skills={cat.skills} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
