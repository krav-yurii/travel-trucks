import React from 'react';
import css from './Button.module.css';

const Button = ({ label, onClick, isDisabled, type }) => {
  return (
    <button onClick={onClick} disabled={isDisabled} type={type} className={css.button}>
      {label}
    </button>
  );
};

export default Button;
