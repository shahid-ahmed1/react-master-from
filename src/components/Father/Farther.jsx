import React, { createContext } from 'react';
import Son from '../Son/Son';
import Sister from '../Sister/Sister';
export const NameComponent=createContext('shahid');
const Farther = () => {
    return (
        <div>
            <NameComponent.Provider value='shahid'>
                <Son></Son>
                <Sister></Sister>
            </NameComponent.Provider>
        </div>
    );
};

export default Farther;