import React, { Component } from 'react';

import './index.css';

export default class PersonDetails extends Component {
    render() {
        return (
            <div className="person-detail card">
                <img src="#" alt="" className="person-image"/>
                <div className="card-body">
                    <h4>name</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">gener</span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">gener</span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">gener</span>
                            <span>male</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};