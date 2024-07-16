import React from 'react'
import { ColorItem } from '../ColorItem/ColorItem'



const ColorItemList = ({colors}) => {
  return (
    <div className="colors">
        {colors.map((color, index )=> <ColorItem color={color} key={color + index}/>)}
    </div>
  )
}

export default ColorItemList