'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: 'GB', abbr: 'EN' },
  { code: 'fr', name: 'Français', flag: 'FR', abbr: 'FR' },
  { code: 'pt', name: 'Português', flag: 'PT', abbr: 'PT' },
  { code: 'ar', name: 'العربية', flag: 'SA', abbr: 'AR' },
];

declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            layout: number;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export default function LanguageSwitcher({
  variant = 'desktop',
}: {
  variant?: 'desktop' | 'mobile';
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferredLanguage');
      return saved || 'en';
    }
    return 'en';
  });
  const [isInitialized, setIsInitialized] = useState(false);

  const triggerTranslation = useCallback((langCode: string) => {
    try {
      if (langCode === 'en') {
        // CRITICAL: Clear cookies for ALL possible domains
        const domain = window.location.hostname;

        // Clear cookies for current domain
        document.cookie = 'googtrans=; path=/; max-age=0';
        document.cookie = `googtrans=; path=/; domain=${domain}; max-age=0`;
        document.cookie = `googtrans=; path=/; domain=.${domain}; max-age=0`;

        // Clear any subdomain cookies
        const parts = domain.split('.');
        if (parts.length > 1) {
          const rootDomain = parts.slice(-2).join('.');
          document.cookie = `googtrans=; path=/; domain=.${rootDomain}; max-age=0`;
        }

        // Set explicit English cookie BEFORE reload
        document.cookie =
          'googtrans=/en/en; path=/; max-age=31536000; SameSite=Lax';
        document.cookie = `googtrans=/en/en; path=/; domain=${domain}; max-age=31536000; SameSite=Lax`;

        // Reset localStorage
        localStorage.setItem('preferredLanguage', 'en');

        // Reset Google Translate element
        const select = document.querySelector(
          '.goog-te-combo'
        ) as HTMLSelectElement;
        if (select) {
          select.value = '';
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }

        // Force reload after clearing everything
        setTimeout(() => {
          window.location.reload();
        }, 100);
        return;
      }

      // Set cookie for other languages
      const cookieValue = `/en/${langCode}`;
      document.cookie = `googtrans=${cookieValue}; path=/; max-age=31536000; SameSite=Lax`;

      // Trigger Google Translate
      const select = document.querySelector(
        '.goog-te-combo'
      ) as HTMLSelectElement;
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }
    } catch (error) {
      console.error('Translation error:', error);
    }
  }, []);

  useEffect(() => {
    const initGoogleTranslate = () => {
      if (window.google?.translate) {
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,fr,pt,ar',
              layout: 0,
              autoDisplay: false,
            },
            'google_translate_element'
          );
          setIsInitialized(true);
        } catch (error) {
          console.error('Google Translate initialization error:', error);
        }
      }
    };

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;

      window.googleTranslateElementInit = initGoogleTranslate;

      document.body.appendChild(script);
    } else {
      initGoogleTranslate();
    }

    // Apply saved language after initialization
    if (currentLang !== 'en') {
      const timer = setTimeout(() => {
        triggerTranslation(currentLang);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [triggerTranslation, currentLang]);

  const changeLanguage = useCallback(
    (langCode: string) => {
      if (!isInitialized) {
        console.log('Please wait for translator to initialize');
        return;
      }

      setCurrentLang(langCode);
      setIsOpen(false);
      localStorage.setItem('preferredLanguage', langCode);

      // Trigger translation
      triggerTranslation(langCode);
    },
    [isInitialized, triggerTranslation]
  );

  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  const isMobile = variant === 'mobile';

  return (
    <>
      <div id="google_translate_element" style={{ display: 'none' }} />

      <div className="relative notranslate">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className={`flex items-center gap-2 rounded-lg transition-all duration-200 touch-manipulation ${
            isMobile
              ? 'px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 active:border-gray-400 shadow-sm'
              : 'px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md'
          } ${!isInitialized ? 'opacity-50 cursor-pointer' : 'cursor-pointer'}`}
          aria-label="Change language"
          type="button"
        >
          {isMobile ? (
            <>
              <img
                src={`https://flagcdn.com/w20/${currentLanguage.flag.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${currentLanguage.flag.toLowerCase()}.png 2x`}
                width="20"
                height="15"
                alt={currentLanguage.name}
                className="rounded-sm"
              />
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                {currentLanguage.abbr}
              </span>
            </>
          ) : (
            <>
              <img
                src={`https://flagcdn.com/w20/${currentLanguage.flag.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${currentLanguage.flag.toLowerCase()}.png 2x`}
                width="20"
                height="15"
                alt={currentLanguage.name}
                className="rounded-sm"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200 hidden sm:inline">
                {currentLanguage.name}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </>
          )}
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              onTouchEnd={() => setIsOpen(false)}
            />
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    changeLanguage(lang.code);
                  }}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    changeLanguage(lang.code);
                  }}
                  type="button"
                  className={`w-full text-left px-4 py-3 active:bg-gray-100 dark:active:bg-gray-600 transition-colors flex items-center gap-3 touch-manipulation ${
                    currentLang === lang.code
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-500'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <img
                    src={`https://flagcdn.com/w20/${lang.flag.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${lang.flag.toLowerCase()}.png 2x`}
                    width="24"
                    height="18"
                    alt={lang.name}
                    className="rounded-sm"
                  />
                  <span
                    className={`text-sm font-medium flex-1 ${
                      currentLang === lang.code
                        ? 'text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    {lang.name}
                  </span>
                  {currentLang === lang.code && (
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <style jsx global>{`
        body {
          top: 0 !important;
          position: static !important;
        }

        .goog-te-banner-frame,
        .goog-te-balloon-frame,
        .goog-tooltip,
        .goog-te-spinner-pos,
        .skiptranslate,
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }

        iframe.goog-te-menu-frame {
          display: none !important;
        }

        body.translated {
          position: static !important;
        }

        body::before {
          display: none !important;
        }
      `}</style>
    </>
  );
}
