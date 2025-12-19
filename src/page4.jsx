import { useEffect, useState } from "react";
import SearchIcon from "./assets/Group 3.png";
import back from "./assets/Vector 9.png";

export default function FieldSelection({ yearId, onNavigate, onBack }) {
  const [fields, setFields] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!yearId) return;

    setLoading(true);
    fetch(`https://podo.b1.ma/api/public/years/${yearId}/filieres`)
      .then((res) => res.json())
      .then((json) => {
        setFields(json.data || []);
        setLoading(false);
      })
      .catch(() => {
        console.log("We can't connect or read the data.");
        setLoading(false);
      });
  }, [yearId]);

  const filteredFields = fields.filter((field) =>
    field.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        body { 
        margin:0; 
        }
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
        margin:auto; 
        background:#eef2f1; 
        }
        .header { 
        height:190px; 
        background: linear-gradient(180deg, #2f7f77 -14%, #cfeae7 100%);
        padding:40px 24px; 
        border-bottom-left-radius:40px; 
        border-bottom-right-radius:40px; 
        color:white; 
        }
        .header-top { 
        display:flex; 
        justify-content:space-between; 
        align-items:flex-start; 
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
        .title { 
        font-family:"Handlee", cursive;
        font-size:20px; 
        line-height:4.5;
        letter-spacing:2px;
        }
        .search-box { 
        position:relative; 
        margin-right:10px;
        }
        .search-input { 
        width:85%; 
        padding:14px 18px 14px 46px; 
        border-radius:30px; 
        border:none; 
        outline:none; 
        font-size:14px; 
        }
        .search-icon { 
        position:absolute; 
        left:16px; 
        top:50%; 
        transform:translateY(-50%); 
        width:30px; 
        height:30px; 
        }
        .card { 
        background:#f3f5f4; 
        width:90%; 
        margin:-60px auto 0; 
        padding:18px; 
        border-radius:20px; 
        }
        .card-header { 
        display:flex; 
        justify-content:space-between; 
        align-items:center; 
        font-size:14px; 
        color:#6b6b6b; 
        margin-bottom:14px; 
        }
        .item { 
        width:100%; 
        background:#fff; 
        border-radius:14px; 
        padding:16px; 
        margin-bottom:12px; 
        display:flex; 
        justify-content:space-between; 
        align-items:center; 
        border:none; 
        cursor:pointer; 
        font-size:14px; 
        }
        .item:hover { 
        background:#ecefef; 
        }
        .arrow { 
        font-size:18px; 
        color:#9a9a9a; 
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
            <div className="title">What’s your field of study?</div>
          </div>

          <div className="search-box">
            <img src={SearchIcon} alt="search" className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search field of study"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span>List of Fields</span>
            <span>View all →</span>
          </div>

          {loading && <p className="loading">Loading fields...</p>}

          {!loading &&
            filteredFields.map((field) => (
              <button
                key={field.id}
                className="item"
                onClick={() => onNavigate(field.id)}
              >
                <span>{field.name}</span>
                <span className="arrow">›</span>
              </button>
            ))}

          {!loading && filteredFields.length === 0 && (
            <p className="loading">No fields found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

