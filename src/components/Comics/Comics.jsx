import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  StyledContainer,
  StyledStar,
  StyledStarSolid,
  StyledImage,
} from "./styledComics"

const IMAGE_SIZE = "portrait_xlarge"

const Comics = ({ comic }) => {
  const [isFav, setIsFav] = useState(false)

  const router = useRouter()

  const handleClick = () => {
    isFav ? setIsFav(false) : setIsFav(true)
  }
  return (
    <StyledContainer>
      <div>
        <StyledImage
          onClick={() => router.push(`/comic/${comic.id}`)}
          src={`${comic.thumbnail.path}/${IMAGE_SIZE}.${comic.thumbnail.extension}`}
          alt={`${comic.name} thumbnail`}
          width={150}
          height={225}
          priority
        />
      </div>
      <div>
        <h3>
          {comic.title}
          {isFav ? (
            <StyledStarSolid onClick={handleClick} />
          ) : (
            <StyledStar onClick={handleClick} />
          )}
        </h3>

        <p>{comic.description}</p>
      </div>
    </StyledContainer>
  )
}

export default Comics
