import logo from './logo.svg';
import './App.css';
import StarRating from './components/star-rating'; 
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div className="App">
     {/* Accordiaan Component */}
     {/* <Accordian/> */}
     {/* Random color component*/}

{/* <RandomColor/> */}
{/* <StarRating noOfStars={10}/> */}
{/* image slider component */}
<ImageSlider url={'https://picsum.photos/v2/list'} limit={'3'} page={'1'} />
    </div>
  );
}

export default App;
