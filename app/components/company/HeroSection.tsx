import React from 'react'
import SquarePattern from '../shared/SquarePattern'
import Image from 'next/image'

function HeroSection() {
  return (
    <section className='hero-section'>
      <SquarePattern />
      <div className="hero-content-wrapper">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box"></div>
        <div className="hero-content">
          <h2 className="heading gilroy_thin">
            Redefining <strong className='text-accent'>Air Travel</strong> <strong className="text-primary">Distribution</strong>
          </h2>
          <div className="team-avatars">
            <Image src={'/images/team-avatars.png'} alt={'Team Avatars'} fill />
          </div>
        </div>
      </div>
      <div className="sub-content">
        <h5 className="fw-ultra-light">
          We simplify air distribution with flexible, scalable, and cost-effective solutions for airlines and travel sellers.
        </h5>
      </div>
    </section>
  )
}

export default HeroSection