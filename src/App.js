
import Header from "./components/Header";
import OptionList from "./components/Options";
import BootcampSection from "./components/Bootcamp";
import OurPrograms from "./components/Programs";
import Transition from "./components/Transition";

function App() {
  return (
    <div className="App">
     <div>
      <Header/>
      <OptionList/>
      <BootcampSection/>
      <OurPrograms/>
      <Transition/>
     </div>
    </div>
  );
}

export default App;
