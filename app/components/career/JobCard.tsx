import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type CardDataType = {
  title: string,
  id: string,
  imagePath: string,
  experience: string
  vacancy: number
  location: string,
  postedOn: string,
}
type Props = {
  data: CardDataType;
};
function JobCard({data}: Props) {
  return (
    <div className='job-card'>
      <span className="strip-start"></span>
      <span className="strip-end"></span>
      <div className="pattern"></div>
      <div className="card-banner">
        <Image src={data.imagePath} alt={data.title} fill />
      </div>
      <div className="card-content">
        <h5 className="gilroy_bold text-accent">{data.title}</h5>
        <ul className="list">
          <li className="list-item">
            <span className="label">Experience:</span>
            <span className="value fw-bold">{data.experience}</span>
          </li>
          <li className="list-item">
            <span className="label">Vacancy:</span>
            <span className="value fw-bold">{data.vacancy >= 9 ? data.vacancy : `0${data.vacancy}` }</span>
          </li>
          <li className="list-item">
            <span className="label">Location:</span>
            <span className="value fw-bold">{data.location}</span>
          </li>
          <li className="list-item">
            <span className="label">Posted On:</span>
            <span className="value fw-bold">{data.postedOn.split(',')[0]}</span>
          </li>
        </ul>
      </div>
      <div className="card-footer">
        <button className='button button--transparent' data-icon="start">
          <span className="icon"><i className="fa-solid fa-circle-info"></i></span>
          <span>View Info</span>
        </button>
        <Link href={'#careerForm'} className='button button--primary' data-icon="end">
          <span>Apply Now</span>
          <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
        </Link>
      </div>
    </div>
  )
}

export default JobCard