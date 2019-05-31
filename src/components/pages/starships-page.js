import React, { Component } from 'react';
import {
    StarshipDetails,
    StarshipList
} from "../sw-component";
import Row from "../row";

export default class StarshipPage extends Component {
    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    };

    render () {
        const { selectedItem } = this.state;
        return (
            <Row
                left={<StarshipList onItemSelected={this.onItemSelected} />}
                right={<StarshipDetails itemId={selectedItem}/>} />
        )
    }
}