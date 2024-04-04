import logo from './logo.svg';
import './App.css';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import { Routes, Route, Link } from 'react-router-dom';

function Nav() {
  return (
    <Navbar className='bp5-dark'>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Blueprint</Navbar.Heading>
        <Navbar.Divider />
        <Button className='bp5-minimal' icon='home'>
          <Link to='/'>Home</Link>
        </Button>
        <Button className='bp5-minimal' icon='document'>
          <Link to='/files/'>Files</Link>
        </Button>
      </Navbar.Group>
    </Navbar>
  );
}

function Index() {
  return <h2>Home</h2>;
}

function Files() {
  return <h2>Files</h2>;
}

function App() {
  return (
    <div className='App'>
      <Nav />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Routes>
          <Route path='/' Component={Index} />
          <Route path='/files/' Component={Files} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
