import { useState, useEffect } from 'react';

export default function SecretTestingPopup({ isLightMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [keyword, setKeyword] = useState('');
  const [position, setPosition] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Detect keyword from URL
    const path = window.location.pathname;
    let detectedKeyword = '';
    
    if (path.includes('efm-react')) detectedKeyword = 'efm react';
    else if (path.includes('efm-laravel')) detectedKeyword = 'efm laravel';
    else if (path.includes('efm-pdf')) detectedKeyword = 'efm pdf';
    else if (path.includes('filieres-ofppt')) detectedKeyword = 'filiere ofppt';
    else if (path.includes('ddowfs')) detectedKeyword = 'DDOWFS';
    else if (path.includes('office-manager')) detectedKeyword = 'office manager';
    else if (path.includes('regional-front-end')) detectedKeyword = 'regional front-end';
    else if (path.includes('regional-back-end')) detectedKeyword = 'back-end';
    else if (path.includes('regional-react')) detectedKeyword = 'regional react';
    else if (path.includes('regional-approche-agile')) detectedKeyword = 'regional approche agile';
    
    setKeyword(detectedKeyword);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!fullName.trim()) {
      alert('Veuillez entrer votre nom complet');
      return;
    }
    
    if (!position.trim()) {
      alert('Veuillez entrer la position du site sur Google');
      return;
    }

    const testRecord = {
      fullName: fullName.trim(),
      keyword: keyword,
      googlePosition: position.trim(),
      url: window.location.href,
      timestamp: new Date().toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    try {
      // Send to Google Sheets
      const response = await fetch('https://script.google.com/macros/s/AKfycbybynJ6x6LZmSIfyxSSMnI97c2Yad3sq_Fr9t2nvClbluFlH2_WDRtpwjJFpvqjcH8f/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testRecord)
      });

      // Also save locally as backup
      const existingTests = JSON.parse(localStorage.getItem('seoTestRecords') || '[]');
      existingTests.push(testRecord);
      localStorage.setItem('seoTestRecords', JSON.stringify(existingTests));

      setSubmitted(true);
      
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
        setFullName('');
        setPosition('');
      }, 2500);

    } catch (error) {
      console.error('Error sending data:', error);
      alert('Erreur lors de l\'envoi. Les données ont été sauvegardées localement.');
      
      // Save locally if sending fails
      const existingTests = JSON.parse(localStorage.getItem('seoTestRecords') || '[]');
      existingTests.push(testRecord);
      localStorage.setItem('seoTestRecords', JSON.stringify(existingTests));
    }
  };

  const handleExportData = () => {
    const data = JSON.parse(localStorage.getItem('seoTestRecords') || '[]');
    
    if (data.length === 0) {
      alert('Aucune donnée à exporter');
      return;
    }

    let csv = 'Nom Complet,Mot-clé Recherché,Position Google,URL,Date et Heure\n';
    data.forEach(record => {
      csv += `"${record.fullName}","${record.keyword}","${record.googlePosition}","${record.url}","${record.timestamp}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `test-seo-results-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  // Theme colors
  const colors = isLightMode ? {
    primary: '#2c7d75',
    primaryHover: '#248270',
    background: '#ffffff',
    cardBg: '#f8faf9',
    text: '#1e524d',
    textSecondary: '#5a9e96',
    border: '#d4e8e5',
    inputBg: '#ffffff',
    inputBorder: '#e0f0ed',
    overlay: 'rgba(30, 82, 77, 0.4)',
    success: '#2c7d75',
    buttonText: '#ffffff'
  } : {
    primary: '#4a8e85',
    primaryHover: '#5aa59b',
    background: '#1e524d',
    cardBg: 'rgba(255, 255, 255, 0.08)',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    border: 'rgba(255, 255, 255, 0.1)',
    inputBg: 'rgba(255, 255, 255, 0.05)',
    inputBorder: 'rgba(255, 255, 255, 0.15)',
    overlay: 'rgba(0, 0, 0, 0.7)',
    success: '#5aa59b',
    buttonText: '#ffffff'
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes checkmark {
          0% {
            transform: scale(0) rotate(-45deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(-45deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(-45deg);
            opacity: 1;
          }
        }

        .secret-button-ring {
          animation: pulse 2s ease-in-out infinite;
        }

        .popup-overlay {
          animation: fadeIn 0.3s ease-out;
        }

        .popup-modal {
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .success-checkmark {
          animation: checkmark 0.6s ease-out forwards;
        }
      `}</style>

      {/* SECRET BUTTON */}
      <div
        onClick={(e) => {
          if (e.detail === 3) {
            setIsOpen(true);
          }
        }}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          cursor: 'pointer'
        }}
      >
        {/* Pulsing ring effect */}
        <div 
          className="secret-button-ring"
          style={{
            position: 'absolute',
            top: '-5px',
            left: '-5px',
            right: '-5px',
            bottom: '-5px',
            borderRadius: '50%',
            border: `2px solid ${colors.primary}`,
            opacity: 0.3
          }}
        />
        
        {/* Main button */}
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: colors.primary,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 4px 20px ${colors.primary}40`,
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            border: `2px solid ${isLightMode ? '#ffffff' : 'rgba(255, 255, 255, 0.2)'}`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = `0 6px 30px ${colors.primary}60`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = `0 4px 20px ${colors.primary}40`;
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>

      {/* POPUP MODAL */}
      {isOpen && (
        <div 
          className="popup-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.overlay,
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: '20px'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div 
            className="popup-modal"
            style={{
              backgroundColor: colors.background,
              borderRadius: '16px',
              padding: '28px',
              maxWidth: '420px',
              width: '100%',
              boxShadow: isLightMode 
                ? '0 20px 60px rgba(44, 125, 117, 0.15)' 
                : '0 20px 60px rgba(0, 0, 0, 0.5)',
              position: 'relative',
              border: `1px solid ${colors.border}`
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: colors.inputBg,
                border: `1px solid ${colors.border}`,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: '0.3s',
                color: colors.text
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.primary;
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.inputBg;
                e.currentTarget.style.color = colors.text;
                e.currentTarget.style.borderColor = colors.border;
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div style={{ marginBottom: '24px' }}>
                  <h2 style={{
                    margin: '0 0 6px 0',
                    color: colors.primary,
                    fontSize: '22px',
                    fontWeight: '700',
                    letterSpacing: '-0.5px'
                  }}>
                    Test de Référencement
                  </h2>
                  <p style={{
                    color: colors.textSecondary,
                    fontSize: '13px',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    Aidez-nous à mesurer la visibilité du site
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Keyword field */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: colors.text,
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.3px',
                      textTransform: 'uppercase'
                    }}>
                      Mot-clé recherché
                    </label>
                    <input
                      type="text"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: `2px solid ${colors.inputBorder}`,
                        fontSize: '14px',
                        backgroundColor: colors.inputBg,
                        color: colors.text,
                        boxSizing: 'border-box',
                        outline: 'none',
                        transition: '0.3s',
                        fontFamily: 'Poppins, sans-serif'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = colors.primary;
                        e.target.style.backgroundColor = isLightMode ? '#ffffff' : 'rgba(255, 255, 255, 0.08)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = colors.inputBorder;
                        e.target.style.backgroundColor = colors.inputBg;
                      }}
                    />
                  </div>

                  {/* Full name field */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: colors.text,
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.3px',
                      textTransform: 'uppercase'
                    }}>
                      Nom complet
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ahmed Benali"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: `2px solid ${colors.inputBorder}`,
                        fontSize: '14px',
                        backgroundColor: colors.inputBg,
                        color: colors.text,
                        boxSizing: 'border-box',
                        outline: 'none',
                        transition: '0.3s',
                        fontFamily: 'Poppins, sans-serif'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = colors.primary;
                        e.target.style.backgroundColor = isLightMode ? '#ffffff' : 'rgba(255, 255, 255, 0.08)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = colors.inputBorder;
                        e.target.style.backgroundColor = colors.inputBg;
                      }}
                    />
                  </div>

                  {/* Position field */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: colors.text,
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.3px',
                      textTransform: 'uppercase'
                    }}>
                      Position sur Google
                    </label>
                    <input
                      type="text"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      placeholder="Ex: Page 1, ligne 3"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: `2px solid ${colors.inputBorder}`,
                        fontSize: '14px',
                        backgroundColor: colors.inputBg,
                        color: colors.text,
                        boxSizing: 'border-box',
                        outline: 'none',
                        transition: '0.3s',
                        fontFamily: 'Poppins, sans-serif'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = colors.primary;
                        e.target.style.backgroundColor = isLightMode ? '#ffffff' : 'rgba(255, 255, 255, 0.08)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = colors.inputBorder;
                        e.target.style.backgroundColor = colors.inputBg;
                      }}
                    />
                    <small style={{ 
                      color: colors.textSecondary, 
                      fontSize: '11px',
                      display: 'block',
                      marginTop: '5px'
                    }}>
                      Indiquez où vous avez trouvé le site
                    </small>
                  </div>

                  {/* Timestamp */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: colors.text,
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.3px',
                      textTransform: 'uppercase'
                    }}>
                      Date et heure
                    </label>
                    <div style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: `2px solid ${colors.border}`,
                      fontSize: '14px',
                      backgroundColor: colors.cardBg,
                      color: colors.textSecondary,
                      fontFamily: 'Poppins, sans-serif'
                    }}>
                      {new Date().toLocaleString('fr-FR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '13px',
                      backgroundColor: colors.primary,
                      color: colors.buttonText,
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: '0.3s',
                      boxShadow: `0 4px 16px ${colors.primary}40`,
                      letterSpacing: '0.5px',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.primaryHover;
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = `0 6px 24px ${colors.primary}50`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = colors.primary;
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = `0 4px 16px ${colors.primary}40`;
                    }}
                  >
                    Envoyer le test
                  </button>
                </form>
              </>
            ) : (
              <div style={{ 
                textAlign: 'center', 
                padding: '40px 20px'
              }}>
                {/* Success checkmark */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 24px',
                  borderRadius: '50%',
                  backgroundColor: `${colors.success}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div 
                    className="success-checkmark"
                    style={{
                      width: '30px',
                      height: '16px',
                      borderLeft: `4px solid ${colors.success}`,
                      borderBottom: `4px solid ${colors.success}`,
                      transform: 'rotate(-45deg)',
                      marginTop: '-8px'
                    }}
                  />
                </div>
                
                <h3 style={{ 
                  color: colors.text, 
                  margin: '0 0 12px 0',
                  fontSize: '22px',
                  fontWeight: '700'
                }}>
                  Test enregistré !
                </h3>
                <p style={{ 
                  color: colors.textSecondary, 
                  margin: 0,
                  fontSize: '14px'
                }}>
                  Merci {fullName.split(' ')[0]} pour votre contribution
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}