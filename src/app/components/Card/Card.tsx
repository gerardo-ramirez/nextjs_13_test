import { Character } from '@/app/characters/models'
import {Location} from '@/app/locations/models'//esta importacion afecta el lazyloading
import React from 'react'
import "./Card.css"
import Image from 'next/image'
//manera copada pero incorrecta: 
/*
type CardData = Partial<Character & Location>

*/
//manera correcta:
interface CardData {
    name: string;
    type?:string;
    created:string;
    image?:string; 
}
interface Props{
    data: CardData
}
export const Card = ({data}:Props) => {
    let formatedType = data.type ;
    formatedType ||= "no type"

  return (
    <div className='Card'>
        <p>Nme:{data.name}</p>
          <p>Type: {formatedType }</p>
          <p>Created: {data.created}</p>
          {data.image && (
            <Image src={data.image} width={"100"} height={"100"} alt={data.name}/>
          )}
          

    </div>
  )
}
