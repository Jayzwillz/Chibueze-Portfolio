import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Settings, 
  Shield, 
  Database, 
  Cloud, 
  Lock,
  Search,
  AlertTriangle,
  Key,
  Terminal
} from 'lucide-react';

interface SkillsSectionProps {
  skills: {
    technical: string[];
    tools: string[];
  };
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const technicalIcons = [Shield, Lock, Cloud, AlertTriangle, Search, Key, Database, Code2, Settings, Terminal];
  const toolIcons = [Database, Code2, Settings, Cloud, Terminal, Shield, Search, Lock];

  return (
    <div className="skills-grid">
      <motion.div 
        className="skill-category"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h4 variants={itemVariants}>
          <Shield size={20} className="section-icon" />
          Technical Expertise
        </motion.h4>
        <motion.ul variants={containerVariants}>
          {skills.technical.map((skill, idx) => {
            const IconComponent = technicalIcons[idx % technicalIcons.length];
            return (
              <motion.li 
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  x: 5,
                  transition: { duration: 0.2 } 
                }}
              >
                <IconComponent size={16} className="skill-icon" />
                {skill}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
      <motion.div 
        className="skill-category"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h4 variants={itemVariants}>
          <Settings size={20} className="section-icon" />
          Tools & Technologies
        </motion.h4>
        <motion.ul variants={containerVariants}>
          {skills.tools.map((tool, idx) => {
            const IconComponent = toolIcons[idx % toolIcons.length];
            return (
              <motion.li 
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  x: 5,
                  transition: { duration: 0.2 } 
                }}
              >
                <IconComponent size={16} className="skill-icon" />
                {tool}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default SkillsSection;
