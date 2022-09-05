import './App.css';
import {ImageZoomContainer} from "./ImageZoomContainer/ImageZoomContainer";
import sampleImage from "./assets/test_img.jpeg"

function App() {
  return (
    <div className="App">
        <h1>Image container With zoom and annotation</h1>
        <ImageZoomContainer imgSrc={sampleImage} />
    </div>
  );
}

export default App;
