import { Link } from 'react-router-dom'

const copy = {
    es: {
        title: 'Pagina no encontrada',
        lead: 'La ruta que intentaste abrir no existe o fue movida.',
        cta: 'Volver al inicio',
    },
    en: {
        title: 'Page not found',
        lead: 'The route you tried to open does not exist or was moved.',
        cta: 'Back to home',
    },
}

export function NotFoundPage({ lang }) {
    const t = copy[lang]
    const pathPrefix = lang === 'en' ? '/en' : ''

    return (
        <section className="page not-found-page">
            <header className="page-head">
                <p className="eyebrow">404</p>
                <h1>{t.title}</h1>
                <p className="lead">{t.lead}</p>
            </header>
            <div className="cta-row">
                <Link to={pathPrefix || '/'} className="button primary">
                    {t.cta}
                </Link>
            </div>
        </section>
    )
}
