import React, { Component } from 'react';

import './index.css';

export default class ItemList extends Component {
    render() {
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">test1</li>
                <li className="list-group-item">test2</li>
                <li className="list-group-item">test3</li>
            </ul>
        )
    }
};