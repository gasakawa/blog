import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';

import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink
        to={prevPage}
        cover
        direction="right"
        duration={0.6}
        bg={getThemeColor()}
      >
        Página anterior
      </AniLink>
    )}
    <p>
      {currentPage}
      de
      {numPages}
    </p>
    {!isLast && (
      <AniLink
        to={nextPage}
        cover
        direction="left"
        duration={0.6}
        bg={getThemeColor()}
      >
        Próxima página
      </AniLink>
    )}
  </S.PaginationWrapper>
);

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string.isRequired,
  nextPage: PropTypes.string.isRequired,
};

export default Pagination;
