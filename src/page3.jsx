import { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import Book from "./assets/Frame 6.png";

export default function ThirdPage({ onNavigate }) {
  const [years, setYears] = useState([]);

  useEffect(() => {
    fetch("https://podo.b1.ma/api/public/years")
      .then((response) => response.json())
      .then((json) => setYears(json.data))
      .catch(() => console.log("We can't connect or read the data."));
  }, []);

  return (
    <div className="page">
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        body { margin: 0; }
        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #2f2f2f;
          
        }
        .app {
          width: 430px;
          height: 932px;
          background: linear-gradient(180deg, #2f7f77 -14%, #cfeae7 100%);
          padding: 20px;
          box-sizing: border-box;
          overflow-y: auto;
        }
        .logo {
          text-align: center;
        }
        .logo img {
          width: 250px;
        }
        .card {
          background: #2c7d75;
          color: white;
          padding: 20px;
          border-radius: 20px;
          margin-bottom: 20px;
          font-family: "Handlee", cursive;
          letter-spacing:3px;
          font-size: 18px;
          display: flex;
          align-items: center;
          gap: 15px;
          cursor: pointer;
          
        }
        .card:hover {
          background: #2f7f77;
        }
      `}</style>

      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {years.map((year) => (
          <div
            key={year.id}
            className="card"
            onClick={() => onNavigate(year.id)} // <-- IMPORTANT
          >
            <img className="bbbok" src={Book} width="40" alt="book"  />
            {year.name}
          </div>
        ))}
      </div>
    </div>
  );
}



