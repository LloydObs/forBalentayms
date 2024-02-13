// Modal.js
import React from 'react';
import './App.css';

const messages = [
    'You are loved!',
    'Happii Valentines Day!',
    'Spread love and joy!',
    'You make the world brighter!',
    'Sending you positive vibes!',
    'From the moon to the back',
    'Lots of loves from yah boii',
    'From lloydieieie to you, Happy Valentines',
    'yiee, Smilee na dahil next timee will have kohi and chill', 
    'Chin up King/Queen, dadating din yan',
    'Cheers to the strongest person in the room!',
    'From autumn to fall, I will always recall the first time we met in the meeting hall',
    'Stop stalling, amin na kase',
    'Worst she/he can say is "Tropa mo crush ko eh"',

  ];

  const getrandomMessage = () => {
    const randomizedIndex =  Math.floor(Math.random() * messages.length);
    return messages[randomizedIndex];
  }

const Modal = ({ closeModal }) => {
    const randomMessage = getrandomMessage();
  return (
    <div className="modal-container">
      <div className="modal-content">
      <p>{randomMessage}</p>
        <button className="back-button" onClick={closeModal}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Modal;
