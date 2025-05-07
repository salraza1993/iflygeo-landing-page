import Image from "next/image"
import Link from "next/link"

function HighlightSection() {
  return (
    <section className="product-highlight-section">
      <div className="content-block-wrapper">
        <div className="content-block">
          <div className="icon">
            <Image src="/images/development.png" alt="Globe" fill />
          </div>
          <div className="content">
            <h6 className="gilroy_bold text-accent">Faster Development</h6>
            <p className="fw-bold">Time-to-value in weeks</p>
            <small className="fw-light text-balance">
              Our solutions are purpose-built for easy deployment and configuration, so you can get started quickly and see the revenue and profit benefits sooner.
            </small>
          </div>
        </div>
        <div className="content-block">
          <div className="icon">
            <Image src="/images/ux-ui.png" alt="API" fill />
          </div>
          <div className="content">
            <h6 className="gilroy_bold text-accent">Seamless UX/UI Design</h6>
            <p className="fw-bold">Intuitive booking tools, minimal training</p>
            <small className="fw-light text-balance">
              With our web-based portals, it’s   simple for airlines to customize and target offers and showcase  exciting content and for travel sellers to browse, compare and sell a full range of products and services.
            </small>
          </div>
        </div>
        <div className="content-block">
          <div className="icon">
            <Image src="/images/innovation.png" alt="Certificate" fill 	priority />
          </div>
          <div className="content">
            <h6 className="gilroy_bold text-accent">Innovation for the future</h6>
            <p className="fw-bold">Smart pricing and content engines</p>
            <small className="fw-light text-balance">
              Airlines can distribute flight,  and ancillary offers across all channels  and leave legacy PSS behind. Travel sellers can take control of sales with configurable content and margin.
            </small>
          </div>
        </div>
      </div>
      <div className="cta-button-block">
        <Link href="/register" className="button button--primary" data-icon="end">
          <span className="btn-text">Launch Your Travel Business</span>
          <span className="icon">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
    </section>
  )
}

export default HighlightSection