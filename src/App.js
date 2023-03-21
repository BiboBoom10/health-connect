import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Nav/NavBar';
import Person from './components/Person/Person';
import AboutUs from './pages/about/AboutUs';
import AppointmentForm from './pages/AppointmentForm/AppointmentForm';
import Blog from './pages/Blog/Blog';
import Contacts from './pages/contacts/Contacts';
import Dashboard from './pages/Dashboard/Dashboard';
import DoctorAppointmentDetails from './pages/DoctorAppointment/DoctorAppointmentDetails';
import GetStarted from './pages/getstarted/GetStarted';
import Home from './pages/home/Home';
import LogIn from './pages/login/LogIn';
import SignUp from './pages/signup/SignUp';
import WaitingList from './pages/Waiting List/WaitingList';
import AuthContextProvider from './services/auth-context';


function App() {
  return (
    <AuthContextProvider>
      <Routes> 
        {/* <WaitingList />/ */}
        {/* <DoctorAppointmentDetails /> */}
        {/* <Dashboard /> */}
        <Route path='/' element={<GetStarted />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/details' element={<DoctorAppointmentDetails />} />
        <Route path='/waiting' element={<WaitingList />} />
        <Route path='/appointments' element={<AppointmentForm />} />
        {/* <NavBar /> */}
        {/* <Home />
        <AboutUs />
        <Contacts />
        <Blog />
        <AppointmentForm />
        <Dashboard />
        <Person />
        <DoctorAppointmentDetails />
        <WaitingList /> */}
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
