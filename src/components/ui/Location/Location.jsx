import React from 'react';
import css from './Location.module.css';

const Location = ({ location }) => {
  return (
    <span className={css.location}>
      <img src={`/assets/ico-map.svg`} alt={'icon'} />
      {location}
    </span>
  );
};

export default Location;
