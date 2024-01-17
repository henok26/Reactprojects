import logo from './logo.svg';
import './App.css';
import StarRating from './components/star-rating'; 
import Accordian from './components/accordian';
import RandomColor from './components/random-color';

function App() {
  return (
    <div className="App">
     {/* Accordiaan Component */}
     {/* <Accordian/> */}
     {/* Random color component*/}

{/* <RandomColor/> */}
<StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
