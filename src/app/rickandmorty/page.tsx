import React from 'react'
import Image from 'next/image'
const Rickandmorty = async() => {

    async function getDataRickandmorty() {

        const response = await fetch('https://rickandmortyapi.com/api/character/259')
        return response.json()
       
    }  
    const  data  = await getDataRickandmorty()
 console.log(data)
  return (
    <div><h3>rickandmorty
        </h3>

          <div><Image width={"100"} height={"100"} src={data.image} alt='mortyApi' />
              <p>{data.name}</p></div>
    </div>
  )
}

export default Rickandmorty