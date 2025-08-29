import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Users, Shield } from 'lucide-react';

interface AboutSectionProps {
  summary: string;
  achievements: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ summary, achievements }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const achievementIcons = [Trophy, Target, Shield, Users];

  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {summary}
      </motion.p>
      <motion.div 
        className="achievements"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h4 variants={itemVariants}>Key Achievements</motion.h4>
        <motion.ul variants={containerVariants}>
          {achievements.map((achievement, idx) => {
            const IconComponent = achievementIcons[idx % achievementIcons.length];
            return (
              <motion.li 
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  x: 5, 
                  transition: { duration: 0.2 } 
                }}
              >
                <IconComponent size={20} className="achievement-icon" />
                {achievement}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default AboutSection;
