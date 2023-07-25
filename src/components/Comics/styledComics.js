import styled from "styled-components"
import star from "../../../public/star_thin.svg"
import starSolid from "../../../public/star_solid.svg"
import Image from "next/image"

const StyledContainer = styled.div`
  display: flex;
`

const StyledInfo = styled.div`
  height: 229px;
  margin-right: 1.5rem;
  overflow: hidden;
`

const StyledH4 = styled.h4`
  margin-left: 10px;
`

const StyledStar = styled(star)`
  color: grey;
  width: 20px;
  height: 19px;
  padding-left: 5px;
`

const StyledStarSolid = styled(starSolid)`
  color: grey;
  width: 20px;
  height: 19px;
  padding-left: 5px;
`

const StyledImage = styled(Image)`
  margin: 10px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`

export {
  StyledContainer,
  StyledStar,
  StyledStarSolid,
  StyledImage,
  StyledInfo,
  StyledH4,
}
