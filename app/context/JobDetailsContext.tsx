'use client'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import jobDetailsJson from '@/app/data/JobDetails.json';
import { JobDetailsTypes } from '../Interfaces/JobDetailsTypes';


type JobDetailsContextType = {
  showJobDetailsById: (id: string) => void;
  hideJobDetails: () => void;
  jobDetailsData: JobDetailsTypes | null;
  isVisible: boolean;
};

const JobDetailsContext = createContext<JobDetailsContextType | undefined>(undefined);

export const JobDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [jobDetailsData, setJobDetailsData] = useState<JobDetailsTypes | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showJobDetailsById = (id: string) => {
    console.log(id);
    const job = jobDetailsJson.find((job) => job.id === id);
    if (job) {
      setJobDetailsData(job);
      setIsVisible(true);
    } else {
      console.warn(`Job with id ${id} not found`);
    }
  };

  const hideJobDetails = () => {
    setJobDetailsData(null);
    setIsVisible(false);
  };

  useEffect(() => {
    const body = document.body;
    if (isVisible) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }, [isVisible]);
  return (
    <JobDetailsContext.Provider value={{ showJobDetailsById, hideJobDetails, jobDetailsData, isVisible }}>
      {children}
    </JobDetailsContext.Provider>
  );
};

export const useJobDetails = () => {
  const context = useContext(JobDetailsContext);
  if (!context) {
    throw new Error('useJobDetails must be used within a JobDetailsProvider');
  }
  return context;
};
