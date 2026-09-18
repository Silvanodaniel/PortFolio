import style from"@/Components/Contactos/card/Estilo.module.css"
interface cards{
    icone:any,
    titulo:string,
    rede:string
    
}

export default function Card({icone,titulo,rede}:cards){
    return(
        <div className={style.cards}>
            <div className={style.content}>{icone} {rede} <br /></div>
            <div className={style.titulo}>{titulo}</div>
        </div>
    )
}