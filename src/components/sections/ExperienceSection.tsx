import ScrollReveal from "../ScrollReveal";

const ExperienceSection = () => (
  <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-24 bg-secondary/30">
    <div className="max-w-3xl w-full">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2 text-center">Career</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          Experience
        </h2>
      </ScrollReveal>

      {/* Experience 1 */}
      <ScrollReveal delay={0.2}>
        <div className="mb-10 bg-card/40 border border-border rounded-lg p-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="font-heading text-xl font-semibold text-foreground">Pre-Law Intern</h3>
            <span className="text-sm text-accent font-medium">May 2025 – Nov 2025</span>
          </div>

          <p className="text-muted-foreground mb-3">
            Brevard and Seminole Public Defender — Melbourne, Florida, United States
          </p>

          <ul className="text-sm text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
            <li>
              Conducted legal case research and drafted motions that contributed to the resolution
              and dismissal of multiple cases, with one motion scheduled for argument at trial.
            </li>
            <li>
              Assisted in trial preparation by organizing exhibits, reviewing discovery materials,
              speaking with witnesses, and taking notes at depositions.
            </li>
            <li>
              Facilitated client communication with attorneys to gather case information and
              provide updates on case and court details.
            </li>
            <li>
              Gained courtroom and litigation exposure through observing hearings and trials.
            </li>
          </ul>
        </div>
      </ScrollReveal>

      {/* Experience 2 */}
      <ScrollReveal delay={0.3}>
        <div className="mb-10 bg-card/40 border border-border rounded-lg p-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Operations Assistant
            </h3>
            <span className="text-sm text-accent font-medium">May 2024 – Aug 2024</span>
          </div>

          <p className="text-muted-foreground mb-3">
            Purdue Recreation & Wellness — West Lafayette, Indiana, United States
          </p>

          <ul className="text-sm text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
            <li>
              Performed routine maintenance and assisted with locker management and equipment
              setup to maintain smooth operations in a fast-paced environment.
            </li>
            <li>
              Delivered excellent customer service by assisting clients with inquiries and
              ensuring satisfaction.
            </li>
            <li>
              Collaborated with administration to streamline daily operations and improve
              operational efficiency.
            </li>
          </ul>
        </div>
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal delay={0.4}>
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Legal Research",
              "Westlaw",
              "LexisNexis",
              "Legal Writing",
              "Contract Drafting",
              "Case Analysis",
              "Public Speaking",
              "Negotiation",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ExperienceSection;