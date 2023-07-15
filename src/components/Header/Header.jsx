"use client"
import Image from "next/image"
import { useState } from "react"

import {
  StyledHeader,
  StyledInput,
  StyledStar,
  StyledStarSolid,
} from "./styledHeader"

const Header = () => {
  const [isFav, setIsFav] = useState(false)
  const [prompt, setPrompt] = useState("")

  const handleClick = () => {
    isFav ? setIsFav(false) : setIsFav(true)
  }

  return (
    <StyledHeader>
      <Image
        src="Marvel_Logo.svg"
        alt="Marvel logo"
        width={80}
        height={57}
        priority
      />
      <StyledInput
        type="search"
        name="search"
        id="search"
        placeholder="Buscar"
        onChange={(event) => setPrompt(event.target.value)}
      />
      {isFav ? (
        <StyledStarSolid onClick={handleClick} />
      ) : (
        <StyledStar onClick={handleClick} />
      )}
    </StyledHeader>
  )
}

export default Header
