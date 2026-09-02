import React from "react";
import boy from "./assets/Untitled design (3).png"

const FirstPage = ({ onNavigate, isLightMode, toggleTheme }) => {
  const handleToggle = () => {
    if (toggleTheme && typeof toggleTheme === 'function') {
      toggleTheme();
    } else {
      console.error('toggleTheme is not a function!');
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body, html {
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
          height: 100vh;
          width: 100vw;
        }

        .hero-container {
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: background 0.6s ease;
          overflow: hidden;
        }

        /* Dark Mode */
        .hero-container.dark {
          background: linear-gradient(135deg, #1e524d 0%, #4a8e85 50%, #cfeae7 100%);
        }

        /* Light Mode */
        .hero-container.light {
          background: linear-gradient(135deg, #e8f5f3 0%, #f5fcfb 50%, #ffffff 100%);
        }

        .theme-toggle-btn {
          position: absolute;
          top: 25px;
          right: 25px;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s;
          z-index: 10;
          border: none;
        }

        .dark .theme-toggle-btn {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .light .theme-toggle-btn {
          background: rgba(46, 125, 117, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(46, 125, 117, 0.2);
        }

        .theme-toggle-btn:hover {
          transform: scale(1.05);
        }

        .hero-content {
          max-width: 1400px;
          width: 100%;
          height: 100%;
          padding: 15px 20px;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        @media (min-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            padding: 60px 80px;
          }
        }

        @media (min-width: 1200px) {
          .hero-content {
            padding: 60px 100px;
            gap: 80px;
          }
        }

        /* Left Side - Text Content */
        .left-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: fadeInRight 1s ease;
          max-width: 600px;
          position: relative;
          z-index: 5;
          order: 2;
        }

        @media (max-width: 967px) {
          .left-content {
            max-width: 100%;
            text-align: center;
            align-items: center;
            order: 2;
            gap: 10px;
          }
        }

        @media (min-width: 968px) {
          .left-content {
            order: 2;
            gap: 20px;
          }
        }

        .main-heading {
          font-size: 28px;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: 1.5px;
          margin: 0;
        }

        .dark .main-heading {
          color: white;
        }

        .light .main-heading {
          color: #1e524d;
        }

        @media (min-width: 968px) {
          .main-heading {
            font-size: 52px;
          }
        }

        @media (min-width: 1200px) {
          .main-heading {
            font-size: 58px;
          }
        }

        .subtitle {
          font-size: 13px;
          font-weight: 500;
          line-height: 1.5;
          max-width: 520px;
          margin: 0;
        }

        .dark .subtitle {
          color: rgba(255, 255, 255, 0.85);
        }

        .light .subtitle {
          color: #5a9e96;
        }

        @media (min-width: 968px) {
          .subtitle {
            font-size: 17px;
            line-height: 1.6;
          }
        }

        @media (min-width: 1200px) {
          .subtitle {
            font-size: 19px;
          }
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 6px;
        }

        @media (min-width: 968px) {
          .features-list {
            gap: 14px;
            margin-top: 8px;
          }
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 4px 0;
        }

        @media (min-width: 968px) {
          .feature-item {
            gap: 14px;
            padding: 8px 0;
          }
        }

        .feature-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: 0.3s;
        }

        @media (min-width: 968px) {
          .feature-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
          }
        }

        .dark .feature-icon {
          background: rgba(255, 255, 255, 0.12);
        }

        .light .feature-icon {
          background: rgba(46, 125, 117, 0.12);
        }

        .feature-item:hover .feature-icon {
          transform: scale(1.1);
        }

        .feature-icon svg {
          width: 18px;
          height: 18px;
        }

        @media (min-width: 968px) {
          .feature-icon svg {
            width: 22px;
            height: 22px;
          }
        }

        .dark .feature-icon svg {
          stroke: white;
        }

        .light .feature-icon svg {
          stroke: #2c7d75;
        }

        .feature-text {
          font-size: 13px;
          font-weight: 600;
        }

        .dark .feature-text {
          color: white;
        }

        .light .feature-text {
          color: #1e524d;
        }

        @media (min-width: 968px) {
          .feature-text {
            font-size: 16px;
          }
        }

        .cta-buttons {
          display: flex;
          gap: 14px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        @media (max-width: 967px) {
          .cta-buttons {
            justify-content: center;
            margin-top: 6px;
          }
        }

        @media (min-width: 968px) {
          .cta-buttons {
            margin-top: 12px;
          }
        }

        .btn-primary {
          padding: 12px 28px;
          border-radius: 50px;
          border: none;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dark .btn-primary {
          background: linear-gradient(135deg, #2c7d75 0%, #36918a 100%);
          color: white;
          box-shadow: 0 10px 30px rgba(44, 125, 117, 0.3);
        }

        .light .btn-primary {
          background: linear-gradient(135deg, #2c7d75 0%, #36918a 100%);
          color: white;
          box-shadow: 0 10px 30px rgba(44, 125, 117, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(44, 125, 117, 0.45);
        }

        .btn-primary:active {
          transform: translateY(-1px);
        }

        @media (min-width: 968px) {
          .btn-primary {
            font-size: 18px;
            padding: 18px 45px;
            gap: 10px;
          }
        }

        /* Right Side - Character Image */
        .right-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeInLeft 1s ease;
          height: 100%;
          min-height: 200px;
          order: 1;
        }

        @media (max-width: 967px) {
          .right-content {
            order: 1;
            min-height: 200px;
          }
        }

        @media (min-width: 968px) {
          .right-content {
            order: 1;
            min-height: 400px;
          }
        }

        .character-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .character-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 280px;
          height: 280px;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.5;
          z-index: 1;
        }

        .dark .character-bg {
          background: radial-gradient(circle, rgba(44, 125, 117, 0.5) 0%, transparent 70%);
        }

        .light .character-bg {
          background: radial-gradient(circle, rgba(207, 234, 231, 0.9) 0%, transparent 70%);
        }

        @media (min-width: 968px) {
          .character-bg {
            width: 380px;
            height: 380px;
            filter: blur(80px);
          }
        }

        @media (min-width: 1200px) {
          .character-bg {
            width: 450px;
            height: 450px;
          }
        }

        .character-image {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* High-quality image rendering */
        .character-image img {
          width: 100%;
          max-width: 240px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.2));
          animation: float 6s ease-in-out infinite;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
          transform: translateZ(0);
        }

        @media (min-width: 968px) {
          .character-image img {
            max-width: 360px;
          }
        }

        @media (min-width: 1200px) {
          .character-image img {
            max-width: 420px;
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        /* Decorative Elements */
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.06;
          animation: floatShape 15s ease-in-out infinite;
        }

        .dark .shape {
          background: rgba(255, 255, 255, 0.1);
        }

        .light .shape {
          background: rgba(46, 125, 117, 0.15);
        }

        .shape-1 {
          width: 150px;
          height: 150px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          top: 60%;
          right: 5%;
          animation-delay: 3s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          bottom: 15%;
          left: 8%;
          animation-delay: 6s;
        }

        @keyframes floatShape {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(15px, -15px) scale(1.05);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
        }
      `}</style>

      <div className={`hero-container ${isLightMode ? 'light' : 'dark'}`}>
        <button className="theme-toggle-btn" onClick={handleToggle}>
          {isLightMode ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2c7d75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line>
            </svg>
          )}
        </button>

        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="hero-content">
          {/* Left Side - Text Content */}
          <div className="left-content">
            <h1 className="main-heading">
              Élevez Vos<br />Compétences
            </h1>

            <p className="subtitle">
              Découvrez un monde d'opportunités avec tous vos cours, modules et examens en un seul endroit
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="feature-text">Cours Interactifs</span>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <span className="feature-text">Apprentissage Personnalisé</span>
              </div>
            </div>

            <div className="cta-buttons">
              <button className="btn-primary" onClick={onNavigate}>
                Commencer Maintenant
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Character Image */}
          <div className="right-content">
            <div className="character-container">
              <div className="character-bg"></div>
              
              <div className="character-image">
                <img 
                  src={boy} 
                  alt="Student Character"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;