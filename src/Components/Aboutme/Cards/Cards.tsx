import style from"@/Components/Aboutme/Cards/Card.module.css"
interface cards {
    ano: number,
    tecnologia: number,
    projecto: number

}

export default function Cards({ano,tecnologia,projecto}:cards) {
    return (
        <section className={style.card}>
            <div className={style.div}>
                {ano} anos de experiencias
            </div>
            <div className={style.div}>
                {tecnologia} + Tecnologias
            </div>
            <div className={style.div}>
                {projecto} + Projectos
            </div>

        </section>
    )
}