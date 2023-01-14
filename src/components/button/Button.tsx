import React from 'react'
import "./button.css"

type buttonProp = {
    color: string,
    width: number,
    text: string
}

const Button = (props:buttonProp) => {

    const {color, width, text} = props;  

  return (
    <div>
      <p>{color}</p>
      <p>{width}</p>
      <p>{text}</p>
    </div>
  )
}

export default Button
