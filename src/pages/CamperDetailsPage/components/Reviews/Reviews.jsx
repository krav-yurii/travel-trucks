import React from 'react';
import css from './Reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <div className={css.container}>
      {reviews.length > 0 && (
        <ul className={css.list}>
          {reviews.map((review, index) => (
            <li key={index} className={css.item}>
              <div className={css.reviewer}>
                <div className={css.avatar}>{review.reviewer_name[0]}</div>
                <div className={css.info}>
                  <p className={css.name}>{review.reviewer_name}</p>
                  <div className={css.rating}>
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={
                          i < review.reviewer_rating ? `/assets/ico-star.svg` : `/assets/ico-star-blank.svg`
                        }
                        alt={'icon'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
