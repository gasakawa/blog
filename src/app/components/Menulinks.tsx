import Link from 'next/link';
import React from 'react';

export default function Menulinks() {
  return (
    <nav className="hidden md:flex flex-col">
      <ul className="text-[1.2rem] font-normal list-none">
        <li className="py-[0.5rem] px-0">
          <Link href="/" className="no-underline duration-[0.5s] transition-colors text-gray-300 hover:text-blue-400">
            Home
          </Link>
        </li>
        <li className="py-[0.5rem] px-0">
          <Link
            href="/about"
            className="no-underline duration-[0.5s] transition-colors text-gray-300 hover:text-blue-400"
          >
            Sobre mim
          </Link>
        </li>
      </ul>
    </nav>
  );
}
