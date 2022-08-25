import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Booking from "./pages/Booking"
import About from "./pages/About"
import NavigationBar from "./components/NavigationBar"


function App() {
  return (
    <div className="App">
        <NavigationBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="booking" element={<Booking/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
