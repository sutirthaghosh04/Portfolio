import SectionHeading from '../components/SectionHeading';
import CertificationCard from '../components/CertificationCard';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding section-alt" aria-labelledby="certifications-heading">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Certifications"
          title="Courses completed"
          description="NPTEL certifications in programming and AI."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
