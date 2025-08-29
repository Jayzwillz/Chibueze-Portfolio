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
  title: 'Senior Fraud Investigation Analyst',
  summary: 'Dedicated and self-motivated professional with over seven years of banking experience in fraud investigation, transaction monitoring and complaint resolution with expertise in SQL, Salesforce, NordLayer, Fraudsniper, Paygilant, Microsoft defender, Copilot, Mastercard and Visa platform. Hardworking and capable of working effectively either independently or as a team. I crave efficiency, excellence and possess good interpersonal skills, excellent reporting capabilities, and a result-oriented approach to solving problems. Awarded Fraud Stop Winner Stanbic IBTC Bank April 2021 and acted in the capacity of a team Lead, from November 2019 to February 2023 with 0% internal Fraud rate.',
  
  achievements: [
    'Awarded Fraud Stop Winner at Stanbic IBTC Bank in April 2021',
    'Maintained 0% internal fraud rate as Team Lead from November 2019 to February 2023',
    'Expert in fraud investigation and prevention across electronic banking platforms',
    'Specialized in regulatory compliance with CBN, NDIC and NIBSS requirements'
  ],

  skills: {
    technical: [
      'Fraud Investigation & Prevention',
      'Transaction Monitoring & Analysis',
      'Compliance & Regulatory Requirements',
      'SQL Database Management',
      'Salesforce Administration',
      'Risk Assessment & Management',
      'Electronic Banking Security',
      'Data Analysis & Reporting',
      'Team Leadership & Management',
      'Evidence Collection & Documentation'
    ],
    tools: [
      'SQL, Salesforce',
      'NordLayer, Fraudsniper',
      'Paygilant, Microsoft Defender',
      'Microsoft Copilot',
      'Mastercard Platform',
      'Visa Platform',
      'CBN Regulatory Systems',
      'NDIC Compliance Tools',
      'NIBSS Payment Systems',
      'Enterprise Banking Applications'
    ]
  },

  experience: [
    {
      role: 'Senior Fraud Investigation Analyst',
      company: 'Fidelity Bank',
      years: 'March 2023 - Present',
      location: 'Lagos, Nigeria',
      description: 'Leading complex fraud investigations and implementing control measures to mitigate electronic banking fraud.',
      achievements: [
        'Review products and services to identify loopholes exploited by fraudsters',
        'Suggest control measures to mitigate fraud on electronic-related platforms',
        'Recommend antifraud processes for changing transaction patterns and trends',
        'Carry out complex investigations requiring in-depth technical investigation',
        'Weekly and monthly preparation of regulatory returns (CBN, NDIC and NIBSS)'
      ]
    },
    {
      role: 'Fraud Analyst',
      company: 'Stanbic IBTC Bank',
      years: 'March 2017 - February 2023',
      location: 'Lagos, Nigeria',
      description: 'Monitored customer transactions, investigated fraudulent activities, and ensured compliance with regulatory requirements. Acted as Team Lead from November 2019 to February 2023.',
      achievements: [
        'Ensured suspicious transactions are flagged for additional reviews',
        'Investigated and blocked fraudulent accounts from carrying out transactions',
        'Monitored customer accounts to determine high fraud risk profiles',
        'Contacted customers to verify transaction authenticity using enterprise tools',
        'Prepared timely reports on fraudulent transactions and ensured regulatory compliance',
        'Awarded Fraud Stop Winner in April 2021',
        'Maintained 0% internal fraud rate as Team Lead (November 2019 - February 2023)'
      ]
    }
  ],

  certifications: [
    {
      name: 'B.Sc. in Parasitology',
      issuer: 'Nnamdi Azikiwe University, Awka',
      year: '2014',
      status: 'Completed'
    },
    {
      name: 'M.Sc. in Cybersecurity',
      issuer: 'National Open University of Nigeria',
      year: '2025',
      status: 'In Progress'
    },
    {
      name: 'Fraud Stop Winner Award',
      issuer: 'Stanbic IBTC Bank',
      year: '2021',
      status: 'Awarded'
    }
  ],

  projects: [
    {
      name: 'Electronic Banking Fraud Prevention System Enhancement',
      client: 'Fidelity Bank',
      duration: '12 months',
      team: '6 fraud analysts',
      description: 'Led comprehensive review and enhancement of fraud detection systems to identify and mitigate loopholes in electronic banking platforms.',
      technologies: ['Fraudsniper', 'Paygilant', 'SQL', 'Salesforce', 'Microsoft Defender'],
      impact: 'Significantly reduced fraud incidents and improved detection accuracy for electronic transactions',
      challenges: 'Complex transaction patterns, evolving fraud techniques, regulatory compliance'
    },
    {
      name: 'Regulatory Compliance Automation',
      client: 'Stanbic IBTC Bank',
      duration: '8 months',
      team: '4 compliance specialists',
      description: 'Developed automated systems for weekly and monthly preparation of regulatory returns for CBN, NDIC and NIBSS requirements.',
      technologies: ['SQL', 'Salesforce', 'Automated Reporting Tools', 'Compliance Platforms'],
      impact: 'Reduced manual effort by 70% and achieved 100% compliance with regulatory deadlines',
      challenges: 'Data accuracy, multiple regulatory formats, real-time processing requirements'
    },
    {
      name: 'Fraud Risk Assessment Framework',
      client: 'Multiple Banking Clients',
      duration: '6 months',
      team: '5 risk analysts',
      description: 'Created comprehensive fraud risk assessment methodology for customer accounts and transaction monitoring.',
      technologies: ['NordLayer', 'Mastercard Platform', 'Visa Platform', 'Analytics Tools'],
      impact: 'Improved fraud detection rate by 60% and reduced false positives by 40%',
      challenges: 'Customer experience balance, risk scoring accuracy, real-time decision making'
    },
    {
      name: 'Team Leadership Excellence Program',
      client: 'Stanbic IBTC Bank',
      duration: '40 months (Nov 2019 - Feb 2023)',
      team: '12 fraud analysts',
      description: 'Led fraud investigation team achieving exceptional performance metrics including 0% internal fraud rate throughout tenure.',
      technologies: ['Team Management Tools', 'Performance Analytics', 'Training Platforms'],
      impact: 'Maintained 0% internal fraud rate and received Fraud Stop Winner Award in April 2021',
      challenges: 'Team motivation, complex case management, maintaining high performance standards'
    }
  ],
  contact: {
    email: 'modestoparaoriaku75@gmail.com',
    phone: '(+234) 8168444310',
    location: 'Hilltop Estate Iyana Ipaja, Lagos State',
    website: 'chibueze-portfolio.netlify.app/',
    timezone: 'GMT+1 (WAT)'
  },
  resume: '/Chibueze_Oparaoriaku_Fraud_Investigation_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/chibueze-modest-oparaoriaku-6aa704111',
    twitter: '',
    github: '',
    medium: '',
    youtube: ''
  },

  languages: [
    { name: 'English', level: 'Native' },
    { name: 'Igbo', level: 'Native' },
    { name: 'Yoruba', level: 'Conversational' }
  ],

  publications: [
    {
      title: 'Fraud Prevention in Nigerian Electronic Banking Systems',
      publication: 'Journal of Banking Security',
      year: '2023',
      type: 'Research Paper'
    },
    {
      title: 'Best Practices in Transaction Monitoring and Analysis',
      publication: 'Financial Security Today',
      year: '2022',
      type: 'Article'
    }
  ],

  speaking: [
    {
      event: 'Nigerian Banking Security Summit 2024',
      title: 'Advanced Fraud Detection Techniques',
      location: 'Lagos, Nigeria',
      year: '2024'
    },
    {
      event: 'West African Financial Technology Conference',
      title: 'Regulatory Compliance in Digital Banking',
      location: 'Accra, Ghana',
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
