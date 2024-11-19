import React from 'react'
import '../Input/input'

const Date = ({inputBoxName, bottomLabel, onChange}) => {
  return (
    <div>
        <p className='itemBoxName'>{inputBoxName}</p>
        <input className='input' onChange={onChange} name='date' type='date' />
        <p>{bottomLabel}</p>
    </div>
  )
}

export default Date