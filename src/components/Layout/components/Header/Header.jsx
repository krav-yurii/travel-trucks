import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import svgLogo from '@assets/logo.svg';
import { rootRoutesPath } from '@router/routes/root/root-routess-path.js';
import { favoritesRoutesPath } from '@router/routes/favorites/favorites-routes-path.js';
import { catalogRoutesPath } from '@router/routes/catalog/catalog-routes-path.js';
import css from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className={css.list}>
      <div className={css.logo} onClick={() => navigate(rootRoutesPath.root)}>
        <img src={svgLogo} alt="logo" />
      </div>
      <div className={css.links}>
        <NavLink
          to={rootRoutesPath.root}
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Home
        </NavLink>
        <NavLink
          to={catalogRoutesPath.catalog}
          end
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Catalog
        </NavLink>
        <NavLink
          to={favoritesRoutesPath.favorites}
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Favorites
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
