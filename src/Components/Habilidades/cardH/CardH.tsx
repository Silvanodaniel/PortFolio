import style from"@/Components/Habilidades/cardH/Estilo.module.css"
interface card{
    icon:any,
    titulo:string,
    stak:string
}


export default function({icon,titulo,stak}:card){
    return(
        <div className={style.card}>
            <div>{icon}</div>
            <div>{titulo}</div>
            <div>{stak}</div>
        </div>
    )
}