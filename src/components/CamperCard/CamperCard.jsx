import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '@store/favorites/favorites-slice.js';
import { isFavoritePresent } from '@store/favorites/favorite-selectors.js';
import { catalogRoutesPath } from '@router/routes/catalog/catalog-routes-path.js';
import CamperFeaturesChips from '@components/CamperFeaturesChips';
import Rating from '@components/ui/Rating';
import Location from '@components/ui/Location';
import favoritePressedIcon from '@assets/ico-favorite-pressed.svg';
import favoriteIcon from '@assets/ico-favorite.svg';

import Button from '@components/ui/Button';
import { formatPrice } from '@/shared/utils/formatPrice.js';
import css from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFavorite = useSelector((state) => isFavoritePresent(state, camper.id));

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper.id));
    } else {
      dispatch(addFavorite(camper));
    }
  };

  const navigateToDetails = () => {
    navigate(`${catalogRoutesPath.catalogItemDetails}/${camper.id}`);
  };

  return (
    <div className={css.card}>
      <div>
        <img src={camper.gallery[0].thumb} alt={camper.name} className={css.image} />
      </div>

      <div className={css.info}>
        <div>
          <div className={css.header}>
            <h3>{camper.name}</h3>
            <p className={css.headerRightPart}>
              {formatPrice(camper.price)}
              <button className={css.favoriteButton} onClick={handleFavoriteClick}>
                {isFavorite ? (
                  <img src={favoritePressedIcon} alt={'icon'} className={css.likeIconActive} />
                ) : (
                  <img src={favoriteIcon} alt={'icon'} className={css.likeIconActive} />
                )}
              </button>
            </p>
          </div>

          <div className={css.subheader}>
            <Rating rating={camper.rating} reviewsCount={camper.reviews.length} />
            <Location location={camper.location} />
          </div>
          <div>
            <p className={css.description}>{camper.description}</p>
            <div className={css.features}>
              <CamperFeaturesChips camper={camper} maxItems={7} />
            </div>
            <div style={{ marginTop: '24px' }}>
              <Button label={'Show more'} onClick={navigateToDetails} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CamperCard;
