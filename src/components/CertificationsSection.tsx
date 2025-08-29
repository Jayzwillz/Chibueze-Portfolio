import React from 'react';

interface Certification {
  name: string;
  issuer: string;
  year: string;
  status: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <div className="certifications-grid">
      {certifications.map((cert, idx) => (
        <div key={idx} className="cert-item">
          <strong>{cert.name}</strong>
          <div className="cert-details">
            <span>{cert.issuer}</span> • <span>{cert.year}</span> • 
            <span className={`status ${cert.status.toLowerCase().replace(' ', '-')}`}>
              {cert.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationsSection;
