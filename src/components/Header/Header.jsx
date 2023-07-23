"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useContext } from "react"

import {
  StyledHeader,
  StyledInput,
  StyledStar,
  StyledStarSolid,
} from "./styledHeader"

import { context } from "../Context/Context"

const Header = () => {
  const { setInput } = useContext(context)

  const [showFavorites, setShowFavorites] = useState(false)

  const handleClick = () => {
    showFavorites ? setShowFavorites(false) : setShowFavorites(true)
  }

  return (
    <StyledHeader>
      <Link href="/">
        <Image
          src="Marvel_Logo.svg"
          alt="Marvel logo"
          width={80}
          height={57}
          priority
        />
      </Link>
      <StyledInput
        type="search"
        name="search"
        id="search"
        placeholder="Buscar"
        onChange={(event) => setInput(event.target.value)}
      />
      {showFavorites ? (
        <StyledStarSolid onClick={handleClick} />
      ) : (
        <StyledStar onClick={handleClick} />
      )}
    </StyledHeader>
  )
}

export default Header
