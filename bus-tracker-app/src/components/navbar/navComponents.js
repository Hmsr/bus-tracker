import styled from 'styled-components';
import {Button, Navbar} from 'react-bootstrap';

export const Logo = styled(Navbar.Brand)`
    color:white;
    font-size:3em;
`;
export const StaffContainer = styled.div`
    background-color:white;
    border-radius: 50%;
    width:3em;
    height:3em;
    text-align: center;
    padding-top:5px;
    display:inline-block;
    margin-right:3em;
    &:hover{
        transition:all 0.2s ease-in-out;
        background:#bae0b6;
        font-color:white;
    }
`;
export const Staff = styled.a`
    color: black;
    text-decoration:none;
    font-size: 1.5em;
    font-weight:700;
    
`; 
export const Wrap = styled.div`
    justify-content:flex-end
    aligne-items:center;
    gap: 20px;
`;
export const StyledButton = styled(Button)`
    font-color:white;
	font-size: 1em;
    background-color:black;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid white;
	border-radius: 3px;
    &:hover{
        transition:all 0.2s ease-in-out;
        background:#bae0b6;
 
    }
`;