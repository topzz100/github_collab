import styled from 'styled-components'

export const Wrapper = styled.div`
   width: 200px;
  height: 250px;
  background-color: lightgrey;
  border: black;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  /* div{
    object-fit: cover;
    background-color: blue;
    width: 100%;
    height: 200px;
    border-radius: 5px;
  }  */
  a{
    color: inherit;
    text-decoration: none;
  }
  h4{
    text-align: center;
    margin-top: 10px;
  }
   @media(max-width: 512px){
    width: 150px;
  height: 200px;
  }
  @media(max-width: 512px){
    width: 100%;
  height: 400px;
  }
`
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-radius: 10px;
   @media(max-width: 512px){
    width: 100%;
    height: 200px;
  }
  @media(max-width: 512px){
    width: 100%;
    height: 350px;
  }
`
