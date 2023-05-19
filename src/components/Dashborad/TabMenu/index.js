import React from 'react';
import './index.css';

const TabMenu = () => {
  return (
    <div className='contaner'>
      <div className="footer">
        <div className="tab-item">
          <div className="tab-icon">
            <img
              alt=""
              draggable="false"
              src="https://res.cloudinary.com/fiewin/image/upload/images/tab-home-s.png"
              className="tab-icon-image"
            ></img>
          </div>
          <div className="tab-label">FieWin</div>
        </div>
        <div className="tab-item">
          <div className="tab-icon">
            <img
              alt=""
              draggable="false"
              src="https://res.cloudinary.com/fiewin/image/upload/images/tab-share.png"
              className="tab-icon-image"
            ></img>
          </div>
          <div className="tab-label">Invite</div>
        </div>
        <div className="tab-item">
          <div className="tab-icon">
            <img
              alt=""
              draggable="false"
              src="https://res.cloudinary.com/fiewin/image/upload/images/tab-recharge.png"
              className="tab-icon-image"
            ></img>
          </div>
          <div className="tab-label">Recharge</div>
        </div>
        <div className="tab-item">
          <div className="tab-icon">
            <img
              alt=""
              draggable="false"
              src="https://res.cloudinary.com/fiewin/image/upload/images/tab-mine.png"
              className="tab-icon-image"
            ></img>
          </div>
          <div className="tab-label">My</div>
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
