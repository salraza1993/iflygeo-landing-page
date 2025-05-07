import React from 'react'
import SquarePattern from '../shared/SquarePattern'
import Image from 'next/image'

function HeroSection() {
  return (
    <section className='about-hero-section'>
      <SquarePattern />
      <div className="hero-content-wrapper">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box"></div>
        <div className="hero-content">
          <h1 className="heading gilroy_ultra-light">
            Redefining <strong className='text-accent'>Air Travel</strong> <strong className="text-primary">Distribution</strong>
          </h1>
          <div className="team-avatars">
            <Image src={'/images/team-avatars.png'} alt={'Team Avatars'} fill />
          </div>
        </div>
        <div className="direction-arrow">
          <Image src="/images/direction-arrow-right.png" alt="Direction Arrow" fill />
        </div>
      </div>
      <div className="sub-content">
        <h4 className="fw-ultra-light fw-thin">
          We simplify air distribution with <strong>flexible, scalable, and cost-effective</strong> solutions for airlines and travel sellers.
        </h4>
      </div>
    </section>
  )
}

export default HeroSection