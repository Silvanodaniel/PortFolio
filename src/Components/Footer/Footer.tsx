import style from "@/Components/Footer/Estilo.module.css"

export default function Footer() {
    return (
        <section className={style.footer}>
            <div className={style.container}>
                <p className={style.text}>&copy; 2026 Silvano Daniel, todos os <span className={style.span}>direictos resolvidos </span> </p>
            </div>
        </section>
    )
}