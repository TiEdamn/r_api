import React, { Component } from 'react';

import Header from '../header';

import './index.css';
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

import { SwapiServiceProvider } from '../swapi-service-context';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from "../sw-component";

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Header />
                    {/*<RandomPlanet />
                <div className="mb-4">
                    <ErrorButton/>
                </div>

                <PeoplePage />*/}
                    {/*<Row left={personDetails} right={starshipDetails} />*/}

                    {/*<ItemList
                    getData={getAllPeople}
                    onItemSelected={() => {}} >
                    {({name}) => <span>{name}</span>}
                </ItemList>

                <ItemList
                    getData={getAllPlanets}
                    onItemSelected={() => {}} >
                    {({name}) => <span>{name}</span>}
                </ItemList>*/}
                    <PersonDetails itemId={11}/>
                    <PersonList />

                    <PlanetDetails itemId={5}/>
                    <PlanetList />

                    <StarshipDetails itemId={9}/>
                    <StarshipList />
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
};