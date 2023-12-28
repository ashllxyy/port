import React from 'react';
import './NavBar.css';

const navItems = [
  { id: 1, title: 'HOME', link: '/' },
  { id: 2, title: 'ABOUT', link: '/about' },
  { id: 3, title: 'SERVICES', link: '/services' },
  { id: 4, title: 'CONTACT', link: '/contact' },
];

const NavBar = () => {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;