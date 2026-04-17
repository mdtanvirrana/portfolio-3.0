import About from "@/components/About";
import Contact from "@/components/Contact";
import EducationSection from "@/components/Education";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import HighlightsSection from "@/components/HighlightsSection";
import Portfolio from "@/components/Portfolio";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
    return (
        <div className="grid gap-36 md:gap-44 font-koulen pb-24">
            <Hero />
            <About/>
            <SkillsSection/>
            <ExperienceSection/>
            <Portfolio/>
            <HighlightsSection/>
            <EducationSection/>
            <Contact/>
        </div>
    );
}
