import React from 'react';
import './TutorDashboard.css';
import LessonRequests from './LessonRequests';
import { useState } from 'react';
function TutorDashboard() {
    const [activeTab, setActiveTab] = useState('MyProfile');
  
    const renderContent = () => {
      switch (activeTab) {
        case 'MyProfile':
          return (
            <>
              <div className="profile-section">
                <img src="./user.webp" alt="Profile" className="profile-image" />
                <h2>Aditha</h2>
                <p>0760454341</p>
                <p>adithabuwaneka0@gmail.com</p>
              </div>
              
              <form className="profile-form">
                <div className="form-group">
                  <label htmlFor="displayName">Display Name :</label>
                  <input type="text" id="displayName" name="displayName" />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age :</label>
                  <select id="age" name="age">
                    <option value="">Select age</option>
                    {/* Add age options */}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender :</label>
                  <select id="gender" name="gender">
                    <option value="">Select gender</option>
                    {/* Add gender options */}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="languages">Languages :</label>
                  <select id="languages" name="languages">
                    <option value="">Select languages</option>
                    {/* Add language options */}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="mail">Mail :</label>
                  <input type="email" id="mail" name="mail" />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile :</label>
                  <input type="tel" id="mobile" name="mobile" />
                </div>
                <div className="form-group">
                  <label htmlFor="qualification">Qualifications:</label>
                  <select id="qualificationLevel" name="qualificationLevel">
                    <option value="">Select qualification level</option>
                    {/* Add academic level options */}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description :</label>
                  <textarea id="description" name="description" rows="3"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="subjects">Subject/Subjects:</label>
                  <select id="subjects" name="subjects">
                    <option value="">Select subjects</option>
                    {/* Add subject options */}
                  </select>
                </div>
              </form>
            </>
          );
        case 'MyRequest':
          return <LessonRequests />;
        case 'LearningManagement':
          return <div>Learning Management Content</div>;
        default:
          return null;
      }
    };
  
    return (
      <div className="tutor-dashboard">
        <header>
          <div className="logo">
            <img src="./homepageimage.jpg" alt="Graduation Cap"  />
          </div>
          <h1>Tutor Dashboard</h1>
          <nav>
            <button 
              className={activeTab === 'MyProfile' ? 'active' : ''}
              onClick={() => setActiveTab('MyProfile')}
            >
              MyProfile
            </button>
            <button 
              className={activeTab === 'MyRequest' ? 'active' : ''}
              onClick={() => setActiveTab('MyRequest')}
            >
              My Request
            </button>
            <button 
              className={activeTab === 'LearningManagement' ? 'active' : ''}
              onClick={() => setActiveTab('LearningManagement')}
            >
              Learning Management
            </button>
          </nav>
          <div className="header-icons">
            <div className="notification-icon">
              <img src="" alt="Notifications" />
              <span className="notification-count">0</span>
            </div>
            <img src="/path-to-user-avatar.png" alt="User" className="user-avatar" />
          </div>
        </header>
        
        <div className="dashboard-content">
          {renderContent()}
        </div>
      </div>
    );
  }
  
  export default TutorDashboard;