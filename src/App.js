
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
import firebase from './firebase.init'

console.log(firebase)

function App() {
  return (
    <div  className='px-12 max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointent />} />
        <Route path="review" element={<Review />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
       
      </Routes>
    </div>
  );
}

export default App;
