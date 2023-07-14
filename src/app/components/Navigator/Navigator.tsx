import { Route } from '@/app/information/models'
import Link from 'next/link'
import React from 'react'
interface Props{
    pathNames: Route[]
}

const Navigator = ({pathNames}:Props) => {
  return (
    <div>{pathNames.map(pathName => <Link className="bg-slate-500 hover:bg-sky-500" key={pathName.path} href={pathName.path}>{pathName.name}</Link>)}</div>
  )
}

export default Navigator