import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login'
import Register from './Register';
import Dashboard from './Dashboard';
import UserDetails from './Dashboard/UserDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={ <Dashboard />} />
        <Route path='/userDetails' element={<UserDetails />} />


      </Routes>
    </Router>
  );
}

export default App;
