"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useTransition, useEffect, useRef } from "react";

const LanguageSwitcher = ({ dark = false }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", name: "English", short: "EN" },
    { code: "zh", name: "中文", short: "中" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      // Remove the current locale from pathname if it exists
      const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

      // Add the new locale to the path
      const newPath = `/${newLocale}${pathWithoutLocale}`;

      router.push(newPath);
      setIsOpen(false);
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="mil-language-switcher" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`mil-lang-btn ${isOpen ? "mil-active" : ""}`}
        disabled={isPending}
        aria-label="切换语言"
      >
        <span className="mil-lang-text">{currentLanguage.short}</span>
        <span className="mil-lang-arrow">
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 1.25C0.5 1.25 2.63316 3.38316 4 4.75C4 4.75 6.13316 2.61683 7.5 1.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className={`mil-lang-dropdown ${dark ? "mil-dark" : ""}`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              disabled={isPending || lang.code === locale}
              className={`mil-lang-option ${
                lang.code === locale ? "mil-active" : ""
              }`}
            >
              <span className="mil-lang-name">{lang.name}</span>
              {lang.code === locale && (
                <span className="mil-lang-check">✓</span>
              )}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .mil-language-switcher {
          position: relative;
        }

        .mil-lang-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          height: 48px;
          padding: 0 15px;
          border-radius: 10px;
          background-color: ${dark
            ? "rgba(255, 255, 255, 0.05)"
            : "rgb(242, 250, 250)"};
          border: none;
          color: ${dark ? "rgba(242, 250, 250, 0.7)" : "rgb(137, 141, 150)"};
          font-family: "Switzer-Variable";
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0, 0, 0.3642, 1);
          white-space: nowrap;
        }

        .mil-lang-btn:hover {
          background-color: ${dark
            ? "rgba(255, 255, 255, 0.1)"
            : "rgb(242, 250, 250)"};
          color: ${dark ? "rgb(255, 255, 255)" : "rgb(242, 116, 87)"};
        }

        .mil-lang-btn.mil-active {
          background-color: ${dark
            ? "rgba(255, 255, 255, 0.1)"
            : "rgb(242, 250, 250)"};
          color: ${dark ? "rgb(255, 255, 255)" : "rgb(242, 116, 87)"};
        }

        .mil-lang-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .mil-lang-text {
          font-size: 15px;
          letter-spacing: 0.5px;
        }

        .mil-lang-arrow {
          display: flex;
          align-items: center;
          margin-top: 1px;
          transition: transform 0.2s cubic-bezier(0, 0, 0.3642, 1);
        }

        .mil-lang-btn.mil-active .mil-lang-arrow {
          transform: rotate(180deg);
        }

        .mil-lang-dropdown {
          position: absolute;
          top: calc(100% + 5px);
          right: 0;
          min-width: 140px;
          background-color: rgb(255, 255, 255);
          border-radius: 10px;
          box-shadow: 0 5px 10px rgba(13, 81, 82, 0.1);
          padding: 5px;
          opacity: 0;
          transform: translateY(10px);
          animation: dropdownFadeIn 0.3s cubic-bezier(0, 0, 0.3642, 1) forwards;
          z-index: 1001;
        }

        .mil-lang-dropdown.mil-dark {
          background-color: rgb(39, 38, 38);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
        }

        @keyframes dropdownFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mil-lang-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 10px 15px;
          border: none;
          border-radius: 8px;
          background-color: transparent;
          color: rgb(137, 141, 150);
          font-family: "Switzer-Variable";
          font-weight: 500;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0, 0, 0.3642, 1);
          text-align: left;
        }

        .mil-lang-dropdown.mil-dark .mil-lang-option {
          color: rgb(242, 250, 250);
        }

        .mil-lang-option:hover {
          background-color: rgb(242, 250, 250);
          color: rgb(242, 116, 87);
        }

        .mil-lang-dropdown.mil-dark .mil-lang-option:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: rgb(255, 255, 255);
        }

        .mil-lang-option.mil-active {
          color: rgb(242, 116, 87);
          cursor: default;
        }

        .mil-lang-dropdown.mil-dark .mil-lang-option.mil-active {
          color: rgb(242, 250, 250);
          opacity: 1;
        }

        .mil-lang-option:disabled {
          cursor: default;
        }

        .mil-lang-name {
          flex: 1;
        }

        .mil-lang-check {
          margin-left: 8px;
          color: rgb(242, 116, 87);
          font-size: 16px;
        }

        .mil-lang-dropdown.mil-dark .mil-lang-check {
          color: rgb(242, 250, 250);
        }

        @media (max-width: 1200px) {
          .mil-lang-btn {
            height: 38px;
            padding: 0 12px;
            font-size: 14px;
          }

          .mil-lang-dropdown {
            right: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
