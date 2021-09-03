import React from 'react';
import Search from './Search';

export default () => {
    return (
        <div style={{ display: 'flex', padding: "1em 2em", justifyContent: 'flex-end', alignItems: 'center'}}>
            <div style={{ fontSize: "3em"}}>React</div>
            <div style={{ padding: "0 2em", color: "gray"}}>elect location</div>
            <Search />
            <span style={{ alignSelf: 'flex-end'}}>
                <div>Cart</div>
                <div>Profile</div>
            </span>
        </div>
    )
};