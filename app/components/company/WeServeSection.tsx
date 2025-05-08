import Image from 'next/image';
import React from 'react'

function WeServeSection() {
  return (
    <section className='we-serve-section'>
      <div className="section-image">
        <Image src={'/images/airplane-bg.jpg'} alt={'Airplane Image'} fill />
      </div>
      <div className="we-serve-wrapper">
        <div className="content">
          <small className='text-accent fw-bold'>whom we serve</small>
          <h3 className="gilroy_bold">
            Trusted by Travel Sellers Around the Globe
          </h3>
          <p>
            We support a wide network of online travel agencies (OTAs), tour operators, and wholesalers—alongside closed user groups like <strong>loyalty programs, concierge services,</strong> and <strong>emerging fintech platforms transforming the travel experience</strong>.
          </p>
        </div>
      </div>
      <div className="note-wrapper">
        <small className="note">
          <span>
            We have partnered with 25+ airlines to access their NDC content, over 200 Low Cost Carriers (LCCs), and all major GDS companies.
          </span>
        </small>
      </div>
    </section>
  )
}

export default WeServeSection;