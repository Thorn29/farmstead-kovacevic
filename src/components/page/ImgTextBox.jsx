import React from 'react';
import './ImgTextBox.css';

const ImgTextBox = ({ img, classadd, children }) => {
  return(
    <div className={`img-textbox ${classadd}`}>
      <div className='img-textbox__container'>
        <img className='img-textbox__image' src={img} alt='Gazdinstvo Kovačević' />
      </div>
      <div className='img-textbox__container'>
        <p className='text'>{children}</p>
      </div>
    </div>
  );
}

export default ImgTextBox;
