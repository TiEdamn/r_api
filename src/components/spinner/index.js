import React from 'react';

import './index.css';

const Spinner = () => {
    return (
        <div className="cube-block">
            <div className="caption">
                <div className="cube-loader">
                    <div className="cube loader-1"></div>
                    <div className="cube loader-2"></div>
                    <div className="cube loader-4"></div>
                    <div className="cube loader-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;