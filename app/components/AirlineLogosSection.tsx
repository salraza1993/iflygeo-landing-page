'use client'

import Image from "next/image";
import { useState } from "react";
type Props = {
  isTitleRequired?: boolean
}
function AirlineLogosSection({ isTitleRequired = true }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [logosStrip1, setLogosStrip1] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [logosStrip2, setLogosStrip2] = useState([11, 12, 13, 14, 15, 16, 17, 18, 19]);
  return (
    <section className="airline-logo-section">
      <span className="strip-start"></span>
      <div className="content-wrapper">
        {
          isTitleRequired && <div className="content-header">
          <h3 className="gilroy">Trusted by hundreds of <strong className="text-accent">Airlines</strong> in <strong className="text-accent">80+</strong> countries</h3>
        </div>
        }
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

export default AirlineLogosSection