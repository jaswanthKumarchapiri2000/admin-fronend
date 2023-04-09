import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import doctorregistration from './components/RegisterDoctor';
import analyse from './components/analyse';
import ActivityPage from './components/activity';
import question from './components/question'


function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <Routes>
              <Route path='/' Component={LoginForm}></Route>
              <Route path='/analyse' Component={analyse}></Route>
              <Route path='/register' Component={doctorregistration}></Route>
              <Route path='/activity' Component={ActivityPage}></Route>
              <Route path='/question' Component={question}></Route>



          </Routes>
           
        </div>
      </Router>
    </div>
  );
}

export default App;
