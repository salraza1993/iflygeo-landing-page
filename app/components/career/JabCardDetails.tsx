'use client'
import { useJobDetails } from "@/app/context/JobDetailsContext";
import Image from "next/image"
import Link from "next/link"

function JabCardDetails() {
  const { jobDetailsData, isVisible, hideJobDetails } = useJobDetails();
  if (!isVisible || !jobDetailsData) return null;
  return (
    <section className="job-details-overlay" onClick={hideJobDetails}>
      <div className="job-details-content-wrapper" onClick={e => e.stopPropagation()}>
        <div className="close-button" onClick={hideJobDetails}><i className="fa-solid fa-xmark"></i></div>
        <div className="job-details-header">
          <div className="logo">
            <Image src={jobDetailsData.imagePath} alt={jobDetailsData.title} fill />
          </div>
          <div className="heading">
            <h3 className="gilroy_bold title">{jobDetailsData.title}</h3>
          </div>
        </div>
        <div className="small-strip">
          <h6 className="gilroy_bold title">Job Overview</h6>
          <small className="fw-bold">{jobDetailsData.postedOn}</small>
        </div>
        <div className="job-details-body">
          <div className="content" dangerouslySetInnerHTML={{__html: jobDetailsData.content}}>
            {/* <div>
              <p>We are seeking a skilled and dedicated Back-end Developer to join our development team. As a Back-end Developer, you will be responsible for designing, developing, and maintaining server-side applications and databases. Your primary focus will be on ensuring the smooth operation and scalability of our web applications, APIs, and data management systems.</p>
              <p><strong>Responsibilities:</strong></p>
              <ul>
                <li>Collaborate with the front-end development team and other stakeholders to understand project requirements and translate them into efficient and secure back-end solutions.</li>
                <li>Design and develop server-side applications and APIs using appropriate programming languages and frameworks (e.g., Node.js, Python, Ruby on Rails, Django).</li>
                <li>Build and maintain efficient and reliable databases and data storage solutions (e.g., SQL, NoSQL, MongoDB, MySQL) to handle large amounts of data securely.</li>
                <li>Optimize application performance by implementing caching mechanisms, database indexing, and query optimization techniques.</li>
                <li>Implement and maintain robust security measures to protect the back-end systems from vulnerabilities and potential threats.</li>
                <li>Conduct thorough testing and debugging to identify and fix issues and ensure the stability and reliability of the back-end infrastructure.</li>
                <li>Collaborate with DevOps and infrastructure teams to deploy applications to production environments and ensure seamless integration with the infrastructure components.</li>
                <li>Monitor system performance and proactively identify areas for optimization and improvement, making recommendations for scalability and efficiency enhancements.</li>
                <li>Stay up-to-date with the latest back-end development trends, technologies, and best practices, and propose innovative solutions to enhance the overall development process.</li>
              </ul>
              <p><strong>Requirements:</strong></p>
              <ul>
                <li>Proven work experience as a Back-end Developer or similar role, with a strong portfolio of back-end development projects.</li>
                <li>Proficient in one or more back-end programming languages such as Node.js, Python, Ruby, Java, or PHP.</li>
                <li>Experience with back-end frameworks and technologies (e.g., Express.js, Django, Ruby on Rails) to develop scalable and maintainable server-side applications.</li>
                <li>Strong understanding of database management systems (SQL and/or NoSQL), with the ability to design and optimize database schemas, write complex queries, and handle data efficiently.</li>
                <li>Familiarity with RESTful API development and integration, including authentication mechanisms and data exchange formats (e.g., JSON, XML).</li>
                <li>Knowledge of version control systems (e.g., Git) and experience with collaborative development workflows using tools like GitHub or Bitbucket.</li>
                <li>Understanding of software development principles, coding standards, and best practices for efficiency, maintainability, and scalability.</li>
                <li>Excellent problem-solving skills and ability to analyze and debug complex issues in a timely manner.</li>
                <li>Strong communication and collaboration skills, with the ability to work effectively within a team environment.</li>
                <li>Bachelor&#39;s degree in Computer Science, Engineering, or a related field is preferred.</li>
              </ul>
              <p>Join our talented and dynamic development team and contribute to building robust and scalable back-end solutions that power our web applications. If you are passionate about back-end development, have a strong attention to detail, and thrive in a fast-paced environment, we would love to hear from you.</p>
            </div> */}
          </div>
        </div>
        <div className="job-details-footer">
          <Link href="/career#career-form" onClick={() => hideJobDetails()}
            className="button button--accent button--lg shadow max-width--max-content"
            data-icon="end">
            <span className="">Apply Now</span>
            <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
          </Link>
          <span className="separator"></span>
          <p className="m-0 d-flex flex-column gap-1">
            <small>or send your cv/resume at:<br /></small>
            <a className="fw-bold d-flex text-decoration-none text-accent" href="mailto:career@iflygeo.com">
              career@iflygeo.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default JabCardDetails