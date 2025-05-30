import React from 'react';
import './Footer.css';
import FacebookIcon from '../assets/facebook.jpg';
import TwitterIcon from '../assets/twitter.jpg';
import InstagramIcon from '../assets/instagram.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Add real newsletter subscription logic
    alert('Thank you for subscribing to CradleCare updates!');
  };

  return (
    <footer className="footer">
      <p>&copy; {currentYear} CareNest. All rights reserved.</p>

      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
        <a href="/contact">Contact Us</a>
        <a href="/faqs">FAQs</a> {/* ✅ Added FAQ link */}
      </div>

      <div className="social-icons" aria-label="social media links">
        <a href="https://facebook.com/cradlecare" target="_blank" rel="noreferrer" aria-label="Facebook">
          <img src={FacebookIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="https://twitter.com/cradlecare" target="_blank" rel="noreferrer" aria-label="Twitter">
          <img src={TwitterIcon} alt="Twitter" className="social-icon" />
        </a>
        <a href="https://instagram.com/cradlecare" target="_blank" rel="noreferrer" aria-label="Instagram">
          <img src={InstagramIcon} alt="Instagram" className="social-icon" />
        </a>
      </div>

      <div className="newsletter">
        <form onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            name="newsletterEmail"
            placeholder="Enter your email to subscribe"
            aria-label="Email for newsletter"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
