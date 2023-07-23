"use client"
import { createContext, useState, useEffect } from "react"

import { fetchCharacters, fetchCharacterComicsById } from "@/utils/utils"

export const context = createContext()
const { Provider } = context

const CustomProvider = ({ children }) => {
  const [input, setInput] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [characters, setCharacters] = useState([])
  const [comics, setComics] = useState([])
  const [characterId, setCharacterId] = useState("")
  const [characterName, setCharacterName] = useState("")

  useEffect(() => {
    fetchCharacters(input)
      .then((data) => setCharacters(data.data.results))
      .catch((error) => console.error(error))
  }, [input])

  useEffect(() => {
    if (characterId !== "") {
      fetchCharacterComicsById(characterId)
        .then((data) => setComics(data.data.results))
        .catch((error) => console.error(error))
    }
  }, [characterId])

  console.log(characters)
  console.log(comics)
  console.log(characterId)

  return (
    <Provider
      value={{
        input,
        setInput,
        characters,
        showModal,
        setShowModal,
        characterId,
        setCharacterId,
        comics,
        characterName,
        setCharacterName,
      }}
    >
      {children}
    </Provider>
  )
}

export default CustomProvider
