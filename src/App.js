import React, { useState } from 'react';

import logo from './assets/logo.png';
import imgHome from './assets/imagehome.png';
import Next from './assets/Next.png';
import bookIcon from './assets/iconBook.png';

const NavButton = ({ label, onClick }) => {

    return (
        <div 
            onClick={onClick}
            style={{ 
                backgroundColor: '#526662', 
                color: '#ffffff', 
                width: '350px', 
                maxWidth: '350px',
                height: '60px', 
                borderRadius: '15px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '0 15px', 
                fontSize: '26px', 
                fontStyle: 'italic', 
                cursor: 'pointer', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'background-color 0.2s' // Add hover feedback
            }}>
            <div>
                <img src={bookIcon} alt="Book Icon" style={{ 
                    width: '39px', 
                    height: '39px', 
                    objectFit: 'contain' }} />
            </div>
            <span style={{ flexGrow: 1, 
                textAlign: 'center', 
                marginRight: '50px' }}>{label}</span>
            <img src={Next} alt="Next Icon" style={{ 
                width: '28px', 
                height: '28px', 
                objectFit: 'contain', 
                opacity: 0.6 }} />
        </div>
    );
};

// --- Years Selection Page ---
const YearsSelection = ({ years }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px', 
            marginTop: '20px', 
        }}>
            {years.map(year => (
                <NavButton key={year} label={year} onClick={() => console.log(`${year} selected`)} />
            ))}
        </div>
    );
};

function App() {
    const [view, setView] = useState('main'); 

    const yearOptions = ['1st Year', '2nd Year', '3rd Year'];
    const topContent = () => {
        if (view === 'years') {
            return (
                <YearsSelection 
                    years={yearOptions} 
                    onBack={() => setView('main')} 
                />
            );
        }
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px', 
            }}>
                <NavButton 
                    label="Years" 
                    onClick={() => setView('years')} 
                />
                <NavButton 
                    label="Speciality" 
                    onClick={() => console.log('Speciality clicked')} 
                />
            </div>
        );
    };

    return (
        <div style={{ 
            backgroundColor: '#FFFFFF', 
            height: '100vh', 
            display: 'flex',
            flexDirection: 'column', 
            fontFamily: 'cursive',
            overflow: 'hidden' 
        }}>
            
            {/* --- TOP GREEN SECTION (75% height) --- */}
            <div style={{
                backgroundColor: '#6D8883',
                width: '100%',
                height: '75vh', 
                borderBottomLeftRadius: '40px', 
                borderBottomRightRadius: '40px',
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center',
                justifyContent: 'center', 
                paddingTop: '20px', 
                paddingBottom: '30px'
            }}>
                
                {/* Logo and Text Container */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: view === 'main' ? '60px' : '40px', 
                    marginTop: view === 'main' ? '0' : '-30px', 
                }}>
                    <img 
                        src={logo} 
                        alt="Learnex Logo"
                        style={{ width: '250px', height: 'auto', objectFit: 'contain' }} 
                    /> 
                </div>

                {/* Renders Years/Speciality buttons OR the 1st/2nd/3rd Year buttons */}
                {topContent()}

            </div>

            {/* --- BOTTOM WHITE SECTION (25% height) --- */}
            <div style={{ 
                height: '25vh', 
                display: 'flex',
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '20px 30px', 
            }}>
                <img 
                    src={imgHome} 
                    alt="Student Illustration"
                    style={{ 
                        width: '120px', 
                        height: 'auto', 
                        objectFit: 'contain',
                        opacity: 0.8
                    }} 
                /> 
                
                <div className='get-started-button' 
                    style={{ 
                        backgroundColor: '#526662', 
                        color: '#ffffff', 
                        width: '60%', 
                        maxWidth: '220px', 
                        padding: '12px 30px', 
                        height: 'auto', 
                        borderRadius: '25px', 
                        display: 'flex',
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        fontSize: '22px', 
                        fontStyle: 'italic', 
                        fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.15)'
                    }}
                >
                    Get Started
                </div>
            </div>
        </div>
    );
}

export default App;
            
