import SquarePattern from '../shared/SquarePattern'
import Image from 'next/image'

function HeroSection() {
  return (
    <section className='career-hero-section'>
      <SquarePattern />
      <div className="hero-content-wrapper">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box"></div>
        <div className="hero-content">
          <h2 className="heading gilroy_ultra-light fs-h2">
            <strong>We&#39;re</strong> always looking for <strong>Talented People</strong>
          </h2>
          <div className="team-avatars">
            <Image src={'/images/career-hero-image.png'} alt={'Team Avatars'} fill />
          </div>
        </div>
      </div>
      <div className="sub-content">
        <h4 className="fw-ultra-light fw-thin">
          Don&#39;t see a suitable <strong>position</strong> that matches your <strong>expertise</strong>, but still <strong>interested?</strong>
        </h4>
        <a href="mailto:career@iflygeo.com" className="button button--primary" data-icon="end">
          <span className="btn-text">Connect Directly with Us</span>
          <span className="icon">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </a>
      </div>
    </section>
  )
}

export default HeroSection