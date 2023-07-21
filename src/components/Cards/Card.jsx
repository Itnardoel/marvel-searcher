import { useState } from "react"
import {
  StyledCard,
  StyledStar,
  StyledStarSolid,
  StyledP,
  StyledImage,
} from "./styledCards"

const IMAGE_SIZE = "portrait_uncanny"

const Card = ({ character }) => {
  const [isFav, setIsFav] = useState(false)

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
