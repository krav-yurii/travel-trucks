import React from 'react';
import Rating from '@components/ui/Rating';
import Location from '@components/ui/Location';
import { formatPrice } from '@/shared/utils/formatPrice.js';
import css from './MainInfo.module.css';

const MainInfo = ({ name, reviews, price, rating, description, gallery, location }) => {
  return (
    <div className={css.wrap}>
      <div className={css.info}>
        <div>
          <h2 className={css.title}>{name}</h2>
        </div>
        <div className={css.subheader}>
          <div className={css.reviews}>
            <Rating rating={rating} reviewsCount={reviews?.length} />
            <Location location={location} />
          </div>
          <p className={css.price}>{formatPrice(price)}</p>
        </div>
      </div>

      <div className={css.gallery}>
        {gallery.map((image, index) => (
          <img key={index} src={image.original} alt={`${name} ${index + 1}`} className={css.img} />
        ))}
      </div>
      <div>
        <p className={css.description}>{description}</p>
      </div>
    </div>
  );
};

export default MainInfo;
