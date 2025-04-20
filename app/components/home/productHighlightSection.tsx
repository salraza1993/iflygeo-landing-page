import Image from "next/image"
import Link from "next/link"

function ProductHighlightSection() {
  return (
    <section className="product-highlight-section">
      <div className="content-block-wrapper">
        <div className="content-block">
          <div className="icon">
            <Image src="/images/globe.png" alt="Globe" fill />
          </div>
          <div className="content">
            <h6 className="gilroy_bold">Worldwide Inventory Hub</h6>
            <small className="">
              Get instant access to a wide range of flights, hotels, tours, and activities-sourced from trusted travel providers around the world. Everything you need, all in one place
            </small>
          </div>
        </div>
        <div className="content-block">
          <div className="icon">
            <Image src="/images/api.png" alt="API" fill />
          </div>
          <div className="content">
            <h6 className="gilroy_bold">Effortless API Integration</h6>
            <small className="">
              Our APIs are simple to connect, developer-friendly, and built for fast deployment-so you can launch your travel services quickly and start earning without delay.
            </small>
          </div>
        </div>
        <div className="content-block">
          <div className="icon">
            <Image src="/images/certificate.png" alt="Certificate" fill />
          </div>
          <div className="content">
            <h6 className="gilroy_bold">No Accreditation? No Problem.</h6>
            <small className="">
              You don’t need IATA or other certifications to get started. We manage all supplier partnerships so you can focus on selling and growing your business with ease.
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

export default ProductHighlightSection