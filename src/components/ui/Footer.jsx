import React from 'react';
import { 
  Sun, 
  Moon, 
  ArrowUp, 
  Mail, 
  Twitter, 
  Instagram, 
  MessageSquare, 
  Phone, 
  Dribbble, 
  Facebook, 
  Linkedin, 
  Youtube, 
  Heart,
  Music
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const navigation = {
  categories: [
    {
      id: "main",
      name: "Main",
      sections: [
        {
          id: "about",
          name: "About",
          items: [
            { name: "About", href: "/about" },
            { name: "Works", href: "/works" },
            { name: "Pricing", href: "/pricing" },
          ],
        },
        {
          id: "features",
          name: "Features",
          items: [
            { name: "Products", href: "/products" },
            { name: "Services", href: "/services" },
            { name: "Dashboard", href: "/dashboard" },
          ],
        },
        {
          id: "music",
          name: "Music",
          items: [
            { name: "Albums", href: "/albums" },
            { name: "Artists", href: "/artists" },
            { name: "Distribution", href: "/distribution" },
          ],
        },
        {
          id: "audio",
          name: "Audio Services",
          items: [
            { name: "Recording", href: "/services/recording" },
            { name: "Production", href: "/services/production" },
            { name: "Mixing", href: "/services/mixing" },
          ],
        },
        {
          id: "video",
          name: "Video Services",
          items: [
            { name: "Shooting", href: "/services/video" },
            { name: "Editing", href: "/services/editing" },
            { name: "Graphics", href: "/services/graphics" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
            { name: "Contact", href: "/contact" },
            { name: "Terms", href: "/terms" },
            { name: "Privacy", href: "/privacy" },
          ],
        },
      ],
    },
  ],
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div style={themeToggleContainerStyle}>
      <div style={modernButtonGroupStyle}>
        {/* Theme Toggle Switch */}
        <div style={{
          ...toggleSwitchContainer,
          backgroundColor: isDark ? '#333' : '#f0f0f0'
        }}>
          <button
            onClick={() => toggleTheme()}
            style={{
              ...toggleSwitchButton,
              transform: isDark ? 'translateX(32px)' : 'translateX(0px)',
              backgroundColor: isDark ? '#4f46e5' : '#fbbf24'
            }}
          >
            {isDark ? 
              <Moon style={toggleIconStyle} strokeWidth={1.5} /> : 
              <Sun style={toggleIconStyle} strokeWidth={1.5} />
            }
            <span style={srOnlyStyle}>Toggle Theme</span>
          </button>
        </div>

        {/* Scroll to Top Button */}
        <button 
          type="button" 
          onClick={handleScrollTop}
          style={{
            ...modernScrollButton,
            backgroundColor: isDark ? '#374151' : '#f9fafb',
            color: isDark ? '#ffffff' : '#374151',
            border: `1px solid ${isDark ? '#4b5563' : '#e5e7eb'}`
          }}
        >
          <ArrowUp style={scrollIconStyle} />
          <span style={srOnlyStyle}>Scroll to Top</span>
        </button>
      </div>
    </div>
  );
};

export function Footer() {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  
  return (
    <footer style={{
      ...footerStyle,
      backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
      color: isDark ? '#ffffff' : '#000000'
    }}>
      <div style={headerSectionStyle}>
        <a href="/" style={logoLinkStyle}>
          <p style={logoStyle}>
            <Music style={logoIconStyle} />
          </p>
        </a>
        <p style={{
          ...descriptionStyle,
          color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)'
        }}>
          Welcome to MusicLabel, where creativity meets strategy to bring your
          vision to life. We are passionate about transforming ideas into
          compelling musical experiences. We specialize in crafting unique brand
          identities, immersive digital experiences, and engaging content that
          resonates with your audience. Our mission is to empower artists and
          labels to stand out in a crowded market.
        </p>
      </div>

      <div style={mainContentStyle}>
        <div style={{
          ...dividerStyle,
          borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
        }}></div>
        
        <div style={navigationStyle}>
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              style={categoryStyle}
            >
              {category.sections.map((section) => (
                <div key={section.name}>
                  <ul style={sectionListStyle}>
                    {section.items.map((item) => (
                      <li key={item.name} style={listItemStyle}>
                        <a
                          href={item.href}
                          style={{
                            ...linkStyle,
                            color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.color = isDark ? '#ffffff' : '#000000';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.color = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)';
                          }}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div style={{
          ...dividerStyle,
          borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
        }}></div>
      </div>

      <div style={socialSectionStyle}>
        <div style={socialLinksStyle}>
          <a
            href="mailto:contact@musiclabel.com"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
          >
            <Mail style={socialIconStyle} strokeWidth={1.5} />
          </a>
          <a
            href="https://twitter.com/musiclabel"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
          >
            <Twitter style={socialIconStyle} />
          </a>
          <a
            href="https://www.instagram.com/musiclabel/"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
          >
            <Instagram style={socialIconStyle} />
          </a>
          <a
            href="https://www.threads.net/musiclabel"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
          >
            <MessageSquare style={socialIconStyle} />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
          >
            <Phone style={socialIconStyle} />
          </a>
          <a
            href="https://www.behance.net/musiclabel"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
          >
            <Dribbble style={socialIconStyle} />
          </a>
          <a
            href="https://www.facebook.com/musiclabel"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
          >
            <Facebook style={socialIconStyle} />
          </a>
          <a
            href="https://www.linkedin.com/company/musiclabel"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
          >
            <Linkedin style={socialIconStyle} />
          </a>
          <a
            href="https://www.youtube.com/@musiclabel"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
          >
            <Youtube style={socialIconStyle} />
          </a>
        </div>
        <ThemeToggle />
      </div>

    </footer>
  );
}

// Styles
const footerStyle = {
  width: '100%',
  borderTop: '1px solid rgba(0,0,0,0.2)',
  borderBottom: '1px solid rgba(0,0,0,0.2)',
  margin: '0 auto',
  padding: '20px 16px'
};

const headerSectionStyle = {
  position: 'relative',
  margin: '0 auto',
  display: 'grid',
  maxWidth: '1280px',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  padding: '40px 0 0 0',
  '@media (min-width: 768px)': {
    display: 'flex'
  }
};

const logoLinkStyle = {
  textDecoration: 'none'
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%'
};

const logoIconStyle = {
  width: '32px',
  height: '32px',
  color: '#dc2626'
};

const descriptionStyle = {
  backgroundColor: 'transparent',
  textAlign: 'center',
  fontSize: '12px',
  lineHeight: '1.4',
  '@media (min-width: 768px)': {
    textAlign: 'left'
  }
};

const mainContentStyle = {
  margin: '0 auto',
  maxWidth: '1280px',
  padding: '0 24px 40px 24px'
};

const dividerStyle = {
  borderBottom: '1px dotted',
  marginBottom: '40px'
};

const navigationStyle = {
  paddingBottom: '40px'
};

const categoryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '24px',
  justifyContent: 'space-between',
  lineHeight: '1.5',
  '@media (min-width: 768px)': {
    display: 'flex'
  }
};

const sectionListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
};

const listItemStyle = {
  overflow: 'hidden'
};

const linkStyle = {
  fontSize: '14px',
  textDecoration: 'none',
  transition: 'color 0.2s',
  '@media (min-width: 768px)': {
    fontSize: '12px'
  }
};

const socialSectionStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '24px'
};

const socialLinksStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  padding: '0 24px'
};

const socialLinkStyle = {
  padding: '10px',
  transition: 'transform 0.2s',
  textDecoration: 'none',
  color: 'inherit',
  ':hover': {
    transform: 'translateY(-4px)'
  }
};

const socialIconStyle = {
  height: '20px',
  width: '20px'
};

const themeToggleContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const modernButtonGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
};

