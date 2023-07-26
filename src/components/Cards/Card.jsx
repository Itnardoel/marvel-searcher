import { useState, useContext, useMemo } from "react"
import { context } from "../Context/Context"

import {
  StyledCard,
  StyledStar,
  StyledStarSolid,
  StyledP,
  StyledImage,
} from "./styledCards"

const IMAGE_SIZE = "portrait_uncanny"

const Card = ({ character }) => {
  const {
    showModal,
    setShowModal,
    characterId,
    setCharacterId,
    setCharacterName,
    addFavoriteCharacter,
    removeFavoriteCharacter,
    favoriteCharacters,
  } = useContext(context)

  const isInFavoriteCharacters = () => {
    return favoriteCharacters.find(
      (favoriteCharacter) => favoriteCharacter.name === character.name
    )
  }

  const [isFav, setIsFav] = useState(isInFavoriteCharacters() ? true : false)

  const toggleModal = (event) => {
    if (characterId !== event.currentTarget.id) {
      setCharacterId(event.currentTarget.id)
      setCharacterName(character.name)
    }
    setShowModal(!showModal)
  }

  const handleClick = (event) => {
    if (isFav) {
      setIsFav(false)
      removeFavoriteCharacter(event.currentTarget.id)
    } else {
      setIsFav(true)
      addFavoriteCharacter(event.currentTarget.id)
    }
  }

  return (
    <StyledCard>
      {isInFavoriteCharacters() ? (
        <StyledStarSolid onClick={handleClick} id={character.name} />
      ) : (
        <StyledStar onClick={handleClick} id={character.name} />
      )}
      <StyledImage
        id={character.id}
        onClick={toggleModal}
        src={`${character.thumbnail.path}/${IMAGE_SIZE}.${character.thumbnail.extension}`}
        alt={`${character.name} thumbnail`}
        width={256}
        height={380}
        priority
      />
      <StyledP>{character.name}</StyledP>
    </StyledCard>
  )
}

export default Card
