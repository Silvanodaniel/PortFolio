import About from "@/Components/Aboutme/About";
import Contactos from "@/Components/Contactos/Contacto";
import Habilidade from "@/Components/Habilidades/Habilidade";

import Hero from "@/Components/Hero/Hero";




export default function stak() {
    return (
        <section>
            <Hero />
            <About />
            <Contactos />
            <Habilidade />
        </section>
    )
}