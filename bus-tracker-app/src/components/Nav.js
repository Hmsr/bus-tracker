import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

function Nav() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">BusTracker Navbar</Navbar.Brand>
          <Button variant="primary">Empty Button</Button>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default Nav;