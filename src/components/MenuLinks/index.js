import React from 'react';
import ReactGA from 'react-ga';

import links from './content';

import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';

const MenuLinks = () => {
  const menuLinkClickTrack = link => {
    ReactGA.event({
      category: 'menu link',
      action: 'click',
      label: `Menu Link - ${link}`,
    });
  };

  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map(link => (
          <S.MenuLinksItem key={link.label}>
            <S.MenuLinksLink
              to={link.url}
              cover
              direction="right"
              duration={0.6}
              bg={getThemeColor()}
              activeClassName="active"
              onClick={() => {
                menuLinkClickTrack(link.label);
              }}
            >
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  );
};

export default MenuLinks;
