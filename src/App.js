import logo from './logo.svg';
import './App.css';
import {ImageContainer} from "./ImageContainer/ImageContainer";
import sampleImage from "./assets/test_img.jpeg"
function App() {
  return (
    <div className="App">
      <ImageContainer imgSrc={sampleImage} />
      <ImageContainer imgSrc={sampleImage} />
      <ImageContainer imgSrc={sampleImage} />
      <ImageContainer imgSrc={sampleImage} />
    </div>
  );
}

export default App;
