"use client"
import Image from 'next/image'
import React,{useEffect} from 'react'
import TagManager from 'react-gtm-module';
export type Personaje= {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: any
    location: Location
    image: string
    episode: string[]
    url: string
    created: string
}

async function getData() {
   
    const response = await fetch('https://rickandmortyapi.com/api/character')
   return response.json()
}   

 const Fetch =async() => {
     useEffect(() => {
         const TagManagerArgs = {
             gtmId: "GTM-P9PW26T"
         };

         TagManager.initialize(TagManagerArgs);
     }, [])

 const {results} = await getData()
   
  return (
    <div><h3>Personajes</h3>
         
          {results && results.map((personaje: Personaje) => {
               TagManager.dataLayer({
                  dataLayer: {
                      event: "render",
                      term:""
                  }
              })
              return (
                  <div><Image width={"100"} height={"100"} src={personaje.image} alt='mortyApi' />
                      <p>{personaje.name}</p></div>
              )
          })}

    </div>
  )
}
export default Fetch