import DisplaySection from "./components/DisplaySection";
import Jumbtron from "./components/Jumbtron";
import Nav from "./components/Nav";
import SoundSystem from "./components/SoundSystem";
import WebgiViewer from "./components/WebgiViewer";

const App = () => {

  return (
    <div className="App">
      <Nav />
      <Jumbtron />
      <SoundSystem />
      <DisplaySection />
      <WebgiViewer />
    </div>
  );
}

export default App;
