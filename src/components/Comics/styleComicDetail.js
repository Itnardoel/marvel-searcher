import styled from "styled-components"
import Image from "next/image"

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #f7f8fa 0% 0% no-repeat padding-box;
  gap: 32px;
  margin-top: 2rem;
  opacity: 1;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 48em) {
    flex-direction: column;
  }

  @media only screen and (min-width: 80em) {
    flex-direction: row;
  }
`

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: auto;
  text-align: left;
  color: #3e3e3e;
  opacity: 1;

  @media only screen and (min-width: 48em) {
    width: 530px;
    height: 764px;
  }

  @media only screen and (min-width: 80em) {
    width: 530px;
    height: 764px;
  }
`

const StyledImage = styled(Image)`
  width: 70vw;
  height: auto;

  @media only screen and (min-width: 48em) {
    width: 545px;
    height: 838px;
  }

  @media only screen and (min-width: 80em) {
    width: 545px;
    height: 838px;
  }
`

export { StyledContainer, StyledInfo, StyledImage }
