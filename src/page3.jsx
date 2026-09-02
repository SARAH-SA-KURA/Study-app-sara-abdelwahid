import { useEffect, useState } from "react";
import Book from "./assets/Frame 6.png";

export default function ThirdPage({ onNavigate, onLogoClick, isLightMode, toggleTheme }) {
  const [years, setYears] = useState([]);

  useEffect(() => {
    fetch("https://podo.b1.ma/api/public/years")
      .then((response) => response.json())
      .then((json) => setYears(json.data || []))
      .catch(() => console.log("Connection error."));
  }, []);

  return (
    <div className={`page ${isLightMode ? "light-mode" : "black-mode"}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        
        body, html { margin: 0; padding: 0; height: 100vh; font-family: 'Poppins', sans-serif; overflow: hidden; }
        
        .page {
          height: 100vh; width: 100vw; display: flex; justify-content: center; align-items: center;
          transition: background 0.6s ease;
          position: relative;
        }

        /* --- BLACK MODE (Original Gradient) --- */
        .black-mode {
          background: linear-gradient(135deg, #1e524d 0%, #4a8e85 50%, #cfeae7 100%);
        }

        /* --- LIGHT MODE (Optimized Colors) --- */
        .light-mode {
          background: linear-gradient(135deg, #e8f5f3 0%, #f5fcfb 50%, #ffffff 100%);
        }

        .theme-toggle {
          position: absolute; top: 30px; right: 30px;
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: 0.3s; z-index: 10;
          border: none;
        }

        /* Theme toggle styling based on mode */
        .black-mode .theme-toggle {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        .light-mode .theme-toggle {
          background: rgba(46, 125, 117, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(46, 125, 117, 0.2);
        }

        .theme-toggle:hover {
          transform: scale(1.05);
        }

        /* Back Button */
        .back-button {
          position: absolute; top: 30px; left: 30px;
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: 0.3s; z-index: 10;
          border: none;
        }

        .black-mode .back-button {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        .light-mode .back-button {
          background: rgba(46, 125, 117, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(46, 125, 117, 0.2);
        }

        .back-button:hover {
          transform: scale(1.05);
        }

        .container {
          display: flex; flex-direction: column; height: 100%;
          padding: 40px 25px; max-width: 430px; margin: 0 auto;
          width: 100%; box-sizing: border-box; align-items: center; justify-content: space-evenly;
        }

        @media (min-width: 768px) {
          .container { max-width: 1200px; }
          .cards-container {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px !important;
          }
        }

        .text-header { text-align: center; }
        
        /* Text clarity based on mode */
        .welcome-text { font-size: 32px; font-weight: 800; margin: 0; letter-spacing: -1px; }
        .black-mode .welcome-text { color: white; }
        .light-mode .welcome-text { color: #1e524d; }

        .tagline { font-size: 16px; font-weight: 500; margin-top: 8px; }
        .black-mode .tagline { color: rgba(255, 255, 255, 0.8); }
        .light-mode .tagline { color: #5a9e96; }

        .cards-container { width: 100%; display: flex; flex-direction: column; gap: 16px; }

        /* --- DARK MODE CARDS --- */
        .black-mode .ancient-card {
          background: #2c7d75;
          color: white; padding: 24px; border-radius: 24px;
          display: flex; align-items: center; gap: 18px; cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .black-mode .ancient-card:hover {
          transform: translateY(-5px);
          background: #348e85;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        /* --- LIGHT MODE CARDS (Optimized) --- */
        .light-mode .ancient-card {
          background: linear-gradient(135deg, #2c7d75 0%, #36918a 100%);
          color: white; padding: 24px; border-radius: 24px;
          display: flex; align-items: center; gap: 18px; cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 20px rgba(44, 125, 117, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .light-mode .ancient-card:hover {
          transform: translateY(-5px);
          background: linear-gradient(135deg, #348e85 0%, #3da099 100%);
          box-shadow: 0 12px 28px rgba(44, 125, 117, 0.35);
        }

        .icon-box {
          width: 50px; height: 50px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 15px; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        
        .icon-box img { width: 26px; filter: brightness(0) invert(1); }

        .card-text { 
          flex: 1; 
          font-weight: 600; 
          font-size: 18px;
        }
        
        .card-arrow { 
          font-size: 22px; 
          opacity: 0.8;
          flex-shrink: 0;
        }

        /* Mobile optimization - smaller cards */
        @media (max-width: 767px) {
          .cards-container { gap: 10px; }

          .black-mode .ancient-card,
          .light-mode .ancient-card {
            padding: 0 16px;
            border-radius: 14px;
            gap: 12px;
            height: 54px;
          }

          .black-mode .ancient-card:hover,
          .light-mode .ancient-card:hover {
            transform: translateY(-3px);
          }

          .icon-box {
            width: 32px;
            height: 32px;
            border-radius: 8px;
          }

          .icon-box img { width: 18px; }

          .card-text { 
            font-size: 14px;
            white-space: nowrap; 
            overflow: hidden; 
            text-overflow: ellipsis;
          }

          .card-arrow { font-size: 18px; }
        }

        /* Desktop sizes - keep original large size */
        @media (min-width: 768px) {
          .cards-container { gap: 25px; }

          .black-mode .ancient-card,
          .light-mode .ancient-card {
            padding: 24px;
            border-radius: 24px;
            gap: 18px;
            height: auto;
          }

          .icon-box {
            width: 50px;
            height: 50px;
            border-radius: 15px;
          }

          .icon-box img { width: 26px; }

          .card-text { font-size: 18px; }

          .card-arrow { font-size: 22px; }
        }
      `}</style>

      {/* Back Button */}
      <button className="back-button" onClick={onLogoClick}>
        {isLightMode ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2c7d75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        )}
      </button>

      {/* Theme Toggle */}
      <div className="theme-toggle" onClick={toggleTheme}>
        {isLightMode ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2c7d75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line>
          </svg>
        )}
      </div>

      <div className="container">
        <div className="text-header">
          <h1 className="welcome-text">Choisissez votre parcours</h1>
          <p className="tagline">Sélectionnez votre année pour commencer</p>
        </div>

        <div className="cards-container">
          {years.map((year) => (
            <div key={year.id} className="ancient-card" onClick={() => onNavigate(year.id)}>
              <div className="icon-box">
                <img src={Book} alt="book" />
              </div>
              <div className="card-text">{year.name}</div>
              <div className="card-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}