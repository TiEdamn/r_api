import React, { Component } from 'react';

import Header from '../header';

import './index.css';
import ErrorBoundry from "../error-boundry";
import ItemDetails, {Record} from "../item-details";
import Row from "../row";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        const { getPerson, getStarship, getPersonImage, getStarshipImage, getAllPeople, getAllPlanets } = this.swapiService;

        const personDetails = (
            <ItemDetails
                getData={getPerson}
                itemId={11}
                getImageUrl={getPersonImage}>

                <Record field="gender" label="Gender" />
                <Record field="birthYear" label="Birth year" />
                <Record field="eyeColor" label="Eye color" />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                getData={getStarship}
                itemId={5}
                getImageUrl={getStarshipImage}>


                <Record field="model" label="Model" />
                <Record field="manufacturer" label="Manufacturer" />
                <Record field="length" label="Length" />

            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <Header />
                {/*<RandomPlanet />
                <div className="mb-4">
                    <ErrorButton/>
                </div>

                <PeoplePage />*/}
                {/*<Row left={personDetails} right={starshipDetails} />*/}

                <ItemList
                    getData={getAllPeople}
                    onItemSelected={() => {}} >
                    {({name}) => <span>{name}</span>}
                </ItemList>

                <ItemList
                    getData={getAllPlanets}
                    onItemSelected={() => {}} >
                    {({name}) => <span>{name}</span>}
                </ItemList>
            </ErrorBoundry>
        )
    }
};