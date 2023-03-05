import { StyledModal } from "../styles/Modal.style";
import {  FiX  } from 'react-icons/fi';

const Modal = ({statemodal}) => {
    return (
        <StyledModal>
            <FiX size={26} color="#000" onClick={() => statemodal()} />  
            <h3>Ops!adicione uma tarefa!</h3>
        </StyledModal>
    )
}

export default Modal;