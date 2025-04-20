'use client'
import Image from "next/image";
import { useState } from "react";

function SuppliersSection() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [logosStrip1, setLogosStrip1] = useState([19, 18, 17, 16, 15, 14, 13, 12, 11,]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [logosStrip2, setLogosStrip2] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <section className="airline-logo-section">
      <div className="content-wrapper">        
        <div className="logo-carousel-wrapper">
          <div className="infinite-scroll-wrapper">
            <ul className="list" style={{ '--quantity': `${logosStrip1.length}`, '--animeTime': '60s' } as React.CSSProperties}>
              {
                logosStrip1.map((logo, index) => (
                  <li key={index} className="list__item" style={{ '--index': index } as React.CSSProperties}>
                    <Image src={`/images/airlines/${logo}.svg`} alt={`logo-${logo}`} fill className="logo" />
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="infinite-scroll-wrapper">
            <ul className="list reversed" style={{ '--quantity': `${logosStrip2.length}`, '--animeTime': '60s' } as React.CSSProperties}>
              {
                logosStrip2.map((logo, index) => (
                  <li key={index} className="list__item" style={{ '--index': index } as React.CSSProperties}>
                    <Image src={`/images/airlines/${logo}.svg`} alt={`logo-${logo}`} fill className="logo" />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuppliersSection