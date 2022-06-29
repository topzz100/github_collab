import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
 
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  width:90% ;
  display: flex;
  height: 80%;
  border: 1px solid black;
  padding: 10px;
  
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
    span{
      margin-right: 20px;
    }
  }
`