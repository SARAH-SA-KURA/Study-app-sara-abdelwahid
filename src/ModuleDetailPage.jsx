import { useEffect, useState } from "react";
import SearchIcon from "./assets/Group 3.png";
import back from "./assets/Vector 9.png";
import downloadIcon from "./assets/Download File.png";

export default function ModuleDetailPage({ moduleId, onBack, isLightMode, toggleTheme }) {
  const [courses, setCourses] = useState([]);
  const [efms, setEfms] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Courses");

  // Minimalist Vector File Icon
  const FileIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
    </svg>
  );

  useEffect(() => {
    if (!moduleId) return;
    setLoading(true);
    Promise.all([
      fetch(`https://podo.b1.ma/api/public/modules/${moduleId}/courses`).then(res => res.json()),
      fetch(`https://podo.b1.ma/api/public/modules/${moduleId}/efms`).then(res => res.json())
    ]).then(([coursesJson, efmsJson]) => {
      setCourses(coursesJson.data || []);
      setEfms(efmsJson.data || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [moduleId]);

  const filteredItems = (activeTab === "Courses" ? courses : efms).filter((item) =>
    (item.title || item.name || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`layout ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        body, html { margin: 0; padding: 0; height: 100vh; font-family: 'Poppins', sans-serif; overflow: hidden; }

        .layout {
          height: 100vh;
          display: flex;
          flex-direction: column;
          transition: background 0.6s ease;
          position: relative;
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
          position: absolute; top: 25px; right: 25px;
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: 0.3s; z-index: 10;
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

        .header-section { margin-bottom: 5px; }

        .back-btn {
          width: 32px; height: 32px;
          border-radius: 8px; 
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; margin-bottom: 10px; transition: 0.3s;
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

        .title-main { font-size: 24px; font-weight: 700; margin: 0; }
        .dark-mode .title-main { color: white; }
        .light-mode .title-main { color: #1e524d; }

        .subtitle-main { font-size: 12px; margin-top: 2px; }
        .dark-mode .subtitle-main { color: rgba(255, 255, 255, 0.7); }
        .light-mode .subtitle-main { color: #5a9e96; }

        .controls-row {
          display: flex; gap: 10px; margin: 15px 0; align-items: center;
          flex-wrap: wrap;
        }

        .search-container { position: relative; flex: 1; min-width: 200px; }
        
        .search-bar {
          width: 80%; height: 38px;
          border-radius: 10px;
          padding: 0 40px; font-size: 13px; outline: none;
          transition: 0.3s;
        }

        .dark-mode .search-bar {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(15px); 
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
        }

        .dark-mode .search-bar::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .light-mode .search-bar {
          background: white;
          backdrop-filter: blur(15px); 
          border: 1px solid rgba(46, 125, 117, 0.15);
          color: #1e524d;
        }

        .light-mode .search-bar::placeholder {
          color: rgba(46, 125, 117, 0.4);
        }

        .search-bar:focus {
          border-color: #2c7d75;
        }

        .search-icon-img {
          position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
          width: 14px; transition: 0.3s;
        }

        .dark-mode .search-icon-img {
          filter: brightness(0) invert(1); 
          opacity: 0.5;
        }

        .light-mode .search-icon-img {
          filter: brightness(0) saturate(100%) invert(27%) sepia(24%) saturate(1289%) hue-rotate(134deg) brightness(95%) contrast(90%);
          opacity: 0.4;
        }

        .tab-group {
          display: flex; padding: 3px; border-radius: 8px;
        }

        .dark-mode .tab-group {
          background: rgba(0, 0, 0, 0.08);
        }

        .light-mode .tab-group {
          background: rgba(46, 125, 117, 0.08);
        }

        .tab-btn {
          padding: 5px 15px; border: none; border-radius: 6px;
          font-family: 'Poppins'; font-weight: 600; font-size: 11px;
          cursor: pointer; transition: 0.2s;
          background: transparent;
        }

        .dark-mode .tab-btn {
          color: rgba(255, 255, 255, 0.5);
        }

        .dark-mode .tab-btn.active { 
          background: #2c7d75; 
          color: white; 
        }

        .light-mode .tab-btn {
          color: rgba(46, 125, 117, 0.6);
        }

        .light-mode .tab-btn.active { 
          background: #2c7d75; 
          color: white; 
        }

        .tab-btn:hover {
          color: white;
        }

        /* COMPACT SCROLL GRID */
        .scroll-grid {
          flex: 1; overflow-y: auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px; padding-bottom: 15px;
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

        /* --- DARK MODE CARDS --- */
        .dark-mode .compact-item-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: 0.3s;
        }

        @media (min-width: 768px) {
          .dark-mode .compact-item-card {
            padding: 20px 22px;
            gap: 16px;
            min-height: 80px;
          }
        }

        @media (min-width: 1200px) {
          .dark-mode .compact-item-card {
            padding: 15px 20px;
            min-height: 60px;
          }
        }

        .dark-mode .compact-item-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .dark-mode .compact-item-card:hover .card-title,
        .dark-mode .compact-item-card:hover .icon-box { 
          color: #1e524d; 
        }

        .dark-mode .icon-box {
          color: white; 
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: 0.3s;
          width: 42px;
          height: 42px;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 11px;
        }

        @media (min-width: 768px) {
          .dark-mode .icon-box {
            width: 44px;
            height: 44px;
          }
        }

        .dark-mode .card-title {
          color: white; font-weight: 600; font-size: 13px;
          margin: 0; flex: 1; transition: 0.3s;
          overflow: hidden; 
          text-overflow: ellipsis; 
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 1.3;
        }

        @media (min-width: 768px) {
          .dark-mode .card-title {
            font-size: 15px;
            line-height: 1.35;
          }
        }

        @media (min-width: 1200px) {
          .dark-mode .card-title {
            font-size: 16px;
          }
        }

        .dark-mode .dl-action-compact {
          width: 42px; height: 42px;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          transition: 0.3s;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .dark-mode .dl-action-compact {
            width: 44px;
            height: 44px;
          }
        }

        .dark-mode .compact-item-card:hover .dl-action-compact { 
          background: #2c7d75; 
        }

        /* --- LIGHT MODE CARDS --- */
        .light-mode .compact-item-card {
          background: white;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(46, 125, 117, 0.12);
          border-radius: 16px;
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: 0.3s;
          box-shadow: 0 4px 12px rgba(46, 125, 117, 0.08);
        }

        @media (min-width: 768px) {
          .light-mode .compact-item-card {
            padding: 20px 22px;
            gap: 16px;
            min-height: 80px;
          }
        }

        @media (min-width: 1200px) {
          .light-mode .compact-item-card {
            padding: 15px 20px;
            min-height: 60px;
          }
        }

        .light-mode .compact-item-card:hover {
          background: linear-gradient(135deg, #2c7d75 0%, #36918a 100%);
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(44, 125, 117, 0.25);
        }

        .light-mode .compact-item-card:hover .card-title,
        .light-mode .compact-item-card:hover .icon-box { 
          color: white; 
        }

        .light-mode .icon-box {
          color: #2c7d75; 
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: 0.3s;
          width: 42px;
          height: 42px;
          background: rgba(46, 125, 117, 0.12);
          border-radius: 11px;
        }

        @media (min-width: 768px) {
          .light-mode .icon-box {
            width: 44px;
            height: 44px;
          }
        }

        .light-mode .card-title {
          color: #1e524d; font-weight: 600; font-size: 13px;
          margin: 0; flex: 1; transition: 0.3s;
          overflow: hidden; 
          text-overflow: ellipsis; 
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 1.3;
        }

        @media (min-width: 768px) {
          .light-mode .card-title {
            font-size: 15px;
            line-height: 1.35;
          }
        }

        @media (min-width: 1200px) {
          .light-mode .card-title {
            font-size: 16px;
          }
        }

        .light-mode .dl-action-compact {
          width: 42px; height: 42px;
          background: rgba(46, 125, 117, 0.12);
          border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          transition: 0.3s;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .light-mode .dl-action-compact {
            width: 44px;
            height: 44px;
          }
        }

        .light-mode .compact-item-card:hover .dl-action-compact { 
          background: rgba(255, 255, 255, 0.2); 
        }

        .dl-action-compact img { 
          width: 13px; 
          transition: 0.2s;
        }

        .dark-mode .dl-action-compact img {
          filter: brightness(0) invert(1);
        }

        .light-mode .dl-action-compact img {
          filter: brightness(0) saturate(100%) invert(27%) sepia(24%) saturate(1289%) hue-rotate(134deg) brightness(95%) contrast(90%);
        }

        .light-mode .compact-item-card:hover .dl-action-compact img {
          filter: brightness(0) invert(1);
        }

        .scroll-grid::-webkit-scrollbar { width: 3px; }
        
        .dark-mode .scroll-grid::-webkit-scrollbar-thumb { 
          background: rgba(255,255,255,0.15); 
          border-radius: 10px; 
        }

        .light-mode .scroll-grid::-webkit-scrollbar-thumb { 
          background: rgba(46, 125, 117, 0.2); 
          border-radius: 10px; 
        }

        .loading-text {
          opacity: 0.4; text-align: center; grid-column: 1/-1; font-size: 12px;
        }

        .dark-mode .loading-text { color: white; }
        .light-mode .loading-text { color: #2c7d75; }
      `}</style>

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
        <div className="header-section">
          <div className="back-btn" onClick={onBack}>
            <img 
              src={back} 
              alt="back" 
              style={{
                width: '12px', 
                filter: isLightMode 
                  ? 'brightness(0) saturate(100%) invert(27%) sepia(24%) saturate(1289%) hue-rotate(134deg) brightness(95%) contrast(90%)'
                  : 'brightness(0) invert(1)'
              }} 
            />
          </div>
          <h1 className="title-main">Supports</h1>
          <p className="subtitle-main">Ressources du module</p>
        </div>

        <div className="controls-row">
          <div className="search-container">
            <img src={SearchIcon} className="search-icon-img" alt="search" />
            <input 
              className="search-bar" 
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="tab-group">
            <button className={`tab-btn ${activeTab === "Courses" ? "active" : ""}`} onClick={() => setActiveTab("Courses")}>Cours</button>
            <button className={`tab-btn ${activeTab === "EFMs" ? "active" : ""}`} onClick={() => setActiveTab("EFMs")}>EFMs</button>
          </div>
        </div>

        <div className="scroll-grid">
          {loading ? (
             <div className="loading-text">Chargement...</div>
          ) : filteredItems.map((item) => (
            <div key={item.id} className="compact-item-card">
              <div className="icon-box">
                <FileIcon />
              </div>
              
              <h3 className="card-title">{item.title || item.name}</h3>
              
              <a 
                href={`https://podo.b1.ma/storage/${item.file_path}`} 
                download 
                target="_blank" 
                rel="noopener noreferrer"
                className="dl-action-compact"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={downloadIcon} alt="dl" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}