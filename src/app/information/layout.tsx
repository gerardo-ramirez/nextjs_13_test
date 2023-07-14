import React from 'react'
import layoutStyled from './information-container.module.css'
import localFont from '@next/font/local'
//usar una font de manera local :
const firacode = localFont({
  src:[
    {
      path:"../FiraCode-Bold.woff2",
      weight:"400",
      style:"normal"
    },
    {
      path: "../FiraCode-Regular.woff2",
      weight: "700",
      style: "normal"
    }
  ]

})
const InformationLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={`${layoutStyled.informationLayout} ${firacode.className}`}>{children}</div>
  )
}

export default InformationLayout