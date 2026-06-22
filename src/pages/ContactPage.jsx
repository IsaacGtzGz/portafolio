const copy = {
    es: {
        title: 'Hablemos',
        lead: 'Disponible para vacantes de desarrollo Full Stack y móvil.',
        email: 'Correo',
        phone: 'WhatsApp',
        locationLabel: 'Ubicación',
        locationValue: 'León, Gto., México',
        cv: 'Descargar CV',
        cardTitle: 'Disponibilidad actual',
        cardText: 'Abierto a vacantes Jr., colaboraciones remotas y proyectos con retos de arquitectura, integración y lógica de negocio.',
        directTitle: 'Contacto directo',
        directItems: [
            'Correo: isaacgtzgz@gmail.com',
            'WhatsApp: +52 477 537 0154',
            'Respuesta en menos de 24 horas hábiles.'
        ],
    },
    en: {
        title: "Let's connect",
        lead: 'Available for Full Stack and Mobile development roles.',
        email: 'Email',
        phone: 'WhatsApp',
        locationLabel: 'Location',
        locationValue: 'Leon, Gto., Mexico',
        cv: 'Download resume',
        cardTitle: 'Current availability',
        cardText: 'Open to Jr. roles, remote collaborations, and projects with architectural, integration, and business logic challenges.',
        directTitle: 'Direct contact',
        directItems: [
            'Email: isaacgtzgz@gmail.com',
            'WhatsApp: +52 477 537 0154',
            'Replies in less than 24 business hours.'
        ],
    },
}

export function ContactPage({ lang }) {
    const t = copy[lang]

    const socialLinks = [
        {
            label: t.email,
            href: 'mailto:isaacgtzgz@gmail.com',
        },
        {
            label: t.phone,
            href: 'https://wa.me/524775370154',
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/isaac-guti%C3%A9rrez-g%C3%B3mez-851535254/?locale=es',
        },
        {
            label: 'GitHub',
            href: 'https://github.com/IsaacGtzGz',
        },
    ]

    return (
        <section className="page contact-page">
            <header className="page-head">
                <h1>{t.title}</h1>
                <p className="lead">{t.lead}</p>
            </header>

            <div className="contact-panel-grid">
                <article className="contact-panel">
                    <h2>{t.cardTitle}</h2>
                    <p style={{ marginBottom: '14px' }}>{t.cardText}</p>
                    <p style={{ margin: 0 }}><strong>{t.locationLabel}:</strong> {t.locationValue}</p>
                </article>

                <article className="contact-panel">
                    <h2>{t.directTitle}</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {t.directItems.map((item, index) => (
                            <p key={index} style={{ margin: 0 }}>{item}</p>
                        ))}
                    </div>
                </article>
            </div>

            <div className="contact-actions">
                {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="button ghost">
                        {link.label}
                    </a>
                ))}

                <a className="button primary" href="/cv-isaac-gutierrez-gomez.pdf" target="_blank" rel="noreferrer">
                    {t.cv}
                </a>
            </div>
        </section>
    )
}