import React from "react";
import Search from "./assets/Group 3.png";
import notification from "./assets/Notification.png";
import book from "./assets/File_dock_fill@3x.png";
import hello from "./assets/wired-outline-2716-logo-clubhouse#hover-pinch.png";
const Dashboard = ({ onCourse, onQuiz, onModules, onExams }) => {
  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #e9eeec;
          font-family: "Poppins", sans-serif;
        }

        .container {
          width: 430px;
          height: 932px;
          margin: auto;
          background: #f2f5f4;
          overflow: hidden;
        }

        /* HEADER */
        .header {
          background: #6D8883;
          padding: 30px 24px 26px;
          border-bottom-left-radius: 40px;
          border-bottom-right-radius: 40px;
          color: white;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }
        .notification {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
        .app-title {
          font-family: "Georgia", serif;
          font-size: 18px;
        }

        

        /* SEARCH */
        .search-box {
          position: relative;
          margin-bottom: 20px;
        }

        .search-input {
          width: 100%;
          padding: 14px 18px 14px 44px;
          border-radius: 30px;
          border: none;
          outline: none;
          font-size: 14px;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          color: #7f9a92
        }

        /* STATS */
        .stats {
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }

        .stat-card {
          flex: 1;
          background: #526662;
          border-radius: 16px;
          padding: 14px;
          color: white;
          text-align: center;
          font-size: 13px;
        }

        .stat-number {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        /* CONTENT */
        .content {
          padding: 20px 24px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin-bottom: 14px;
          color: #444;
        }

        /* COURSE CARD */
        .course {
          background: white;
          border-radius: 20px;
          padding: 16px;
          margin-bottom: 14px;
        }

        .course-title {
          font-family: "Georgia", serif;
          font-size: 15px;
          margin-bottom: 6px;
        }

        .course-info {
          font-size: 12px;
          color: #777;
          margin-bottom: 10px;
        }

        .course-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .play {
          width: 34px;
          height: 34px;
          background: #526662;
          border-radius: 10px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .progress {
          flex: 1;
        }

        .progress-bar {
          height: 6px;
          background: #e6ecea;
          border-radius: 6px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #526662;
          border-radius: 6px;
        }

        .progress-text {
          font-size: 11px;
          color: #666;
          margin-top: 6px;
        }
      `}</style>

      <div className="container">
        {/* HEADER */}
        <div className="header">
          <div className="header-top">
            <div className="app-title">Let’s start learning</div><span><img src={hello} alt="hello" style={{width:"28px", marginRight:"170px"}} /></span>
            <div className="notif"><img
              src={notification}
              alt="notification"
              className="notification"
            /></div>
          </div>

          <div className="search-box">
            <img src={Search} alt="search" className="search-icon" />
            <input
              className="search-input"
              placeholder="Search Module"
            />
          </div>

          <div className="stats">
            <div className="stat-card" onClick={onModules}>
              <span><img src={book} alt="book" style={{width:"28px"}} /></span><div className="stat-number">8</div>
              Modules
            </div>
            <div className="stat-card" onClick={onQuiz}>
              <span><img src={book} alt="book" style={{width:"28px"}} /></span><div className="stat-number">8</div>
              Quiz
            </div>
            <div className="stat-card" onClick={onExams}>
              <span><img src={book} alt="book" style={{width:"28px"}} /></span><div className="stat-number">16</div>
              Exams
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">
          <div className="section-header">
            <span>Continue learning</span>
            <span>View all →</span>
          </div>

          {/* Course 1 */}
          <div className="course" onClick={onCourse}>
            <div className="course-title">Algorithmic</div>
            <div className="course-info">
              Lesson 4 of 16 · 15 min left
            </div>
            <div className="course-row">
              <div className="play">▶</div>
              <div className="progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "65%" }} />
                </div>
                <div className="progress-text">65% Complete</div>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="course">
            <div className="course-title">Introduction to Javascript</div>
            <div className="course-info">
              Lesson 5 of 20 · 15 min left
            </div>
            <div className="course-row">
              <div className="play">▶</div>
              <div className="progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "40%" }} />
                </div>
                <div className="progress-text">40% Complete</div>
              </div>
            </div>
          </div>

          {/* Course 3 */}
          <div className="course">
            <div className="course-title">Object-Oriented Programming</div>
            <div className="course-info">
              Lesson 0 of 10 
            </div>
            <div className="course-row">
              <div className="play">▶</div>
              <div className="progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "0%" }} />
                </div>
                <div className="progress-text">0% Complete</div>
              </div>
            </div>
          </div>
            {/* Course 4 */}
          <div className="course">
            <div className="course-title">Introduction to HTML </div>
            <div className="course-info">
              Lesson 0 of 16 
            </div>
            <div className="course-row">
              <div className="play">▶</div>
              <div className="progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "0%" }} />
                </div>
                <div className="progress-text">65% Complete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

