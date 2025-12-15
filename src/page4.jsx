import React, { useState } from "react";
import Search from "./assets/Group 3.png";
import notification from "./assets/Notification.png";

const fields = [
  "Business Management",
  "Digital Infrastructure",
  "Digital Development",
  "Electrical Engineering",
  "Digital Design",
  "Clothing Technology Industrialization",
  "Civil Engineering",
  "Computer Network Technician",
  "Electromechanics of Automated Systems",
];

const FieldSelection = ({ onNavigate }) => {
  const [search, setSearch] = useState("");

  const filteredFields = fields.filter((field) =>
    field.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

        * {
          box-sizing: border-box;
        }

        .container {
          width: 430px;
          height: 932px;
          margin: auto;
          background: #eef2f1;
        }

        /* HEADER */
        .header {
          height: 280px;
          background: #7f9a92;
          padding: 40px 24px;
          border-bottom-left-radius: 40px;
          border-bottom-right-radius: 40px;
          color: white;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .title {
          line-height: 1.3;
          max-width: 260px;
          font-family: 'Great Vibes', cursive;
          font-size: 26px;
        }

        .notification {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }

        /* SEARCH */
        .search-box {
          position: relative;
          margin-top: 30px;
        }

        .search-input {
          width: 100%;
          padding: 14px 18px 14px 46px;
          border-radius: 30px;
          border: none;
          outline: none;
          font-size: 14px;
          font-family: 'Great Vibes', cursive;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          color: #7f9a92
        }

        /* CARD */
        .card {
          background: #f3f5f4;
          width: 90%;
          margin: -60px auto 0;
          padding: 18px;
          border-radius: 20px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          color: #6b6b6b;
          margin-bottom: 14px;
        }

        /* ITEMS */
        .item {
          width: 100%;
          background: #ffffff;
          border-radius: 14px;
          padding: 16px;
          margin-bottom: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: none;
          cursor: pointer;
          font-size: 14px;
          text-align: left;
        }

        .item:hover {
          background: #ecefef;
        }

        .arrow {
          font-size: 18px;
          color: #9a9a9a;
        }
      `}</style>

      <div className="container">
        <div className="header">
          <div className="header-top">
            <div className="title">What’s your field of study?</div>
            <img
              src={notification}
              alt="notification"
              className="notification"
            />
          </div>

          <div className="search-box">
            <img src={Search} alt="search" className="search-icon" />
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

          {filteredFields.map((field, index) => (
  <button
    key={index}
    className="item"
    onClick={() => {
      if (field === "Digital Development") {
        onNavigate(); // go to page 5
      }
    }}
  >
    <span>{field}</span>
    <span className="arrow">›</span>
  </button>
))}

        </div>
      </div>
    </>
  );
};

export default FieldSelection;




