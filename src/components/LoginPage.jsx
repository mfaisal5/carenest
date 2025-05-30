import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
//import StartupPage from './startupPage';
import './LoginPage.css';

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });

  // Regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
      <Header />
      <main className="login-container">
        <h2>Welcome to CareNest</h2>
        <p>Please log in to access your personalized care dashboard.</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
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
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="extra-links">
          <button type="button" onClick={handlePasswordReset} className="link-btn">
            Forgot Password?
          </button>
          <a href="/signup" className="link-btn">Don't have an account? Sign up</a>
        </div>

        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <h1 className="hh"> <a href="StartupPage.jsx" target='_blank'>start</a>
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
