import logo from './logo.svg';
import './App.css';
import {
  Button,
  Card,
  Navbar,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyCard from './components/MyCard';
import MyContainer from './components/MyContainer';

function App() {
  return (
    <div>
      <MyCard />
    </div>
  );
}

export default App;
