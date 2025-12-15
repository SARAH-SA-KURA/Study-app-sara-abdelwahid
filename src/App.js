import React, { useState } from "react";
import FirstPage from "./firstPage";
import SecondPage from "./secondePage";
import ThirdPage from "./page3";
import FieldSelection from "./page4";
import Dashboard from "./page5";
import LessonDetail from "./page6";
import AlgorithmicQuiz from "./page7";
import ExamsScreen from "./page17";

function App() {
  const [currentPage, setCurrentPage] = useState("first");

  const go = (page) => setCurrentPage(page);

  return (
    <>
      {currentPage === "first" && <FirstPage onNavigate={() => go("second")} />}
      {currentPage === "second" && <SecondPage onNavigate={() => go("third")} />}
      {currentPage === "third" && <ThirdPage onNavigate={() => go("fourth")} />}
      {currentPage === "fourth" && <FieldSelection onNavigate={() => go("five")} />}

      {currentPage === "five" && (
        <Dashboard
          onCourse={() => go("six")}
          onQuiz={() => go("seven")}
          onModules={() => go("fourth")}
          onExams={() => go("seventeen")}
        />
      )}

      {currentPage === "six" && (
        <LessonDetail
          onNavigate={() => go("five")}
          onQuiz={() => go("seven")}
        />
      )}

      {currentPage === "seven" && (
        <AlgorithmicQuiz
          onBack={() => go("five")}
          onNext={() => go("seventeen")}
        />
      )}

      {currentPage === "seventeen" && (
        <ExamsScreen onBack={() => go("five")} />
      )}
    </>
  );
}
export default App;





