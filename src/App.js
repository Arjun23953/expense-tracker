import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Home from './pages/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
