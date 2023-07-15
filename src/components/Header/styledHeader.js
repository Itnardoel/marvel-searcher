import styled from "styled-components"
import star from "../../../public/star_thin.svg"
import starSolid from "../../../public/star_solid.svg"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;s
`
const StyledInput = styled.input`
  width: 260px;
  border: 1px solid #ffffff;
  display: block;
  padding: 9px 4px 9px 0px;
  text-indent: 40px;
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='grey' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 13px center;

  &:focus {
    background-image: none;
    text-indent: 20px;
  }
`

const StyledStar = styled(star)`
  color: grey;
  width: 26px;
  height: 24px;
`
const StyledStarSolid = styled(starSolid)`
  color: grey;
  width: 26px;
  height: 24px;
`
export { StyledHeader, StyledInput, StyledStar, StyledStarSolid }
