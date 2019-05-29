import React from 'react';

import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';

const swapiSerivce = new SwapiService();

const {getPerson, getPlanet, getStarship,
    getPersonImage, getPlanetImage, getStarshipImage} = swapiSerivce;

const PersonDetails = ({itemId}) => {
    return (
        <ItemDetails
            getData={getPerson}
            itemId={itemId}
            getImageUrl={getPersonImage}>

            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth year" />
            <Record field="eyeColor" label="Eye color" />

        </ItemDetails>
    )
};

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails
            getData={getPlanet}
            itemId={itemId}
            getImageUrl={getPlanetImage}>


            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation period" />
            <Record field="diameter" label="Diameter" />

        </ItemDetails>
    )
};

const StarshipDetails = ({itemId}) => {
    return (
        <ItemDetails
            getData={getStarship}
            itemId={itemId}
            getImageUrl={getStarshipImage}>


            <Record field="model" label="Model" />
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="length" label="Length" />

        </ItemDetails>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}