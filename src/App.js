
import { Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import ContactUs from "./pages/Contact";
import Blogs from "./pages/Blog";

function App() {
  return (
    <div className="App">
     <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/blog' element={<Blogs/>}/>
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
      
      <Footer/>
     </div>
    </div>
  );
}

export default App;
