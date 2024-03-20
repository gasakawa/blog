import React from 'react';
import {
  FaFacebookF as Facebook,
  FaGithub as Github,
  FaInstagram as Instagram,
  FaTwitter as Twitter,
  FaLinkedin as Linkedin,
} from 'react-icons/fa';

const links = [
  {
    label: 'Github',
    url: 'https://github.com/gasakawa',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/gabriel.asakawa',
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/gabriel.asakawa',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/GabrielAsakawa',
  },
  {
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/gabriel-asakawa',
  },
];

const Icons = {
  Facebook,
  Github,
  Instagram,
  Twitter,
  Linkedin,
} as any;

export default function SocialLinks() {
  return (
    <nav className="hidden my-8 mx-auto w-[100%] md:flex">
      <ul className="flex items-center justify-around list-none">
        {links.map(link => {
          const Icon = Icons[link.label];
          return (
            <li key={link.label} className="mx-4">
              <a href={link.url} title={link.label} target="_blank" rel="noopener noreferrer">
                <div>
                  <Icon size={24} className="text-gray-300 hover:text-blue-400 duration-[0.5s] transition-colors" />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
