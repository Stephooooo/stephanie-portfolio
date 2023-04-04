import './App.css';
import Navbar from './components/navbar'
import Home from './components/home';
import About from './components/about';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="/about" element={<About/>} />
    

    </Routes>
    </BrowserRouter>
    
  
    </div>
  );
}

export default App;
