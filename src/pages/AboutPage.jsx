import { Link } from 'react-router-dom'

const copy = {
    es: {
        title: 'Acerca de mí',
        bioTitle: 'Quién soy',
        bioParagraphs: [
            'Desarrollador de Software enfocado en construir arquitectura limpia, lógica de negocio robusta y productos escalables. Soy un desarrollador apasionado por resolver problemas complejos a través del código. Mi formación técnica me ha permitido transitar desde el desarrollo móvil nativo hasta la arquitectura backend empresarial.',
            'Disfruto el proceso de tomar reglas de negocio enredadas y transformarlas en sistemas centralizados, eficientes y fáciles de mantener.',
            'Actualmente enfoco mi energía en seguir puliendo mi stack técnico y aportar valor real en equipos que priorizan la calidad del producto.',
        ],
        glanceTitle: 'Datos rápidos',
        glanceItems: [
            { label: 'Ubicación', value: 'León, Gto., México' },
            { label: 'Perfil', value: 'Desarrollo Full Stack & Mobile' },
            { label: 'Idiomas', value: 'Español (Nativo) · Inglés (A2 Técnico)' },
        ],
        formationTitle: 'Certificados y cursos',
        formationItems: [
            'Iniciación al Desarrollo con IA | BIG school (2025).',
            'Lógica de Programación: JavaScript | Alura (2024).',
            'Junior Cybersecurity Analyst | Cisco (2024).',
            'Módulo Ciudades y Cambio Climático | UNITAR (2024).',
            'CCNAv7: Switching, Routing and Wireless | Cisco (2023).',
        ],
        stackTitle: 'Stack tecnológico',
        expTitle: 'Experiencia',
        expItems: [
            {
                id: 'exp-1',
                title: 'QUARKSOFT · Proyecto Allianz',
                role: 'Desarrollo Full Stack',
                date: '2026',
                link: '/work/allianz-pwa'
            },
            {
                id: 'exp-2',
                title: 'Proyecto KAIROS',
                role: 'Mobile y Backend',
                date: '2025',
                link: '/work/kairos'
            },
            {
                id: 'exp-3',
                title: 'Sizes and Colors de México',
                role: 'Desarrollo de Software',
                date: '2024',
                link: '/work/sizes-and-colors-medical-scheduler'
            },
            {
                id: 'exp-4',
                title: 'UTL · Módulo SICEFA',
                role: 'Gestión de Sucursales',
                date: '2024',
                link: '/work/sicefa'
            }
        ],
        communityTitle: 'Competencias técnicas',
        communityItems: [
            'Arquitectura de Software (MVVM/MVC).',
            'Diseño y consumo de APIs RESTful.',
            'Modelado de datos relacional.',
            'Despliegue en nube (Cloud Deployment).',
            'Lógica de negocio compleja.',
            'Integración de servicios de terceros (Mapas/Pagos).',
        ],
        professionalTitle: 'Habilidades profesionales',
        professionalItems: [
            'Autogestión en trabajo remoto.',
            'Resolución de problemas analíticos.',
            'Comunicación técnica efectiva.',
            'Aprendizaje autodidacta ágil.',
            'Orientación a resultados.',
            'Capacidad de análisis.',
        ],
        educationTitle: 'Datos académicos',
        educationItems: [
            'Universidad Tecnológica de León · Ingeniería en Desarrollo y Gestión de Software (2024 - 2026).',
            'Universidad Tecnológica de León · TSU en Tecnologías de la Información, área Desarrollo de Software Multiplataforma (2022 - 2024). Título electrónico registrado en abril 2025.',
            'CBTis 225 · Bachillerato Tecnológico con especialidad en Técnico en Programación (2018 - 2021). Título en proceso.',
        ],
    },
    en: {
        title: 'About me',
        bioTitle: 'Who I am',
        bioParagraphs: [
            "Software Developer focused on building clean architecture, robust business logic, and scalable products. I'm passionate about solving complex problems through code. My technical background has allowed me to transition from native mobile development to enterprise backend architecture.",
            "I enjoy taking tangled business rules and transforming them into centralized, efficient, and maintainable systems.",
            "I'm currently focused on continuously polishing my tech stack and delivering real value to product-driven teams.",
        ],
        glanceTitle: 'Quick facts',
        glanceItems: [
            { label: 'Location', value: 'Leon, Mexico' },
            { label: 'Profile', value: 'Full Stack & Mobile Development' },
            { label: 'Languages', value: 'Spanish (Native) · English (Technical A2)' },
        ],
        formationTitle: 'Certifications',
        formationItems: [
            'AI Development Foundations | BIG school (2025).',
            'Programming Logic: JavaScript | Alura (2024).',
            'Junior Cybersecurity Analyst | Cisco (2024).',
            'Cities and Climate Change Module | UNITAR (2024).',
            'CCNAv7: Switching, Routing and Wireless | Cisco (2023).',
        ],
        stackTitle: 'Tech stack',
        expTitle: 'Experience',
        expItems: [
            {
                id: 'exp-1',
                title: 'QUARKSOFT · Allianz Project',
                role: 'Full Stack Development',
                date: '2026',
                link: '/work/allianz-pwa'
            },
            {
                id: 'exp-2',
                title: 'KAIROS Project',
                role: 'Mobile and Backend',
                date: '2025',
                link: '/work/kairos'
            },
            {
                id: 'exp-3',
                title: 'Sizes and Colors de Mexico',
                role: 'Software Development',
                date: '2024',
                link: '/work/sizes-and-colors-medical-scheduler'
            },
            {
                id: 'exp-4',
                title: 'UTL · SICEFA Module',
                role: 'Branch Management',
                date: '2024',
                link: '/work/sicefa'
            }
        ],
        communityTitle: 'Technical competencies',
        communityItems: [
            'Software Architecture (MVVM/MVC).',
            'RESTful API design and consumption.',
            'Relational data modeling.',
            'Cloud Deployment.',
            'Complex business logic translation.',
            'Third-party service integrations (Maps/Payments).',
        ],
        professionalTitle: 'Professional skills',
        professionalItems: [
            'Remote work self-management.',
            'Analytical problem-solving.',
            'Effective technical communication.',
            'Fast, self-driven learning.',
            'Results-oriented execution.',
            'Strong analytical mindset.',
        ],
        educationTitle: 'Academic background',
        educationItems: [
            'Universidad Tecnologica de Leon · Software Development and Management Engineering (2024 - 2026).',
            'Universidad Tecnologica de Leon · Associate Degree in IT, Multiplatform Software Development (2022 - 2024). Electronic degree registered in April 2025.',
            'CBTis 225 · Technical High School with specialty in Programming (2018 - 2021). Degree in process.',
        ],
    },
}

