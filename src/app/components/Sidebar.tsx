import React from 'react';
import Profile from './Profile';
import SocialLinks from './SocialLinks';
import Menulinks from './Menulinks';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Profile />
      <SocialLinks />
      <Menulinks />
    </aside>
  );
}
