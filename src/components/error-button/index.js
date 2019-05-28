import React, { Component } from 'react';

import './index.css';

export default class ErrorButton extends Component {
    state = {
        renderError: false
    };

    render() {
        if(this.state.renderError) {
            this.foo.bar = 0;
        }

        return (
            <button
                onClick={() => this.setState({renderError: true})}
                className="error-button btn btn-danger btn-lg">
                Throw Error
            </button>
        )
    }
}