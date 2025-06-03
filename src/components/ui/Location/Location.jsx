import React from 'react';
import css from './Location.module.css';
import locationIcon from '@assets/ico-map.svg';

const Location = ({ location }) => {
  return (
    <span className={css.location}>
      <img src={locationIcon} alt={'icon'} />
      {location}
    </span>
  );
};

export default Location;
