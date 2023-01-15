import "./flexibleReusableButton.css"
import React from 'react'

type FlexibleReusableButtonProps = {
    styles: React.CSSProperties,
    children: string | number
}


const FlexibleReusableButton = ({styles, children}: FlexibleReusableButtonProps) => {

  return (
    <div style={styles}>
        {children}
    </div>
  )
}

export default FlexibleReusableButton