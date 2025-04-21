
function CopyWriteStrip() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-copy-write">
      <div className="footer-copy-write-wrapper">
        <div className="start-block">
          <small>© {currentYear} <strong>IFlyGeo</strong> &nbsp;&nbsp; | &nbsp;&nbsp; All rights reserved</small>
        </div>
        <div className="end-block">
          <small>Stay connected:</small>
          <ul className="social-list">
            <li className="social-list-item">
              <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
            </li>
            <li className="social-list-item">
              <a href="https://x.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
            </li>
            <li className="social-list-item">
              <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            </li>
            <li className="social-list-item">
              <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default CopyWriteStrip