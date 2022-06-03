import React from 'react';
import './FieldInput.css';

const FieldInput = ({ label, change, errormsg,  ...inputProps}) => {

  return(
    <div className='field-input'>
      <input className='field-input__input' onChange={change} {...inputProps} placeholder=' ' autoComplete='off' />
      <label className='field-input__label'>{label}</label>
      <p className='field-input__error'>{errormsg}</p>
    </div>
  );
}

export default FieldInput;
