import React from 'react';
import MoviesGrid from '../shared/moviesGrid';
import Nav from './nav';


function SearchComponent({val,data}) {
    return (
        <div>
            <Nav type="redback"/>
            <MoviesGrid title={`search '${val}'`} data={data}/>
        </div>
    );
}

export default SearchComponent;