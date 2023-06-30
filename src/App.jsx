import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import SoundSystem from "./components/SoundSystem";

const App = () => {

  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundSystem />
    </div>
  );
}

export default App;
