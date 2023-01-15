import "./reusableButton.css"
import React from 'react'

type ReusableButtonProps = {
    backgroundColor: string,
    color: string,
    padding: string,
    borderRadius?: string,
    children: string | number
}

const ReusableButton = ({backgroundColor, color, padding, borderRadius, children} : ReusableButtonProps) => {
  return (
    <span style={{backgroundColor: backgroundColor, color: color, padding: padding, borderRadius: borderRadius, cursor: "pointer"}}>  {/* inline styling, passing in the props */}
      {children}
    </span>
  )
}

export default ReusableButton
