
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About'
import Review from './Components/Pages/Reviews/Reviews'
import Appointent from './Components/Pages/Appointment/Appointment'
import Contact from './Components/Pages/Contact/Contact'
import Login from './Components/Pages/Login/Login'


function App() {
  return (
    <div  >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointent />} />
        <Route path="review" element={<Review />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
       
      </Routes>
    </div>
  );
}

export default App;
