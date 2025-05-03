import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div style={{display:'flex',
        gap:"7px"

    }}>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Fun"/>
      <Button name="Movie"/>
      <Button name="Games"/>
      <Button name="Posted Recently"/>
      
    </div>
  )
}

export default ButtonList
