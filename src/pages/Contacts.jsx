import React, { useState } from 'react';
import './pages.css';
import { MessageCircle, Headphones, MapPin, Phone } from 'lucide-react';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success'); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Show success message
    setAlertMessage('Message sent successfully! We\'ll get back to you soon.');
    setAlertType('success');
    setShowAlert(true);
    
    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <div className='contacts-modern'>
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-icon">
          <MessageCircle size={48} strokeWidth={1.5} />
        </div>
        <h1>Contact our friendly team</h1>
        <p>Let us know how we can help.</p>
      </div>

      {/* Contact Options Grid */}
      <div className="contact-options-grid">
        <div className="contact-option sales-card">
          <div className="option-icon sales-icon">
            <MessageCircle size={28} />
          </div>
          <h3>Chat to Sales</h3>
          <p>Speak to our friendly sales team about our services and packages.</p>
          <div className="card-actions">
            <a href="mailto:sales@rvmentertainment.com" className="contact-link primary-card-link">
              💼 Contact Sales
            </a>
            <div className="card-status">
              <span className="status-indicator available"></span>
              <span className="status-text">Available Now</span>
            </div>
          </div>
        </div>

        <div className="contact-option support-card">
          <div className="option-icon support-icon">
            <Headphones size={28} />
          </div>
          <h3>Chat to Support</h3>
          <p>Get instant help from our support team. We're available 24/7 to assist you.</p>
          <div className="support-actions">
            <a href="mailto:support@rvmentertainment.com" className="contact-link primary-support-link">
              📧 Email Support
            </a>
            <div className="support-status">
              <span className="status-indicator online"></span>
              <span className="status-text">Online Now</span>
            </div>
          </div>
        </div>

        <div className="contact-option location-card">
          <div className="option-icon location-icon">
            <MapPin size={28} />
          </div>
          <h3>Visit Our Studio</h3>
          <p>Come visit our state-of-the-art studio and experience our facilities firsthand.</p>
          <div className="card-actions">
            <a href="#" className="contact-link primary-card-link">
              🗺️ View Location
            </a>
            <div className="card-status">
              <span className="status-indicator open"></span>
              <span className="status-text">Open Today</span>
            </div>
          </div>
        </div>

        <div className="contact-option phone-card">
          <div className="option-icon phone-icon">
            <Phone size={28} />
          </div>
          <h3>Call Us Direct</h3>
          <p>Speak directly with our team for immediate assistance and quick answers.</p>
          <div className="card-actions">
            <a href="tel:+15551234567" className="contact-link primary-card-link">
              📞 +1 (555) 123-4567
            </a>
            <div className="card-status">
              <span className="status-indicator business-hours"></span>
              <span className="status-text">Mon-Fri 8am-5pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <h2>Send us a message</h2>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        
        {showAlert && (
          <div className={`alert-message ${alertType}`}>
            <div className="alert-content">
              <div className="alert-icon">
                {alertType === 'success' ? '✓' : '✕'}
              </div>
              <div className="alert-text">{alertMessage}</div>
              <button 
                className="alert-close" 
                onClick={() => setShowAlert(false)}
                type="button"
              >
                ×
              </button>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="modern-contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="type">Inquiry Type</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="general">General Inquiry</option>
                <option value="artist">Artist Services</option>
                <option value="production">Music Production</option>
                <option value="booking">Booking & Events</option>
                <option value="licensing">Music Licensing</option>
                <option value="collaboration">Collaboration</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Brief subject line"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us about your project, goals, or any questions you have..."
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
