import './App.css';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage'
import Booking from './pages/Booking';
import Footer from './components/Footer/Footer';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="routes">
      <Routes>
        <Route path="/" element={ <Homepage/> }/>
        <Route path="/home" element={ <Homepage/> }/>
        <Route path="/book-now" element={ <Booking/> }/>
        <Route path="/services" element={ <Services/> }/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
