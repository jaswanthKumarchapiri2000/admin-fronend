import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import doctorregistration from './components/RegisterDoctor';
import analyse from './components/analyse';
import ActivityPage from './components/activity';
import question from './components/question'
import Loginform from './components/LoginForm';
import HeaderPage from './components/HeaderPage';
import FooterPage from './components/FooterPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <HeaderPage/>
      <Router>
        <div className='container'>
          <Routes>
              <Route path='/' Component={Loginform}></Route>
              <Route path='/analyse' Component={analyse}></Route>
              <Route path='/register' Component={doctorregistration}></Route>
              <Route path='/activity' Component={ActivityPage}></Route>
              <Route path='/question' Component={question}></Route>
              <Route path='/homepage' Component={HomePage}></Route>



          </Routes>
           
        </div>
      </Router>
      <FooterPage/>
    </div>
  );
}

export default App;
