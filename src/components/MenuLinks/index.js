import React from 'react';

import links from './content';

import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';

const MenuLinks = () => (
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
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
