import React, { Component } from 'react';

import Header from '../header';

import './index.css';
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

import { SwapiServiceProvider } from '../swapi-service-context';

import RandomPlanet from "../random-planet";

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import StarshipDetails from "../sw-component/starship-details";

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
                    <Router>
                        <Header />

                        <RandomPlanet />

                        <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
                        <Route path="/people/:id?" component={PeoplePage} />
                        <Route path="/planets" component={PlanetsPage} />
                        <Route path="/starships" exact component={StarshipsPage} />
                        <Route path="/starships/:id" render={({match, location, history}) => {
                            const id = match.params.id;
                            return <StarshipDetails itemId={id}/>
                        }} />
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
};