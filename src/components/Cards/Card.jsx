import { useState, useContext } from "react"
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
  } = useContext(context)

  const [isFav, setIsFav] = useState(false)

  const toggleModal = (event) => {
    if (characterId !== event.currentTarget.id) {
      setCharacterId(event.currentTarget.id)
      setCharacterName(character.name)
    }
    setShowModal(!showModal)
  }

  const handleClick = () => {
    isFav ? setIsFav(false) : setIsFav(true)
  }

  return (
    <StyledCard>
      {isFav ? (
        <StyledStarSolid onClick={handleClick} />
      ) : (
        <StyledStar onClick={handleClick} />
      )}
      <StyledImage
        id={`${character.id}`}
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
