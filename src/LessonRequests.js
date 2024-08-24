import React from 'react';
import './LessonRequests.css';

const LessonRequests = () => {
  return (
    <div className="lesson-requests">
      <div className="request-card">
        <h3>Request Lesson Name:</h3>
        <div className="status-bar">
          <div className="status-indicator accepted"></div>
        </div>
        <div className="action-buttons">
          <button className="accept-btn">Accept</button>
          <button className="reject-btn">Reject</button>
        </div>
      </div>

      <div className="request-card">
        <h3>Request Lesson Name:</h3>
        <div className="status-bar">
          <div className="status-indicator pending"></div>
        </div>
        <div className="status-label">$ pending payment</div>
      </div>

      <div className="request-card">
        <h3>Request Lesson Name:</h3>
        <div className="status-bar">
          <div className="status-indicator completed"></div>
        </div>
        <div className="status-label success">$ payment Successful</div>
      </div>
    </div>
  );
};

export default LessonRequests;