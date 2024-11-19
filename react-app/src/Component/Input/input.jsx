import React from 'react'
import './input.css'

const Input = ({inputBoxName, value, name, onChange, placeholder, bottomLabel}) => {
  return (
    <div>
        <p>{inputBoxName}</p>
        <input className='input' name={name} type='text' value={value} onChange={onChange} placeholder={placeholder} />
        <p>{bottomLabel}</p>
    </div>
  )
}

export default Input