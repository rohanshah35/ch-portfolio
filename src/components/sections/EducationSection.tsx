import ScrollReveal from "../ScrollReveal";

const EducationSection = () => (
  <section id="education" className="min-h-screen flex items-center justify-center px-6 py-24">
    <div className="max-w-3xl w-full">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2 text-center">Background</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16">Education</h2>
      </ScrollReveal>

      {/* Degree 1 */}
      <ScrollReveal delay={0.2}>
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="font-heading text-xl font-semibold text-foreground">University School of Law</h3>
            <span className="text-sm text-accent font-medium">2023 – Present</span>
          </div>
          <p className="text-muted-foreground mb-4">Juris Doctor Candidate</p>
          <div className="border-l-2 border-primary/20 pl-4 space-y-3">
            <div>
              <p className="text-sm font-medium text-foreground">Activities & Societies</p>
              <p className="text-sm text-muted-foreground">Law Review, Moot Court, Student Bar Association</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Degree 2 */}
      <ScrollReveal delay={0.3}>
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="font-heading text-xl font-semibold text-foreground">University Name</h3>
            <span className="text-sm text-accent font-medium">2019 – 2023</span>
          </div>
          <p className="text-muted-foreground mb-4">Bachelor of Arts in Political Science, GPA: 3.8</p>
          <div className="border-l-2 border-primary/20 pl-4 space-y-3">
            <div>
              <p className="text-sm font-medium text-foreground">Activities & Societies</p>
              <p className="text-sm text-muted-foreground">Pre-Law Society, Debate Team, Dean's List</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Test Scores */}
      <ScrollReveal delay={0.4}>
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Test Scores</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: "LSAT", score: "17X" },
              { label: "GPA", score: "3.X" },
              { label: "GRE", score: "32X" },
            ].map((t) => (
              <div key={t.label} className="bg-secondary rounded-md p-4 text-center">
                <p className="text-2xl font-heading font-bold text-primary">{t.score}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default EducationSection;
