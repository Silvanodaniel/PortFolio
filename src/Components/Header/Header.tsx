"use client"
import Link from "next/link";
import style from"@/Components/Header/Estilo.module.css"
import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

export default function Header(){

    const[menu,setMenu]=useState(false)
    function exibir(){
        setMenu(!menu)
    }
    return(
        <header className={style.header}>
            <div className={style.container}>
                <h2 className={style.logo}>S<span className={style.logoSpan}>D</span></h2>

                <nav className={`${style.links} ${menu ? style.mostrarMenu:""}`}>
                    <Link  href={"/"} >Inicio</Link>
                    <Link  href={"/aboutme#sobre"} id={""}>About-me</Link>
                    <Link  href={"/habilidade#hability"} id="">Stack</Link>
                    
                    <Link className={style.Contacto} href={"/contactos#contact"} id="">Contacto</Link>
                </nav>
                
                <div className={style.menu} onClick={exibir}>
                    {menu? <X className={style.Iclouse} size={35} /> :<Menu size={35} className={ style.iMenu}/> }
                    
                </div>

            </div>
        </header>

    )
}