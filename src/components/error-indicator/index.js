import React from 'react';

import './index.css';
import icon from './death-star.svg';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="Error icon"/>
            <span className="boom">Boom!</span>
            <span>something has gone terrible wrong</span>
            <span>(but we already sent droid to fix it)</span>
        </div>
    )
}

export default ErrorIndicator;