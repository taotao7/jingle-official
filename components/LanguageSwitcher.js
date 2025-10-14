"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useTransition } from 'react';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      // Remove the current locale from pathname if it exists
      const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
      
      // Add the new locale to the path
      const newPath = newLocale === 'en' 
        ? pathWithoutLocale 
        : `/${newLocale}${pathWithoutLocale}`;
      
      router.push(newPath);
      setIsOpen(false);
    });
  };

  return (
    <div className="mil-language-switcher" style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mil-lang-btn"
        disabled={isPending}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          background: 'transparent',
          color: 'inherit',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.code.toUpperCase()}</span>
        <span style={{ fontSize: '10px' }}>▼</span>
      </button>

      {isOpen && (
        <div
          className="mil-lang-dropdown"
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '8px',
            background: 'var(--background-color, #fff)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            minWidth: '120px',
            overflow: 'hidden',
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              disabled={isPending || lang.code === locale}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                padding: '10px 16px',
                border: 'none',
                background: lang.code === locale ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                color: 'inherit',
                cursor: lang.code === locale ? 'default' : 'pointer',
                fontSize: '14px',
                textAlign: 'left',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => {
                if (lang.code !== locale) {
                  e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (lang.code !== locale) {
                  e.target.style.background = 'transparent';
                }
              }}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
              {lang.code === locale && <span style={{ marginLeft: 'auto' }}>✓</span>}
            </button>
          ))}
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
          }}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;

