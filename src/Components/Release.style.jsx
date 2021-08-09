import styled from 'styled-components'

export const StyledPost = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    margin: 20px;
    padding: 15px 10px;
    border-radius: 20px;
    background-color: aliceblue;
    &:hover {
    box-shadow: 1px 0px 5px rgb(0 0 0 / 30%);
    cursor:pointer;
}
  `
export const Small = styled.div`
  
    border-radius: 7px;
    padding: 5px 12px;
    color: #fff;
    background:rgb(34 183 24 / 70%);
  `

export const Image = styled.img`
  height:150px;
  width:150px;
  `

export const Input = styled.input`
  border:none;
  padding:10px;
  font-size:16px;
  outline:none;
  box-shadow:0 0 3px #333;
  border-radius:5px;
  width:200px;
  `

export const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  
  `