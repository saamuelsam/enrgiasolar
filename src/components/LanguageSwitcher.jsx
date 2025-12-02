import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState } from 'react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'pt', name: 'Português', flag: '🇧🇷' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'es', name: 'Español', flag: '🇪🇸' }
    ];

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
                <Globe className="h-5 w-5 text-brand-darkBlue" />
                <span className="text-2xl">{currentLanguage.flag}</span>
                <span className="hidden md:inline text-sm font-medium text-gray-700">
                    {currentLanguage.code.toUpperCase()}
                </span>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    ></div>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-brand-light transition-colors duration-300 ${i18n.language === lang.code ? 'bg-brand-light' : ''
                                    } ${lang.code === languages[0].code ? 'rounded-t-lg' : ''
                                    } ${lang.code === languages[languages.length - 1].code ? 'rounded-b-lg' : ''
                                    }`}
                            >
                                <span className="text-2xl">{lang.flag}</span>
                                <span className="font-medium text-gray-700">{lang.name}</span>
                                {i18n.language === lang.code && (
                                    <span className="ml-auto text-brand-orange">✓</span>
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageSwitcher;
