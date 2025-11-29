'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: 'EN', abbr: 'EN' },
  { code: 'fr', name: 'Français', flag: 'FR', abbr: 'FR' },
  { code: 'pt', name: 'Português', flag: 'PT', abbr: 'PT' },
  { code: 'ar', name: 'العربية', flag: 'AR', abbr: 'AR' },
];

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages: string;
              layout: number;
              autoDisplay: boolean;
            },
            elementId: string
          ): void;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
    googleTranslateElementInit: () => void;
  }
}

export default function LanguageSwitcher({
  variant = 'desktop',
}: {
  variant?: 'desktop' | 'mobile';
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('googtrans') || '/en/en';
    const lang = saved.split('/')[2] || 'en';
    setCurrentLang(lang);

    let retryCount = 0;
    const maxRetries = 3;

    const loadScript = () => {
      if (document.getElementById('google-translate-script')) {
        setIsLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;

      script.onerror = () => {
        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(loadScript, 1000 * retryCount);
        }
      };

      script.onload = () => {
        setIsLoaded(true);
      };

      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,fr,pt,ar',
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
        setIsLoaded(true);
      } catch (error) {
        console.error('Google Translate initialization failed:', error);
      }
    };

    loadScript();

    const timer = setTimeout(() => {
      if (lang !== 'en') {
        changeLanguage(lang);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    try {
      const cookieValue = `/en/${langCode}`;
      document.cookie = `googtrans=${cookieValue}; path=/; max-age=31536000`;
      localStorage.setItem('googtrans', cookieValue);

      const googleCombo = document.querySelector(
        '.goog-te-combo'
      ) as HTMLSelectElement;
      if (googleCombo) {
        googleCombo.value = langCode;
        googleCombo.dispatchEvent(new Event('change'));
      }

      setTimeout(() => {
        if (document.documentElement.lang !== langCode) {
          window.location.reload();
        }
      }, 500);
    } catch (error) {
      console.error('Translation change failed:', error);
      window.location.reload();
    }
  };

  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  const isMobile = variant === 'mobile';

  return (
    <>
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <div className="relative notranslate">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 rounded-lg transition-colors ${
            isMobile
              ? 'px-2 py-2 bg-surface-primary border border-border-secondary'
              : 'px-3 py-2 hover:bg-surface-secondary'
          }`}
          style={
            isMobile
              ? {
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                }
              : undefined
          }
          aria-label="Change language"
          disabled={!isLoaded}
        >
          {isMobile ? (
            <span className="text-xs font-semibold text-text-primary">
              {currentLanguage.abbr}
            </span>
          ) : (
            <>
              <Globe className="w-4 h-4 text-text-secondary" />
              <span className="text-sm font-medium text-text-primary hidden sm:inline">
                {currentLanguage.name}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </>
          )}
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <div
              className="absolute right-0 mt-2 w-48 bg-surface-primary border border-border-secondary rounded-lg overflow-hidden z-50"
              style={{
                boxShadow:
                  'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
              }}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left px-4 py-3 hover:bg-surface-secondary transition-colors flex items-center gap-3 ${
                    currentLang === lang.code ? 'bg-surface-secondary' : ''
                  }`}
                >
                  <span className="text-sm font-medium text-text-primary">
                    {lang.name}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <style jsx global>{`
        .goog-te-banner-frame,
        .goog-te-balloon-frame,
        .goog-tooltip,
        .goog-te-spinner-pos {
          display: none !important;
        }

        body {
          top: 0 !important;
        }

        .skiptranslate {
          display: none !important;
        }

        body.translated {
          position: static !important;
        }
      `}</style>
    </>
  );
}
