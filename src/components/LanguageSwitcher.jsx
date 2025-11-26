import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';
import { Button } from './ui/button';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' }
];

function LanguageSwitcher({ variant = 'default', showLabel = true }) {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  if (variant === 'compact') {
    return (
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2"
          title={t('common.language')}
        >
          <Globe className="w-4 h-4" />
          {showLabel && <span className="hidden sm:inline">{currentLanguage.nativeName}</span>}
        </Button>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between transition-colors ${
                    language.code === i18n.language ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-gray-100'
                  } first:rounded-t-lg last:rounded-b-lg`}
                >
                  <span>{language.nativeName}</span>
                  {language.code === i18n.language && (
                    <Check className="w-4 h-4" />
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
        <Globe className="w-4 h-4" />
        {t('common.language')}
      </label>
      <div className="grid grid-cols-2 gap-2">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`px-4 py-3 rounded-lg border-2 transition-all ${
              language.code === i18n.language
                ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            <div className="font-medium">{language.nativeName}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{language.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
