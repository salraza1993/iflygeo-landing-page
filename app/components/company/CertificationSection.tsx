'use client'
import Image from "next/image";
import { useState } from "react";

function CertificationSection() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [certificateList, setCertificateList] = useState<string[]>([
    '/images/certificate-icon-1.png',
    '/images/certificate-icon-2.png',
    '/images/certificate-icon-3.png',
    '/images/certificate-icon-4.png',
  ])
  return (
    <section className="certification-section">
      <div className="certification-wrapper">
        <div className="certificate-content">
          <div className="icon">
            <Image src={'/images/certificate-icon.png'} alt={'Certificate Icon'} fill />
          </div>
          <div className="content">
            <h3 className="gilroy_ultra-light">
              Certified & trusted by <strong className="text-accent">Industry Leaders</strong>
            </h3>
            <p>
              A trusted IATA strategic partner and certified technology provider, we empower the air transport industry with modern retailing solutions chosen by leading global airlines and travel sellers.
            </p>
            <ul className="certificate-list">              
              {
                certificateList.map((list: string, index: number) => {
                  return <li className="certificate-list_item" key={index}>
                    <Image src={list} alt={`certificate-list-${index}`} fill />
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationSection;