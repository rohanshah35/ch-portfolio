import { User } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-16">
    <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      {/* Headshot placeholder */}
      <div className="flex justify-center md:justify-end">
        <div className="w-64 h-80 md:w-72 md:h-96 rounded-lg bg-secondary flex items-center justify-center border border-border">
          <User className="text-muted-foreground" size={64} strokeWidth={1} />
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-6 text-center md:text-left">
        <div>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Law Student</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Your Name
          </h1>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-md">
          A dedicated law student passionate about constitutional law and civil rights advocacy. 
          Currently pursuing a Juris Doctor with a focus on public interest law and policy reform. 
          Committed to using the law as a tool for meaningful social change.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#work-samples"
            className="inline-flex items-center px-6 py-2.5 rounded-md border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
          >
            View Work
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
