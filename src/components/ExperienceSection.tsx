import React from 'react';

interface Experience {
  role: string;
  company: string;
  years: string;
  location: string;
  description: string;
  achievements: string[];
}

interface ExperienceSectionProps {
  experience: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <div>
      {experience.map((exp, idx) => (
        <div key={idx} className="exp-item">
          <div className="exp-header">
            <h4>{exp.role}</h4>
            <div className="exp-meta">
              <strong>{exp.company}</strong> • {exp.location} • {exp.years}
            </div>
          </div>
          <p className="exp-description">{exp.description}</p>
          <div className="achievements-list">
            <strong>Key Achievements:</strong>
            <ul>
              {exp.achievements.map((achievement, achIdx) => (
                <li key={achIdx}>✓ {achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
