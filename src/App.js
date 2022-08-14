import './App.css';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage'
import Booking from './pages/Booking';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="routes">
      <Routes>
        <Route path="/" element={ <Homepage/> }/>
        <Route path="/home" element={ <Homepage/> }/>
        <Route path="/book-now" element={ <Booking/> }/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
