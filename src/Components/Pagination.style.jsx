import styled from 'styled-components'

export const DataContainer = styled.div`
display:grid;
grid-gap:1rem;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
`


export const StyledPagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
`

export const Button = styled.div`
    background: #fff;
    border: none;
    padding: 10px;
    color: #5696d3;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    margin: 0 10px;
    cursor: pointer;
    &.disabled {
        pointer-events: none;
        cursor:not-allowed;
        color: #999;
    }
`
export const PaginationItem = styled.div`
    background: #fff;
    border: 2px solid #666;
    padding: 10px 15px;
    border-radius: 50%;
    height: 10px;
    position: relative;
    margin: 0 5px;
    cursor: pointer;
    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &.active {
    border: 1px solid #888;
    color: #888;
    pointer-events: none;
}
`
