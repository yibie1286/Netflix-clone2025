import React from 'react';
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        {/* Left side: Social Icons + About section */}
        <div className="footer-icons">
          <ul className="social-icons">
            <li><FacebookIcon /></li>
            <li><InstagramIcon /></li>
            <li><YouTubeIcon /></li>
          </ul>
          <div className="footer-links-below">
            <ul>
              <li>About</li>
              <li>Newsroom</li>
              <li>Investor Relations</li>
            </ul>
          </div>
        </div>

        {/* Other footer link sections */}
        <div className="footer-data">
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Privacy</li>
              <li>Legal Notices</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom part */}
      <div className="footer-bottom">
          <div className="service-code">Service Code</div>
          <div className="copy-write">&copy; 1997-2025 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
