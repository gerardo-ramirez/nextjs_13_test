import React from 'react'
import { getLocations } from './services'
import { Card } from '../../components';
import { Routes } from '../../information/models';
import { Navigator } from '../../components';
async function fetchLocations() {
    return await getLocations();

}
const Locations = async () => {
    const Locations = await fetchLocations();
    return (
        <>
            <Navigator pathNames={[Routes.CHARACTERS, Routes.HOME]} />

        {Locations.map(location => <Card key={location.id} data={location} />)}

        </>
    )
}

export default Locations