const toggleSwitchContainer = {
  position: 'relative',
  width: '64px',
  height: '32px',
  borderRadius: '16px',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
};

const toggleSwitchButton = {
  position: 'absolute',
  top: '2px',
  left: '2px',
  width: '28px',
  height: '28px',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.1)',
  ':hover': {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)'
  }
};

const modernScrollButton = {
  width: '40px',
  height: '40px',
  borderRadius: '12px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease-in-out',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
  }
};

const toggleIconStyle = {
  width: '14px',
  height: '14px',
  color: '#ffffff'
};

const scrollIconStyle = {
  width: '16px',
  height: '16px'
};

const iconStyle = {
  height: '20px',
  width: '20px'
};

const smallIconStyle = {
  height: '12px',
  width: '12px'
};

const srOnlyStyle = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: '0'
};

const copyrightStyle = {
  margin: '0 auto 40px auto',
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'center',
  fontSize: '12px',
  '@media (min-width: 768px)': {
    maxWidth: '1280px'
  }
};

const copyrightTextStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px'
};

const heartIconStyle = {
  color: '#dc2626',
  margin: '0 4px',
  height: '16px',
  width: '16px',
  animation: 'pulse 2s infinite'
};

const authorLinkStyle = {
  cursor: 'pointer'
};

const designaliLinkStyle = {
  cursor: 'pointer'
};

export default Footer;
