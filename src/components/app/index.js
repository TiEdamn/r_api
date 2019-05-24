import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonalDetails from '../person-details';

import './index.css';

export default class App extends Component {
    state = {
        selectedPerson: null
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        const { selectedPerson } = this.state;

        return (
            <div>
                <Header />
                <RandomPlanet />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonalDetails personId={selectedPerson} />
                    </div>
                </div>
            </div>
        )
    }
};