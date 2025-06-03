import React from 'react';
import css from './Rating.module.css';
import starIcon from '@assets/ico-star.svg';

const Rating = ({ rating, reviewsCount }) => {
  return (
    <div className={css.ratingContainer}>
      <span className={css.rating}>
        <img src={starIcon} alt={'icon'} className={css.starIcon} />
        {rating}
      </span>
      <span>({reviewsCount} Reviews)</span>
    </div>
  );
};

export default Rating;
