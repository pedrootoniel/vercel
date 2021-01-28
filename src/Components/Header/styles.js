import styled from 'styled-components';

export const Div = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100px;
  background-color:var(--color-button1);
`
export const Header = styled.div`
  display:flex;
  margin-right:1200px;
  padding:15px;

`
export const Paragrafo = styled.p`
display:flex;
justify-content:center;
align-items:center;

  color:var(--color-white);
  &:hover{
    width:200px;
    height:50px;
    border-radius:30px;
    font-size:20px;
    background-color:var(--color-button);
  }
`
export const MenuItem = styled.ul`
  color:red;

`


