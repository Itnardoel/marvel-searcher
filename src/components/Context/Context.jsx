"use client"
import {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react"
import { useSearchParams } from "next/navigation"

import { fetchCharacters, fetchCharacterComicsById } from "@/utils/utils"

export const context = createContext()
const { Provider } = context

const CustomProvider = ({ children }) => {
  const [input, setInput] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [characters, setCharacters] = useState([])
  const [favoriteCharacters, setFavoriteCharacters] = useState([])
  const [comics, setComics] = useState([])
  const [characterId, setCharacterId] = useState("")
  const [characterName, setCharacterName] = useState("")
  const [showFavorites, setShowFavorites] = useState(false)

  const initialRender = useRef(true)

  const searchParams = useSearchParams()
  const character = searchParams.get("character")
  const [queryParam, setQueryParam] = useState(character ? character : "")

  const addFavoriteCharacter = (name) => {
    if (!isInFavorites(name)) {
      const aux = structuredClone(characters) //deep copy
      const found = aux.find((character) => character.name === name)
      setFavoriteCharacters([...favoriteCharacters, found])
    }
  }

  const removeFavoriteCharacter = (name) => {
    setFavoriteCharacters(
      favoriteCharacters.filter((character) => character.name !== name)
    )
  }

  const isInFavorites = (name) => {
    return favoriteCharacters.some(
      (favoriteCharacter) => favoriteCharacter.name === name
    )
  }

  const setLocalStorage = useCallback(() => {
    window.localStorage.setItem(
      "Characters",
      JSON.stringify(favoriteCharacters)
    )
  }, [favoriteCharacters])

  const saveCharacterId = useMemo(() => {
    return characterId
  }, [characterId])

  useEffect(() => {
    if (!input) {
      fetchCharacters(queryParam)
        .then((data) => setCharacters(data.data.results))
        .catch((error) => console.error(error))
    } else {
      fetchCharacters(input)
        .then((data) => setCharacters(data.data.results))
        .catch((error) => console.error(error))
    }
  }, [input, queryParam])

  useEffect(() => {
    if (saveCharacterId) {
      fetchCharacterComicsById(saveCharacterId)
        .then((data) => setComics(data.data.results))
        .catch((error) => console.error(error))
    }
  }, [saveCharacterId])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("Characters"))) {
      const storedData = JSON.parse(localStorage.getItem("Characters"))
      setFavoriteCharacters(storedData)
    }
  }, [])

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }
    setLocalStorage()
  }, [favoriteCharacters, setLocalStorage])

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
        addFavoriteCharacter,
        removeFavoriteCharacter,
        showFavorites,
        setShowFavorites,
        favoriteCharacters,
      }}
    >
      {children}
    </Provider>
  )
}

export default CustomProvider
