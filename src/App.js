import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About'
import Review from './Components/Pages/Reviews/Reviews'
import Appointent from './Components/Pages/Appointment/Appointment'
import Contact from './Components/Pages/Contact/Contact'
import Login from './Components/Pages/Login/Login'
import Signup from './Components/Pages/Login/Signup'
import PrivateRoute from './Components/Shared/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MyAppointment from './Components/Pages/Dashboard/MyAppointment';
import MyReview from './Components/Pages/Dashboard/MyReview';
import MyHistory from './Components/Pages/Dashboard/MyHistory';
import AllUsers from './Components/Pages/Dashboard/AllUsers';


function App() {
  return (
    <div className='px-12 max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={
          <PrivateRoute>
            <Appointent />
          </PrivateRoute>
        } />

        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        } >
          <Route index element={<MyAppointment/>}></Route>
          <Route path="/dashboard/review" element={<MyReview/>}></Route>
          <Route path="/dashboard/myHistory" element={<MyHistory/>}></Route>
          <Route path="/dashboard/users" element={<AllUsers/>}></Route>
         
        </Route>


        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
