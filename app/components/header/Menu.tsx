'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState, useCallback } from 'react';

function Menu() {
  const pathname = usePathname();
  const menuWidth = 110;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeMenu, setActiveMenu] = useState(pathname);
  const [activeStripMarginX, setActiveStripMarginX] = useState(0);
  const [activeStripOpacity, setActiveStripOpacity] = useState(1);

  const updateStripPosition = useCallback(() => {
    switch (pathname) {
      case '/about':
        setActiveStripMarginX(0);
        setActiveStripOpacity(1);
        break;
      case '/career':
        setActiveStripMarginX(menuWidth);
        setActiveStripOpacity(1);
        break;
      case '/contact':
        setActiveStripMarginX(menuWidth * 2);
        setActiveStripOpacity(1);
        break;
      default:
        setActiveStripOpacity(0);
        break;
    }
  }, [pathname]);

  useEffect(() => {
    setActiveMenu(pathname);
    updateStripPosition();
  }, [pathname, updateStripPosition]);

  return (
    <ul
      className="top-menu"
      style={
        {
          '--list-width': `${menuWidth}px`,
          '--active-strip-margin-x': `${activeStripMarginX}px`,
        } as React.CSSProperties
      }
    >
      <li className={pathname === '/about' ? 'menu-item active' : 'menu-item'}>
        <Link href="/about" className="menu-link">
          Company
        </Link>
      </li>
      <li className={pathname === '/career' ? 'menu-item active' : 'menu-item'}>
        <Link href="/career" className="menu-link">
          Career
        </Link>
      </li>
      <li className={pathname === '/contact' ? 'menu-item active' : 'menu-item'}>
        <Link href="/contact" className="menu-link">
          Contact
        </Link>
      </li>
      <li
        className="active-strip"
        style={{
          marginInlineStart: `${activeStripMarginX}px`,
          opacity: activeStripOpacity,
          transition: 'all 0.3s ease',
        }}
      ></li>
    </ul>
  );
}

export default Menu;
