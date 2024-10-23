import React, { useState, useEffect } from 'react';

const resources = {
  es: {
    mobile: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/SP_Talento_GB_banerI_ConocetEquipo350.png',
    tablet: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/SP_Talento_GB_banerI_ConocetEquipo_992.png',
    pc: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/SP_Talento_GB_banerI_ConocetEquipo_1280.png',
    pdf1: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/GUIA_GENERAL_ESP.pdf',
    pdf2: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/GUIA_ESPECIAL_ESP.pdf',
  },
  other: {
    mobile: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/EN_Talento_GB_banerI_ConocetEquipo350.png',
    tablet: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/EN_Talento_GB_banerI_ConocetEquipo992.png',
    pc: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/EN_Talento_GB_banerI_ConocetEquipo1280.png',
    pdf1: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/GUIA_GENERAL_ENG.pdf',
    pdf2: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/GUIA_ESPECIAL_ENG.pdf',
  },
};

const BannerImg = ({ language, version}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const updateResources = () => {
      const width = window.innerWidth;

      let deviceType = 'pc';
      if (width < 550) {
        deviceType = 'mobile';
      } else if (width >= 550 && width < 1024) {
        deviceType = 'tablet';
      }

      const selectedLanguage = (language === 'Spanish (Latin America)' || language === 'Spanish (España)') ? 'es' : 'other';
      setImageUrl(resources[selectedLanguage][deviceType]);
      const pdfKey = version === 0 ? 'pdf1' : 'pdf2';
      setPdfUrl(resources[selectedLanguage][pdfKey]);
    };

    updateResources();
    window.addEventListener('resize', updateResources);

    return () => window.removeEventListener('resize', updateResources);
  }, [language, version]);

  const handleBannerClick = () => {
    window.open(pdfUrl, '_blank'); 
  };

  return (
    <div 
      className="banner-img" 
      style={{ backgroundImage: `url(${imageUrl})`, height: '200px', backgroundSize: 'cover', cursor: 'pointer' }} 
      onClick={handleBannerClick}
    >
      {/* */}
    </div>
  );
};

export default BannerImg;
