import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './confrig/Home';
import About from './confrig/About';
import Contact from './confrig/Contact';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'about'} element={<About />} />
      <Route path={'contact/*'} element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  );  
}

export default App;
