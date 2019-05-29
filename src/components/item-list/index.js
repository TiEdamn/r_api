import React, { Component } from 'react';

import './index.css';
import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";
import withData from "../hoc-helpers";

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props;

    const items = data.map((item) => {
        const {id} = item;
        const label = renderLabel(item);
        return (
            <li
                onClick={() => onItemSelected(id)}
                key={id}
                className="list-group-item">
                {label}
            </li>
        )
    });

    return (
        <ul className="item-list list-group">
            { items }
        </ul>
    )
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);