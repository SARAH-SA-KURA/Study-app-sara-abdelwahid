// App.js
import React, { useState } from "react";
import FirstPage from "./firstPage";
import ThirdPage from "./page3";
import FieldSelection from "./page4";
import ModulesPage from "./ModulesPage";
import ModuleDetailPage from "./ModuleDetailPage";

function App() {
    const [currentPage, setCurrentPage] = useState("first");

    const [selectedSpeciality, setSelectedSpeciality] = useState(null);
    const [selectedTechType, setSelectedTechType] = useState(null);
    const [selectedYearId, setSelectedYearId] = useState(null);
    const [selectedFieldId, setSelectedFieldId] = useState(null);
    const [selectedModuleId, setSelectedModuleId] = useState(null);

    const go = (page) => setCurrentPage(page);

    return (
        <>
        {currentPage === "first" && (
            <FirstPage
            onNavigate={(speciality) => {
                setSelectedSpeciality(speciality);
                go("third");
            }}
            />
        )}

        {currentPage === "third" && (
            <ThirdPage
            onNavigate={(yearId) => {
                setSelectedYearId(yearId);
                go("fourth");
            }}
            />
        )}



        {currentPage === "fourth" && (
            <FieldSelection
                yearId={selectedYearId}
                onNavigate={(fieldId) => {
                setSelectedFieldId(fieldId);
                go("fifth");
                }}
                onBack={() => go("third")}
            />
            )}


        {currentPage === "fifth" && (
            <ModulesPage
            fieldId={selectedFieldId}
            onBack={() => go("fourth")}
            onModuleClick={(moduleId) => {
                setSelectedModuleId(moduleId);
                go("moduleDetail");
            }}
            />
        )}

        {currentPage === "moduleDetail" && (
            <ModuleDetailPage
            moduleId={selectedModuleId}
            onBack={() => go("fifth")}
            />
        )}
        </>
    );
}

export default App;











