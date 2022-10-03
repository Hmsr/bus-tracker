import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { StyledButton,Logo,Staff,StaffContainer,Wrap } from './navComponents';

export default function Nav() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Logo href="#home">MT</Logo>
          <Wrap>
            <StaffContainer>
              <Staff>JB</Staff> 
            </StaffContainer>
            <StyledButton>Log out</StyledButton>
          </Wrap>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

 