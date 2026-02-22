import About from "@/components/About";
import Contact from "@/components/Contact";
import EducationSection from "@/components/Education";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
    return (
        <div className="grid gap-52 font-koulen">
            <Hero />
            <About/>
            <SkillsSection/>
            <ExperienceSection/>
            <Portfolio/>
            <EducationSection/>
            <Contact/>
        </div>
    );
}
