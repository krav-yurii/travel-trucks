import React from 'react';
import { camperFeaturesConfig } from '@/shared/config/camperFeaturesConfig.js';
import css from './CamperFeaturesChips.module.css';

const CamperFeaturesChips = ({ camper, maxItems }) => {
  const icons = import.meta.glob('/assets/filterIcons/*.svg', { eager: true });
  const activeFeatures = camperFeaturesConfig.filter(({ key, checkValue }) =>
    checkValue !== undefined ? camper[key] === checkValue : camper[key],
  );

  const featuresToRender = maxItems ? activeFeatures.slice(0, maxItems) : activeFeatures;

  return (
    <div className={css.features}>
      {featuresToRender.map(({ iconPath, label }) => (
        <span className={css.feature} key={label}>
          <img src={icons[`/assets/filterIcons/${iconPath}`]?.default} alt={label} className={css.icon} />
          {label}
        </span>
      ))}
    </div>
  );
};

export default CamperFeaturesChips;
