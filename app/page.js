import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import CodingProfiles from "./components/homepage/coding-profiles";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Projects />
      <Skills />
      <CodingProfiles />
      {/* <Experience />
      <Education /> */}
      <ContactSection />
    </div>
  );
}
