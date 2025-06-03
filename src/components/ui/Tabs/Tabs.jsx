import React from 'react';
import css from './Tabs.module.css';
import clsx from 'clsx';

const Tabs = ({ onTabChange, tabList, activeTab }) => {
  const handleTabClick = (key) => {
    if (onTabChange) onTabChange(key);
  };

  return (
    <ul className={css.tabs}>
      {tabList.map((tab) => (
        <li
          key={tab.key}
          className={clsx(css.tab, { [css.tabActive]: activeTab === tab.key })}
          onClick={() => handleTabClick(tab.key)}
          tabIndex={0}
          role="tab"
          aria-selected={activeTab === tab.key}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
