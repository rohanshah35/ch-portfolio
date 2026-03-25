import ScrollReveal from "../ScrollReveal";

const EducationSection = () => (
  <section id="education" className="min-h-screen flex items-center justify-center px-6 py-24">
    <div className="max-w-3xl w-full">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2 text-center">
          Background
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          Education
        </h2>
      </ScrollReveal>

      {/* Purdue University */}
      <ScrollReveal delay={0.2}>
        <div className="mb-10 bg-card/40 border border-border rounded-lg p-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Purdue University
            </h3>
            <span className="text-sm text-accent font-medium">
              Aug 2023 – Dec 2026
            </span>
          </div>

          <p className="text-muted-foreground mb-4">
            Law & Society and Psychology Double Major, Minor in Political Science
          </p>

          <div className="border-l-2 border-primary/20 pl-4 space-y-3">
            <div>
              <p className="text-sm font-medium text-foreground">Grade</p>
              <p className="text-sm text-muted-foreground">Junior</p>
            </div>

            <div>
              <p className="text-sm font-medium text-foreground">
                Activities & Societies
              </p>
              <p className="text-sm text-muted-foreground">
                Purdue Pre-Law Society, Purdue Women in Law, Political Discourse Club
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Melbourne Central Catholic High School */}
      <ScrollReveal delay={0.3}>
        <div className="mb-10 bg-card/40 border border-border rounded-lg p-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Melbourne Central Catholic High School
            </h3>
            <span className="text-sm text-accent font-medium">
              Aug 2019 – May 2023
            </span>
          </div>

          <p className="text-muted-foreground mb-4">
            High School Diploma
          </p>

          <div className="border-l-2 border-primary/20 pl-4 space-y-3">
            <div>
              <p className="text-sm font-medium text-foreground">
                Activities & Societies
              </p>
              <p className="text-sm text-muted-foreground">
                Volleyball, Tennis, PIT Crew (Peer Inclusion Team)
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Test Scores, Honors & Certifications */}
      <ScrollReveal delay={0.4}>
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4 text-center">
            Test Scores, Honors, & Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* LSAT */}
            <div className="bg-card/40 border border-border rounded-lg p-4 text-center">
              <p className="text-xl font-heading font-bold text-foreground">TBD</p>
              <p className="text-xs text-primary mt-1">LSAT</p>
            </div>

            {/* Dean's List */}
            <div className="bg-card/40 border border-border rounded-lg p-4 text-center">
              <p className="text-sm font-heading font-semibold text-foreground">
                Dean’s List & Semesters Honors
              </p>
              <p className="text-xs text-primary mt-1">5 Semesters</p>
            </div>

            {/* Certification */}
            <div className="bg-card/40 border border-border rounded-lg p-4 text-center">
              <p className="text-sm font-heading font-semibold text-foreground">
                A Law Student's Toolkit
              </p>
              <p className="text-xs text-primary mt-1">
                Yale University · Issued Jul 2024
              </p>
              <p className="text-xs text-primary">
                Credential ID: 8XA4KKTESSRN
              </p>
            </div>

          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default EducationSection;