import styled from "styled-components"
import Image from "next/image"

const StyledModal = styled.div`
  position: fixed;
  z-index: 10;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000076;
`
const StyledDiv = styled.div`
  width: 437px;
  height: 448px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: auto;
`
const StyledImage = styled(Image)`
  margin-left: 400px;
  margin-top: 10px;
  position: fixed;
`

const StyledContainer = styled.div`
  display: flex;
`

export { StyledModal, StyledDiv, StyledImage }
