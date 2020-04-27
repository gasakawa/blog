import styled from 'styled-components';

export const AboutWrapper = styled.section`
  max-width: 70rem;
  margin: auto;
  padding: 2rem 5rem;
  color: var(--postColor);

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2.1rem;
  }

  h1,
  h2 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  a {
    color: #1fa1f2;
    text-decoration: none;
    transition: opacity 0.5s ease 0s;
  }

  p {
    margin: 0px auto 1.6rem;
    color: var(--postColor);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0px 1.4rem;
  }

  ul {
    padding-left: 2.5rem;
    list-style: disc;
    margin: 0px auto 1.6rem;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
  }

  li {
    padding: 0.625rem 0px;
  }
`;

export const AboutNav = styled.nav`
  width: 100%;
  margin: 2rem auto;
`;

export const AboutIcons = styled.div`
  fill: rgb(187, 187, 187);
  width: 30px;
  height: 30px;
`;
