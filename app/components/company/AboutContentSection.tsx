import Image from 'next/image'
import React from 'react'

function AboutContentSection() {
  return (
    <section className='about-content-section'>
      <span className="strip-start"></span>
      <div className="about-content-wrapper">
        <div className="thumbnail-container">
          <Image src={'/images/about-image.png'} alt={'About Thumbnail'} fill />
        </div>
        <div className="content-block">
          <small className='text-accent fw-bold'>who we are</small>
          <h3 className="gilroy_bold">We Power Smarter Air Travel Sales</h3>
          <p>
            <strong>IFlyGEO</strong> is a next-generation travel aggregator, built to unify multiple content sources into one seamless, customer-centric air-selling experience.
          </p>
          <p>Our mission is to simplify complexity and help businesses sell smarter, faster, and better.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutContentSection