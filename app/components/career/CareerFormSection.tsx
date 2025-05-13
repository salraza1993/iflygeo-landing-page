import React from 'react'
import CareerForm from './CareerForm'

function CareerFormSection() {
  return (
    <section className='career-from-section'>
      <div className="career-form-wrapper">
        <div className="content-wrapper">
          <div className="content">
            <h3 className="gilroy_light heading">
              We value <br />
              <strong>
                innovation + <br />
                collaboration + <br />
                execution
              </strong>
            </h3>
            <p>Feel free to drop your CV, <br /> We&#39;ll get back to you soon...</p>
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