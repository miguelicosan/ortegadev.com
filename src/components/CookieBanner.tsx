import { useState, useEffect } from 'react';
import type { Language } from '../i18n/config';
import './CookieBanner.scss';

interface CookieBannerProps {
    lang: Language;
}

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'cookie-consent';

export default function CookieBanner({ lang }: CookieBannerProps) {
    const [showBanner, setShowBanner] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [showConfig, setShowConfig] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const translations = {
        es: {
            message: 'Utilizamos cookies propias y de terceros para mejorar tu experiencia. Puedes aceptarlas, rechazarlas o configurarlas.',
            accept: 'Aceptar todas',
            acceptShort: 'Aceptar',
            reject: 'Rechazar',
            configure: 'Configurar',
            configTitle: 'Configuración de Cookies',
            necessary: 'Necesarias',
            necessaryDesc: 'Cookies esenciales para el funcionamiento del sitio',
            analytics: 'Analíticas',
            analyticsDesc: 'Nos ayudan a entender cómo usas el sitio',
            marketing: 'Marketing',
            marketingDesc: 'Cookies de publicidad y redes sociales',
            save: 'Guardar preferencias',
            close: 'Cerrar'
        },
        en: {
            message: 'We use our own and third-party cookies to improve your experience. You can accept, reject, or configure them.',
            accept: 'Accept all',
            acceptShort: 'Accept',
            reject: 'Reject',
            configure: 'Configure',
            configTitle: 'Cookie Settings',
            necessary: 'Necessary',
            necessaryDesc: 'Essential cookies for site functionality',
            analytics: 'Analytics',
            analyticsDesc: 'Help us understand how you use the site',
            marketing: 'Marketing',
            marketingDesc: 'Advertising and social media cookies',
            save: 'Save preferences',
            close: 'Close'
        }
    };

    const t = translations[lang];

    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,
        analytics: false,
        marketing: false
    });

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            setShowBanner(true);
        } else {
            try {
                const savedPreferences = JSON.parse(consent);
                setPreferences(savedPreferences);
                applyPreferences(savedPreferences);
            } catch (e) {
                setShowBanner(true);
            }
        }

        // Listen for request to open cookie settings from other pages
        const handleOpenSettings = () => {
            console.log('Cookie settings opened from external link');
            setShowConfig(true);
        };

        window.addEventListener('openCookieSettings', handleOpenSettings);

        const media = window.matchMedia('(max-width: 640px)');
        const handleMedia = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
        handleMedia(media);
        media.addEventListener('change', handleMedia as EventListener);

        return () => {
            window.removeEventListener('openCookieSettings', handleOpenSettings);
            media.removeEventListener('change', handleMedia as EventListener);
        };
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        if (showBanner) {
            root.classList.add('cookie-banner-open');
        } else {
            root.classList.remove('cookie-banner-open');
        }

        return () => {
            root.classList.remove('cookie-banner-open');
        };
    }, [showBanner]);

    const applyPreferences = (prefs: CookiePreferences) => {
        // TODO: Implement actual cookie management based on preferences
        // For now, just save to localStorage
        // When adding Google Analytics or other tools, check prefs.analytics and prefs.marketing
        console.log('Applying cookie preferences:', prefs);
    };

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true
        };
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(allAccepted));
        setPreferences(allAccepted);
        applyPreferences(allAccepted);
        setIsClosing(true);
        setTimeout(() => {
            setShowBanner(false);
            setIsClosing(false);
        }, 300);
    };

    const handleReject = () => {
        const onlyNecessary = {
            necessary: true,
            analytics: false,
            marketing: false
        };
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(onlyNecessary));
        setPreferences(onlyNecessary);
        applyPreferences(onlyNecessary);
        setIsClosing(true);
        setTimeout(() => {
            setShowBanner(false);
            setIsClosing(false);
        }, 300);
    };

    const handleSavePreferences = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
        applyPreferences(preferences);
        setShowConfig(false);
        setIsClosing(true);
        setTimeout(() => {
            setShowBanner(false);
            setIsClosing(false);
        }, 300);
    };

    const togglePreference = (key: keyof CookiePreferences) => {
        if (key === 'necessary') return; // Can't disable necessary cookies
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <>
            {showBanner && (
                <div className={`cookie-banner ${isClosing ? 'closing' : ''}`} role="dialog" aria-label="Cookie consent">
                    <div className="cookie-banner-content">
                        <p className="cookie-message">{t.message}</p>
                        <div className="cookie-actions">
                            <button
                                className="btn btn-secondary btn-sm"
                                onClick={() => setShowConfig(true)}
                            >
                                {t.configure}
                            </button>
                            <button
                                className="btn btn-outline btn-sm"
                                onClick={handleReject}
                            >
                                {t.reject}
                            </button>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={handleAcceptAll}
                            >
                                {isMobile ? t.acceptShort : t.accept}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showConfig && (
                <div className="cookie-config-overlay" onClick={() => setShowConfig(false)}>
                    <div
                        className="cookie-config-modal"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-labelledby="cookie-config-title"
                    >
                        <div className="cookie-config-header">
                            <h2 id="cookie-config-title">{t.configTitle}</h2>
                            <button
                                className="cookie-config-close"
                                onClick={() => setShowConfig(false)}
                                aria-label={t.close}
                            >
                                ×
                            </button>
                        </div>

                        <div className="cookie-config-body">
                            <div className="cookie-option">
                                <div className="cookie-option-header">
                                    <label className="cookie-option-label">
                                        <input
                                            type="checkbox"
                                            checked={preferences.necessary}
                                            disabled
                                        />
                                        <span className="cookie-option-title">{t.necessary}</span>
                                    </label>
                                    <span className="cookie-option-required">Siempre activas</span>
                                </div>
                                <p className="cookie-option-desc">{t.necessaryDesc}</p>
                            </div>

                            <div className="cookie-option">
                                <div className="cookie-option-header">
                                    <label className="cookie-option-label">
                                        <input
                                            type="checkbox"
                                            checked={preferences.analytics}
                                            onChange={() => togglePreference('analytics')}
                                        />
                                        <span className="cookie-option-title">{t.analytics}</span>
                                    </label>
                                </div>
                                <p className="cookie-option-desc">{t.analyticsDesc}</p>
                            </div>

                            <div className="cookie-option">
                                <div className="cookie-option-header">
                                    <label className="cookie-option-label">
                                        <input
                                            type="checkbox"
                                            checked={preferences.marketing}
                                            onChange={() => togglePreference('marketing')}
                                        />
                                        <span className="cookie-option-title">{t.marketing}</span>
                                    </label>
                                </div>
                                <p className="cookie-option-desc">{t.marketingDesc}</p>
                            </div>
                        </div>

                        <div className="cookie-config-footer">
                            <button
                                className="btn btn-primary"
                                onClick={handleSavePreferences}
                            >
                                {t.save}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
