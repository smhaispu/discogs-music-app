import React from 'react';
import { useState, useEffect } from 'react';
import { Input, SearchBoxContainer } from './Release.style'



const SearchBox = ({ value, handleChange }) => {
    //Search box it accepts two props value and a callback
    const [disableInput, setDisableInput] = useState(false);
    useEffect(() => {
        if (!window.navigator.onLine) {
            setDisableInput(true);
        }

    }, [])
    window.addEventListener('offline', function (e) {
        setDisableInput(true);
    });
    window.addEventListener('online', function (e) {
        setDisableInput(false);
    });
    return <React.Fragment>
        <SearchBoxContainer>
            <div>
                <h2>Search for Music you love!</h2>
            </div>
            <div>
                <Input disabled={disableInput} value={value} onChange={handleChange} placeholder="Search here for Artist.." />
            </div>
        </SearchBoxContainer>


    </React.Fragment>
}


export default SearchBox;