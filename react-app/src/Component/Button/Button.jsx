import React from 'react'
import './button.css'

const Button = ({onClick}) => {
  return (
    <button onClick={onClick}>Button</button>
  )
}

export default Button