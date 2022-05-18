import React from 'react';
import { NavLink } from 'umi';
import './index.less';

export default function Index(props: any) {
  if (
    props.location.pathname.includes('/detail') ||
    props.location.pathname === '/city'
  ) {
    return <div>{props.children}</div>;
  }

  return (
    <div>
      {props.children}
      <ul>
        <li>
          <NavLink to="/film" activeClassName="activeNav">
            film
          </NavLink>
        </li>
        <li>
          <NavLink to="/cinemal" activeClassName="activeNav">
            cinemal
          </NavLink>
        </li>
        <li>
          <NavLink to="/center" activeClassName="activeNav">
            center
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
