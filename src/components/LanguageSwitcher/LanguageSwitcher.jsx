import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleLanguage = () => {
    setIsAnimating(true);
    const newLang = i18n.language === 'pt-BR' ? 'en-US' : 'pt-BR';
    i18n.changeLanguage(newLang);
    
    setTimeout(() => setIsAnimating(false), 400);
  };

  const isPtBr = i18n.language === 'pt-BR';

  return (
    <div className="language-switcher-wrapper">
      <button
        onClick={toggleLanguage}
        className={`language-switcher ${isAnimating ? 'animating' : ''}`}
        aria-label="Change language"
        title={isPtBr ? 'Mudar para Inglês' : 'Switch to Portuguese'}
      >
        {/* Brazil Flag */}
        <div className={`flag-svg brazil ${isPtBr ? 'active' : ''}`}>
          <div className="flag-stripe green"></div>
          <div className="flag-diamond">
            <div className="flag-circle"></div>
          </div>
          <div className="flag-stripe green"></div>
        </div>
        
        {/* USA Flag */}
        <div className={`flag-svg usa ${!isPtBr ? 'active' : ''}`}>
          <div className="flag-stars"></div>
          <div className="flag-stripes">
            <div className="stripe red"></div>
            <div className="stripe white"></div>
            <div className="stripe red"></div>
          </div>
        </div>
        
        <span className="lang-code">{isPtBr ? 'PT' : 'EN'}</span>
      </button>
      
      <div className="lang-tooltip">
        {isPtBr ? 'Switch to English' : 'Mudar para Português'}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
