import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
    return (
        <div className="grid gap-96 font-koulen">
            <Hero />
            <About/>
            <Portfolio/>
        </div>
    );
}
