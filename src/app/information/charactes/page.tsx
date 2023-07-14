import React from 'react'
import { getCharacters } from './services'
import { Card } from '../../components';
import { Routes } from '../../information/models';
import { Navigator } from '../../components';
async function fetchCharacters(){
    return  await getCharacters();
  
}
const Characters = async () => {
    const characters= await  fetchCharacters();
  return (

    <>
      <Navigator pathNames={[ Routes.LOCATIONS, Routes.HOME]} />

    {characters.map(character=><Card key={character.id} data={character}/>)}
        
    </>
  )
}

export default Characters