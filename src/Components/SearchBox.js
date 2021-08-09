import React from 'react';
import { Input, SearchBoxContainer } from './Release.style'

const SearchBox = ({ value, handleChange }) => {
    return <React.Fragment>
        <SearchBoxContainer>
            <div>
                <h2>One stop shop for all music releases!</h2>
            </div>
            <div>
                <Input value={value} onChange={handleChange} placeholder="Search here for Artist.." />
            </div>
        </SearchBoxContainer>


    </React.Fragment>
}


export default SearchBox;