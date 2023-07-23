import styled from "styled-components"
import star from "../../../public/star_thin.svg"
import starSolid from "../../../public/star_solid.svg"
import Image from "next/image"

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledStar = styled(star)`
  color: grey;
  width: 20px;
  height: 19px;
`
const StyledStarSolid = styled(starSolid)`
  color: grey;
  width: 20px;
  height: 19px;
`

const StyledImage = styled(Image)`
  margin: 10px;
  border-radius: 5px;
`

export { StyledContainer, StyledStar, StyledStarSolid, StyledImage }
