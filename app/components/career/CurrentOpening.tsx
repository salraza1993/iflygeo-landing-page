'use client';
import { useState } from "react";
import JobCard from "./JobCard"
import currentOpening from '@/app/data/CurrentOpening.json';
import { JobCardDataTypes } from "@/app/Interfaces/JobDetailsTypes";

function CurrentOpening() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cardData, setCardData] = useState<JobCardDataTypes[]>(currentOpening)
  return (
    <section className="current-opening-section">
      <div className="content-opening-wrapper">
        <span className="strip-start"></span>
        <div className="heading">
          <h3 className="gilroy_bold">Current Opening</h3>
        </div>
        <div className="current-opening-list">
          {
            cardData.map((card: JobCardDataTypes, index: number) => <JobCard key={index} data={card} />)
          }
        </div>
      </div>
    </section>
  )
}

export default CurrentOpening