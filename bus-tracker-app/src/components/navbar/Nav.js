import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
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
            <Link to="/login"><StyledButton>Log out</StyledButton></Link>
          </Wrap>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

 