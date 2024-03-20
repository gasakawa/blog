import React from 'react';
import Profile from './Profile';
import SocialLinks from './SocialLinks';
import Menulinks from './Menulinks';

export default function Sidebar() {
  return (
    <aside className="items-start h-auto px-8 py-4 w-[100%] flex-row md:items-center md:border-r-1 md:flex-col md:h-[100vh] fixed p-[2rem] text-center md:w-[20rem] bg-[#3d423f]">
      <Profile />
      <SocialLinks />
      <Menulinks />
    </aside>
  );
}
