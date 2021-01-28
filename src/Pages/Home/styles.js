import styled from 'styled-components';
import Fundo from '../../assets/fundo.jpg'

export const Container = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  height:100%;
  background-image:url(${Fundo});
  background-Position: center;
  background-Size: cover;
  background-Repeat: no-repeat;
  flex:1;
  
`;
export const Wraper = styled.div`
    display:flex;
    height:400px;
    margin-top:90px;
    margin-left:150px;
    background-color:rgba(0,0,0,0.4);
    box-shadow: 0 0 20px #eee;
    margin-right:300px;
`
export const Span = styled.span`
  display:flex;
  flex-direction:column;
  font-size:20px;
  padding:20px;
  flex:1;
  color:var(--color-yellow);
`
export const Input = styled.input`
  display: flex;
  margin:10px;
  width:250px;
  height:40px;
  padding:10px;
  border-radius:10px;
  outline:none;
`
export const Button = styled.button`
  justify-content:center;
  align-items:center;
  display: block;
  outline:none;
  margin-top: 10px;
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: var(--color-white);            
  border-radius: 10px;
  background-image: linear-gradient(to right, #283048 0%, #859398  51%, #283048  100%);
         
  &:hover{
  background-position: right center; /* change the direction of the change here */
  color: var(--color-white);
  text-decoration: none;
  outline:none;
    }
`
export const Span1 = styled.div`
    display:flex;
    padding:40px;
    font-size:15px;
    font-family: 'Coda Caption', sans-serif;
    color:var(--color-orange);
    margin-right:300px;
`

