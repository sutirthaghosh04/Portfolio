import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="section-padding" aria-labelledby="education-heading">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Education"
          title="Academic background"
          description="Schools and programs I've attended."
        />
        {education.map((item, index) => (
          <TimelineItem
            key={`${item.institution}-${item.period}`}
            item={item}
            index={index}
            isLast={index === education.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
