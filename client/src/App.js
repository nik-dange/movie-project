import Home from './pages/Home';
import Login from './pages/Login';
import * as React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import useAuthContext from './hooks/useAuthContext';




function App() {

  const user = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {user &&
          <div className='pages'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
            <Routes>
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
