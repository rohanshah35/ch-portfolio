import { User } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="min-h-screen flex items-center px-6 pt-16">
    <div className="max-w-6xl w-full mx-auto grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-12 md:gap-16 items-center">
      {/* Headshot placeholder */}
      <div className="flex justify-center md:justify-start md:pl-8">
        <div className="w-72 h-72 md:w-[340px] md:h-[340px] rounded-full bg-secondary flex items-center justify-center border border-primary/20">
          <User className="text-muted-foreground" size={64} strokeWidth={1} />
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-4 text-center md:text-left">
        <div>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Law Student</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Your Name
          </h1>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-xl">
          Passionate law student with a keen interest in corporate law, mergers &amp; acquisitions, and legal research. Committed to excellence in advocacy and dedicated to making a meaningful impact through the practice of law. Replace this text with your own biography and professional summary.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
