import { useContext } from "react"
import { StyledModal, StyledDiv, StyledImage } from "./styledModal"
import { context } from "../Context/Context"
import Comics from "../Comics/Comics"

const Modal = ({ isVisible, onClose }) => {
  const { comics, characterName } = useContext(context)

  if (!isVisible) return null

  const handleClose = (event) => {
    if (event.target.id === "modal") {
      onClose()
    }
  }

  return (
    <StyledModal id="modal" onClick={handleClose}>
      <StyledDiv>
        <StyledImage
          onClick={() => onClose()}
          src="x.svg"
          alt="Close icon"
          width={20}
          height={20}
          priority
        />
        <h2>{`${characterName}`}</h2>
        <div>
          {comics.map((comic) => (
            <Comics key={comic.id} comic={comic} />
          ))}
        </div>
      </StyledDiv>
    </StyledModal>
  )
}

export default Modal
