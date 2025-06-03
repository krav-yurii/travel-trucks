import React from 'react';
import CamperFeaturesChips from '@components/CamperFeaturesChips';
import css from './Features.module.css';

const Features = ({ camper }) => {
  return (
    <div className={css.container}>
      {camper && (
        <>
          <div className={css.features}>
            <CamperFeaturesChips camper={camper} maxItems={99} />
          </div>
          <div className={css.details}>
            <h3 className={css.detailsTitle}>Vehicle details</h3>
            <ul className={css.detailsList}>
              {camper.form && (
                <li className={css.detailsForm}>
                  <span className={css.detailsLabel}>Form:</span>{' '}
                  <span className={css.detailsData}>{camper.form}</span>
                </li>
              )}
              {camper.length && (
                <li className={css.detailsForm}>
                  <span className={css.detailsLabel}>Length:</span> <span>{camper.length}</span>
                </li>
              )}
              {camper.width && (
                <li className={css.detailsForm}>
                  <span className={css.detailsLabel}>Width:</span>{' '}
                  <span className={css.detailsData}>{camper.width}</span>
                </li>
              )}
              {camper.height && (
                <li className={css.detailsForm}>
                  <span className={css.detailsLabel}>Height:</span>{' '}
                  <span className={css.detailsData}>{camper.height}</span>
                </li>
              )}
              {camper.tank && (
                <li className={css.detailsForm}>
                  <span className={css.detailsLabel}>Tank:</span>{' '}
                  <span className={css.detailsData}>{camper.tank}</span>
                </li>
              )}
              {camper.consumption && (
                <li className={css.detailsForm}>
                  <span className={css.detailsLabel}>Consumption:</span>{' '}
                  <span className={css.detailsData}>{camper.consumption}</span>
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Features;
