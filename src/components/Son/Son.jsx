import React from 'react';
import { useContext } from 'react';
import { NameComponent } from '../Father/Farther';

const Son = () => {
    const contaxt = useContext(NameComponent)
    return (
        <div>
            <h3>Son here :{contaxt}</h3>
        </div>
    );
};

export default Son;