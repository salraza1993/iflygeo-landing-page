'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function MobileContactButtons() {
  const [viewport, setViewport] = useState<number>(0);  
  useEffect(() => {
    const handleResize = () => setViewport(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return ((viewport < 768) &&
    <div className="mobile-contact-buttons">
      <Link href={'/register'} className="button button--register" data-icon="start">
        <span className="icon"><i className="fa-solid fa-user-tie"></i></span>
        <span>Register Now</span>
      </Link>
      <button className="button button--whatsapp" data-icon="start">
        <span className="icon"><i className="fa-brands fa-whatsapp"></i></span>
        <span>Let&#39;s Talk</span>
      </button>
    </div>
  )
}
