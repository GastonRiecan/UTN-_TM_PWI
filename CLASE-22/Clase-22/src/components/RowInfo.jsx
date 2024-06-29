import React from 'react'

const RowInfo = () => {
  return (
    <div>
       <h1>{props.title}</h1>
       {props.children}
    </div>
  )
}

export default RowInfo
