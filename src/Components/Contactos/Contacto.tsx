
import style from"@/Components/Contactos/Estilo.module.css"
import { Mail  } from "lucide-react"
import Card from "./card/Card"
import Link from "next/link"

export default function Contactos(){
    return(
         <section className={style.contactos} id={"contact"}>
            <div className={style.container}>
                <h1 className={style.title}>Contactos</h1>
                <p className={style.text}>
                    Estou aberto a conexões, Projectos Networking e oportunidade de aprendizado
                </p>

                <div className={style.boxContacto}>
                    <Link className={style.link} href={""}> <Card icone={<Mail/>} rede={"Emeil"} titulo={"silvanoantoniodaniel@gmail.com"}/> </Link>
                    <Link className={style.link} href={""}> <Card icone={<Mail/>} rede="GuitHub" titulo="Silvano Daniel"/></Link>
                   <Link className={style.link} href={""}><Card icone={<Mail/>} rede="Linkedin" titulo="Silvano Antonio Daniel"/></Link>
                    
                </div>

            </div>
        </section>
    )
}