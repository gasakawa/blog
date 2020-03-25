import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import * as S from './styled';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPage}>Página anterior</Link>}
    <p>
      {currentPage}
      de
      {numPages}
    </p>
    {!isLast && <Link to={nextPage}>Próxima página</Link>}
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
