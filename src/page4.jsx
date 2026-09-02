import { useEffect, useState } from "react";
import SearchIcon from "./assets/Group 3.png";

export default function FieldSelection({ yearId, onNavigate, onBack, isLightMode, toggleTheme, searchFilter }) {
  const [fields, setFields] = useState([]);
  const [search, setSearch] = useState(searchFilter || "");
  const [loading, setLoading] = useState(true);

  // Minimalist SVG Icons
  const Icons = {
    Laptop: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
    Globe: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    Briefcase: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    GraduationCap: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10L12 5L2 10L12 15L22 10Z"/><path d="M6 12.5V16C6 16 8.5 18 12 18C15.5 18 18 16 18 16V12.5"/>
      </svg>
    )
  };

  const getFiliereIcon = (name = "") => {
    const lower = name.toLowerCase();
    if (lower.includes("digital") || lower.includes("inf") || lower.includes("web") || lower.includes("mobile")) return <Icons.Laptop />;
    if (lower.includes("gestion") || lower.includes("commerce") || lower.includes("admin")) return <Icons.Briefcase />;
    if (lower.includes("langue") || lower.includes("français") || lower.includes("anglais")) return <Icons.Globe />;
    return <Icons.GraduationCap />;
  };

  useEffect(() => {
    if (!yearId) return;
    setLoading(true);
    fetch(`https://podo.b1.ma/api/public/years/${yearId}/filieres`)
      .then((res) => res.json())
      .then((json) => {
        setFields(json.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [yearId]);

  const filteredFields = fields.filter((field) =>
    field.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`layout ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        
        body, html { margin: 0; padding: 0; height: 100vh; font-family: 'Poppins', sans-serif; overflow: hidden; }

        .layout {
          height: 100vh;
          display: flex;
          flex-direction: column;
          transition: background 0.6s ease;
          position: relative;
          overflow: hidden;
        }

        /* --- DARK MODE --- */
        .dark-mode {
          background: linear-gradient(135deg, #1e524d 0%, #4a8e85 50%, #cfeae7 100%);
        }

        /* --- LIGHT MODE --- */
        .light-mode {
          background: linear-gradient(135deg, #e8f5f3 0%, #f5fcfb 50%, #ffffff 100%);
        }

        .theme-toggle {
          position: absolute; top: 20px; right: 20px;
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: 0.3s; z-index: 10;
          border: none;
        }

        @media (min-width: 768px) {
          .theme-toggle {
            top: 25px; right: 25px;
            width: 48px; height: 48px;
          }
        }

        .dark-mode .theme-toggle {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .light-mode .theme-toggle {
          background: rgba(46, 125, 117, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(46, 125, 117, 0.2);
        }

        .theme-toggle:hover {
          transform: scale(1.05);
        }

        .container {
          display: flex; flex-direction: column; height: 100%;
          padding: 20px 4%; max-width: 1400px; margin: 0 auto; width: 100%; box-sizing: border-box;
        }

        @media (min-width: 768px) {
          .container {
            padding: 30px 5%;
          }
        }

        .header-section { margin-bottom: 8px; }

        @media (min-width: 768px) {
          .header-section { margin-bottom: 12px; }
        }

        .back-btn {
          width: 36px; height: 36px; 
          border-radius: 10px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; margin-bottom: 8px; transition: 0.3s;
          border: none;
        }

        @media (min-width: 768px) {
          .back-btn {
            width: 40px; height: 40px;
            margin-bottom: 10px;
          }
        }

        .dark-mode .back-btn {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px); 
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .light-mode .back-btn {
          background: rgba(46, 125, 117, 0.1);
          backdrop-filter: blur(10px); 
          border: 1px solid rgba(46, 125, 117, 0.2);
        }

        .back-btn:hover {
          transform: scale(1.05);
        }

        .back-btn svg {
          width: 18px;
          height: 18px;
        }

        .title-main { 
          font-size: 20px; 
          font-weight: 700; 
          margin: 0;
          padding-right: 60px;
          line-height: 1.3;
        }

        @media (min-width: 768px) {
          .title-main { 
            font-size: 24px;
            padding-right: 0;
          }
        }

        .dark-mode .title-main { color: white; }
        .light-mode .title-main { color: #1e524d; }

        .subtitle-main { 
          font-size: 11px; 
          margin-top: 4px;
          line-height: 1.4;
        }

        @media (min-width: 768px) {
          .subtitle-main { 
            font-size: 12px;
            margin-top: 3px;
          }
        }

        .dark-mode .subtitle-main { color: rgba(255, 255, 255, 0.7); }
        .light-mode .subtitle-main { color: #5a9e96; }

        .search-area { 
          position: relative; 
          max-width: 100%; 
          margin: 12px 0; 
        }

        @media (min-width: 768px) {
          .search-area { 
            max-width: 450px; 
            margin: 15px 0; 
          }
        }
        
        .search-input {
          width: 100%; 
          height: 42px; 
          border-radius: 12px; 
          padding: 0 16px 0 44px; 
          font-size: 14px; 
          outline: none;
          transition: 0.3s;
          font-family: 'Poppins', sans-serif;
        }

        @media (min-width: 768px) {
          .search-input {
            height: 44px;
            font-size: 14px;
          }
        }

        .dark-mode .search-input {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(15px); 
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
        }

        .dark-mode .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .light-mode .search-input {
          background: white;
          backdrop-filter: blur(15px); 
          border: 1px solid rgba(46, 125, 117, 0.15);
          color: #1e524d;
        }

        .light-mode .search-input::placeholder {
          color: rgba(46, 125, 117, 0.4);
        }

        .search-input:focus {
          border-color: #2c7d75;
          box-shadow: 0 0 0 3px rgba(44, 125, 117, 0.1);
        }

        .search-icon {
          position: absolute; 
          left: 16px; 
          top: 50%; 
          transform: translateY(-50%);
          width: 16px; 
          transition: 0.3s;
          pointer-events: none;
        }

        .dark-mode .search-icon {
          opacity: 0.5; 
          filter: brightness(0) invert(1);
        }

        .light-mode .search-icon {
          opacity: 0.4; 
          filter: brightness(0) saturate(100%) invert(27%) sepia(24%) saturate(1289%) hue-rotate(134deg) brightness(95%) contrast(90%);
        }

        .scroll-grid {
          flex: 1; 
          overflow-y: auto; 
          display: grid;
          grid-template-columns: 1fr; 
          gap: 12px; 
          padding-bottom: 15px;
          align-content: start;
        }

        @media (min-width: 600px) {
          .scroll-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 900px) {
          .scroll-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding-bottom: 20px;
          }
        }

        /* Custom Scrollbar */
        .scroll-grid::-webkit-scrollbar {
          width: 6px;
        }

        .dark-mode .scroll-grid::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .light-mode .scroll-grid::-webkit-scrollbar-track {
          background: rgba(46, 125, 117, 0.05);
          border-radius: 10px;
        }

        .dark-mode .scroll-grid::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }

        .light-mode .scroll-grid::-webkit-scrollbar-thumb {
          background: rgba(46, 125, 117, 0.3);
          border-radius: 10px;
        }

        /* --- DARK MODE CARDS --- */
        .dark-mode .compact-field-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px); 
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 18px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          transition: 0.3s;
        }

        @media (min-width: 768px) {
          .dark-mode .compact-field-card {
            padding: 20px 22px;
            border-radius: 16px;
            gap: 16px;
            min-height: 80px;
          }
        }

        @media (min-width: 1200px) {
          .dark-mode .compact-field-card {
            padding: 15px 20px;
            min-height: 60px;
          }
        }

        .dark-mode .compact-field-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        /* --- LIGHT MODE CARDS --- */
        .light-mode .compact-field-card {
          background: white;
          backdrop-filter: blur(10px); 
          border: 1px solid rgba(46, 125, 117, 0.12);
          padding: 18px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 4px 12px rgba(46, 125, 117, 0.08);
        }

        @media (min-width: 768px) {
          .light-mode .compact-field-card {
            padding: 20px 22px;
            border-radius: 16px;
            gap: 16px;
            min-height: 80px;
          }
        }

        @media (min-width: 1200px) {
          .light-mode .compact-field-card {
            padding: 15px 20px;
            min-height: 60px;
          }
        }

        .light-mode .compact-field-card:hover {
          transform: translateY(-4px);
          background: linear-gradient(135deg, #2c7d75 0%, #36918a 100%);
          box-shadow: 0 12px 28px rgba(44, 125, 117, 0.25);
        }

        .light-mode .compact-field-card:hover .field-icon,
        .light-mode .compact-field-card:hover .field-title,
        .light-mode .compact-field-card:hover .field-arrow {
          color: white;
        }

        .field-icon {
          width: 42px;
          height: 42px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: 0.3s;
        }

        @media (min-width: 768px) {
          .field-icon {
            width: 44px;
            height: 44px;
            border-radius: 11px;
          }
        }

        .dark-mode .field-icon {
          background: rgba(255, 255, 255, 0.12);
          color: white;
        }

        .light-mode .field-icon {
          background: rgba(46, 125, 117, 0.12);
          color: #2c7d75;
        }

        .field-title {
          flex: 1;
          font-size: 13px;
          font-weight: 600;
          transition: 0.3s;
          line-height: 1.3;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        @media (min-width: 768px) {
          .field-title {
            font-size: 15px;
            line-height: 1.35;
          }
        }

        @media (min-width: 1200px) {
          .field-title {
            font-size: 16px;
          }
        }

        .dark-mode .field-title {
          color: white;
        }

        .light-mode .field-title {
          color: #1e524d;
        }

        .field-arrow {
          font-size: 18px;
          opacity: 0.6;
          transition: 0.3s;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .field-arrow {
            font-size: 22px;
            margin-left: 6px;
          }
        }

        .dark-mode .field-arrow {
          color: white;
        }

        .light-mode .field-arrow {
          color: #2c7d75;
        }

        .compact-field-card:hover .field-arrow {
          opacity: 1;
          transform: translateX(4px);
        }

        .loading-text {
          text-align: center;
          padding: 40px 20px;
          font-size: 15px;
        }

        .dark-mode .loading-text {
          color: rgba(255, 255, 255, 0.7);
        }

        .light-mode .loading-text {
          color: #5a9e96;
        }
      `}</style>

      <div className="theme-toggle" onClick={toggleTheme}>
        {isLightMode ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2c7d75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
      </div>

      <div className="container">
        <div className="header-section">
          <button className="back-btn" onClick={onBack}>
            {isLightMode ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="#2c7d75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            )}
          </button>
          <h1 className="title-main">Choisissez votre filière</h1>
          <p className="subtitle-main">Sélectionnez la filière pour accéder aux modules</p>
        </div>

        <div className="search-area">
          <img src={SearchIcon} alt="Search" className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Rechercher une filière..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="scroll-grid">
          {loading ? (
            <div className="loading-text">Chargement...</div>
          ) : filteredFields.length === 0 ? (
            <div className="loading-text">Aucune filière trouvée</div>
          ) : (
            filteredFields.map((field) => (
              <div
                key={field.id}
                className="compact-field-card"
                onClick={() => onNavigate(field.id)}
              >
                <div className="field-icon">{getFiliereIcon(field.name)}</div>
                <div className="field-title">{field.name}</div>
                <div className="field-arrow">→</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}