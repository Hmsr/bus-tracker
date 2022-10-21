import styled from 'styled-components';
/* import { Link } from 'react-router-dom'; */

export const OptionWrap = styled.div`
    padding-top: 8%;
    padding-bottom: 65%;
    `

export const Container = styled.div`
    min-height: 699px;
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    top:0;
    z-index:0;
    overflow:hidden;
    background:#BCCCE0;
    `
export const FormWrap = styled.div`
height:100%;
display:flex;
flex-direction: column;
justify-content:center;
margin-top:50px;`

/* export const Icon = styled(Link)`
margin-left:32px;
margin-top:32px;
text-decoration:none;
font-weight:700;
font-size:32px;` */
export const FormContent = styled.div`

height:600px;
flex-direction:column; 
justify-content:center;`
export const Form = styled.form`
background:#383838;
max-width: 400px;
height:auto;
width:100%;
z-index:1;
display:grid;
margin:-20px auto;
padding:80px 32px;
border-radius:14px;
box-shadow: 10px 10px 42px 0px rgb(0 0 0 / 75%);
`
export const FormH1 = styled.h1`
margin-bottom:40px;
color:white;
font-size:20px;
font-weight:400;
text-align:center;`
export const FormLabel = styled.label`
margin-bottom:8px;
font-size:14px;
color:white;`
export const FormInput = styled.input`
padding:16px 16px;
margin-bottom:32px;
border: 5px solid #bf98a0;
border-radius: 15px;`
export const FormButton = styled.button`

padding:10px 0;
width: 100%;
height:3.5rem;
font-size: 18px;
color: #252d4a;
background-color: #BCCCE0;
border: 5px solid #bf98a0;
border-radius: 15px;
justify-content: flex-start;
align-items: center;

cursor: pointer;`
export const Text = styled.span`
text-align:center;
margin-top:24px;
font-size:14px;
color:white`