import style from "@/Components/Aboutme/Estilo.module.css"

import Cards from "./Cards/Cards"


export default function About() {
    return (

        <section className={style.aboutme} id={"sobre"}>
            <div className={style.container}>
                <h1 className={style.title}>About me</h1>
                <div className={style.content}>
                    <p className={style.text}>
                        Sou Estudante, cursando o curso
                        de Engenharia Informatica,
                        venho construindo minha
                        trajectoria unindo tecnologia, design e resolução de problemas. <br />
                        Tenho Desenvolvido copetencias em desenvolvimento Web e projectos utilizando <span>HTML,CSS, JAVASCRIP, REACT,NEXTJS ,NODS MYSQL,PRISMA ORM E DOCKER</span> além de conhecimento em figma e
                        criação de interfaces modernas e responsivas. <br />
                    </p>

                    <div className={style.card}>
                        <Cards ano={2} tecnologia={8} projecto={3} />
                    </div>
                </div>
            </div>


        </section>
    )
}