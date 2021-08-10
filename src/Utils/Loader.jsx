import { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '..'

const StyledLoader = styled.div`
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    place-content: center;
    background: rgba(255, 255, 255, 0.5);
`

const Spinner = styled.div`
 position: relative;
    height: 100px;
    width: 100px;
    div {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 10px solid transparent;
    border-top-color: #ce5252;
    border-radius: 50%;
    animation: spinnerOne 1.2s linear infinite;
    box-sizing: border-box;
}
div:nth-child(2) {
    border: 10px solid transparent;
    border-bottom-color: #ce5252;
    animation: spinnerTwo 1.2s linear infinite;
}

@keyframes spinnerOne {
            0% {
                transform: rotate(0deg);
                border-width: 1px
            }

            50% {
                transform: rotate(180deg);
                border-width: 10px
            }

            100% {
                transform: rotate(360deg);
                border-width: 1px
            }
        }

        @keyframes spinnerTwo {
            0% {
                transform: rotate(0deg);
                border-width: 10px
            }

            50% {
                transform: rotate(180deg);
                border-width: 1px
            }

            100% {
                transform: rotate(360deg);
                border-width: 10px
            }
        }
`



const Loader = () => {
    const { state } = useContext(Context);
    return (
        state.isLoading ? <StyledLoader >
            <Spinner className="spinner">
                <div></div>
                <div></div>
            </Spinner>

        </StyledLoader> : null
    )
}


export default Loader;