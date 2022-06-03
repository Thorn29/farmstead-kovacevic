import React from 'react';
import './ActionButton.css';

const ActionButton = ({ click, width, children, disabled }) => {
  return(
    <button style={{width: width}} onClick={click} disabled={disabled} className='action-button'>
    {children}
    </button>
  );
}

export default ActionButton;
