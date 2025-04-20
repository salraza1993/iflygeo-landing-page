'use client'
import Image from 'next/image'
import { useState } from 'react'

type CardDataTypes = {
  counter: string, 
  iconPathName: string,
  text: string
}

function AchievementsSections() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cardData, setCardData] = useState<CardDataTypes[]>([
    {
      counter: '100+', 
      iconPathName: 'icon-achievement-1',
      text: 'Countries and Regions Covered'
    },
    {
      counter: '650+', 
      iconPathName: 'icon-achievement-2',
      text: 'Bookable Airlines, including 400+ Full Services Carriers 200+ Low cost Carriers'
    },
    {
      counter: '550+', 
      iconPathName: 'icon-achievement-3',
      text: 'Hotel with 5 stars (⭐⭐⭐⭐⭐)'
    },
    {
      counter: '2.5K+', 
      iconPathName: 'icon-achievement-4',
      text: 'Active Clients'
    },
  ]);
  return (
    <section className='achievement-section'>
      <div className="achievement-wrapper">
        <div className="cards-container">
          {
            cardData.map((item: CardDataTypes, index: number) => {
              return <div className="achievement-card" key={index}>
                <div className="icon">
                  <Image src={`/images/${item.iconPathName}.png`} alt={item.iconPathName} fill />
                </div>
                <div className="content">
                  <h4 className="">{item.counter}</h4>
                  <small>{ item.text }</small>
                </div>
              </div>
            })
          }

        </div>
      </div>
    </section>
  )
}

export default AchievementsSections