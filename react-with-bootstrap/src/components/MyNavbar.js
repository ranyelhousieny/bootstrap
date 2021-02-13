import logo from '../logo.svg';
import { Navbar } from 'react-bootstrap';

function MyNavbar() {
  return (
    <div>
        
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="https://rany.tk">
          <img
            src={logo}
            width="30"
            height="30"
          />
          Brand with Link
          </Navbar.Brand>
        </Navbar>


    </div>
  );
}

export default MyNavbar;
