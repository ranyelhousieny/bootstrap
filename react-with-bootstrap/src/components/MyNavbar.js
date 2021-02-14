import logo from '../logo.svg';
import {
  Navbar,
  Container,
} from 'react-bootstrap';

function MyNavbar() {
  return (
    <div>
      <Container>
        <Navbar
          bg='dark'
          variant='dark'>
          <Navbar.Brand href='https://rany.tk'>
            <img
              src={logo}
              width='30'
              height='30'
            />
            Brand with Link
          </Navbar.Brand>
        </Navbar>
      </Container>
    </div>
  );
}

export default MyNavbar;
