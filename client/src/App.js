import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar>

      </Navbar>

      <header className="App-header">

        <Button>
          Add a Movie
        </Button>
      </header>
    </div>
  );
}

export default App;
