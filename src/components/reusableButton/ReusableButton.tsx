import "./reusableButton.css"
import React from 'react'

type ReusableButtonProps = {
    color: string,
    width: string,
    height?: string,
    children: string | number

}

const ReusableButton = ({color, width, height, children} : ReusableButtonProps) => {
  return (
    <div style={{color: color, width: width, height: height}}>  {/* inline styling, passing in the props */}
      {children}
    </div>
  )
}

export default ReusableButton
