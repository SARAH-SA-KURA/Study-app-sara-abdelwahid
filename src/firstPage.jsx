import React from "react";
import logo from "./assets/logo.png";
import Illustration from "./assets/woman-7005175_1280.png";
import Book from "./assets/Frame 6.png";

const FirstPage =  ({ onNavigate }) => {
  return (
    <div className="page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #2f2f2f;
        }

        .app-screen {
          width: 430px;
          height: 932px;
          background-color: #F0F3F3;
          overflow: hidden;
          position: relative;
        }

        .header {
          height: 70%;
          width: 100%;
          background-color: #6c8a83;
          border-bottom-left-radius: 45px;
          border-bottom-right-radius: 45px;
          padding: 24px;
          display: flex;
          flex-direction: column;
        }

      

        .logo-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo-container img {
          width: 280px;
        }

        .menu {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .menu-card {
          height: 78px;
          background-color: #4b605a;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          color: white;
          border: none;
          cursor: pointer;
          font-family: 'Great Vibes', cursive;
          font-size: 26px;
          letter-spacing: 3px;
        }

        .menu-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .footer {
          position: absolute;
          bottom: 0;
          height: 30%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cta {
          background-color: #4b605a;
          color: white;
          width: 280px;
          margin-left: 120px;
          margin-top: 70px;
          font-family: 'Great Vibes', cursive;
          font-size: 28px;
          padding: 14px 48px;
          border-radius: 60px;
          border: none;
          cursor: pointer;
          z-index: 2;
        }

        .illustration {
          position: absolute;
          right: 240px;
          bottom: 70px;
          width: 160px;
          opacity: 0.9;
        }
      `}</style>

      <div className="app-screen">
        {/* Header */}
        <div className="header">
          {/* Status bar */}
         

          {/* Logo */}
          <div className="logo-container">
            <img src={logo} alt="Learnex Logo" />
          </div>

          {/* Menu */}
          <div className="menu">
            {/* Years button */}
            <button className="menu-card" onClick={() => onNavigate("years")}>
              <div className="menu-left">
                <img src={Book} alt="book" style={{width:"40px"}}/>
                <span>Years</span>
              </div>
              
            </button>

            {/* Speciality button (optional navigation) */}
            <button className="menu-card">
              <div className="menu-left">
                <img src={Book} alt="book" style={{width:"40px"}} />
                <span>Speciality</span>
              </div>
              
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <button className="cta" onClick={() => onNavigate("getStarted")}>Get Started</button>
          <img
            src={Illustration}
            alt="Illustration"
            className="illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;




