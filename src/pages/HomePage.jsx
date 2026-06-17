import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const copy = {
    es: {
        role: 'Desarrollador de Software Full Stack',
        lead: 'Desarrollo soluciones Full Stack y Mobile con enfoque en arquitectura limpia, logica de negocio compleja y entrega de producto funcional orientado a resultados.',
        ctaWork: 'Ver proyectos',
        ctaContact: 'Contactar',
        panelTitle: 'Sobre mí',
        panelText: 'Soy Isaac Gutierrez Gomez, de León, Guanajuato. Tengo formación en Desarrollo y Gestión de Software, especializándome en implementaciones Full Stack, integraciones de APIs y desarrollo móvil nativo.',
        portraitLabel: 'Retrato profesional',
        sectionTitle: 'Lo que puedes esperar de mi trabajo',
        points: [
            'Migracion de logica de negocio compleja a plataformas web centralizadas.',
            'Integracion de APIs, geolocalizacion, reporteria y visualizacion de KPIs.',
            'Diseno de soluciones escalables con enfoque tecnico y de negocio.',
        ],
        featuredTitle: 'Proyectos destacados',
        featuredCta: 'Ver todos',
    },
    en: {
        role: 'Full Stack Software Developer',
        lead: 'I build Full Stack and Mobile solutions, focusing on clean architecture, complex business logic, and delivering functional, results-driven products.',
        ctaWork: 'View projects',
        ctaContact: 'Contact',
        panelTitle: 'About me',
        panelText: "I'm Isaac Gutierrez Gomez, based in Leon, Mexico. With a background in Software Development and Management, I specialize in Full Stack applications, API integrations, and native mobile development.",
        portraitLabel: 'Professional portrait',
        sectionTitle: 'What you can expect from my work',
        points: [
            'Migration of complex business logic to centralized web platforms.',
            'API integrations, geolocation, reporting, and KPI visualization.',
            'Scalable solutions designed with both technical and business goals in mind.',
        ],
        featuredTitle: 'Featured projects',
        featuredCta: 'View all',
    },
}

export function HomePage({ lang }) {
    const t = copy[lang]
    const pathPrefix = lang === 'en' ? '/en' : ''
    const featuredProjects = projects.slice(0, 3)

    return (
        <section className="page home-page">
            <div className="hero-grid">

                <div className="hero-copy-column">
                    <div className="hero-copy-block">
                        <h1>
                            Isaac Gutierrez Gomez
                            <span>{t.role}</span>
                        </h1>
                        <p className="lead">{t.lead}</p>

                        <div className="cta-row">
                            <Link to={`${pathPrefix}/work`} className="button primary">
                                {t.ctaWork}
                            </Link>
                            <Link to={`${pathPrefix}/contact`} className="button ghost">
                                {t.ctaContact}
                            </Link>
                        </div>
                    </div>

                    <section className="home-value">
                        <h2>{t.sectionTitle}</h2>
                        <ul>
                            {t.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                <aside className="hero-panel hero-profile-card">
                    <Link to={`${pathPrefix}/about`} className="profile-card-link">
                        <div className="portrait-wrap">
                            <img src="/IGG.jpg" alt={t.portraitLabel} className="portrait-image" />
                        </div>
                        <h2>{t.panelTitle}</h2>
                    </Link>
                    <p>{t.panelText}</p>
                </aside>

            </div>

            <section className="featured-strip">
                <div className="featured-strip-head">
                    <h2>{t.featuredTitle}</h2>
                    <Link to={`${pathPrefix}/work`} className="inline-link">
                        {t.featuredCta}
                    </Link>
                </div>

                <div className="featured-grid">
                    {featuredProjects.map((project) => (
                        <Link key={project.id} to={`${pathPrefix}/work/${project.id}`} className="featured-item">
                            <h3>{project.title}</h3>
                            <p>{project.summary[lang]}</p>
                        </Link>
                    ))}
                </div>
            </section>

        </section>
    )
}