import React from 'react';
import { Github } from '@styled-icons/boxicons-logos/Github';

import * as S from './styled';

const About = () => (
  <S.AboutWrapper>
    <h1>Sobre mim</h1>
    <p>
      Meu nome é Gabriel Asakawa, nasci em Angola / África, minha mãe brasileira
      descendente de japoneses e o meu pai africano e para adicionar, me criei
      na Colômbia. Sim isso mesmo, como meus amigos na faculdade falavam eu
      praticamente sou a ONU.
    </p>
    <p>
      Me formei em 2008 em Engenharia de Sistemas e Computação na Universidad
      del Valle (Cali - Colômbia)
    </p>
    <p>
      Meu primeiro contato com computação foi ainda no Colégio (1999), na aula
      de informática aprendiamos linguagem C. Na época não me interessava tanto,
      porque na verdade eu queria ser Médico, computação era minha segunda
      opção. Mas o destino me levou a estudar computação e já se fazem mais de
      16 anos brincando com máquinas.
    </p>
    <p>
      Hoje atúo como Tech Lead na empresa &nbsp;
      <a href="https://scalait.com/" target="_blank" rel="noopener noreferrer">
        Stefanini Scala
      </a>
      &nbsp; e já trabalhei em empresas como &nbsp;
      <a
        href="https://www.habber.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        HabberTec
      </a>
      ,&nbsp;
      <a href="https://www.gft.com" target="_blank" rel="noopener noreferrer">
        GFT
      </a>
      &nbsp;
    </p>
    <h2>Habilidades / Experiências</h2>
    <p>
      Durante meus anos de experiência trabalhei com algumas linguagens de
      programação, tecnologias e sistemas operacionais
    </p>
    <ul>
      <li>Lingugem C, C++</li>
      <li>PHP</li>
      <li>Java</li>
      <li>Javascript</li>
      <li>NodeJS</li>
      <li>ReactJS</li>
      <li>Automatizadores (Webpack, Grunt)</li>
      <li>
        IBM (Webpshere Application Server, Business Process Manager, Operational
        Decision Manager, Integration Bus, MobileFirst)
      </li>
      <li>CSS Frameworks (Bootstrap)</li>
      <li>Shell Script</li>
      <li>Linux, Windows</li>
      <li>REST, GraphQL</li>
    </ul>
  </S.AboutWrapper>
);

export default About;
