import Navbar from "@/components/Navbar";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import WorkSamplesSection from "@/components/sections/WorkSamplesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => (
  <div className="bg-background">
    <Navbar />
    <HomeSection />
    <AboutSection />
    <EducationSection />
    <ExperienceSection />
    <WorkSamplesSection />
    <ContactSection />
  </div>
);

export default Index;
