import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`
export const Box = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
 
  align-items: center;
  justify-content: center;
  position: relative;
`
export const Content = styled.div`
  width:90% ;
  display: flex;
  height: 85%;
  border: 1px solid black;
  padding: 10px;
    @media(max-width: 680px){
    flex-direction: column;
    min-height: fit-content;
    align-items: center;
    justify-content: center;
    width: 95%;
    margin: 50px 0;
  }
  
`
export const ImageBox = styled.div`
 flex: 5;
 width: 100%;
 height: 100%;
 background-color: red;
`
export const Image = styled.img`
  height: 100%;
 width: 100%;
 object-fit: top;
`
export const Details = styled.div`
  flex: 7;
  width: 100%;
  margin-left: 15px;
  h4{
    font-size: 1.3rem;
    padding: 7px;
    border: 1px solid whitesmoke;
    margin-bottom: 10px;
    font-weight: 500;
    span{
      margin-right: 20px;
    }
  }
  .contributors{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
    transition:all 0.3s ease-in-out ;
    :hover{
      background-color: lightgray;
      border-radius: 3px;
    }
  }
   @media(max-width: 680px){
    margin-left: 0;
    margin-top: 10px;
  }
`
export const ShowContrib = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
   transition: all 0.3s ease-in-out;
  ::before{
    width: 100%;
    height: 100%;
    background-color: black;
    content: '';
    position: absolute;
    opacity: 0.8;
  }
`
export const Container = styled.div`
    width: 90%;
  height: 90%;
  background-color: gray;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
  padding-top: 30px;
  position: relative;

  .fa-xmark{
    position: absolute;
    top: 10px;
    right: 10px;
  }
`
export const ConWrapper = styled.div`
   width: 150px;
  height: 200px;
  background-color: lightgrey;
  border: black;
  border-radius: 5px;
  margin: 10px;
  transition: all 0.3s ease-in-out;
  :hover{
    transform: scale(1.05);
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  /* div{
    object-fit: cover;
    background-color: blue;
    width: 100%;
    height: 200px;
    border-radius: 5px;
  }  */
  h4{
    text-align: center;
    margin-top: 10px;
  }
   @media(max-width: 450px){
    width: 95%;
    height: 250px;
  }
`
export const ConImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 150px;
  border-radius: 10px;
   @media(max-width: 450px){
    height: 200px;
  }
`