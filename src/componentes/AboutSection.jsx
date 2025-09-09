import { Code } from "lucide-react"
import { User } from "lucide-react"
import { Briefcase } from "lucide-react"
export const AboutSection = () => {
    return <section id ="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Sobre <span className="text-primary"> Mí</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Desarrollador web con experiencia en Marketing Digital</h3>

        <p className="text-muted-foreground">
            Experiencia como programador full-stack, trabajando en frontend y backend con tecnologías como Java, JavaScript, React y Python. 
            Enfocado en la calidad del código y la usabilidad, aporto soluciones alineadas con los objetivos del proyecto.
        </p>

        <p className="text-muted-foreground">
            Más de 3 años de experiencia en marketing digital y comunicación, gestionando campañas de SEO/SEM, mailing y redes sociales. 
            Perfil creativo y analítico, orientado a mejorar la visibilidad y el engagement de marcas e instituciones.
        </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

<a href="#Contact" className="cosmic-button">Contáctame</a>
{""}

<a href="/public/projects/CV_MARIO_GUTIÉRREZ.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300" 
download={"Mario Gutierrez CV"}> Descarga mi CV </a>
{""}

</div>
    </div>
    <div className="grid-grid-cols-1 gap-6">
        <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
            <Code className="h-6 w-6 text-primary"/>
            </div>
            <div className="text-left">
                <h4 className="font-semibold text-lg">Desarrollador web</h4>
                <p className="text-muted-foreground">
                    Experiencia en programación full-stack, creando soluciones escalables con tecnologías modernas.
                </p>
            </div>
            </div>
        </div>

        <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
            <User className="h-6 w-6 text-primary"/>
            </div>
             <div className="text-left">
                <h4 className="font-semibold text-lg">Diseño usuario</h4>
                <p className="text-muted-foreground">
                    Enfoque en la usabilidad y experiencia del usuario, priorizando interfaces claras y funcionales.
                </p>
            </div>
            </div>
        </div>

        <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
            <Briefcase className="h-6 w-6 text-primary"/>
            </div>
             <div className="text-left">
                <h4 className="font-semibold text-lg">Experiencia</h4>
                <p className="text-muted-foreground">
                    Más de 3 años en marketing digital y comunicación, gestionando campañas y proyectos online.
                </p>
            </div>
            </div>
        </div>

    </div>
        </div>
            </div>
</section>
}