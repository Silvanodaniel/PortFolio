import About from "@/Components/Aboutme/About";
import Contactos from "@/Components/Contactos/Contacto";
import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";



export default function contacto(){
    return(
       <section>
            <Header/>
            <Hero/>
            <About/>
            <Contactos/>
            

       </section>
    )
}