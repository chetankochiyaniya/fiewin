import React from 'react';
import './index.css';

const GameCardContainer = () => {
  const imageUrls = [
    'https://res.cloudinary.com/fiewin1/image/upload/images/fastParityEnterV2.png',
    'https://res.cloudinary.com/fiewin1/image/upload/images/mineSweeperEnterV2.png',
    'https://res.cloudinary.com/fiewin1/image/upload/images/diceEnterV2.png',
    'https://res.cloudinary.com/fiewin1/image/upload/images/circleIndexEnter.png',
    'https://res.cloudinary.com/fiewin1/image/upload/images/hiloIndexEnter.png',
    'https://res.cloudinary.com/fiewin1/image/upload/images/indexNewComeV2.png'
  ];

  return (
    <div className="container mt-5">
      <div className="row row-cols-2">
        {imageUrls.map((imageUrl, index) => (
          <div className="col d-flex" style={{ marginBottom: index === imageUrls.length - 1 ? '80px' : '' }} key={index}>
            <div className="game-icon d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-center mb-3">
                <img src={imageUrl} alt="Game Icon" className="img-fluid" />
              </div>
              <div className="mb-1"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCardContainer;
