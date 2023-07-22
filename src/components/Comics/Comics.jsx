import { useState } from "react"
import {
  StyledContainer,
  StyledStar,
  StyledStarSolid,
  StyledImage,
} from "./styledComics"
import Image from "next/image"

const IMAGE_SIZE = "portrait_xlarge"

const Comics = ({ comic }) => {
  const [isFav, setIsFav] = useState(false)

  const handleClick = () => {
    isFav ? setIsFav(false) : setIsFav(true)
  }
  return (
    <StyledContainer>
      <div>
        <StyledImage
          src={`${comic.thumbnail.path}/${IMAGE_SIZE}.${comic.thumbnail.extension}`}
          alt={`${comic.name} thumbnail`}
          width={150}
          height={225}
          priority
        />
      </div>
      <div>
        <h3>
          {`${comic.title}`}{" "}
          {isFav ? (
            <StyledStarSolid onClick={handleClick} />
          ) : (
            <StyledStar onClick={handleClick} />
          )}
        </h3>

        <p>{`${comic.description}`}</p>
      </div>
    </StyledContainer>
  )
}

export default Comics
