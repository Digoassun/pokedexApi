import React from 'react'
import S from './Button.module.css'

const Button = ({onClick}) => {
  return (
    <button onClick={onClick} className={S.button}>Enviar</button>
  )
}

export default Button