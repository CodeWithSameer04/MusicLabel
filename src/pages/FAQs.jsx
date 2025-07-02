import React, { useState } from 'react';
import './pages.css';
import { Plus, Minus } from 'lucide-react';

function FAQs() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeCategory, setActiveCategory] = useState('general');

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What services does RVM Entertainment offer?",
          answer: "We offer a full range of music services including music production, mixing and mastering, artist development, video production, live event management, music licensing, and digital distribution across all major platforms."
        },
        {
          question: "How can I submit my music for consideration?",
          answer: "You can submit your demo through our contact form, email us at booking@rvmentertainment.com, or use our quick demo submission option on the contact page. Please include 2-3 of your best tracks, a brief bio, and your contact information."
        },
        {
          question: "What genres do you work with?",
          answer: "We work with artists across all genres including Electronic, Pop, Hip-Hop, R&B, Rock, Folk, Indie, Synthwave, and more. Our diverse team has experience in virtually every musical style."
        },
        {
          question: "Do you work with international artists?",
          answer: "Absolutely! We work with artists from around the world. Our remote collaboration capabilities allow us to work seamlessly with artists regardless of their location."
        }
      ]
    },
    {
      category: "Production Services",
      questions: [
        {
          question: "What's included in a typical production package?",
          answer: "Our production packages typically include pre-production consultation, recording, mixing, mastering, and basic artwork design. We also provide unlimited revisions until you're completely satisfied with the final product."
        },
        {
          question: "How long does it take to produce a song?",
          answer: "Timeline varies based on complexity, but typically: Recording (1-3 days), Mixing (3-5 days), Mastering (1-2 days). Rush jobs can be accommodated for an additional fee. Full albums typically take 2-6 weeks."
        },
        {
          question: "Can I be involved in the production process?",
          answer: "Absolutely! We encourage artist involvement throughout the entire process. You can attend recording sessions, provide feedback during mixing, and we'll send you regular updates and previews."
        },
        {
          question: "Do you provide session musicians?",
          answer: "Yes, we have a network of talented session musicians for all instruments. If your song needs additional instrumentation, we can arrange for professional musicians to enhance your tracks."
        }
      ]
    },
    {
      category: "Pricing & Contracts",
      questions: [
        {
          question: "How much do your services cost?",
          answer: "Pricing varies based on the scope of work. Single song production starts at $500, mixing & mastering from $200, music videos from $2,000. Contact us for a detailed quote based on your specific needs."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment plans for larger projects. Typically 50% upfront and 50% upon completion, but we can work with you to create a payment schedule that fits your budget."
        },
        {
          question: "Who owns the rights to the music?",
          answer: "You retain 100% ownership of your music. We only ask for credit as the producer/mixer and the right to use the music in our portfolio. All publishing and performance rights remain with the artist."
        },
        {
          question: "Is there a contract involved?",
          answer: "Yes, we use clear, artist-friendly contracts that outline the scope of work, timeline, payment terms, and rights. Everything is transparent with no hidden clauses or long-term commitments."
        }
      ]
    },
    {
      category: "Technical Questions",
      questions: [
        {
          question: "What equipment and software do you use?",
          answer: "We use industry-standard equipment including Pro Tools, Logic Pro, Neve consoles, API preamps, and premium monitors. Our studio is acoustically treated and equipped with the latest technology."
        },
        {
          question: "Can I use my own recordings?",
          answer: "Absolutely! If you have existing recordings, we can work with them for mixing and mastering. We accept all major audio formats and can work with stems or full mixes."
        },
        {
          question: "What format will I receive my finished music in?",
          answer: "You'll receive high-quality WAV files (24-bit/96kHz), plus MP3s for easy sharing. We can also provide stems, instrumental versions, or any other format you need for your project."
        },
        {
          question: "Do you provide mastering for vinyl releases?",
          answer: "Yes, we specialize in mastering for all formats including vinyl, CD, and digital streaming platforms. Each format has specific requirements, and we optimize your music accordingly."
        }
      ]
    },
    {
      category: "Artist Development",
      questions: [
        {
          question: "What does your artist development program include?",
          answer: "Our program includes brand development, social media strategy, performance coaching, networking opportunities, playlist placement assistance, and ongoing mentorship from industry professionals."
        },
        {
          question: "How do you help with music promotion?",
          answer: "We assist with digital marketing strategies, playlist submissions, social media content creation, press release writing, and connecting you with our network of blogs, radio stations, and influencers."
        },
        {
          question: "Do you help with live performances?",
          answer: "Yes, we can help book shows, connect you with venues, provide technical riders, and even assist with tour planning. We have relationships with venues and promoters across the country."
        },
        {
          question: "Can you help me get on Spotify playlists?",
          answer: "We have relationships with playlist curators and can submit your music for consideration. While we can't guarantee placement, our track record shows significant success in getting our artists featured."
        }
      ]
    }
  ];

  const tableOfContents = [
    { id: 'general', label: 'General', items: faqs[0]?.questions || [] },
    { id: 'production', label: 'Production Services', items: faqs[1]?.questions || [] },
    { id: 'pricing', label: 'Pricing & Contracts', items: faqs[2]?.questions || [] },
    { id: 'technical', label: 'Technical Questions', items: faqs[3]?.questions || [] },
    { id: 'development', label: 'Artist Development', items: faqs[4]?.questions || [] }
  ];

  return (
    <div className='modern-faqs'>
      {/* Header */}
      <div className="faq-header">
        <h1>Questions? Look here.</h1>
        <p>Can't find an answer? Call us at (555) 123-4567 or email contact@rvmentertainment.com!</p>
      </div>

      <div className="faq-layout">
        {/* Table of Contents Sidebar */}
        <div className="table-of-contents">
          <h3>Table of Contents</h3>
          <nav className="toc-nav">
            {tableOfContents.map((section) => (
              <div key={section.id} className="toc-section">
                <button 
                  className={`toc-category ${activeCategory === section.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(section.id)}
                >
                  {section.label}
                </button>
              </div>
            ))}
          </nav>
        </div>

        {/* FAQ Content */}
        <div className="faq-content">
          {faqs.map((category, categoryIndex) => {
            const categoryId = tableOfContents[categoryIndex]?.id;
            if (activeCategory !== categoryId) return null;
            
            return (
              <div key={categoryIndex} className="faq-category-content">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openFAQ === globalIndex;
                  
                  return (
                    <div key={faqIndex} className={`modern-faq-item ${isOpen ? 'open' : ''}`}>
                      <button 
                        className="modern-faq-question" 
                        onClick={() => toggleFAQ(globalIndex)}
                        aria-expanded={isOpen}
                      >
                        <span className="question-text">{faq.question}</span>
                        <span className="faq-toggle-icon">
                          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="modern-faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="faq-cta">
        <h2>Still Have Questions?</h2>
        <p>
          Can't find the answer you're looking for? Our team is here to help! 
          Reach out to us directly and we'll get back to you within 24 hours.
        </p>
        <div className="cta-buttons">
          <button className="cta-primary">Contact Us</button>
          <button className="cta-secondary">Schedule a Call</button>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
