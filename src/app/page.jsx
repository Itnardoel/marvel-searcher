import Image from "next/image"
import styles from "./page.module.css"

import CustomProvider from "@/components/Context/Context"
import Header from "@/components/Header/Header"
import Cards from "@/components/Cards/Cards"

export default async function Home() {
  return (
    <CustomProvider>
      <Header />
      <Cards />
    </CustomProvider>
  )
}
