import React from "react";
import notification from "./assets/Notification.png";
import next from "./assets/Vector 9.png";

const AlgorithmicQuiz2 = () => {
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
          .algorithm-steps {
            margin-top: 14px;
            padding-left: 16px;
            font-family: monospace;
            font-size: 15px;
            line-height: 1.8;
            color: #2f3e3a;
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
          background: white;
          color: #6b7f7a;
          border: 1px solid white;
        }

        /* Back button */
        .back-btn {
          font-family: 'Great Vibes', cursive;
          position: absolute; 
          width: 141px;
          bottom: 80px;
          left: 80px;
          background: #ffffff;
          color: #6b7f7a;
          border: 1px solid #6b7f7a;
          padding: 12px 28px;
          border-radius: 22px;
          font-size: 20px;
          cursor: pointer;
        }
        .back-btn:hover {
          background: #6b7f7a;
          color: white;
        }
      `}</style>

      <div className="container">
        {/* HEADER */}
        <div className="header">
          <div className="header-icons">
            <div className="icon-btn">
              <img src={next} alt="back" />
            </div>
            <div className="icon-btn">
              <img src={notification} alt="notification" />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">
          <div className="title">Algorithmic Quiz</div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <div className="question">
            <strong>2.</strong> What is the final value of variable C after the following sequence of assignments?
            <div className="algorithm-steps">
                <div>A ← 5</div>
                <div>B ← A + 2</div>
                <div>C ← B * 3</div>
                <div>A ← C - 10</div>
          </div>
          </div>

          <div className="answer">A. 21</div>
          <div className="answer">B. 15</div>
          <div className="answer">C. 11</div>
          <div className="answer">D. 5</div>
        </div>

        <button className="next-btn">Next</button>
        <button className="back-btn">Back</button>
      </div>
    </>
  );
};

export default AlgorithmicQuiz2;