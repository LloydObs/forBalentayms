// App.js
import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component
import './App.css';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isEmailModelOpen, setEmailIsModalOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    top: isHovered ? '-90px' : '0',
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`valentines ${isHovered ? 'hovered' : ''}`}>
        <div className='envelope'></div>
        <div className='front'></div>
        <div className='card' style={cardStyle}>
          <div className='text'>
            Happy<br />
            Valentines<br />
            Day <br />
          </div>
          <div className='heart'> </div>
        </div>
        <div className='hearts'>
          <div className='one'></div>
          <div className='two'></div>
          <div className='three'></div>
          <div className='four'></div>
          <div className='five'></div>
        </div>
      </div>
      <div className='shadow'></div>

      <button className='primaryButton' onClick={openModal}>
        Click here to subscribe
      </button>

      {isModalOpen && (
        <Modal closeModal={closeModal} />
      )}

    </div>
  );
}

export default App;
