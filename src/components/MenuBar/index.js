/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import { Home, Grid } from 'styled-icons/boxicons-solid';
import {
  SearchAlt2 as Search,
  UpArrowAlt as Arrow,
} from 'styled-icons/boxicons-regular';

import { Lightbulb as Light, ThList as List } from 'styled-icons/typicons';

import * as S from './styled';
import * as GA from './trackers';
import getThemeColor from '../../utils/getThemeColor';

const MenuBar = () => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);
    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          cover
          direction="right"
          duration={0.6}
          bg={getThemeColor()}
          title="Voltar para Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search"
          cover
          direction="right"
          duration={0.6}
          bg={getThemeColor()}
          title="Pesquisar"
        >
          <S.MenuBarItem
            onClick={() => {
              GA.searchClickTrack();
            }}
          >
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');

            GA.themeTrack(isDarkMode ? 'light' : 'dark');

            if (window.DISQUS !== undefined) {
              window.setTimeout(() => {
                window.DISQUS.reset({
                  reload: true,
                });
              }, 300);
            }
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
            GA.displayTrack(isListMode ? 'grid' : 'list');
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Ir para o topo"
          onClick={() => {
            window.scroll({ top: 0, behavior: 'smooth' });
          }}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
