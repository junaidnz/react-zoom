import logo from './logo.svg';
import './App.css';
import {ImageContainer} from "./ImageContainer/ImageContainer";
import sampleImage from "./assets/test_img.jpeg"
import {FigmaContainer} from "./FigmaContainer/FigmaContainer";
function App() {
  return (
    <div className="App">
        <h1>Figma iframe</h1>
        <FigmaContainer />
        <h1>Image container</h1>
          <ImageContainer imgSrc={sampleImage} />
          <ImageContainer imgSrc={sampleImage} />
          <ImageContainer imgSrc={sampleImage} />
          <ImageContainer imgSrc={sampleImage} />
    </div>
  );
}

export default App;
