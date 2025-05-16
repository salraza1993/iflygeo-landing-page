import React from 'react'
import CareerForm from '../../career/CareerForm'

function CareerFormSection() {
  return (
    <section className='career-from-section' id="careerForm">
      <div className="career-form-wrapper">
        <div className="content-wrapper">
          <div className="content">
            <div className="text">
              <h3 className="gilroy_ultra-light heading">
                We value <br />
                <strong>
                  <span className="text-primary">Innovation</span> <span className='text-accent'>+</span> <br />
                  <span className="text-primary">Collaboration</span> <span className='text-accent'>+</span> <br />
                  <span className="text-primary">Execution</span>
                </strong>
              </h3>
              <p>Feel free to drop your CV, <br /> We&#39;ll get back to you soon...</p>
            </div>
          </div>
          <div className="form-container">
            <CareerForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerFormSection