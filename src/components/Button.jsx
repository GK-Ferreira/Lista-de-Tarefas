import React from 'react'
import { useState } from 'react';
import { StyledButton } from '../styles/Button.style';


const Button = ({ onClick }) => {

  return (

    <StyledButton onClick={onClick}>
      adicionar
    </StyledButton>
  )
}

export default Button