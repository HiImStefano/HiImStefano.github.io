import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HelloSection } from "../components/HelloSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";


export const Home = () => {
    return(
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle */}
        <ThemeToggle />
        {/*Background Effects */}
        <StarBackground />
        {/*Navbar*/}
        <Navbar />
        {/*Main Content*/}
        <main>
            <HelloSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
        </main>
        {/*Footer*/}


    </div>
    );
};