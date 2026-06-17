import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const navItems = {
    es: [
        { to: '/', label: 'Inicio' },
        { to: '/about', label: 'Perfil' },
        { to: '/work', label: 'Proyectos' },
        { to: '/contact', label: 'Contacto' },
    ],
    en: [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/work', label: 'Work' },
        { to: '/contact', label: 'Contact' },
    ],
}

export function Layout({ children, lang, setLang }) {
    const location = useLocation()
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const [isAtTop, setIsAtTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const isEnglishPath =
            location.pathname === '/en' || location.pathname.startsWith('/en/')

        if (isEnglishPath && lang !== 'en') {
            setLang('en')
        }

        if (!isEnglishPath && lang !== 'es') {
            setLang('es')
        }
    }, [location.pathname, lang, setLang])

    useEffect(() => {
        const normalizedPath = location.pathname.replace(/^\/en/, '') || '/'
        const sectionByPath = {
            '/': lang === 'es' ? 'Inicio' : 'Home',
            '/about': 'About',
            '/work': 'Work',
            '/contact': lang === 'es' ? 'Contacto' : 'Contact',
        }

        const section = sectionByPath[normalizedPath] || 'Portfolio'
        document.title = `Isaac Gutierrez Gomez | ${section}`
    }, [location.pathname, lang])

    const withLangPrefix = (path, targetLang = lang) => {
        const prefix = targetLang === 'en' ? '/en' : ''
        if (path === '/') {
            return prefix || '/'
        }
        return `${prefix}${path}`
    }

    const handleLanguageToggle = () => {
        const targetLang = lang === 'es' ? 'en' : 'es'
        let nextPath = location.pathname

        if (targetLang === 'en') {
            if (!(nextPath === '/en' || nextPath.startsWith('/en/'))) {
                nextPath = nextPath === '/' ? '/en' : `/en${nextPath}`
            }
        } else if (nextPath === '/en') {
            nextPath = '/'
        } else if (nextPath.startsWith('/en/')) {
            nextPath = nextPath.slice(3)
        }

        setLang(targetLang)
        navigate(`${nextPath}${location.search}${location.hash}`)
    }

    const closeMenu = () => setIsMenuOpen(false)

    const handleScrollAction = () => {
        if (isAtTop) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const items = navItems[lang]
    const footerNote =
        lang === 'es'
            ? 'León, Gto., México · Disponible para oportunidades Full Stack y Mobile.'
            : 'Leon, Gto., Mexico · Open to Full Stack and Mobile opportunities.'
    const footerLabel =
        lang === 'es'
            ? 'Isaac Gutiérrez Gómez · Desarrollador de Software Full Stack'
            : 'Isaac Gutierrez Gomez · Full Stack Software Developer'
    const year = new Date().getFullYear()

    return (
        <div className="site-shell">
            <a className="skip-link" href="#main-content">
                {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
            </a>

            <header className="site-header">
                <NavLink to={withLangPrefix('/')} className="brand-mark">
                    <img
                        src="/micon.png"
                        alt="Isaac Gutiérrez Gómez Logo"
                        style={{ height: '32px', width: 'auto' }}
                    />
                </NavLink>

                <button
                    className="hamburger-menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={lang === 'es' ? 'Menú' : 'Menu'}
                    aria-expanded={isMenuOpen}
                    type="button"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav
                    className={`top-nav ${isMenuOpen ? 'is-open' : ''}`}
                    aria-label={lang === 'es' ? 'Navegacion principal' : 'Main navigation'}
                >
                    {items.map((item) => (
                        <NavLink
                            key={item.to}
                            to={withLangPrefix(item.to)}
                            className={({ isActive }) =>
                                isActive ? 'nav-link is-active' : 'nav-link'
                            }
                            end={item.to === '/'}
                            onClick={closeMenu}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <button
                    className="lang-switch"
                    onClick={handleLanguageToggle}
                    type="button"
                    title={lang === 'es' ? 'Switch to ENG' : 'Cambiar a ESP'}
                    aria-label={lang === 'es' ? 'Cambiar idioma a English' : 'Change language to Español'}
                >
                    <span className="lang-current">{lang === 'es' ? 'ESP' : 'ENG'}</span>
                </button>
            </header>

            <main id="main-content">{children}</main>

            <footer className="site-footer">
                <div className="footer-main">
                    <div>
                        <p>{footerLabel}</p>
                        <p className="footer-note">{footerNote} · {year}</p>
                    </div>
                </div>
            </footer>

            <button
                className={`scroll-fab ${!isAtTop ? 'is-scrolled' : ''}`}
                onClick={handleScrollAction}
                aria-label="Scroll"
            >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
        </div>
    )
}