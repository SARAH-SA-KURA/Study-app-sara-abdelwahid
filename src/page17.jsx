import React from "react";
import notification from "./assets/Notification.png";
import back from "./assets/Vector 9.png";
import upload from "./assets/Open.png";
import file from "./assets/Download File.png";
import book from "./assets/notebook_fill.png";

const ExamsScreen = ({ onBack }) => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          font-family: "Poppins", sans-serif;
        }

        .container {
          width: 430px;
          height: 932px;
          margin: auto;
          background: #f3f6f4;
          overflow: hidden;
          position: relative;
        }

        /* HEADER */
        .header {
          background: #6D8883;
          padding: 20px 24px;
          height: 90px;
          color: white;
          border-bottom-left-radius: 30px;
          border-bottom-right-radius: 30px;
        }

        .header-icons {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .icon-btn {
          width: 34px;
          height: 34px;
          background: #6E9A94;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .icon-btn img {
          width: 18px;
          height: 18px;
        }

        /* TABS */
        .tabs {
          display: flex;
          gap: 16px;
          padding: 26px;
        }

        .tab {
          flex: 1;
          height: 48px;
          border-radius: 16px;
          border: none;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .tab.active {
          background: #6E9A94;
          color: white;
        }

        .tab.inactive {
            background: #526662;
            color: white;
          }

        /* EXAM LIST */
        .list {
          padding: 0 26px;
        }

        .exam-item {
          background: white;
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .exam-title {
          font-size: 15px;
          font-weight: 500;
        }

        .exam-icons {
          display: flex;
          gap: 12px;
        }

        .exam-icons img {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      `}</style>

      <div className="container">
        {/* HEADER */}
        <div className="header">
          <div className="header-icons">
            <div className="icon-btn" onClick={onBack}>
              <img src={back} alt="back" />
            </div>
            <div className="icon-btn">
              <img src={notification} alt="notification" />
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="tabs">
          <button className="tab active"><img src={book} alt="book" style={{width:"28px"}} />Normal Exams</button>
          <button className="tab inactive"><img src={book} alt="book" style={{width:"28px"}} />EFM</button>
        </div>

        {/* EXAM LIST */}
        <div className="list">
          {Array.from({ length: 10 }, (_, i) => (
            <div className="exam-item" key={i}>
              <div className="exam-title">Exam {i + 1}</div>
              <div className="exam-icons">
                <img src={upload} alt="upload" />
                <img src={file} alt="file" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExamsScreen;