import { Link } from 'react-router-dom'

export function ProjectCard({ project, lang }) {
    const pathPrefix = lang === 'en' ? '/en' : ''
    const detailsLabel = lang === 'es' ? 'Ver proyecto' : 'View project'

    return (
        <article className="project-card" style={{ display: 'block', overflow: 'hidden' }}>
            <Link
                to={`${pathPrefix}/work/${project.id}`}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '24px',
                    padding: '32px 24px',
                    textDecoration: 'none',
                    color: 'inherit'
                }}
            >
                <div style={{ flex: '1 1 500px' }}>
                    <p className="project-role-chip" style={{ marginBottom: '12px', display: 'inline-block' }}>
                        {project.role[lang]}
                    </p>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
                        {project.title}
                    </h3>
                    <p style={{ margin: 0, opacity: 0.8, lineHeight: '1.6' }}>
                        {project.summary[lang]}
                    </p>
                </div>

                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
                    <ul className="tag-list" style={{ margin: 0 }}>
                        {project.stack.slice(0, 4).map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>

                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: '600', marginTop: '8px' }}>
                        {detailsLabel}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </span>
                </div>
            </Link>
        </article>
    )
}