import React from 'react'
import SquarePattern from '../shared/SquarePattern'

function HeroSection() {
  return (
    <section className='hero-section'>
      <SquarePattern />
      <div className="hero-content-wrapper">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box"></div>
        <div className="hero-content">
          <h2 className="heading gilroy_thin">
            Redefining <strong>Air Travel Distribution</strong>
          </h2>
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