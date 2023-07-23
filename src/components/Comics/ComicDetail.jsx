"use client"
import { StyledContainer, StyledInfo } from "./styleComicDetail"
import Image from "next/image"

const ComicDetail = ({ comic, published, writer, penciller, coverArtist }) => {
  return (
    <StyledContainer>
      <Image
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={`${comic.title} cover`}
        width={545}
        height={838}
        priority
      />
      <StyledInfo>
        <h1>{comic.title}</h1>
        <h3>
          {`Published: ${published.toString().slice(0, 15)}`}
          <br />
          {`Writer: ${writer.name || ""}`}
          <br />
          {`Penciler: ${penciller.name || ""}`}
          <br />
          {`Cover Artist: ${coverArtist.name || ""}`}
        </h3>
        <p>{comic.description}</p>
      </StyledInfo>
    </StyledContainer>
  )
}

export default ComicDetail
