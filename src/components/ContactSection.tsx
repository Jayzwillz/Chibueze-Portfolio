import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  GlobeAltIcon, 
  ClockIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { Copy, Check } from 'lucide-react';

interface Contact {
  email: string;
  phone: string;
  location: string;
  website: string;
  timezone: string;
}

interface Language {
  name: string;
  level: string;
}

interface ContactSectionProps {
  contact: Contact;
  languages: Language[];
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

interface CopyState {
  [key: string]: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contact, languages }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const [copyStates, setCopyStates] = useState<CopyState>({});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const contactItems = [
    { icon: EnvelopeIcon, label: 'Email', value: contact.email, href: `mailto:${contact.email}`, copyable: true },
    { icon: PhoneIcon, label: 'Phone', value: contact.phone, href: `tel:${contact.phone}`, copyable: true },
    { icon: MapPinIcon, label: 'Location', value: contact.location, href: null, copyable: false },
    { icon: GlobeAltIcon, label: 'Website', value: contact.website, href: `https://${contact.website}`, copyable: false },
    { icon: ClockIcon, label: 'Timezone', value: contact.timezone, href: null, copyable: false },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending message...' });

    // Simulate API call (replace with actual implementation)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll simulate success
      setFormStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 5000);

    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact me directly.' 
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  const copyToClipboard = async (text: string, label: string) => {
    const key = `${label}-${text}`;
    try {
      await navigator.clipboard.writeText(text);
      
      // Set copy state to true (show check mark)
      setCopyStates(prev => ({ ...prev, [key]: true }));
      
      setFormStatus({ 
        type: 'success', 
        message: `${label} copied to clipboard!` 
      });
      
      // Reset copy state after 2 seconds (back to copy icon)
      setTimeout(() => {
        setCopyStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
      
      // Reset status message after 2 seconds
      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 2000);
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Failed to copy to clipboard' 
      });
      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 2000);
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-layout">
        {/* Contact Information */}
        <motion.div 
          className="contact-info"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={itemVariants}>Get In Touch</motion.h3>
          <motion.p variants={itemVariants} className="contact-description">
            Ready to discuss cybersecurity solutions or have questions about my experience? 
            I'd love to hear from you. Feel free to reach out through any of the methods below.
          </motion.p>

          <motion.div className="contact-methods" variants={containerVariants}>
            {contactItems.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={idx}
                  className="contact-method"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 } 
                  }}
                >
                  <div className="contact-method-content">
                    <div className="contact-header">
                      <IconComponent className="contact-icon" />
                      <strong>{item.label}</strong>
                    </div>
                    <div className="contact-value">
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                  {item.copyable && (
                    <motion.button 
                      onClick={() => copyToClipboard(item.value, item.label)}
                      className="copy-btn"
                      title={`Copy ${item.label}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {copyStates[`${item.label}-${item.value}`] ? (
                        <Check size={16} className="copy-icon success" />
                      ) : (
                        <Copy size={16} className="copy-icon" />
                      )}
                    </motion.button>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div 
            className="languages"
            variants={itemVariants}
          >
            <h4>Languages</h4>
            <motion.div 
              className="language-list"
              variants={containerVariants}
            >
              {languages.map((lang, idx) => (
                <motion.span 
                  key={idx} 
                  className="language-item"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 } 
                  }}
                >
                  {lang.name} ({lang.level})
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Send a Message</h3>
          <p className="form-description">
            Prefer to send a direct message? Fill out the form below and I'll respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Tell me about your project, questions, or how I can help..."
              />
            </div>

            <motion.button
              type="submit"
              className={`submit-btn ${formStatus.type}`}
              disabled={formStatus.type === 'loading'}
              whileHover={{ scale: formStatus.type === 'loading' ? 1 : 1.02 }}
              whileTap={{ scale: formStatus.type === 'loading' ? 1 : 0.98 }}
            >
              {formStatus.type === 'loading' ? (
                <>
                  <div className="spinner" />
                  Sending...
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="btn-icon" />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Status Message */}
            {formStatus.message && (
              <motion.div 
                className={`status-message ${formStatus.type}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {formStatus.type === 'success' && <CheckCircleIcon className="status-icon" />}
                {formStatus.type === 'error' && <ExclamationTriangleIcon className="status-icon" />}
                {formStatus.message}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
