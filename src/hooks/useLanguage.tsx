import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.learnMore': 'Learn More',
    'nav.loginSignup': 'Login / Signup',
    'nav.tagline': 'Herbal Traceability, From Farm to You',
    
    // Hero Section
    'hero.knowJourney': 'Know the',
    'hero.journey': 'Journey',
    'hero.trustSource': 'Trust the',
    'hero.source': 'Source',
    'hero.description': 'Ayura brings radical transparency to Ayurveda. Scan any product to trace its authentic story from the farm to your hands.',
    'hero.verifyProduct': 'Verify a Product',
    'hero.joinPartner': 'Join as a Partner',
    'hero.blockchainSecured': 'Blockchain Secured',
    'hero.aiVerified': 'AI Verified',
    'hero.authenticated': '100% Authenticated',
    
    // How It Works
    'howItWorks.title': 'How',
    'howItWorks.works': 'Works',
    'howItWorks.description': 'Three simple steps to ensure complete transparency from farm to your hands.',
    'howItWorks.step1.title': 'Register at Source',
    'howItWorks.step1.description': 'Farmers create digital identity for each batch with geo-location and blockchain verification.',
    'howItWorks.step2.title': 'Track the Journey',
    'howItWorks.step2.description': 'Every step in the supply chain is recorded with timestamps and quality certificates.',
    'howItWorks.step3.title': 'Verify Instantly',
    'howItWorks.step3.description': 'Scan QR code to see complete journey, certificates, and authenticity proof.',
    
    // Features
    'features.title': 'Why Ayura',
    'features.works': 'Works',
    'features.description': 'Built with cutting-edge technology to ensure authenticity, transparency, and trust in every herbal product.',
    'features.blockchain.title': 'Blockchain Secured',
    'features.blockchain.description': 'Every step is recorded on an immutable ledger, preventing fraud and tampering.',
    'features.farmer.title': 'Farmer First Design',
    'features.farmer.description': 'An intuitive, multi-language interface with OTP login empowers even non-technical users.',
    'features.ipfs.title': 'IPFS Certified Documents',
    'features.ipfs.description': 'Lab reports and quality certificates are stored decentrally, linked directly to the batch.',
    'features.tracking.title': 'Real-Time Tracking',
    'features.tracking.description': 'Gain unparalleled visibility into the entire supply chain with live updates.',
    
    // Mission
    'mission.quote': 'Our mission is to bring trust back to tradition by empowering the farmers at the heart of Ayurveda.',
    'mission.farmer': 'Ramesh Kumar, Organic Farmer',
    'mission.location': 'Haridwar, Uttarakhand',
    
    // Footer
    'footer.description': 'Bringing transparency and trust to Ayurvedic supply chains through blockchain technology.',
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.documentation': 'Documentation',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.blog': 'Blog',
    'footer.careers': 'Careers',
    'footer.contact': 'Contact',
    'footer.support': 'Support',
    'footer.help': 'Help Center',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
    
    // Demo Features
    'demo.farmer': 'Try Farmer View',
    'demo.processor': 'Try Processor View',
    'demo.consumer': 'Try Consumer View',
  },
  hi: {
    // Navigation
    'nav.learnMore': 'और जानें',
    'nav.loginSignup': 'लॉगिन / साइनअप',
    'nav.tagline': 'जड़ी-बूटी ट्रेसेबिलिटी, खेत से आप तक',
    
    // Hero Section
    'hero.knowJourney': 'जानें',
    'hero.journey': 'यात्रा',
    'hero.trustSource': 'भरोसा करें',
    'hero.source': 'स्रोत पर',
    'hero.description': 'आयुरा आयुर्वेद में पूर्ण पारदर्शिता लाता है। किसी भी उत्पाद को स्कैन करें और खेत से आपके हाथों तक की प्रामाणिक कहानी जानें।',
    'hero.verifyProduct': 'उत्पाद सत्यापित करें',
    'hero.joinPartner': 'साझेदार बनें',
    'hero.blockchainSecured': 'ब्लॉकचेन सुरक्षित',
    'hero.aiVerified': 'AI सत्यापित',
    'hero.authenticated': '100% प्रमाणित',
    
    // How It Works
    'howItWorks.title': 'कैसे',
    'howItWorks.works': 'काम करता है',
    'howItWorks.description': 'खेत से आपके हाथों तक पूर्ण पारदर्शिता सुनिश्चित करने के लिए तीन सरल चरण।',
    'howItWorks.step1.title': 'स्रोत पर पंजीकरण',
    'howItWorks.step1.description': 'किसान भौगोलिक स्थान और ब्लॉकचेन सत्यापन के साथ प्रत्येक बैच के लिए डिजिटल पहचान बनाते हैं।',
    'howItWorks.step2.title': 'यात्रा को ट्रैक करें',
    'howItWorks.step2.description': 'आपूर्ति श्रृंखला में हर कदम टाइमस्टैम्प और गुणवत्ता प्रमाणपत्रों के साथ दर्ज किया जाता है।',
    'howItWorks.step3.title': 'तुरंत सत्यापित करें',
    'howItWorks.step3.description': 'पूरी यात्रा, प्रमाणपत्र और प्रामाणिकता प्रमाण देखने के लिए QR कोड स्कैन करें।',
    
    // Features
    'features.title': 'आयुरा क्यों',
    'features.works': 'काम करता है',
    'features.description': 'हर जड़ी-बूटी उत्पाद में प्रामाणिकता, पारदर्शिता और विश्वास सुनिश्चित करने के लिए अत्याधुनिक तकनीक के साथ निर्मित।',
    'features.blockchain.title': 'ब्लॉकचेन सुरक्षित',
    'features.blockchain.description': 'हर कदम एक अपरिवर्तनीय खाता बही पर दर्ज किया जाता है, धोखाधड़ी और छेड़छाड़ को रोकता है।',
    'features.farmer.title': 'किसान प्राथमिकता डिज़ाइन',
    'features.farmer.description': 'OTP लॉगिन के साथ एक सहज, बहुभाषी इंटरफ़ेस गैर-तकनीकी उपयोगकर्ताओं को भी सशक्त बनाता है।',
    'features.ipfs.title': 'IPFS प्रमाणित दस्तावेज़',
    'features.ipfs.description': 'लैब रिपोर्ट और गुणवत्ता प्रमाणपत्र विकेंद्रीकृत रूप से संग्रहीत हैं, सीधे बैच से जुड़े हुए हैं।',
    'features.tracking.title': 'रियल-टाइम ट्रैकिंग',
    'features.tracking.description': 'लाइव अपडेट के साथ पूरी आपूर्ति श्रृंखला में अतुलनीय दृश्यता प्राप्त करें।',
    
    // Mission
    'mission.quote': 'हमारा मिशन आयुर्वेद के केंद्र में किसानों को सशक्त बनाकर परंपरा में विश्वास वापस लाना है।',
    'mission.farmer': 'रमेश कुमार, जैविक किसान',
    'mission.location': 'हरिद्वार, उत्तराखंड',
    
    // Footer
    'footer.description': 'ब्लॉकचेन तकनीक के माध्यम से आयुर्वेदिक आपूर्ति श्रृंखला में पारदर्शिता और विश्वास लाना।',
    'footer.product': 'उत्पाद',
    'footer.features': 'विशेषताएं',
    'footer.pricing': 'मूल्य निर्धारण',
    'footer.documentation': 'दस्तावेज़ीकरण',
    'footer.company': 'कंपनी',
    'footer.about': 'हमारे बारे में',
    'footer.blog': 'ब्लॉग',
    'footer.careers': 'करियर',
    'footer.contact': 'संपर्क',
    'footer.support': 'सहायता',
    'footer.help': 'सहायता केंद्र',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'सेवा की शर्तें',
    'footer.rights': 'सभी अधिकार सुरक्षित।',
    
    // Demo Features
    'demo.farmer': 'किसान व्यू आज़माएं',
    'demo.processor': 'प्रोसेसर व्यू आज़माएं',
    'demo.consumer': 'उपभोक्ता व्यू आज़माएं',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};