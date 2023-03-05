import './App.css';
import NavBar from './components/Nav/NavBar';
import AboutUs from './pages/about/AboutUs';
import AppointmentForm from './pages/AppointmentForm/AppointmentForm';
import Blog from './pages/Blog/Blog';
import Contacts from './pages/contacts/Contacts';
import Dashboard from './pages/Dashboard/Dashboard';
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
      {/* <Contacts /> */}
      {/* <Blog /> */}
      {/* <AppointmentForm /> */}
      <Dashboard />
    </div>
  );
}

export default App;
