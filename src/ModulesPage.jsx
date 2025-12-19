import { useEffect, useState } from "react";
import SearchIcon from "./assets/Group 3.png";
import book from "./assets/Frame 6.png";
import back from "./assets/Vector 9.png";
import downloadIcon from "./assets/Download File.png";

export default function ModulesPage({ fieldId, onBack, onModuleClick }) {
  const [modules, setModules] = useState([]);
  const [effs, setEffs] = useState([]);
  const [search, setSearch] = useState("");
  const [loadingModules, setLoadingModules] = useState(true);
  const [loadingEffs, setLoadingEffs] = useState(false);
  const [activeTab, setActiveTab] = useState("Modules");

  /* ================= FETCH MODULES ================= */
  useEffect(() => {
    if (!fieldId) return;
    setLoadingModules(true);
    fetch(`https://podo.b1.ma/api/public/filieres/${fieldId}/modules`)
      .then((res) => res.json())
      .then((json) => {
        setModules(json.data || []);
        setLoadingModules(false);
      })
      .catch(() => setLoadingModules(false));
  }, [fieldId]);

  /* ================= FETCH EFFs ================= */
  const fetchEffs = () => {
    if (!fieldId) return;
    setLoadingEffs(true);
    fetch(`https://podo.b1.ma/api/public/filieres/${fieldId}/effs`)
      .then((res) => res.json())
      .then((json) => {
        setEffs(json.data || []);
        setLoadingEffs(false);
      })
      .catch(() => setLoadingEffs(false));
  };

  /* ================= FILTERS ================= */
  const filteredModules = modules.filter((m) =>
    (m.name || m.title || "").toLowerCase().includes(search.toLowerCase())
  );

  const filteredEffs = effs.filter((e) =>
    (e.title || "").toLowerCase().includes(search.toLowerCase())
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "EFFs" && effs.length === 0) fetchEffs();
  };

  return (
    <div className="page">
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        body { margin:0;
         font-family:"Handlee", cursive; }

        .page {
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:#2f2f2f;
        }

        .container {
          width:430px;
          height:932px;
          background:#eef2f1;
          overflow-y:auto;
        }

        .header {
          background: linear-gradient(180deg, #2f7f77 -14%, #cfeae7 100%);
          padding:20px 24px 30px;
          border-bottom-left-radius:30px;
          border-bottom-right-radius:30px;
          color:white;
        }

        .header-top {
          display:flex;
          justify-content:space-between;
          align-items:center;
        }


        .icon-btn {
          width:28px;
          height:28px;
          background:#2f7f77;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
        }

        .icon-btn img { width:18px; }

        .search-box {
          position:relative;
          margin-top:20px;
        }

        .search-input {
          width:80%;
          padding:14px 18px 14px 46px;
          border-radius:30px;
          border:none;
          outline:none;
        }

        .search-icon {
          position:absolute;
          left:16px;
          top:50%;
          transform:translateY(-50%);
          width:26px;
        }

        .card {
          width:92%;
          margin:26px auto;
        }

        /* ===== TABS ===== */
        .tabs {
          display:flex;
          gap:12px;
          margin-bottom:20px;
        }

        .tab {
          flex:1;
          height:52px;
          border-radius:16px;
          border:none;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          font-weight:500;
        }

        .tab.active { background:#2f7f77; color:white; }
        .tab.inactive { background:#305753; color:white; }

        /* ===== ITEM CARD ===== */
        .item {
          background:white;
          border-radius:18px;
          padding:16px 18px;
          margin-bottom:14px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          box-shadow:0 6px 16px rgba(0,0,0,0.06);
          transition:0.2s ease;
        }

        .item:hover {
          transform:translateY(-2px);
          box-shadow:0 10px 22px rgba(0,0,0,0.08);
        }

        .item-title {
          font-size:14px;
          font-weight:500;
          color:#333;
          max-width:70%;
        }

        .download-btn {
          width:38px;
          height:38px;
          border-radius:12px;
          background:#E8F1EF;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .download-btn img { width:22px; }

        .arrow {
          font-size:20px;
          color:#999;
        }

        .loading {
          text-align:center;
          margin-top:20px;
          color:#555;
        }
      `}</style>

      <div className="container">
        <div className="header">
          <div className="header-top">
            <div className="icon-btn" onClick={onBack}>
              <img src={back} alt="back" />
            </div>
          </div>

          <div className="search-box">
            <img src={SearchIcon} className="search-icon" alt="search" />
            <input
              className="search-input"
              placeholder={
                activeTab === "Modules" ? "Search modules" : "Search EFFs"
              }
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="card">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "Modules" ? "active" : "inactive"}`}
              onClick={() => handleTabClick("Modules")}
            >
              <img src={book} width="26" alt="book" /> Modules
            </button>

            <button
              className={`tab ${activeTab === "EFFs" ? "active" : "inactive"}`}
              onClick={() => handleTabClick("EFFs")}
            >
              <img src={book} width="26" alt="book" /> EFFs
            </button>
          </div>

          {/* ===== MODULES ===== */}
          {activeTab === "Modules" && (
            <>
              {loadingModules && <p className="loading">Loading modules...</p>}
              {!loadingModules &&
                filteredModules.map((m) => (
                  <div
                    key={m.id}
                    className="item"
                    onClick={() => onModuleClick(m.id)}
                  >
                    <span className="item-title">
                      {m.name || m.title || "Unnamed module"}
                    </span>
                    <span className="arrow">›</span>
                  </div>
                ))}
            </>
          )}

          {/* ===== EFFs ===== */}
          {activeTab === "EFFs" && (
            <>
              {loadingEffs && <p className="loading">Loading EFFs...</p>}
              {!loadingEffs &&
                filteredEffs.map((e) => (
                  <div key={e.id} className="item">
                    <span className="item-title">{e.title}</span>
                    <a
                      className="download-btn"
                      href={`https://podo.b1.ma/storage/${e.file_path}`}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={downloadIcon} alt="download" />
                    </a>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

