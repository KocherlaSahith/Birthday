// Home.js

import React from 'react';
import './App.css';
import img1 from './img1.png';
import img2 from './img2.png'
import CakeGame from './CakeGame';
function App() {
  return (
    <div className="home">
    
      <div className="message-container">
        <h2>Happy Birthday!</h2>
        <p className="love-message">
          To the most amazing friend, wishing you a day filled with joy, laughter, and lots of love!
        </p>
        <p className="virtual-message">
          Although I can't be there in person, I've created this virtual celebration just for you! Click the pink circle (That is the cake Btw dont hate me lol)
        </p>
        <CakeGame/>
      </div>
      <div className="image-container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
     
    </div>
  );
}

export default App;
