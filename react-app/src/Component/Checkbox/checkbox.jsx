import React from 'react'
import './checkbox.css'

const Checkbox = ({name, placeholder, onChange, label}) => {
  return (
    <div>
        <input type="checkbox" name={name} onChange={onChange} />
        <h3>{label}</h3>
    </div>
  )
}

export default Checkbox