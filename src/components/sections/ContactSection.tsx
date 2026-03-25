import { Mail, Linkedin, MapPin } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const ContactSection = () => (
  <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-secondary/30 relative">
    <div className="max-w-md w-full text-center">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Connect</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="text-muted-foreground mb-12 leading-relaxed">
          Feel free to reach out via email or LinkedIn!
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="space-y-4">
          <a
            href="mailto:chadid@purdue.edu"
            className="flex items-center justify-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <Mail size={18} />
            <span className="text-sm font-medium">chadid@purdue.edu</span>
          </a>
          <a
            href="https://www.linkedin.com/in/cecilia-hadid/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </ScrollReveal>
    </div>

    <div className="absolute bottom-6 left-0 right-0 text-center">
      <p className="text-xs text-muted-foreground">© 2026 Cecilia Hadid. All rights reserved.</p>
    </div>
  </section>
);

export default ContactSection;
