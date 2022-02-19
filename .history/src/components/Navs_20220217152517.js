import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

// eslint-disable-next-line react/function-component-definition
const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
