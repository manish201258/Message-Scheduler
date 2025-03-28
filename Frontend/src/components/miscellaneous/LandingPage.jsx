import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Time Capsule Messaging</h1>
        <p>Schedule messages and send them to the future!</p>
        <Link to="/register" className="btn btn-danger">Get Started</Link>
      </header>

      {/* Features Section */}
      <section className="features">
        <Link to="schedulemessage" className="text-decoration-none text-white">
        <div className="feature">
          <h3>📅 Schedule Messages</h3>
          <p>Write messages and choose when to send them.</p>
        </div>
        </Link>
        <div className="feature">
          <h3>📲 Multiple Platforms</h3>
          <p>Send messages via WhatsApp, Email, and Telegram.</p>
        </div>
        <div className="feature">
          <h3>🔒 Secure & Private</h3>
          <p>Your messages are stored securely and sent only when scheduled.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Time Capsule | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
