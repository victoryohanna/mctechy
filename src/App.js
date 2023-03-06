
import Header from "./components/Header";
import OptionList from "./components/Options";
import BootcampSection from "./components/Bootcamp";
import OurPrograms from "./components/Programs";
import Transition from "./components/Transition";
import Membership from "./components/Membership";
import Testimonials from "./components/Testimonials";
import TechBootcamp from "./components/TechBootcamp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
     <div>
      <Navbar/>
      <Header/>
      <OptionList/>
      <BootcampSection/>
      <OurPrograms/>
      <Transition/>
      <Membership/>
      <Testimonials/>
      <TechBootcamp/>
      <Footer/>
     </div>
    </div>
  );
}

export default App;
