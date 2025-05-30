import React, { useState } from 'react';
import './Header.css';

const Header = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);
  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleBookAppointment = () => {
    alert('Redirecting to appointment booking...');
  };

  const handleChatDoctor = () => {
    alert('Opening chat with doctor...');
  };

  return (
    <header className="header">
    <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <div className="logo" aria-label="CradleCare logo">
         CareNest
      </div>
    
    
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/support">Support</a>

        {user ? (
          <>
            <a href="/dashboard">Dashboard</a>
            <a href="/forum">Forum</a>
            <a href="/appointments">Appointments</a>

            <button className="quick-action-btn" onClick={handleBookAppointment}>
              Book Appointment
            </button>

            <button className="quick-action-btn" onClick={handleChatDoctor}>
              Chat with Doctor
            </button>

            <div className="notifications" aria-label="Notifications">
              <button
                className="notification-btn"
                onClick={toggleNotifications}
                aria-haspopup="true"
                aria-expanded={notificationsOpen}
              >
                🔔
              </button>
              {notificationsOpen && (
                <ul className="dropdown-menu notifications-menu" role="menu">
                  <li>No new notifications</li>
                </ul>
              )}
            </div>

            <div className="profile-dropdown">
              <button
                className="profile-btn"
                onClick={toggleProfile}
                aria-haspopup="true"
                aria-expanded={profileOpen}
              >
                {user.displayName || 'User'} ▼
              </button>

              {profileOpen && (
                <ul className="dropdown-menu" role="menu">
                  <li><a href="/profile">Profile</a></li>
                  <li><button onClick={onLogout}>Logout</button></li>
                </ul>
              )}
            </div>
          </>
        ) : (
          <a href="/login">Login</a>
        )}

        <input
          type="search"
          aria-label="Search"
          placeholder="Search..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </nav>
    </header>
  );
};

export default Header;
