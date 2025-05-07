import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductSection() {
  return (
    <section className='about-product-section'>
      <div className="about-product-wrapper">
        <div className="section-header">
          <h3 className="gilroy_bold text-accent">
            Power Your Travel Business, Your Way
          </h3>
          <p>Choose the solution that fits your needs - whether you&#39;re building a <strong>booking platform</strong> or integrating with powerful travel <strong>APIs</strong>.</p>
        </div>
        <div className="product-card-wrapper">
          <div className="product-card stp-card">
            <span className="strip-start"></span>
            <span className="strip-end"></span>
            <div className="content">
              <div className="block-logo">
                <Image src="/images/logo-stp.svg" alt="STP Logo" fill />
              </div>
              <div className="text">
                <h4 className="heading">Launch your own travel booking platform in no time.</h4>
                <p>
                  With STP, get access to global inventory of flights, hotels, and activities through a user-ready portal. Branded, responsive, and built for conversions-no tech team required.
                </p>
              </div>
            </div>
          </div>
          <div className="product-card sta-card">
            <span className="strip-start"></span>
            <span className="strip-end"></span>
            <div className="content">
              <div className="block-logo">
                <Image src="/images/logo-sta.svg" alt="STA Logo" fill />
              </div>
              <div className="text">
                <h4 className="heading">Seamless travel content integration for your app or platform.</h4>
                <p>
                  STA provides developers and agencies with powerful APIs to connect directly to our global travel supply. Build your own flow, keep your own UI, and scale with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="support-block">
          <div className="icon">
            <Image src="/images/support-avatar.png" alt="Support Avatar" fill />
          </div>
          <div className="content">
            <h5 className="gilroy_bold text-balance">Launch Your Travel Business Today</h5>
            <Link href="/register" className="button button--accent" data-icon="end">
              <span className="btn-text">Get Started</span>
              <span className="icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection