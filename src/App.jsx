    // App.js
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import { HelmetProvider } from 'react-helmet-async';
    import SEOWrapper from './SEOWrapper';

    import { useState } from 'react';
    // Your existing imports
    import FirstPage from './firstPage'
    import ThirdPage from './page3';
    import FieldSelection from './page4';
    import ModulesPage from './ModulesPage';
    import ModuleDetailPage from './ModuleDetailPage';
    import SecretTestingPopup from './Secrettestingpopup ';

    function App() {
    const [isLightMode, setIsLightMode] = useState(false);
    const [currentPage, setCurrentPage] = useState('first');
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedField, setSelectedField] = useState(null);
    const [selectedModule, setSelectedModule] = useState(null);

    const toggleTheme = () => setIsLightMode(!isLightMode);

    // Your existing navigation functions
    const handleNavigateToYear = (yearId) => {
        setSelectedYear(yearId);
        setCurrentPage('field');
    };

    const handleNavigateToModules = (fieldId) => {
        setSelectedField(fieldId);
        setCurrentPage('modules');
    };

    const handleNavigateToModule = (moduleId) => {
        setSelectedModule(moduleId);
        setCurrentPage('detail');
    };

    const handleBack = () => {
        if (currentPage === 'detail') setCurrentPage('modules');
        else if (currentPage === 'modules') setCurrentPage('field');
        else if (currentPage === 'field') setCurrentPage('third');
        else if (currentPage === 'third') setCurrentPage('first');
    };

    const handleLogoClick = () => setCurrentPage('first');

    // Pages reachable by clicking through, used once the user has navigated away
    // from a route's landing page. Without this the SEO routes dead-end, because
    // their element is pinned to one component no matter what currentPage becomes.
    const deepPages = {
        field: (
        <FieldSelection
            yearId={selectedYear}
            onNavigate={handleNavigateToModules}
            onBack={handleBack}
            isLightMode={isLightMode}
            toggleTheme={toggleTheme}
        />
        ),
        modules: (
        <ModulesPage
            fieldId={selectedField}
            onBack={handleBack}
            onModuleClick={handleNavigateToModule}
            isLightMode={isLightMode}
            toggleTheme={toggleTheme}
        />
        ),
        detail: (
        <ModuleDetailPage
            moduleId={selectedModule}
            onBack={handleBack}
            isLightMode={isLightMode}
            toggleTheme={toggleTheme}
        />
        ),
    };

    // Show the route's own SEO landing page until the user clicks through, then
    // hand off to the shared page state so back/forward navigation keeps working.
    const renderSeoRoute = (landingPage, landing) =>
        currentPage === landingPage || !deepPages[currentPage]
        ? landing
        : deepPages[currentPage];

    return (
        <HelmetProvider>
        <BrowserRouter>
            <Routes>
            {/* ========================================
                ORIGINAL ROUTES (Your existing pages)
                ======================================== */}
            
            <Route 
                path="/" 
                element={
                currentPage === 'first' ? (
                    <FirstPage 
                    onNavigate={() => setCurrentPage('third')}
                    isLightMode={isLightMode} 
                    toggleTheme={toggleTheme} 
                    />
                ) : currentPage === 'third' ? (
                    <ThirdPage 
                    onNavigate={handleNavigateToYear}
                    onLogoClick={handleLogoClick}
                    isLightMode={isLightMode} 
                    toggleTheme={toggleTheme} 
                    />
                ) : currentPage === 'field' ? (
                    <FieldSelection 
                    yearId={selectedYear}
                    onNavigate={handleNavigateToModules}
                    onBack={handleBack}
                    isLightMode={isLightMode} 
                    toggleTheme={toggleTheme} 
                    />
                ) : currentPage === 'modules' ? (
                    <ModulesPage 
                    fieldId={selectedField}
                    onBack={handleBack}
                    onModuleClick={handleNavigateToModule}
                    isLightMode={isLightMode} 
                    toggleTheme={toggleTheme} 
                    />
                ) : (
                    <ModuleDetailPage 
                    moduleId={selectedModule}
                    onBack={handleBack}
                    isLightMode={isLightMode} 
                    toggleTheme={toggleTheme} 
                    />
                )
                } 
            />

            {/* ========================================
                NEW SEO ROUTES (For Google searches)
                ======================================== */}
            
            {/* When someone searches "efm react" */}
            <Route 
                path="/efm-react-pdf" 
                element={renderSeoRoute('modules',
                <SEOWrapper
                    title="EFM React PDF Gratuit | Examens DDOWFS React OFPPT"
                    description="Téléchargez gratuitement tous les EFM React PDF pour DDOWFS. Examens de fin de module React avec corrections complètes."
                    keywords="efm react, efm react pdf, DDOWFS react, examens react"
                    canonical="https://votre-site.com/efm-react-pdf"
                >
                    <ModulesPage 
                    fieldId={selectedField || 1}
                    onBack={() => window.location.href = '/'}
                    onModuleClick={handleNavigateToModule}
                    isLightMode={isLightMode} 
                    toggleTheme={toggleTheme}
                    defaultTab="EFFs"
                    searchFilter="react"
                    />
                </SEOWrapper>
                )} 
            />

            {/* When someone searches "efm laravel" */}
            <Route 
                path="/efm-laravel-pdf" 
                element={renderSeoRoute('modules',
                <SEOWrapper
                    title="EFM Laravel PDF Gratuit | Examens DDOWFS Laravel OFPPT"
                    description="Téléchargez gratuitement tous les EFM Laravel PDF pour DDOWFS. Examens avec corrections complètes."
                    keywords="efm laravel, efm laravel pdf, DDOWFS laravel"
                    canonical="https://votre-site.com/efm-laravel-pdf"
                >
                    <ModulesPage 
                    fieldId={selectedField || 1}
                    onBack={() => window.location.href = '/'}
                    onModuleClick={handleNavigateToModule}
                    isLightMode={isLightMode} 
                    toggleTheme={toggleTheme}
                    defaultTab="EFFs"
                    searchFilter="laravel"
                    />
                </SEOWrapper>
                )} 
            />

            {/* When someone searches "filiere ofppt" */}
            <Route 
                path="/filieres-ofppt" 
                element={renderSeoRoute('third',
                <SEOWrapper
                    title="Filières OFPPT | Toutes les Formations OFPPT"
                    description="Découvrez toutes les filières OFPPT: DDOWFS, Office Manager, et plus."
                    keywords="filiere ofppt, filieres ofppt"
                    canonical="https://votre-site.com/filieres-ofppt"
                >
                    <ThirdPage 
                    onNavigate={handleNavigateToYear}
                    onLogoClick={() => window.location.href = '/'}
                    isLightMode={isLightMode} 
                    toggleTheme={toggleTheme}
                    />
                </SEOWrapper>
                )} 
            />

            {/* When someone searches "DDOWFS" */}
            <Route 
                path="/ddowfs-react-laravel" 
                element={renderSeoRoute('field',
                <SEOWrapper
                    title="DDOWFS React Laravel | Développement Web Full Stack OFPPT"
                    description="Formation DDOWFS complète: React, Laravel, Front-End, Back-End."
                    keywords="DDOWFS, DDOWFS react, DDOWFS laravel"
                    canonical="https://votre-site.com/ddowfs-react-laravel"
                >
                    <FieldSelection 
                    yearId={selectedYear || 1}
                    onNavigate={handleNavigateToModules}
                    onBack={() => window.location.href = '/'}
                    isLightMode={isLightMode} 
                    toggleTheme={toggleTheme}
                    searchFilter="DDOWFS"
                    />
                </SEOWrapper>
                )} 
            />

            {/* Add more routes for other keywords... */}

            </Routes>
            <SecretTestingPopup isLightMode={isLightMode} />
        </BrowserRouter>
        </HelmetProvider>
    );
    }

    export default App;