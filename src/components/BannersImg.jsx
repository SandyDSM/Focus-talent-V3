import React, { useState, useEffect } from 'react';

const resources = {
  esp: {
    mobile: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/SP_Talento_GB_banerI_ConocetEquipo350.png',
    tablet: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/SP_Talento_GB_banerI_ConocetEquipo_992.png',
    pc: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/SP_Talento_GB_banerI_ConocetEquipo_1280.png',
    pdf1: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/SP_SG.pdf',
    pdf2: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/SP_EG.pdf',
  },
  eng: {
    mobile: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/EN_Talento_GB_banerI_ConocetEquipo350.png',
    tablet: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/EN_Talento_GB_banerI_ConocetEquipo992.png',
    pc: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/EN_Talento_GB_banerI_ConocetEquipo1280.png',
    pdf1: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/EN_SG.pdf',
    pdf2: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/EN_EG.pdf',
  },
  por: {
    mobile: 'https://pruebabucketsawspruebas.s3.us-east-1.amazonaws.com/IMGs/PO_Talento_GB_banerI_ConocetEquipo350.png',
    tablet: 'https://pruebabucketsawspruebas.s3.us-east-1.amazonaws.com/IMGs/PO_Talento_GB_banerI_ConocetEquipo_992.png',
    pc: 'https://pruebabucketsawspruebas.s3.us-east-1.amazonaws.com/IMGs/PO_Talento_GB_banerI_ConocetEquipo_1280.png',
    pdf1: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/POR_SG.pdf',
    pdf2: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/POR_EG.pdf',
  },
  fra: {
    mobile: 'https://pruebabucketsawspruebas.s3.us-east-1.amazonaws.com/IMGs/FR_Talento_GB_banerI_ConocetEquipo350.png',
    tablet: 'https://pruebabucketsawspruebas.s3.us-east-1.amazonaws.com/IMGs/FR_Talento_GB_banerI_ConocetEquipo_992.png',
    pc: 'https://pruebabucketsawspruebas.s3.us-east-1.amazonaws.com/IMGs/FR_Talento_GB_banerI_ConocetEquipo_1280.png',
    pdf1: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/FR_SG.pdf',
    pdf2: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/FR_EG.pdf',
  },
  chi: {
    mobile: 'https://pruebabucketsawspruebas.s3.us-east-1.amazonaws.com/IMGs/CH_Talento_GB_banerI_ConocetEquipo350.png',
    tablet: 'https://pruebabucketsawspruebas.s3.us-east-1.amazonaws.com/IMGs/CH_Talento_GB_banerI_ConocetEquipo_992.png',
    pc: 'https://pruebabucketsawspruebas.s3.us-east-1.amazonaws.com/IMGs/CH_Talento_GB_banerI_ConocetEquipo_1280.png',
    pdf1: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/CH_SG.pdf',
    pdf2: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/CH_EG.pdf',
  },
  rum: {
    mobile: 'https://pruebabucketsawspruebas.s3.us-east-1.amazonaws.com/IMGs/RU_Talento_GB_banerI_ConocetEquipo350.png',
    tablet: 'https://pruebabucketsawspruebas.s3.us-east-1.amazonaws.com/IMGs/RU_Talento_GB_banerI_ConocetEquipo_992.png',
    pc: 'https://pruebabucketsawspruebas.s3.us-east-1.amazonaws.com/IMGs/RU_Talento_GB_banerI_ConocetEquipo_1280.png',
    pdf1: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/RUM_SG.pdf',
    pdf2: 'https://pruebabucketsawspruebas.s3.amazonaws.com/IMGs/PDFs/RUM_EG.pdf',
  },

};

const languageMap = {
  'Spanish (Latin America)': 'esp',
  'Spanish (Spain)': 'esp',
  'English (US)': 'eng',
  'English (UK)': 'eng',
  'Portuguese (Portugal)' :'por',
  'Portuguese (Brazil)': 'por',
  'French (Canada)' : 'fra',
  'Chinese (Simplified)': 'chi',
  'Romanian (Romania)': 'rum'
};

const BannerImg = ({ language, version}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const updateResources = () => {
      const width = window.innerWidth;

      let deviceType = 'pc';
      if (width < 500) {
        deviceType = 'mobile';
      } else if (width >= 550 && width <= 1024) {
        deviceType = 'tablet';
      }


      //const selectedLanguage = (language === 'Spanish (Latin America)' || language === 'Spanish (Spain)') ? 'es' : 'other';
      const selectedLanguage = languageMap[language] || 'en';
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
      style={{ backgroundImage: `url(${imageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition:'left center', height: '200px', backgroundSize: 'cover', cursor: 'pointer' }} 
      onClick={handleBannerClick}
    >
      {/* */}
    </div>
  );
};

export default BannerImg;
