import React from 'react';
import css from './Rating.module.css';

const Rating = ({ rating, reviewsCount }) => {
  return (
    <div className={css.ratingContainer}>
      <span className={css.rating}>
        <img src={`/assets/ico-star.svg`} alt={'icon'} className={css.starIcon} />
        {rating}
      </span>
      <span>({reviewsCount} Reviews)</span>
    </div>
  );
};

export default Rating;
