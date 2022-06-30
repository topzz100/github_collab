import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 20px;
`
export const Top = styled.div`
border-bottom: 1px solid black;
display: flex;
justify-content: flex-end;

`
export const Sort = styled.div`
margin-top: 10px;
display: flex;
margin-bottom: 10px;
h4{
  margin-right: 10px;
  font-size: 1.3rem;
}
select{
  padding: 5px;
  border: 1px solid black;
  outline: none;
}
`
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a{
    text-decoration: none;
    color: inherit;
  }
`