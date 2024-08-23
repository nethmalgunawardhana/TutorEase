import React from 'react';
import './StudentDashboard.css';

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <header>
        <div className="logo">
          <img src="./homepageimage.jpg" alt="Graduation Cap"  />
        </div>
        <h1>Student Dashboard</h1>
        <nav>
          <button className="active">MyProfile</button>
          <button>Request A Lesson</button>
          <button>Request Status</button>
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
        <div className="profile-section">
          <img src="./user.webp" alt="Profile" className="profile-image" />
          <h2>Aditha</h2>
          <p>0760454341</p>
          <p>adithabuwaneka0@gmail.com</p>
        </div>
        
        <form className="profile-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name :</label>
            <input type="text" id="fullName" name="fullName" />
          </div>
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
            <label htmlFor="academicLevel">Academic level :</label>
            <select id="academicLevel" name="academicLevel">
              <option value="">Select academic level</option>
              {/* Add academic level options */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description :</label>
            <textarea id="description" name="description" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="subjects">Subjects of interest :</label>
            <select id="subjects" name="subjects">
              <option value="">Select subjects</option>
              {/* Add subject options */}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentDashboard;