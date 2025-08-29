import React from 'react';

interface Publication {
  title: string;
  publication: string;
  year: string;
  type: string;
}

interface Speaking {
  event: string;
  title: string;
  location: string;
  year: string;
}

interface PublicationsSectionProps {
  publications: Publication[];
  speaking: Speaking[];
}

const PublicationsSection: React.FC<PublicationsSectionProps> = ({ publications, speaking }) => {
  return (
    <div className="publications-speaking">
      <div className="publications">
        <h4>Publications</h4>
        {publications.map((pub, idx) => (
          <div key={idx} className="pub-item">
            <strong>"{pub.title}"</strong>
            <div>{pub.publication} • {pub.year} • {pub.type}</div>
          </div>
        ))}
      </div>
      <div className="speaking">
        <h4>Speaking Engagements</h4>
        {speaking.map((event, idx) => (
          <div key={idx} className="speaking-item">
            <strong>"{event.title}"</strong>
            <div>{event.event} • {event.location} • {event.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsSection;
