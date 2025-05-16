import Image from 'next/image'

function ExtraSection() {
  return (
    <section className="extra-section">
      <div className="extra-section-wrapper">
        <span className="strip-start"></span>
        <div className="content">
          <div className="image">
            <Image src={'/images/girl-sitting.png'} alt={'Girl Sitting'} fill  />
          </div>
          <div className="text">
            <h4 className="gilroy_light">If you&#39;d love to impress thousands of minds and think you may meet our requirements.</h4>
            <h4 className="gilroy_bold text-accent">Get the ball rolling today!</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtraSection