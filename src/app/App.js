import React from 'react';
import logo from './logo.svg';
import {Button} from 'reactstrap';
import './app.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className='btn btn-danger'>HELP ME</button>
        <Button 
          tag="a"
          color="success"
          size="large"
          href="http://timothyharley.com"
          target="_blank"
          >ME!</Button>
      </header>
    </div>
  );
}

export default App;
