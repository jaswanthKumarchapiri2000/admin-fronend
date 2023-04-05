import logo from './logo.svg';
import './App.css';
import login from './components/login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import doctorregistration from './components/RegisterDoctor';
import analyse from './components/analyse';


function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <Routes>
              <Route path='/' Component={LoginForm}></Route>
              <Route path='/analyse' Component={analyse}></Route>
              <Route path='/register' Component={doctorregistration}></Route>

          </Routes>
           
        </div>
      </Router>
    </div>
  );
}

export default App;
