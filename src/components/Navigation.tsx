import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Code, 
  Briefcase, 
  Award, 
  FolderOpen, 
  BookOpen, 
  Mail, 
  Download,
  Menu,
  X,
  Shield
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'publications', label: 'Publications', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav 
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Shield className="logo-icon" />
          <span>C.M.O</span>
        </motion.div>

        <div className="nav-center">
          {/* Desktop Navigation */}
          <motion.ul 
            className="nav-links desktop-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <button onClick={() => scrollToSection(item.id)}>
                    <IconComponent size={16} />
                    <span>{item.label}</span>
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Resume Download Button */}
          <motion.div 
            className="nav-cta desktop-cta"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="/Chibueze_Oparaoriaku_CyberSecurity_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
              <Download size={16} />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div 
        className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          height: isMobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <ul className="mobile-nav-links">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.li 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <button onClick={() => scrollToSection(item.id)}>
                  <IconComponent size={18} />
                  <span>{item.label}</span>
                </button>
              </motion.li>
            );
          })}
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0, 
              x: isMobileMenuOpen ? 0 : -20 
            }}
            transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
          >
            <a href="/Chibueze_Oparaoriaku_CyberSecurity_Resume.pdf" target="_blank" rel="noopener noreferrer" className="mobile-resume-btn">
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
