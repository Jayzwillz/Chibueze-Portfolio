import './App.css';
import { motion } from 'framer-motion';
import { 
  LinkedinIcon, 
  TwitterIcon, 
  GithubIcon, 
  YoutubeIcon,
  ExternalLinkIcon
} from 'lucide-react';
import Navigation from './components/Navigation';
import Section from './components/Section';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import PublicationsSection from './components/PublicationsSection';
import ContactSection from './components/ContactSection';

const demoData = {
  name: 'Chibueze Modest Oparaoriaku',
  title: 'Senior Cyber Security Expert & Consultant',
  summary: 'Passionate Cyber Security Expert with 5+ years of hands-on experience safeguarding enterprise infrastructures, conducting advanced penetration testing, and leading incident response teams. Specialized in cloud security architecture, threat hunting, and building security-first cultures in organizations across fintech, healthcare, and e-commerce sectors.',
  
  achievements: [
    'Prevented $2.3M in potential losses through proactive threat detection and incident response',
    'Led security transformations for 15+ enterprise clients with 99.9% uptime maintenance',
    'Reduced security incidents by 75% through implementation of advanced SIEM solutions',
    'Trained 200+ professionals in cybersecurity best practices and incident response protocols'
  ],

  skills: {
    technical: [
      'Penetration Testing & Vulnerability Assessment',
      'Security Information & Event Management (SIEM)',
      'Cloud Security (AWS, Azure, GCP)',
      'Network Security & Firewalls',
      'Incident Response & Digital Forensics',
      'Risk Assessment & Compliance (ISO 27001, GDPR, HIPAA)',
      'Identity & Access Management (IAM)',
      'Cryptography & PKI',
      'Security Automation & Orchestration',
      'Threat Intelligence & Hunting'
    ],
    tools: [
      'Splunk, IBM QRadar, ArcSight',
      'Nessus, OpenVAS, Burp Suite',
      'Wireshark, Metasploit, Nmap',
      'AWS Security Hub, Azure Sentinel',
      'Kubernetes Security, Docker',
      'Python, PowerShell, Bash',
      'OSINT Tools, Maltego',
      'Ansible, Terraform'
    ]
  },

  experience: [
    {
      role: 'Senior Cyber Security Consultant',
      company: 'CyberGuard Africa Ltd.',
      years: '2023 - Present',
      location: 'Lagos, Nigeria',
      description: 'Leading cybersecurity initiatives for Fortune 500 clients across West Africa. Spearhead security assessments, penetration testing, and incident response for high-profile organizations.',
      achievements: [
        'Designed and implemented zero-trust security architecture for a major bank, reducing breach risk by 85%',
        'Led incident response for ransomware attack, recovering 100% of encrypted data with zero downtime',
        'Conducted security awareness training for 500+ employees, reducing phishing susceptibility by 90%'
      ]
    },
    {
      role: 'Senior Cyber Security Analyst',
      company: 'SecureTech Solutions',
      years: '2022 - 2023',
      location: 'Remote',
      description: 'Managed security operations for multiple enterprise clients, focusing on threat detection, vulnerability management, and compliance frameworks.',
      achievements: [
        'Implemented 24/7 SOC operations serving 20+ clients with average 3-minute response time',
        'Developed automated threat detection scripts that improved efficiency by 60%',
        'Achieved 100% compliance rate for clients undergoing ISO 27001 and SOC 2 audits'
      ]
    },
    {
      role: 'Cyber Security Specialist',
      company: 'InfoGuard Nigeria',
      years: '2020 - 2022',
      location: 'Abuja, Nigeria',
      description: 'Specialized in network security implementation and security policy development for mid-sized enterprises in the fintech and healthcare sectors.',
      achievements: [
        'Deployed next-generation firewalls and IPS systems for 15+ organizations',
        'Reduced security incidents by 70% through proactive monitoring and threat hunting',
        'Created comprehensive security policies and procedures adopted industry-wide'
      ]
    },
    {
      role: 'Junior Security Analyst',
      company: 'TechSecure Lagos',
      years: '2019 - 2020',
      location: 'Lagos, Nigeria',
      description: 'Started career in cybersecurity focusing on vulnerability assessments, security monitoring, and compliance support for emerging businesses.',
      achievements: [
        'Identified and remediated 300+ critical vulnerabilities across client environments',
        'Assisted in achieving PCI DSS compliance for 10+ e-commerce platforms',
        'Developed incident response playbooks still in use across the organization'
      ]
    }
  ],

  certifications: [
    {
      name: 'Certified Information Systems Security Professional (CISSP)',
      issuer: 'ISC²',
      year: '2023',
      status: 'Active'
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      year: '2022',
      status: 'Active'
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      year: '2021',
      status: 'Active'
    },
    {
      name: 'AWS Certified Security - Specialty',
      issuer: 'Amazon Web Services',
      year: '2023',
      status: 'Active'
    },
    {
      name: 'Certified Information Security Manager (CISM)',
      issuer: 'ISACA',
      year: '2024',
      status: 'In Progress'
    }
  ],

  projects: [
    {
      name: 'Zero-Trust Security Architecture Implementation',
      client: 'Leading Financial Institution',
      duration: '6 months',
      team: '8 security engineers',
      description: 'Designed and implemented a comprehensive zero-trust security model for a major Nigerian bank with 50+ branches and 10,000+ employees.',
      technologies: ['Microsoft Azure AD', 'Okta', 'Palo Alto Networks', 'CrowdStrike'],
      impact: 'Reduced unauthorized access attempts by 95% and achieved full regulatory compliance',
      challenges: 'Legacy system integration, minimal downtime requirements, user adoption'
    },
    {
      name: 'Advanced Persistent Threat (APT) Detection System',
      client: 'Healthcare Consortium',
      duration: '4 months',
      team: '5 security analysts',
      description: 'Developed machine learning-based threat detection system to identify sophisticated APT attacks targeting healthcare data.',
      technologies: ['Splunk SOAR', 'Python', 'TensorFlow', 'MITRE ATT&CK'],
      impact: 'Detected 15 previously unnoticed APT campaigns, protecting 2M+ patient records',
      challenges: 'False positive reduction, real-time processing, HIPAA compliance'
    },
    {
      name: 'Cloud Security Migration & Hardening',
      client: 'E-commerce Platform',
      duration: '3 months',
      team: '6 cloud engineers',
      description: 'Led complete migration of on-premises infrastructure to AWS with enhanced security controls and automated compliance monitoring.',
      technologies: ['AWS Security Hub', 'CloudTrail', 'GuardDuty', 'Config', 'Terraform'],
      impact: 'Reduced infrastructure costs by 40% while improving security posture by 80%',
      challenges: 'Data sovereignty requirements, performance optimization, cost management'
    },
    {
      name: 'Incident Response Automation Platform',
      client: 'Internal R&D Project',
      duration: '2 months',
      team: 'Solo project',
      description: 'Built automated incident response platform using SOAR principles to reduce manual intervention and improve response times.',
      technologies: ['Python', 'Ansible', 'REST APIs', 'Docker', 'PostgreSQL'],
      impact: 'Reduced average incident response time from 4 hours to 15 minutes',
      challenges: 'Integration with multiple security tools, scalability, false positive handling'
    }
  ],
  contact: {
    email: 'chibueze.modest@cyberguard.ng',
    phone: '+234 803 456 7890',
    location: 'Lagos, Nigeria',
    website: 'www.chibuezecyber.com',
    timezone: 'GMT+1 (WAT)'
  },
  resume: '/Chibueze_Oparaoriaku_CyberSecurity_Resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/chibueze-modest-oparaoriaku',
    twitter: 'https://twitter.com/chibueze_cyber',
    github: 'https://github.com/chibueze-cyber',
    medium: 'https://medium.com/@chibueze-cyber',
    youtube: 'https://youtube.com/@CyberSecWithChibueze'
  },

  languages: [
    { name: 'English', level: 'Native' },
    { name: 'Igbo', level: 'Native' },
    { name: 'Yoruba', level: 'Conversational' }
  ],

  publications: [
    {
      title: 'Zero Trust Architecture in African Financial Institutions',
      publication: 'African Cyber Security Journal',
      year: '2024',
      type: 'Research Paper'
    },
    {
      title: 'Building Resilient SOCs for Emerging Markets',
      publication: 'InfoSec Magazine',
      year: '2023',
      type: 'Article'
    }
  ],

  speaking: [
    {
      event: 'African Cyber Security Conference 2024',
      title: 'The Future of AI in Threat Detection',
      location: 'Cape Town, South Africa',
      year: '2024'
    },
    {
      event: 'Nigeria Information Security Summit',
      title: 'Cloud Security Best Practices',
      location: 'Lagos, Nigeria',
      year: '2023'
    }
  ],
};

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const socialLinks = [
    { icon: LinkedinIcon, href: demoData.social.linkedin, label: 'LinkedIn' },
    { icon: TwitterIcon, href: demoData.social.twitter, label: 'Twitter' },
    { icon: GithubIcon, href: demoData.social.github, label: 'GitHub' },
    { icon: ExternalLinkIcon, href: demoData.social.medium, label: 'Medium' },
    { icon: YoutubeIcon, href: demoData.social.youtube, label: 'YouTube' },
  ];

  return (
    <div className="app dark-theme">
      <Navigation />
      
      <motion.header 
        className="header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {demoData.name}
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {demoData.title}
        </motion.h3>
        <motion.p 
          className="summary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {demoData.summary}
        </motion.p>
        <motion.div 
          className="social-links"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  transition: { duration: 0.2 } 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent size={18} />
                <span>{social.label}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.header>
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Section title="About" id="about">
          <AboutSection summary={demoData.summary} achievements={demoData.achievements} />
        </Section>

        <Section title="Technical Skills" id="skills">
          <SkillsSection skills={demoData.skills} />
        </Section>

        <Section title="Professional Experience" id="experience">
          <ExperienceSection experience={demoData.experience} />
        </Section>

        <Section title="Certifications & Training" id="certifications">
          <CertificationsSection certifications={demoData.certifications} />
        </Section>

        <Section title="Notable Projects" id="projects">
          <ProjectsSection projects={demoData.projects} />
        </Section>

        <Section title="Publications & Speaking" id="publications">
          <PublicationsSection publications={demoData.publications} speaking={demoData.speaking} />
        </Section>

        <Section title="Contact Information" id="contact">
          <ContactSection contact={demoData.contact} languages={demoData.languages} />
        </Section>
      </motion.main>
      
      <motion.footer 
        className="footer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>&copy; {new Date().getFullYear()} Chibueze Modest Oparaoriaku. All rights reserved.</p>
        <p>Protecting digital assets • Building secure futures • Empowering organizations</p>
        <motion.p 
          className="credit"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Made with ❤️ by{' '}
          <motion.a 
            href="https://jahswill.tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="credit-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jayzwillz
          </motion.a>
        </motion.p>
      </motion.footer>
    </div>
  );
}

export default App;
