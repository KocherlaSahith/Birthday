// Home.js

import React from 'react';
import './App.css';
import img3 from './img4.jpg';
import img4 from './img3.jpg'
import CakeGame from './CakeGame';
function App() {
  return (
    <div className="home">
    
      <div className="message-container">
        <h2>Happy Birthday!</h2>
        <p className="love-message">
        Hey babe, on your special day, sending you loads of joy, laughter, and all the love in the universe! Chill kar yaar!!!!
        </p>
        <p className="virtual-message">
          Although I can't be there in person, I've created this virtual celebration for you! Click the pink circle
        </p>
        <CakeGame/>
        <p>Finally, click this link and listen to this music (interstellar has to be there somewhere hehe) and close your eyes. YOU MUST HAVE SMILE ON YOUR FACE</p>
        <a href='https://youtu.be/2cLkuQKWmvM?si=9fWA8eOwHg1topfS'>click</a>
      </div>
      <div className="image-container">
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
     
    </div>
  );
}

export default App;
