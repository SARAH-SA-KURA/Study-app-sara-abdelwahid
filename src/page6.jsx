import React from "react";
import notification from "./assets/Notification.png";
import image from "./assets/whiteboard-849812.jpg";
import next from "./assets/Vector 9.png";

const LessonDetail = ({ onNavigate, onQuiz })  => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');


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
          padding: 20px;
          height: 70px;
          color: white;
          border-bottom-left-radius: 30px;
          border-bottom-right-radius: 30px;
        }
        .notification {
          width: 30px;
          height: 30px;
          cursor: pointer;
          margin-top:15px;
        }
        .icon-btn {
          width: 30px;
          height: 30px;
          background: #6E9A94;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          cursor: pointer;
          margin-top:15px;
        }

        .header-icons {
          display: flex;
          justify-content: space-between;
        }

        /* VIDEO CARD */
        .video-card {
          width: 90%;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          margin: 20px auto;
        }

        .video-wrapper {
          position: relative;
        }

        .video-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 54px;
          height: 54px;
          background: rgba(0,0,0,0.55);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 22px;
        }

        /* CONTENT */
        .content {
          padding: 20px 24px;
        }

        .title {
          font-family: "Georgia", serif;
          font-size: 22px;
          margin-bottom: 6px;
          margin-left:10px;
        }

        .subtitle {
          font-size: 13px;
          color: #777;
          margin-bottom: 14px;
          margin-left:15px;
        }

        .progress-bar {
          height: 6px;
          background: #e0e6e4;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 20px;
          margin-left:15px;
          width: 90%;
        }

        .progress-fill {
          height: 100%;
          width: 30%;
          background: #7f9a92;
          border-radius: 6px;
        }

        /* SECTION */
        .section-title {
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 12px;
        }

        /* LESSON LIST */
        .lesson-item {
          background: white;
          border-radius: 14px;
          padding: 14px 16px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          cursor: pointer;
        }

        .lesson-item:hover {
          background: #eef2f1;
        }

        .lesson-text {
          max-width: 300px;
        }

        .arrow {
          font-size: 18px;
          color: #9a9a9a;
        }
      `}</style>

      <div className="container">
        {/* HEADER */}
        <div className="header">
          <div className="header-icons">
            <div className="icon-btn" onClick={onNavigate}><img src={next} alt="next" style={{width:"20px"}} /></div>
          <div className="notif"><img
              src={notification}
              alt="notification"
              className="notification"
            /></div>
          </div>
        </div>

        {/* VIDEO */}
        <div className="video-card">
          <div className="video-wrapper">
            <img
              src={image}
              alt="lesson"
              className="video-img"
            />
            <div className="play-btn">▶</div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">
          <div className="title">Algorithmic</div>
          <div className="subtitle">Lesson 4 of 16</div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <div className="section-title">Lesson Navigation</div>

          <div className="lesson-item">
            <span className="lesson-text">1. What is an Algorithm?</span>
            <span className="arrow">›</span>
          </div>

          <div className="lesson-item">
            <span className="lesson-text">2. Problem Modeling</span>
            <span className="arrow">›</span>
          </div>

          <div className="lesson-item">
            <span className="lesson-text">
              3. Basic Concepts: Variables & Types
            </span>
            <span className="arrow">›</span>
          </div>

          <div className="lesson-item">
            <span className="lesson-text">
              4. Operators and Expressions
            </span>
            <span className="arrow">›</span>
          </div>

          <div className="lesson-item">
            <span className="lesson-text">
              5. Assignment and Elementary Actions
            </span>
            <span className="arrow">›</span>
          </div>

          <div className="lesson-item">
            <span className="lesson-text">
              6. Conditional Structures: IF… THEN… ELSE
            </span>
            <span className="arrow">›</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonDetail;

