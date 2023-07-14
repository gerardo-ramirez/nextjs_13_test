import React from 'react'
type PropsLayout ={
    children: React.ReactNode
}
const AboutLayout = ({children}:PropsLayout) => {
  return (
    <div style={{color:"red", padding:"15px"}}>
          <div><h4>navbar</h4></div>
        {children}</div>
  )
}

export default AboutLayout