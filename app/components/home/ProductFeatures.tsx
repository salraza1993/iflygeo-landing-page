import Image from 'next/image'
import React from 'react'
import PuzzleShapes from '../shared/PuzzleShapes'

function ProductFeatures() {
  return (
    <section className='product-features-section'>
      <span className="strip-start"></span>
      <div className="pattern"></div>
      <div className="product-features-wrapper">
        <div className="highlighted-strip">
          <div className="executive-avatar">
            <Image src={'/images/executive-avatar.png'} alt={'executive avatar'} fill />
          </div>
          <h3 className="heading gilroy_bold">
            Getting Started with Air Travel Sales?
            <div className="direction-arrow">
              <Image src="/images/direction-arrow.png" alt="Direction Arrow" fill />
            </div>
          </h3>
          <div className="content">
            <h4 className="sub-heading">We’ve Got You Covered</h4>
            <small className='text'>Everything you need to start and scale your flight-selling business-access to global airline inventory, easy API integrations, customizable business rules, automated workflows, and real-time performance tools-all delivered through one powerful, fully managed platform.</small>
          </div>
        </div>
        <div className="features-lists-wrapper">
          <div className="features-lists">
            <div className="features-list">
              <PuzzleShapes />
              <div className="icon"><Image src="/images/icon-features-1.png" alt="Icon-1" fill /></div>
              <h6>Online Travel Agencies</h6>
              <div className="hand-shape">
                <Image src={'/images/hand-1.svg'} alt={'Hand Shape'} fill />
              </div>
            </div>
            <div className="features-list">
              <PuzzleShapes />
              <div className="icon"><Image src="/images/icon-features-2.png" alt="Icon-2" fill /></div>
              <h6>Loyalty & Concierge Business</h6>
              <div className="hand-shape">
                <Image src={'/images/hand-2.svg'} alt={'Hand Shape'} fill />
              </div>
            </div>
            <div className="features-list">
              <PuzzleShapes />
              <div className="icon"><Image src="/images/icon-features-3.png" alt="Icon-3" fill /></div>
              <h6>Travel Technology Players</h6>
              <div className="hand-shape">
                <Image src={'/images/hand-2.svg'} alt={'Hand Shape'} fill />
              </div>
            </div>
            <div className="features-list">
              <PuzzleShapes />
              <div className="icon"><Image src="/images/icon-features-4.png" alt="Icon-4" fill /></div>
              <h6>Wholesalers and Aggregators</h6>
              <div className="hand-shape">
                <Image src={'/images/hand-2.svg'} alt={'Hand Shape'} fill />
              </div>
            </div>            
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductFeatures