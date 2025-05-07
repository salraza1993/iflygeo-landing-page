'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';

type MenuListType = {
  label: string;
  path: string;
};

function Menu() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuWidth = 110;
  const [viewport, setViewport] = useState<number>(0);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeStripMarginX, setActiveStripMarginX] = useState(0);
  const [activeStripOpacity, setActiveStripOpacity] = useState(1);

  const menuList: MenuListType[] = useMemo(() => [
    { label: 'Company', path: '/company' },
    { label: 'Career', path: '/career' },
    { label: 'Contact', path: '/contact' }
  ], []);

  const updateStripPosition = useCallback(() => {
    const index = menuList.findIndex(menu => menu.path === pathname);
    if (index >= 0) {
      setActiveStripMarginX(index * menuWidth);
      setActiveStripOpacity(1);
    } else {
      setActiveStripOpacity(0);
    }
  }, [pathname, menuList]);

  useEffect(() => {
    updateStripPosition();
  }, [pathname, updateStripPosition]);

  useEffect(() => {
    const handleResize = () => setViewport(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ( showMenu && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);
  return (
    <div className="menu-wrapper" ref={menuRef}>
      {viewport <= 1024 && (
        <button
          className={`more-menu-icon ${showMenu ? 'active' : ''}`}
          onClick={() => setShowMenu(!showMenu)}
          aria-expanded={showMenu}
          aria-controls="main-navigation"
          aria-label="Toggle navigation menu"
        >
          <i className={`fa-solid fa-ellipsis-${showMenu ? 'h' : 'v'}`}></i>
        </button>
      )}

      <ul
        className={`top-menu ${(showMenu && viewport <= 1024) ? 'active' : 'hidden'}`}
        style={{'--list-width': `${menuWidth}px`,'--active-strip-margin-x': `${activeStripMarginX}px`} as React.CSSProperties}
      >
        {menuList.map((menu, index) => (
          <li key={index} className={`menu-item ${pathname === menu.path ? 'active' : ''}`}>
            <Link href={menu.path} className="menu-link" onClick={() => viewport <= 1024 && setShowMenu(false)}>
              {menu.label}
            </Link>
          </li>
        ))}
        {viewport > 1024 && (
          <li
            className="active-strip"
            style={{
              marginInlineStart: `${activeStripMarginX}px`,
              opacity: activeStripOpacity,
              transition: 'all 0.3s ease',
            }}
          ></li>
        )}
      </ul>
    </div>
  );
}

export default Menu;
