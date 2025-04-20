import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CodeEditor from './CodeEditor'

function ProductSection() {
  return (
    <section className='product-section'>
      <div className="section-header">
        <h3 className="gilroy_bold">
          Power Your Travel Business, Your Way
        </h3>
        <p>Choose the solution that fits your needs - whether you&#39;re building a <strong>booking platform</strong> or integrating with powerful travel <strong>APIs</strong>.</p>
      </div>
      <div className="section-content">
        <div className="product-tab-header">
          <a href='#tab-1' className="tab-item h6 active" tabIndex={0}>Smart Travel Portal (STP)</a>
          <a href='#tab-2' className="tab-item h6" tabIndex={0}>Smart Travel API (STA)</a>
        </div>
        <div className="product-tab-data-wrapper">
          <div className="tab-1" id="stp">
            <div className="product-detail-block stp-block">
              <span className="strip-start"></span>
              <span className="strip-end"></span>
              <div className="block-header">
                <div className="block-start">
                  <div className="block-logo">
                    <Image src="/images/logo-stp.svg" alt="STP Logo" fill />
                  </div>
                  <div className="content">
                    <h4 className="heading">Launch your own travel booking platform in no time.</h4>
                    <p>
                      With STP, get access to global inventory of flights, hotels, and activities through a user-ready portal. Branded, responsive, and built for conversions-no tech team required.
                    </p>
                  </div>
                </div>
                <div className="block-end">
                  <div className="product-screenshot">
                    <Image src="/images/dashboard-ui.svg" alt="STP Screenshot" fill />
                  </div>
                </div>
              </div>
              <div className="block-content">
                <ul className="points">
                  <li className="points-item">
                    <div className="icon">
                      <Image src="/images/icon-source.png" alt="Source" fill />
                    </div>
                    <div className="content">
                      <h6 className="point-title">Efficient & Dependable</h6>
                      <ul className="list">
                        <li className="list-item small">
                          Comprehensive air connectivity across NDC, LCC, GDS, and a Consolidator Marketplace
                        </li>
                        <li className="list-item small">Unified access through a single robust API</li>
                      </ul>
                    </div>
                  </li>
                  <li className="points-item">
                    <div className="icon">
                      <Image src="/images/icon-selling.png" alt="Source" fill />
                    </div>
                    <div className="content">
                      <h6 className="point-title">Sales Optimization</h6>
                      <ul className="list">
                        <li className="list-item small">Manage offers and orders efficiently</li>
                        <li className="list-item small">Optimize channels, incentives, and revenue streams</li>
                      </ul>
                    </div>
                  </li>
                  <li className="points-item">
                    <div className="icon">
                      <Image src="/images/icon-services.png" alt="Source" fill />
                    </div>
                    <div className="content">
                      <h6 className="point-title">Comprehensive Services</h6>
                      <ul className="list">
                        <li className="list-item small">Streamlined offer and order management</li>
                        <li className="list-item small">Enhanced optimization of channels, incentives, and revenue</li>
                      </ul>
                    </div>
                  </li>
                  <li className="support-block">
                    <div className="icon">
                      <Image src="/images/support-avatar.png" alt="Support Avatar" fill />
                    </div>
                    <h6 className="">Launch Your Travel Business Today</h6>
                    <Link href="/register" className="button button--accent" data-icon="end">
                      <span className="btn-text">Get Started</span>
                      <span className="icon">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-2" id="sta">
            <div className="product-detail-block sta-block">
              <span className="strip-start"></span>
              <span className="strip-end"></span>
              <div className="block-header">
                <div className="block-start">
                  <div className="block-logo">
                    <Image src="/images/logo-sta.svg" alt="STA Logo" fill />
                  </div>
                  <div className="content">
                    <h4 className="heading">Seamless travel content integration for your app or platform.</h4>
                    <p>
                      STA provides developers and agencies with powerful APIs to connect directly to our global travel supply. Build your own flow, keep your own UI, and scale with confidence.
                    </p>
                  </div>
                </div>
                <div className="block-end">
                  <div className="sta-points-block">
                    <ul className="points">
                      <li className="points-item">
                        <div className="icon">
                          <Image src="/images/sta-icon-1.png" alt="Source" fill />
                        </div>
                        <div className="content">
                          <h6 className="point-title">Unified Response from Multiple Sources</h6>
                        </div>
                      </li>
                      <li className="points-item">
                        <div className="icon">
                          <Image src="/images/sta-icon-2.png" alt="Source" fill />
                        </div>
                        <div className="content">
                          <h6 className="point-title">Customizable Business Rules and Control</h6>
                        </div>
                      </li>
                      <li className="points-item">
                        <div className="icon">
                          <Image src="/images/sta-icon-3.png" alt="Source" fill />
                        </div>
                        <div className="content">
                          <h6 className="point-title">Real-Time Alerts and Performance Monitoring</h6>
                        </div>
                      </li>
                      <li className="support-block">
                        <div className="icon">
                          <Image src="/images/support-avatar.png" alt="Support Avatar" fill />
                        </div>
                        <h6 className="">Launch Your Travel Business Today</h6>
                        <Link href="/register" className="button button--accent" data-icon="end">
                          <span className="btn-text">Get Started</span>
                          <span className="icon">
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="block-content">
                <CodeEditor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection