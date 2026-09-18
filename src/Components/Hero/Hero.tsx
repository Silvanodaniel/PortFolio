import style from "@/Components/Hero/Estilo.module.css"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
export default function Hero() {
    return (
        <section className={style.Hero}>
            <div className={style.container}>
                <Image className={style.imgHero} src={"/img/foto.png"}
                    alt="foto de um home com um terno social preto e branco"
                    width={300} height={300} />

                <div className={style.box}>
                    <h1 className={style.frase}>Olá Sou o Silvano Antonio Daniel
                        <span className={style.destaque}> Desenvolvedor Web</span> Junior
                    </h1>
                    <button className={style.button}> <Link className={style.botao}
                        href={"/aboutme#sobre"}>Saber mais </Link> <ArrowRight />
                    </button>
                </div>

            </div>



        </section>
    )
}