const stackByLang = {
    es: [
        { title: 'Servidor', items: ['ASP.NET Core', 'Node.js', 'Express.js', 'Django', 'Flask', 'Entity Framework Core'] },
        { title: 'Interfaz web', items: ['React', 'Vue.js', 'Angular', 'JavaScript'] },
        { title: 'Bases de datos', items: ['SQL Server', 'MySQL'] },
        { title: 'Herramientas', items: ['Git', 'GitHub', 'Swagger', 'Android Studio', 'Visual Studio', 'Unity', 'PowerBuilder'] },
        { title: 'Nube / Despliegue', items: ['Azure', 'Vercel', 'Netlify', 'Render'] },
        { title: 'Móvil', items: ['Kotlin', 'Jetpack Compose'] },
    ],
    en: [
        { title: 'Mobile', items: ['Kotlin', 'Jetpack Compose'] },
        { title: 'Backend', items: ['ASP.NET Core', 'Node.js', 'Express.js', 'Django', 'Flask', 'Entity Framework Core'] },
        { title: 'Frontend', items: ['React', 'Vue.js', 'Angular', 'JavaScript'] },
        { title: 'Databases', items: ['SQL Server', 'MySQL'] },
        { title: 'Tools', items: ['Git', 'GitHub', 'Swagger', 'Android Studio', 'Visual Studio', 'Unity', 'PowerBuilder'] },
        { title: 'Cloud / Deploy', items: ['Azure', 'Vercel', 'Netlify', 'Render'] },
    ],
}

export function AboutPage({ lang }) {
    const t = copy[lang]
    const stackItems = stackByLang[lang]
    const pathPrefix = lang === 'en' ? '/en' : ''

    return (
        <section className="page about-page">
            <header className="page-head">
                <h1>{t.title}</h1>
            </header>

            <div className="about-hero">
                <section className="about-bio" style={{ marginTop: 0 }}>
                    <h2>{t.bioTitle}</h2>
                    {t.bioParagraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </section>

                <aside className="about-glance">
                    <h2>{t.glanceTitle}</h2>
                    <div className="glance-grid">
                        {t.glanceItems.map((item) => (
                            <article key={item.label} className="glance-item">
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </article>
                        ))}
                    </div>
                </aside>
            </div>

            <h2 style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.35rem' }}>{t.stackTitle}</h2>
            <section className="stack-grid" style={{ marginTop: '0' }}>
                {stackItems.map((group) => (
                    <article key={group.title}>
                        <h2 style={{ marginBottom: '16px' }}>{group.title}</h2>
                        <ul>
                            {group.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>

            <section className="experience-block" style={{ marginTop: '40px' }}>
                <h2 style={{ marginBottom: '20px', fontSize: '1.35rem' }}>{t.expTitle}</h2>
                <div className="timeline">
                    {t.expItems.map((item) => (
                        <Link to={`${pathPrefix}${item.link}`} key={item.id} className="timeline-item" style={{ display: 'block', textDecoration: 'none', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                                <div>
                                    <h3 style={{ margin: '0 0 4px 0', color: 'var(--text)' }}>{item.title}</h3>
                                    <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{item.role}</span>
                                </div>
                                <strong style={{ color: 'var(--text)' }}>{item.date}</strong>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="about-extra-grid" style={{ marginTop: '40px' }}>
                <article className="gallery-block">
                    <h2 style={{ marginBottom: '16px' }}>{t.formationTitle}</h2>
                    <ul className="detail-list">
                        {t.formationItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>

                <article className="gallery-block">
                    <h2 style={{ marginBottom: '16px' }}>{t.communityTitle}</h2>
                    <ul className="detail-list">
                        {t.communityItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="about-extra-grid">
                <article className="gallery-block">
                    <h2 style={{ marginBottom: '16px' }}>{t.professionalTitle}</h2>
                    <ul className="detail-list">
                        {t.professionalItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>

                <article className="gallery-block">
                    <h2 style={{ marginBottom: '16px' }}>{t.educationTitle}</h2>
                    <ul className="detail-list">
                        {t.educationItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>
            </section>
        </section>
    )
}