
import style from"@/Components/Habilidades/Estilo.module.css"
import CardH from "./cardH/CardH"
import { CodeXml } from "lucide-react"
import { Braces } from "lucide-react"


export default function Habilidade(){
    return(
        <section className={style.hability} id="hability">

            <div className={style.container}>
                <div>
                    <h2 className={style.title}>Habilidades</h2>
                </div>
                <div className={style.boxcard}>
                    <CardH icon={ <CodeXml size={70} className={style.icon} />}
                     titulo="Front End" 
                     stak="HTML css Javascrip Rect Next js"/> 

                    <CardH icon={ <Braces size={70} className={style.icon} />}
                     titulo="Back End" 
                     stak="Nodes JS JAVASCRIP/Typescrip Express prisma ORM Mysql PostgreSql"/> 
                </div>
                
            </div>

        </section>
    )
}