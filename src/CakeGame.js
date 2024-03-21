// CakeGame.js

import React, { useState } from 'react';
import './CakeGame.css';

function CakeGame() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className={`cake-container ${isModalOpen ? 'cut' : ''}`} onClick={openModal}>
        <div className="cake"></div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Happy birthday!</h2>
            <p>
Hey gorgeous, happy birthday! Reflecting on all the beautiful memories we've shared fills my heart with joy. Here's to celebrating you today and cherishing every moment we've had together. You mean everything to me, today and always!</p>
<p>PS : The pink outfit is perfect, literally the inspiration for this website(pink look)</p>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CakeGame;
