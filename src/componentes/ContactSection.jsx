import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import {cn} from "@/lib/utils"

export const ContactSection = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        setTimeout(() =>{

        }, 1500)
    }
return <section id="Contact" className="py-24 px-4 postion-realtive bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Contacta 
        <span className="text-primary"> Conmigo </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Si deseas colaborar o trabajar conmigo, no dudes en ponerte en contacto.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
                <div className="space-y-6 justify-center">
                    <div className="flex items-starts space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href ="mailto:mariogg98@hotmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                mariogg98@hotmail.com
                            </a>
                        </div>
                    </div>
                     <div className="flex items-starts space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">Teléfono</h4>
                            <a href ="tel:+34 625825400" className="text-muted-foreground hover:text-primary transition-colors">
                                +34 625825400
                            </a>
                        </div>
                    </div>
                     <div className="flex items-starts space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">Ubicación</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                Madrid, Getafe, España
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-8">
                    <h4 className="font-medium mb-4">Conecta conmigo</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/mario-guti%C3%A9rrez-galeote-483816175/" 
                        target="_blank">
                            <Linkedin />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-6">Envia un mensaje</h3>
                <form className="space-y-6">
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium mb-2"> Nombre </label>
                    <input type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Mario Gutiérrez..."
                    />
                    </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2"> Email </label>
                    <input type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="mariogg98@hotmail.com..."
                    />
                    </div>
                <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium mb-2"> Mensaje </label>
                    <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    className="w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Me pongo en contacto contigo..."
                    />
                    </div>
                    <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2"
                    
                    )}
                    > 
                    Envía el mensaje
                    <Send size={16}/>
                    </button>
                </form>
                
            </div>
        </div>
        </div>
</section>
}