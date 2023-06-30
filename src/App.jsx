import { useRef } from "react";
import Preloader from "./components/Loader";
import DisplaySection from "./components/DisplaySection";
import Jumbtron from "./components/Jumbtron";
import Nav from "./components/Nav";
import SoundSystem from "./components/SoundSystem";
import WebgiViewer from "./components/WebgiViewer";


const App = () => {

  const webgiViewerRef = useRef();
  const contentRef = useRef();
  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  }

  return (
    <div className="App">
      <Preloader />
      <div id="content" ref={contentRef}>
        <Nav />
        <Jumbtron />
        <SoundSystem />
        <DisplaySection triggerPreview={handlePreview} />
      </div>

      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
