import React from 'react';
import Avatar from './Avatar';

export default function Profile() {
  return (
    <section className="flex text-gray-200 md:flex-col">
      <Avatar />
      <div className="flex flex-col items-start md:items-center">
        <h1 className="text-[1.6rem] font-semibold mt-4">Gabriel Asakawa</h1>
        <small className="font-normal text-[0.8rem] sm:text-[1.1rem]">Programação e Design</small>
        <p className="hidden text-base mt-4 font-light sm:flex">
          Espaço para compartilhar ideias sobre tecnologia, programação, design, basquete, series, filmes e muito mais,
          espero ajudar a outros com as minhas experiências.
        </p>
      </div>
    </section>
  );
}
