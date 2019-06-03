import React from 'react';
import {
    StarshipList
} from "../sw-component";

const StarshipsPage = ({ history }) => {
    return (
        <StarshipList onItemSelected={(itemId) => {
            history.push(itemId);
        }} />
    )
};

export default StarshipsPage;