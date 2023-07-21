"use client"
import { useContext } from "react"
import { context } from "../Context/Context"
import { StyledContainer } from "./styledCards"
import Card from "./Card"

const Cards = () => {
  const { characters } = useContext(context)
  return (
    <StyledContainer>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </StyledContainer>
  )
}

export default Cards
