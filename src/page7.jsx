import React from "react";
import notification from "./assets/Notification.png";
import next from "./assets/Vector 9.png";

const AlgorithmicQuiz = ({ onBack, onNext }) => {
  return (
    <>
       <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

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

        /* CONTENT */
        .content {
          padding: 26px;
        }

        .title {
          font-size: 29px;
          font-family: 'Great Vibes', cursive;
          letter-spacing: 2px;
          margin-bottom: 14px;
        }

        /* PROGRESS */
        .progress-bar {
          width: 100%;
          height: 4px;
          background: #dfe6e3;
          border-radius: 4px;
          margin-bottom: 30px;
        }

        .progress-fill {
          width: 18%;
          height: 100%;
          background: #6b7f7a;
          border-radius: 4px;
        }

        /* QUESTION */
        .question {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 50px;
        }

        /* ANSWERS */
        .answer {
          background: white;
          padding: 20px 30px;
          border-radius: 14px;
          margin-bottom: 30px;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
        }

        .answer:hover {
          background: #eef3f1;
        }

        /* NEXT BUTTON */
        .next-btn {
          font-family: 'Great Vibes', cursive;
          position: absolute;
          width: 141px;
          bottom: 80px;
          right: 40px;
          background: #6b7f7a;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 22px;
          font-size: 20px;
          cursor: pointer;
        }

        .next-btn:hover {
          opacity: 0.9;
        }
      `}</style>

      <div className="container">
        <div className="header">
          <div className="header-icons">
            <div className="icon-btn" onClick={onBack}>
              <img src={next} alt="back" />
            </div>
            <div className="icon-btn">
              <img src={notification} alt="notification" />
            </div>
          </div>
        </div>

        <div className="content">
          <div className="title">Algorithmic Quiz</div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <div className="question">
            <strong>1.</strong> Which data type stores decimals?
          </div>

          <div className="answer">A. Character</div>
          <div className="answer">B. Boolean</div>
          <div className="answer">C. Real (Float)</div>
          <div className="answer">D. Integer</div>
        </div>

        <button className="next-btn" onClick={onNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default AlgorithmicQuiz;
