import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import WorkSamplesSection from "@/components/sections/WorkSamplesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => (
  <div className="bg-background">
    <Navbar />
    <AboutSection />
    <EducationSection />
    <ExperienceSection />
    <WorkSamplesSection />
    <ContactSection />
  </div>
);

export default Index;
