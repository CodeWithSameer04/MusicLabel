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
    alert('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
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
        <div className="contact-option">
          <div className="option-icon">
            <MessageCircle size={24} />
          </div>
          <h3>Chat to sales</h3>
          <p>Speak to our friendly team.</p>
          <a href="mailto:sales@rvmentertainment.com" className="contact-link">
            sales@rvmentertainment.com
          </a>
        </div>

        <div className="contact-option">
          <div className="option-icon">
            <Headphones size={24} />
          </div>
          <h3>Chat to support</h3>
          <p>We're here to help.</p>
          <a href="mailto:support@rvmentertainment.com" className="contact-link">
            support@rvmentertainment.com
          </a>
        </div>

        <div className="contact-option">
          <div className="option-icon">
            <MapPin size={24} />
          </div>
          <h3>Visit us</h3>
          <p>Visit our studio HQ.</p>
          <a href="#" className="contact-link">
            View on Google Maps
          </a>
        </div>

        <div className="contact-option">
          <div className="option-icon">
            <Phone size={24} />
          </div>
          <h3>Call us</h3>
          <p>Mon-Fri from 8am to 5pm.</p>
          <a href="tel:+15551234567" className="contact-link">
            +1 (555) 123-4567
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <h2>Send us a message</h2>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        
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
