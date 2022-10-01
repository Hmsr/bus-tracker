import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { StyledButton,Logo } from './navComponents';

function Nav() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Logo href="#home">MT</Logo>
          <StyledButton>Log out</StyledButton>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default Nav;