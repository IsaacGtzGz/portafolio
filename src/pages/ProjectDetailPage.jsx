import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectById, projects } from '../data/projects'

const copy = {
    es: {
        role: 'Rol',
        architecture: 'Arquitectura',
        challenges: 'Desafíos técnicos',
        stack: 'Tecnologías utilizadas',
        features: 'Características principales:',
        repo: 'Ver repositorio',
        backend: 'Ver backend',
        prev: 'Proyecto anterior',
        next: 'Proyecto siguiente',
        privateRepo: 'Repositorio privado · Proyecto empresarial',
    },
    en: {
        role: 'Role',
        architecture: 'Architecture',
        challenges: 'Technical challenges',
        stack: 'Technologies used',
        features: 'Key features:',
        repo: 'View repository',
        backend: 'View backend',
        prev: 'Previous project',
        next: 'Next project',
        privateRepo: 'Private repository · Enterprise project',
    },
}

export function ProjectDetailPage({ lang }) {
    const { projectId } = useParams()
    const project = getProjectById(projectId)
    const t = copy[lang]
    const pathPrefix = lang === 'en' ? '/en' : ''

    if (!project) {
        return <Navigate to={`${pathPrefix}/work`} replace />
    }

    const currentIndex = projects.findIndex((item) => item.id === project.id)
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

    return (
        <section className="page detail-page">
            <header className="page-head">
                <h1>{project.title}</h1>
            </header>

            <div className="about-hero" style={{ marginBottom: '40px' }}>
                <section style={{ marginTop: 0 }}>
                    <p className="project-role" style={{ color: 'var(--text)', fontWeight: '600', marginBottom: '12px' }}>
                        {t.role}: {project.role[lang]}
                    </p>
                    <p className="lead" style={{ margin: 0, color: 'var(--text)', opacity: 0.9, lineHeight: '1.6' }}>
                        {project.context[lang]}
                    </p>
                </section>

                {project.gallery && project.gallery[lang].length > 0 ? (
                    <aside>
                        <h2>{t.features}</h2>
                        <ul style={{ marginTop: '12px' }}>
                            {project.gallery[lang].map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </aside>
                ) : null}
            </div>

            <section className="detail-grid">
                <article>
                    <h2>{t.architecture}</h2>
                    <ul>
                        {project.architecture[lang].map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>

                <article>
                    <h2>{t.stack}</h2>
                    <ul>
                        {project.stack.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>

                <article>
                    <h2>{t.challenges}</h2>
                    <ul>
                        {project.challenges[lang].map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>
            </section>

            {/* CONTROLES INFERIORES UNIFICADOS EN UNA SOLA FILA SIMÉTRICA */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%', marginTop: '60px', flexWrap: 'wrap' }}>

                {/* Columna 1: Anterior */}
                <div style={{ flex: '1 1 250px' }}>
                    {prevProject ? (
                        <Link to={`${pathPrefix}/work/${prevProject.id}`} className="button ghost" style={{ display: 'block', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
                            {t.prev}: {prevProject.title}
                        </Link>
                    ) : <div />}
                </div>

                {/* Columna 2: Acción Central */}
                <div style={{ flex: '1 1 250px' }}>
                    {project.links.repo ? (
                        <a className="button primary" href={project.links.repo} target="_blank" rel="noreferrer" style={{ display: 'block', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
                            {t.repo}
                        </a>
                    ) : (project.isEnterprisePrivate ? (
                        <span className="button ghost" style={{ display: 'block', textAlign: 'center', width: '100%', boxSizing: 'border-box', opacity: 0.6, cursor: 'not-allowed', pointerEvents: 'none' }}>
                            {t.privateRepo}
                        </span>
                    ) : null)}

                    {project.links.backend ? (
                        <a className="button ghost" href={project.links.backend} target="_blank" rel="noreferrer" style={{ display: 'block', textAlign: 'center', width: '100%', boxSizing: 'border-box', marginTop: '8px' }}>
                            {t.backend}
                        </a>
                    ) : null}
                </div>

                {/* Columna 3: Siguiente */}
                <div style={{ flex: '1 1 250px' }}>
                    {nextProject ? (
                        <Link to={`${pathPrefix}/work/${nextProject.id}`} className="button ghost" style={{ display: 'block', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
                            {t.next}: {nextProject.title}
                        </Link>
                    ) : <div />}
                </div>

            </div>
        </section>
    )
}