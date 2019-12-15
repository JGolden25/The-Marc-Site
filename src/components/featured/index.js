import React from 'react';
import Carrousel from "./Carrousel";
const Featured = () => {
    return (
        <div style={{position:'relative'}}>
            <Carrousel/>
            <div className="artist_name">
                <div className="wrapper">
                   Arianna Grande 
                </div>
            </div>
        </div>
    );
};

export default Featured;