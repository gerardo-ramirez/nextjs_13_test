import { Location } from "../models"

export const getLocations = (id?:string): Promise<Location[]>=>{
    const url=`https://rickandmortyapi.com/api/location`
    return fetch(url)
    .then(response=> response.json())
    .then(data=> data.results)
}