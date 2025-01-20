import React, { useContext } from 'react';
import { NameComponent } from '../Father/Farther';

const Sister = () => {
    const brother = useContext(NameComponent)
    return (
        <div>
            <h1>name of sister brother :{brother}</h1>
        </div>
    );
};

export default Sister;