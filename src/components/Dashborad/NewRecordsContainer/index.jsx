import React from 'react';
import './index.css'

function NewRecordContainer() {
  const records = [
    {
      id: 1,
      avatar: 'https://res.cloudinary.com/fiewin/image/upload/w_50,h_50,c_fill/v1604327647/psqk1wg097ahimpelzaz.jpg',
      wins: '****087 Wins',
      amount: '₹15020',
      game: 'MineSweeper game',
    },
    {
      id: 2,
      avatar: 'https://res.cloudinary.com/fiewin/image/upload/w_50,h_50,c_fill/v1604327587/zwi5nmndcuxgmncrnstr.jpg',
      wins: '****463 Wins',
      amount: '₹1000',
      game: 'Parity game',
    },
    {
      id: 3,
      avatar: 'https://res.cloudinary.com/fiewin/image/upload/w_50,h_50,c_fill/v1604327622/xhtvrywvepmendjvjdqq.jpg',
      wins: '****077 Wins',
      amount: '₹140',
      game: 'Dice game',
    },
  ];

  return (
    <div className="container h-max">
      <div id="carouselExampleSlidesOnly" className="carousel slide mb-1 mt-2" data-bs-ride="carousel">
        <div className="carousel-inner">
          {records.map((record, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="record-item d-flex align-items-center justify-content-center">
                <img
                  src={record.avatar}
                  alt="User Avatar"
                  className="profile-avatar me-3"
                />
                <div className="text-center">
                  <span className='ms-2'>{record.wins}</span>
                  <span className='ms-2 text-success font-weight-bold'>{record.amount}</span>
                  <span className='ms-2'>{record.game}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="bg-black m-0" />
    </div>
  );
}

export default NewRecordContainer;
