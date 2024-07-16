import React from 'react'

const ColorItem = ({color}) => {
  return (
    <div className="color" style={{backgroundColor: color}}>
        <span>{color}</span>
    </div>
  )
}


export {ColorItem}