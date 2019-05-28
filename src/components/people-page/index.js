import React, { Component } from 'react';

import ItemList from "../item-list";
import ItemDetails from "../item-details";

import './index.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItem: null
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    };

    render() {
        const { selectedItem } = this.state;

        const itemList = (
            <ItemList
                getData={this.swapiService.getAllPeople}
                renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
                onItemSelected={this.onItemSelected} >
                {(i) => (
                    `${i.name}, ${i.birthYear})`
                )}
            </ItemList>
        );

        const itemDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={selectedItem}/>
            </ErrorBoundry>
        );

        return (
            <Row left={itemList} right={itemDetails} />
        );
    }
}