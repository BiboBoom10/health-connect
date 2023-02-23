import './App.css';
import NavBar from './components/Nav/NavBar';
import AboutUs from './pages/about/AboutUs';
import Contacts from './pages/contacts/Contacts';

import GetStarted from './pages/getstarted/GetStarted';
import Home from './pages/home/Home';
import LogIn from './pages/login/LogIn';
import SignUp from './pages/signup/SignUp';


function App() {
  return (
    <div>   
      {/* <GetStarted /> */}
      {/* <SignUp /> */}
      {/* <LogIn /> */}
      {/* <NavBar /> */}
      {/* <Home /> */}
      {/* <AboutUs /> */}
      <Contacts />
    </div>
  );
}

export default App;
