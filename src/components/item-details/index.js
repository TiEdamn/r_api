import React, { Component } from 'react';

import './index.css';
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}: </span>
            <span>{item[field]}</span>
        </li>
    )
};

export { Record };

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state ={
        item: null,
        image: null
    };

    updateItem = () => {
        const { itemId, getData, getImageUrl } = this.props;

        if(!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                });
            });
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    render() {
        if(!this.state.item) {
            return <span>Select a item from a list</span>;
        }

        const {item, image} = this.state;
        const {name} = item;

        return (
            <div className="person-detail card">
                <img
                    src={image}
                    alt={name}
                    className="person-image"/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child, idx) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        )
    }
};