import ScrollReveal from "../ScrollReveal";

const ExperienceSection = () => (
  <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-24 bg-secondary/30">
    <div className="max-w-3xl w-full">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2 text-center">Career</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16">Experience</h2>
      </ScrollReveal>

      {/* Experience 1 */}
      <ScrollReveal delay={0.2}>
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="font-heading text-xl font-semibold text-foreground">Legal Intern</h3>
            <span className="text-sm text-accent font-medium">Summer 2024</span>
          </div>
          <p className="text-muted-foreground mb-3">Law Firm LLP — City, State</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Conducted legal research, drafted memoranda, and assisted with case preparation for civil litigation matters. 
            Collaborated with senior attorneys on client intake and discovery processes.
          </p>
        </div>
      </ScrollReveal>

      {/* Experience 2 */}
      <ScrollReveal delay={0.3}>
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="font-heading text-xl font-semibold text-foreground">Research Assistant</h3>
            <span className="text-sm text-accent font-medium">2022 – 2023</span>
          </div>
          <p className="text-muted-foreground mb-3">Professor Name — University Name</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Assisted with research on constitutional law topics, compiled case law databases, 
            and co-authored a published article on First Amendment jurisprudence.
          </p>
        </div>
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal delay={0.4}>
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Legal Research", "Westlaw", "LexisNexis", "Legal Writing",
              "Contract Drafting", "Case Analysis", "Public Speaking", "Negotiation",
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
