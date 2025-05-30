import React, { useState } from 'react';
//import Header from './Header';
//import Footer from './Footer';
import FacebookIcon from '../assets/facebook.jpg';
import TwitterIcon from '../assets/twitter.jpg';
import './LoginPage.css';

const SignupPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', name: '', password: '', rememberMe: false });

  // Regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateInputs = () => {
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    if (!passwordRegex.test(formData.password)) {
      alert('Password must be at least 8 characters long and include a letter, number, and special character.');
      return false;
    }
   
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    setLoading(true);

    setTimeout(() => {
      console.log('Submitted Data:', formData);
      setLoading(false);

      if (formData.email === 'test@cradlecare.com' && formData.password === 'Test@1234') {
        alert('Login successful!');
        // Redirect or additional logic here
      } else {
        alert('Login failed: Incorrect email or password.');
      }
    }, 2000);
  };

  const handlePasswordReset = () => {
    if (!formData.email) {
      alert('Please enter your email address to reset your password.');
      return;
    }

    console.log(`Password reset requested for: ${formData.email}`);
    alert(`If an account with ${formData.email} exists, a password reset link will be sent.`);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      
      <main className="login-container">
        <h2>Welcome to CareNest</h2>
        <p>Please Create account to personalize your care dashboard.</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
           <input
            type="text"
            name="name"
            placeholder="Mom's Name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Email address"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Email address"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            aria-label="Password"
          />

          <label className="remember-me">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              aria-label="Remember Me"
            />
            Remember me
          </label>

          <button type="submit" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        <p className='continue'>
          OR CONTINUE WITH 
         </p>
          <div className="social-icons" aria-label="social media links">
                 <a href="https://facebook.com/login" target="_blank" rel="noreferrer" aria-label="Facebook">
                   <img src={FacebookIcon} alt="Facebook" className="social-icon" />
                 </a>
                 <a href="https://twitter.com/Signup" target="_blank" rel="noreferrer" aria-label="Twitter">
                   <img src={TwitterIcon} alt="Twitter" className="social-icon" />
                 </a>
               </div>
        </form>

        <div className="extra-links">
         
          <a href="/login" className="link-btn">Already have an account? log in</a>
        </div>

        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
       
      </main>
    </div>
  );
};

export default SignupPage;
