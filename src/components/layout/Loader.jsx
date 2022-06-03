import React from 'react';
import './Loader.css';

const Loader = () => {
  return(
    <div className='loader'>
      <div className="loader__animation">
        <div className='loader__circle'></div>
        <div className='loader__circle'></div>
        <div className='loader__circle'></div>
        <div className='loader__circle'></div>
        <div className='loader__circle'></div>
        <div className='loader__circle'></div>
        <div className='loader__circle'></div>
        <div className='loader__circle'></div>
      </div>
      <p className='loader__text'>Loading...</p>
    </div>
  );
}

export default Loader;
