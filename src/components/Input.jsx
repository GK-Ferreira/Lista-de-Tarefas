import React from 'react'
import { StyledContainerInput } from '../styles/ContainerInput.style'
import { StyledInput } from '../styles/Input.style'

const Input = ({ onchange, value }) => {
  return (
    <StyledContainerInput>
      <StyledInput type="text"
        placeholder='adicione uma tarefa'
        onChange={onchange}
        value={value}
      >
      </StyledInput>
    </StyledContainerInput>
  )
}

export default Input;