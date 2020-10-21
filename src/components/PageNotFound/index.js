import React from 'react';
import { Link } from 'gatsby';

import * as S from './styled';
import image from '../../images/not-found.svg';

const PageNotFound = () => (
  <S.Container>
    <S.Header>
      <h1>Página não encontrada</h1>
    </S.Header>
    <S.Body>
      <img src={image} alt="Not-found" />
      <div>
        <p>
          Parece que você se perdeu, clique
          {' '}
          <Link to="/">aqui</Link>
          {' '}
          para voltar ao inicio
        </p>

      </div>
    </S.Body>
  </S.Container>
);


export default PageNotFound;
