import { FileText, ExternalLink } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const samples = [
  { title: "First Amendment Analysis", type: "Legal Memorandum", href: "#" },
  { title: "Contract Law Brief", type: "Case Brief", href: "#" },
  { title: "Policy Reform Proposal", type: "Research Paper", href: "#" },
  { title: "Mock Trial Argument", type: "Oral Advocacy", href: "#" },
];

const WorkSamplesSection = () => (
  <section id="work-samples" className="min-h-screen flex items-center justify-center px-6 py-24">
    <div className="max-w-3xl w-full">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2 text-center">Portfolio</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16">Work Samples</h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-4">
        {samples.map((s, i) => (
          <ScrollReveal key={s.title} delay={0.2 + i * 0.1}>
            <a
              href={s.href}
              className="group flex items-start gap-4 p-5 rounded-lg border border-border bg-background hover:border-primary/40 transition-colors"
            >
              <FileText className="text-primary mt-0.5 shrink-0" size={20} />
              <div className="flex-1">
                <p className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {s.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{s.type}</p>
              </div>
              <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors mt-0.5 shrink-0" size={16} />
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSamplesSection;
