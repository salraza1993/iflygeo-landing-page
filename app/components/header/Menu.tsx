'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState, useCallback } from 'react';

type MenuListType = {
  label: string,
  path: string,
  isActive: boolean,
}

function Menu() {
  const pathname = usePathname();
  const menuWidth = 110;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeMenu, setActiveMenu] = useState(pathname);
  const [activeStripMarginX, setActiveStripMarginX] = useState(0);
  const [activeStripOpacity, setActiveStripOpacity] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menuList, setMenuList] = useState<MenuListType[]>([
    { label: 'Company', path: '/company', isActive: false },
    { label: 'Career', path: '/career', isActive: false },
    { label: 'contact', path: '/contact', isActive: false }
  ]);

  const updateStripPosition = useCallback(() => {
    switch (pathname) {
      case '/company':
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
      {
        menuList.map((menu: MenuListType, index: number) => {
          return <li key={index} className={pathname === menu.path ? 'menu-item active' : 'menu-item'}>
            <Link href={menu.path} className="menu-link">{menu.label}</Link>
          </li>
        })
      }
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
