'use client';
import { useState } from "react";
import JobCard, { CardDataType } from "./JobCard"


function CurrentOpening() {
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cardData, setCardData] = useState<CardDataType[]>([
    {
      title: 'Backend Developer',
      id: 'backendDeveloper',
      imagePath: '/images/logo-backend.png',
      experience: '3 to 5 years',
      vacancy: 1,
      location: 'Dubai',
      postedOn: new Date().toLocaleString()
    },
    {
      title: 'Front-end Developer',
      id: 'frontendDeveloper',
      imagePath: '/images/logo-designer.png',
      experience: '3 to 5 years',
      vacancy: 1,
      location: 'Dubai',
      postedOn: new Date().toLocaleString()
    },
    {
      title: 'SEO Specialist',
      id: 'seoSpecialist',
      imagePath: '/images/logo-seo.png',
      experience: '3 to 5 years',
      vacancy: 1,
      location: 'Dubai',
      postedOn: new Date().toLocaleString()
    }
  ])
  return (
    <section className="current-opening-section">
      <div className="content-opening-wrapper">
        <span className="strip-start"></span>
        <div className="heading">
          <h3 className="gilroy_bold">Current Opening</h3>
        </div>
        <div className="current-opening-list">
          {
            cardData.map((card: CardDataType, index: number) => <JobCard key={index} data={card} />)
          }
        </div>
      </div>
    </section>
  )
}

export default CurrentOpening