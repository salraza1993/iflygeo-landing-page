import Image from "next/image"

function HeroSection() {
  return (
    <section className='hero-section'>
      <div className="pattern"></div>
      <div className="hero-content-wrapper">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box"></div>
        <div className="hero-content">
          {/* <span className="strip-start"></span>
          <span className="strip-end"></span> */}
          <h2 className="heading gilroy_thin">
            Enhance Your <strong>Travel Business</strong> with seamless <strong> ✈️ Flight  🛏️ and Hotel </strong> Solutions
          </h2>
          <div className="down-arrow">
            <Image src="/images/down-arrow.png" alt="down-arrow" fill />
          </div>
        </div>
      </div>
      <div className="sub-content">
        <h5 className="fw-ultra-light">
          Access a vast network of airlines and hotel properties worldwide through our seamless <strong>B2B platform</strong>.
        </h5>
      </div>
    </section>
  )
}

export default HeroSection