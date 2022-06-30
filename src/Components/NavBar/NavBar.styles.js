import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  a{
    text-decoration: none;
    color: inherit;
  }
  h3{
    font-size: 2rem;
    font-weight: 600;
    color: red;
  }
  div{
    display: flex;
  }
  h4{
    margin-left: 10px;
    padding: 4px 7px;  
    transition:all 0.3s ease-in-out;
    :hover{
      letter-spacing: 2px;
      background-color: lightgray;
  }
  }
`
