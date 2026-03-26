import ScrollReveal from "../ScrollReveal";

const AboutSection = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center px-10 sm:px-12 md:px-16 lg:px-20 py-20 md:py-24"
  >
    <div className="max-w-5xl w-full mx-auto grid grid-cols-1 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-8 md:gap-10 items-center">
      
      {/* Left text */}
      <div className="space-y-5 text-center xl:text-left order-1">
        <div>
          <ScrollReveal>
            <p className="text-sm font-medium text-primary tracking-[0.2em] uppercase mb-3">
              About
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              A little more about me...
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto xl:mx-0">
            I grew up in Ohio and Florida before deciding to move to Indiana for school. I played volleyball, tennis, and swam for years where now I enjoy these activities for fun. Since I learned to walk, riding horses was my favorite activity outside of class and school sports, and pictured here is my horse Dino! I love hiking new trails, whether it’s local or in a new place! I grew up travelling to see my family abroad and visit new countries which has taught me to learn and appreciate different cultures. This summer, I’m looking forward to studying in Spain! To relax, I enjoy a good book, paint, or bake a new recipe.
          </p>
        </ScrollReveal>
      </div>

      {/* Right collage */}
      <div className="w-full flex justify-center xl:justify-end order-2">
        <div className="w-[380px] md:w-[400px] shrink-0 max-w-full">
          <div className="grid grid-cols-5 auto-rows-[70px] md:auto-rows-[76px] gap-4">
            
            <ScrollReveal delay={0.3} className="col-span-3 row-span-2">
              <div className="w-full h-full overflow-hidden rounded-2xl border border-primary/15 shadow-sm">
                <img src="/horse.png" alt="Horse Dino" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="col-span-2 row-span-2">
              <div className="w-full h-full overflow-hidden rounded-2xl border border-primary/15 shadow-sm">
                <img src="/butter.jpeg" alt="Butter" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5} className="col-span-3 row-span-2">
              <div className="w-full h-full overflow-hidden rounded-2xl border border-primary/15 shadow-sm">
                <img src="/family.jpeg" alt="Family" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6} className="col-span-2 row-span-2">
              <div className="w-full h-full overflow-hidden rounded-2xl border border-primary/15 shadow-sm">
                <img src="/travel.jpeg" alt="Travel" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.7} className="col-span-5 row-span-2">
              <div className="w-full h-full overflow-hidden rounded-2xl border border-primary/15 shadow-sm">
                <img src="/" alt="" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;