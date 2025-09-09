import { ThemeToggle } from "../../componentes/ThemeToggle";
import {StarBackground} from "@/componentes/StarBackground"
import {Navbar} from "@/componentes/Navbar"
import { HomeSection } from "../../componentes/HomeSection"
import { AboutSection } from "../../componentes/AboutSection";
import { SkillSection } from "../../componentes/SkillsSection";
import { ProjectSection } from "../../componentes/ProjectSection";
import { ContactSection } from "../../componentes/ContactSection";
import { Footer } from "../../componentes/Footer";

export default function Home() {
  return (
   <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <ThemeToggle />

    <StarBackground />
    
    <Navbar />

    <main>

    <HomeSection />
    <AboutSection />
    <SkillSection />
    <ProjectSection />
    <ContactSection />
    </main>
<Footer />
   </div>
  )
}
