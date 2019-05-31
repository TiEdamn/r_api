import React, { Component } from 'react';

import Header from '../header';

import './index.css';
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

import { SwapiServiceProvider } from '../swapi-service-context';

import RandomPlanet from "../random-planet";

import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

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

                    <RandomPlanet />

                    <PeoplePage/>
                    <PlanetPage/>
                    <StarshipPage/>

                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
};