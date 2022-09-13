import Nav from './components/Navbar'
import './App.css';
import Button from 'react-bootstrap/Button'
import fry from './fry.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Nav/> */}
        
        <img src= {fry} className="App-logo" alt="Shut Up and Take My Money" />
        <h1>BUY IT NOW!</h1>
        
      <Button variant='info'>TAKE MY MONEY!</Button>
      
      </header>
    </div>
  );
}

export default App;
