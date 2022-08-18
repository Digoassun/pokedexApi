import React from 'react'
import S from './Input.module.css'

const Input = ({type,value,onChange}) => {
  return (
    <input className={S.input} type={type} value={value} onChange={onChange}/>
  )
}

export default Input