"use client"
import { createContext, useState, useEffect } from "react"

import fetchCharacters from "@/utils/utils"

export const context = createContext()
const { Provider } = context

const CustomProvider = ({ children }) => {
  const [input, setInput] = useState("")
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters(input)
      .then((data) => setCharacters(data.data.results))
      .catch((error) => console.error(error))
  }, [input])

  console.log(characters)

  return <Provider value={{ input, setInput, characters }}>{children}</Provider>
}

export default CustomProvider
