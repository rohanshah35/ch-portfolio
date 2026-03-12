import { User } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-16">
    <div className="max-w-5xl w-full mx-auto grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 md:gap-14 items-center">
      {/* Headshot placeholder */}
      <div className="flex justify-center">
        <div className="w-56 h-56 md:w-[280px] md:h-[280px] rounded-full overflow-hidden border border-primary/20">
          <img
            src="/me.png"
            alt="Cecilia Hadid with horse"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Bio */}
      <div className="space-y-4 text-center md:text-left">
        <div>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Pre-Law Student</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Cecilia Hadid
          </h1>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
          Hi, nice to see you here! I’m currently a pre-law student interested in the intersection of law, psychology, and society, and I’m passionate about understanding how legal systems shape the way people and communities function. Outside of academics, you’ll usually find me reading, traveling somewhere new, or getting a workout in. And, of course, I love horses!
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
