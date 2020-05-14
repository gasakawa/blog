import React from 'react';
import ReactGA from 'react-ga';

import Icons from './Icons';
import links from './content';

import * as S from './styled';

const socialLinkClickTrack = social => {
  ReactGA.event({
    category: 'social link',
    action: 'click',
    label: social,
  });
};

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map(link => {
        const Icon = Icons[link.label];
        return (
          <S.SocialLinksItem key={link.label}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => socialLinkClickTrack(link.label)}
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        );
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
);

export default SocialLinks;
