import { useMemo, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

const copy = {
    es: {
        title: 'Proyectos destacados',
        introTitle: 'Índice de proyectos',
        introText1: 'Selección de proyectos donde apliqué arquitectura, integraciones y desarrollo de producto de extremo a extremo.',
        introText2: 'Cada proyecto incluye contexto, decisiones técnicas, tecnologías utilizadas y una vista detallada de implementación.',
        filterAll: 'Todas las tecnologías',
        filterLabel: 'Filtrar por tecnología',
        clearFilters: 'Limpiar filtros',
        results: 'resultados',
        sortLabel: 'Ordenar por',
        sortName: 'Nombre',
        sortStack: 'Complejidad técnica',
        empty: 'No hay proyectos con esos filtros. Prueba otra combinación.',
    },
    en: {
        title: 'Featured projects',
        introTitle: 'Project index',
        introText1: 'Selected projects where I applied architecture, integrations, and end-to-end product development.',
        introText2: 'Each project includes context, technical decisions, stack used, and a detailed implementation view.',
        filterAll: 'All technologies',
        filterLabel: 'Filter by technology',
        clearFilters: 'Clear filters',
        results: 'results',
        sortLabel: 'Sort by',
        sortName: 'Name',
        sortStack: 'Stack complexity',
        empty: 'No projects match these filters. Try another combination.',
    },
}

export function WorkPage({ lang }) {
    const t = copy[lang]
    const [stackFilter, setStackFilter] = useState('all')
    const [sortBy, setSortBy] = useState('stack')
    const githubUrl = 'https://github.com/IsaacGtzGz'

    const stackOptions = useMemo(
        () => ['all', ...Array.from(new Set(projects.flatMap((project) => project.stack)))],
        [],
    )

    const filteredProjects = useMemo(() => {
        const base = projects.filter((project) => {
            return stackFilter === 'all' || project.stack.includes(stackFilter)
        })

        return [...base].sort((a, b) => {
            if (sortBy === 'stack') {
                return b.stack.length - a.stack.length
            }
            return a.title.localeCompare(b.title)
        })
    }, [stackFilter, sortBy])

    return (
        <section className="page work-page">
            <header className="page-head">
                <h1>{t.title}</h1>
            </header>

            <div className="work-intro">
                <h2>{t.introTitle}</h2>
                <p style={{ marginBottom: '8px' }}>{t.introText1}</p>
                <p>{t.introText2}</p>
            </div>

            <div className="work-controls">
                <label>
                    <span>{t.filterLabel}</span>
                    <select value={stackFilter} onChange={(event) => setStackFilter(event.target.value)}>
                        <option value="all">{t.filterAll}</option>
                        {stackOptions
                            .filter((item) => item !== 'all')
                            .map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                    </select>
                </label>

                <label>
                    <span>{t.sortLabel}</span>
                    <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                        <option value="name">{t.sortName}</option>
                        <option value="stack">{t.sortStack}</option>
                    </select>
                </label>

                <div style={{ display: 'flex', alignItems: 'end' }}>
                    <a
                        className="button ghost"
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ width: '100%', textAlign: 'center' }}
                    >
                        GitHub
                    </a>
                </div>
            </div>

            <div className="active-filters">
                {stackFilter !== 'all' ? <span>{stackFilter}</span> : null}
            </div>

            <div className="work-results-row">
                <p>{filteredProjects.length} {t.results}</p>
                {stackFilter !== 'all' ? (
                    <button
                        type="button"
                        className="button ghost"
                        onClick={() => setStackFilter('all')}
                    >
                        {t.clearFilters}
                    </button>
                ) : null}
            </div>

            {/* Inyectamos estilo en línea para forzar 1 sola columna sin importar el CSS externo */}
            <div className="project-grid" style={{ gridTemplateColumns: '1fr' }}>
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} lang={lang} />
                ))}
            </div>

            {filteredProjects.length === 0 ? (
                <p className="empty-state">{t.empty}</p>
            ) : null}
        </section>
    )
}