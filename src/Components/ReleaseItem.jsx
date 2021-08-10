import React from 'react'
import { StyledPost, Small, Image } from './Release.style'
import defaultImage from '../Assets/defaultImage.jpeg'
import { useContext } from 'react';
import { Context } from '..';

function Post(props) {
    const {
        artist,
        year,
        title,
        thumb,

    } = props.data;
    const { state, dispatch } = useContext(Context);

    const handlePopup = () => {
        dispatch({
            ...state,
            popUpDetails: {
                isOpen: true,
                ...props.data
            }
        })
    }
    return (
        <StyledPost className="post" onClick={handlePopup}>
            <div>
                {thumb ? <Image src={thumb} alt="No image" /> : <Image src={defaultImage} alt="No image" />}
            </div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <p>{artist}</p>
            {year && <Small>{year}</Small>}
        </StyledPost>
    );
}


export default React.memo(Post);