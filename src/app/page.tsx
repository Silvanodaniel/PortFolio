"use client"

import Hero from "@/Components/Hero/Hero"
import { useEffect, useState } from "react"
import Loader from "@/Components/Loader/Loader"



export default function Home() {

  const [loader, setloader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloader(false)
    }, 1000)
  }, [])
  return (
    <main>
          {loader ? <Loader /> : <Hero />}
         
    </main>
  )
}