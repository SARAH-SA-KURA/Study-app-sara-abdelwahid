import React from "react";
import girl from "./assets/Gemini_Generated_Image_gzbmb6gzbmb6gzbm-removebg-preview.png"; // illustration image
import logo from "./assets/logo.png";
import book from "./assets/Gemini_Generated_Image_5eb5hn5eb5hn5eb5-removebg-preview.png"
import littlBook from "./assets/freepik__talk__97297-removebg-preview.png"
const FirstPage = ({ onNavigate }) => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        body {
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .phone-frame {
          width: 430px;
          height: 932px;
        }

        .screen {
          height: 100%;
          background: linear-gradient(180deg, #2f7f77 -14%, #cfeae7 100%);
          position: relative;
          overflow: hidden;
          padding: 20px;
        }
        .logo { flex: 1; display: flex; justify-content: center; align-items: center; }
        .logo img { width: 390px;  }
        /* Status bar */
        .status-bar {
          display: flex;
          justify-content: space-between;
          color: #ffffff;
          font-size: 14px;
          margin-bottom: 10px;
        }

        /* Header */
        .back-arrow {
          color: #ffffff;
          font-size: 20px;
          margin-top: 10px;
          cursor: pointer;
        }



        .dots {
          display: flex;
          gap: 6px;
        }

        .dots span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
        }

        .placeholder {
          flex: 1;
          color: #ffffff;
          font-size: 16px;
          margin-left: 12px;
        }

        .arrow {
          font-size: 18px;
          color: #ffffff;
        }

        /* Illustration */
        .illustration {
          position: relative;
          top: 70px;
          right:20px;
        }

        .illustration img {
          width: 220px;
          
        }

       /* Button */
            .get-started {
            position: absolute;
            bottom: 70px;
            left: 50%;
            transform: translateX(-50%);
            font-family:"Handlee", cursive;

            width: 80%;
            height: 56px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 40px;

            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.35),
              rgba(255, 255, 255, 0.15)
            );

            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);

            border: 1px solid rgba(255, 255, 255, 0.5);

            color: #0f3f3a;
            font-size: 23px;
            font-weight: 500;

            box-shadow:
              inset 0 1px 2px rgba(255, 255, 255, 0.6),
              0 10px 25px rgba(0, 0, 0, 0.15);

            cursor: pointer;
          }
        /* Home indicator */
        .home-indicator {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.6);
      }
        .imagbook img {
            width: 180px;
            position: absolute;
            bottom:110px;
            right: 50px;
            
          }
            .imaglittlBook img{
                  width:580px;
                  position: absolute;
                  top:5px;
                  right:5px;
                  color:white;
                  opacity: 0.15;
                  pointer-events: none;
            }
          // .imagliiitlleBook img{ 
          //         width:480px;         
          //         position: absolute;
          //         bottom: 200px;
          //         right:50px;      
          //         opacity: 0.15;         
          //         transform: rotate(-10deg);
          // }


      `}</style>

      <div className="phone-frame">
        <div className="screen">

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="imaglittlBook">
            <img 
            src={littlBook} 
            alt="littleBook"  />
          </div>
          {/* <div className="imagliiitlleBook">
            <img 
            src={liiitlleBook} 
            alt="liiitlleBook"  />
          </div> */}
          {/* Illustration */}
          <div className="imagbook">
            <img 
            src={book} 
            alt="book"  />
          </div>
          <div className="illustration">
            <img src={girl} alt="student" />
          </div>
          
          {/* Button */}
          <button className="get-started"onClick={() => onNavigate()}>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
