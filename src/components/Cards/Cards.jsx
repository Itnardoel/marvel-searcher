"use client"
import { useContext } from "react"
import { context } from "../Context/Context"
import { StyledContainer } from "./styledCards"
import Card from "./Card"
import Modal from "@/components/Modal/Modal"

const Cards = () => {
  const {
    characters,
    showModal,
    setShowModal,
    showFavorites,
    favoriteCharacters,
  } = useContext(context)
  return (
    <StyledContainer>
      {showFavorites
        ? favoriteCharacters.map((character) => (
            <Card key={character.id} character={character} />
          ))
        : characters.map((character) => (
            <Card key={character.id} character={character} />
          ))}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}></Modal>
    </StyledContainer>
  )
}

export default Cards
