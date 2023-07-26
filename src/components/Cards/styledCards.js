import styled from "styled-components"
import star from "../../../public/star_thin.svg"
import starSolid from "../../../public/star_solid.svg"
import Image from "next/image"

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 256px);
  grid-template-rows: repeat(1, 380px);
  grid-gap: 28px 32px;
  justify-content: center;
  position: relative;
  top: 50px;

  @media only screen and (min-width: 48em) {
    grid-template-columns: repeat(2, 256px);
    grid-template-rows: repeat(2, 380px);
  }

  @media only screen and (min-width: 80em) {
    grid-template-columns: repeat(4, 256px);
    grid-template-rows: repeat(2, 380px);
  }
`

const StyledCard = styled.div`
  background-color: #00000080;
  width: 256px;
  height: 380px;
`
const StyledStar = styled(star)`
  color: white;
  width: 20px;
  height: 19px;
  position: absolute;
  z-index: 1;
  margin: 13px 0px 0px 218px;
`
const StyledStarSolid = styled(starSolid)`
  color: white;
  width: 20px;
  height: 19px;
  position: absolute;
  z-index: 1;
  margin: 13px 0px 0px 218px;
`
const StyledImage = styled(Image)`
  position: relative;

  &:hover {
    border: solid 1px #00bbfe;
  }
`

const StyledP = styled.p`
  position: relative;
  text-align: left;
  font: normal normal bold 19px/23px SF UI Text;
  letter-spacing: -0.25px;
  color: #ffffff;
  opacity: 1;
  margin-top: -55px;
  padding-left: 13px;
  text-shadow: 0 0 2px #000;
`
export {
  StyledContainer,
  StyledCard,
  StyledStar,
  StyledStarSolid,
  StyledImage,
  StyledP,
}
