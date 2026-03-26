import ScrollReveal from "../ScrollReveal";

const HomeSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-16">
    <div className="max-w-5xl w-full mx-auto grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 md:gap-14 items-center">
      {/* Headshot */}
      <ScrollReveal delay={0}>
        <div className="flex justify-center">
          <div className="w-56 h-56 md:w-[280px] md:h-[280px] rounded-full overflow-hidden border border-primary/20">
            <img
              src="/me.jpeg"
              alt="Cecilia Hadid"
              className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-500"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Bio */}
      <div className="space-y-4 text-center md:text-left">
        <div>
          <ScrollReveal delay={0.15}>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">
              Hey there, I'm
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Cecilia Hadid
            </h1>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.35}>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
            I’m currently a third year Pre-Law student at Purdue University. I am interested in studying how law and psychology intersect with one another to build our legal system. I recently worked as a student Legal Intern at the Brevard County Public Defender’s Office where I worked on hearing and trial preparation with numerous attorneys.
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default HomeSection;