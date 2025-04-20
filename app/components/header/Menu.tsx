'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

function Menu() {
  const pathname = usePathname();
  let activeStripMarginX = 0;
  let activeStripOpacity = 1;
  let menuWidth = 110;
  const [activeMenu, setActiveMenu] = React.useState(pathname);
  
  const setActiveStripMarginX = ():void => { 
    if (pathname == "/about") {
      activeStripMarginX = 0;
    } else if (pathname == "/career") {
      activeStripMarginX = menuWidth;
    } else if (pathname == "/contact") {
      activeStripMarginX = menuWidth * 2;
    } else {
      activeStripOpacity = 0;
    }
  }

  setActiveStripMarginX();
  useEffect(() => {
    setActiveStripMarginX();
  }, [activeMenu]);

  return (
    <ul className='top-menu'
      style={{ '--list-width': `${menuWidth}px`, '--active-strip-margin-x': `${activeStripMarginX}px` } as React.CSSProperties}>
      <li className={pathname == "/about" ? "menu-item active" : "menu-item"}>
        <Link href="/about" className='menu-link'>Company</Link>
      </li>
      <li className={pathname == "/career" ? "menu-item active" : "menu-item"}>
        <Link href="/career" className='menu-link'>Career</Link>
      </li>
      <li className={pathname == "/contact" ? "menu-item active" : "menu-item"}>
        <Link href="/contact" className='menu-link'>Contact</Link>
      </li>
      <li className="active-strip" style={{ marginInlineStart: `${activeStripMarginX}px`, opacity: activeStripOpacity }}></li>
    </ul>
  )
}

export default Menu