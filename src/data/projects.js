export const projects = [
    {
        id: 'allianz-pwa',
        title: 'Allianz Simulador de Comisiones PWA',
        role: {
            es: 'Desarrollador Full Stack (Estadía de Ingeniería)',
            en: 'Full Stack Developer (Engineering Internship)',
        },
        summary: {
            es: 'Plataforma web progresiva para simulación y análisis de esquemas de comisiones. Proyecto de estadía profesional en QUARKSOFT.',
            en: 'Progressive Web App for simulation and analysis of commission schemes. Engineering internship project at QUARKSOFT.',
        },
        context: {
            es: 'Migración de lógica de negocio compleja desde Excel a una arquitectura web centralizada, implementando un motor de reglas de negocio, autenticación segura y módulo BI.',
            en: 'Migration of complex business logic from Excel to a centralized web architecture, implementing a business rules engine, secure authentication, and a BI module.',
        },
        architecture: {
            es: ['PWA', 'Motor de reglas de negocio', 'CRUD dinámico', 'Autenticación segura', 'Módulo BI'],
            en: ['PWA', 'Business rules engine', 'Dynamic CRUD', 'Secure authentication', 'BI module'],
        },
        challenges: {
            es: [
                'Traducir reglas de comisiones complejas a un backend parametrizable.',
                'Construir visualización de KPIs para toma de decisiones directivas.',
                'Generar reportes PDF automatizados desde cliente manteniendo consistencia de datos.',
            ],
            en: [
                'Translate complex commission rules into a parametrizable backend.',
                'Build KPI dashboards for executive decision-making.',
                'Generate automated client-side PDF reports while preserving data consistency.',
            ],
        },
        stack: ['React', 'PWA', 'Node.js', 'SQL Server', 'Business Intelligence', 'PDF Reporting'],
        links: {
            repo: '',
            demo: '',
        },
        isEnterprisePrivate: true,
        gallery: {
            es: [
                'Simulador de comisiones con reglas configurables por negocio.',
                'Tableros de indicadores para análisis operativo y directivo.',
            ],
            en: [
                'Commission simulator with configurable business rules.',
                'KPI dashboards for operational and executive analysis.',
            ],
        },
    },
    {
        id: 'kairos',
        title: 'Kairos',
        role: {
            es: 'Desarrollo Mobile y Backend',
            en: 'Mobile and Backend Development',
        },
        summary: {
            es: 'App Android nativa de bienestar digital (Kotlin/Jetpack Compose) con validación por geolocalización, podómetro y backend co-desarrollado en ASP.NET Core 8.',
            en: 'Native Android digital well-being app (Kotlin/Jetpack Compose) featuring geolocation validation, pedometer, and a co-developed ASP.NET Core 8 backend.',
        },
        context: {
            es: 'Proyecto orientado a validación de visitas por geolocalización, sensores móviles y sincronización de datos entre cliente y servidor.',
            en: 'Project focused on geolocation visit validation, mobile sensors, and data synchronization between client and server.',
        },
        architecture: {
            es: ['MVVM', 'Jetpack Compose', 'API REST', 'Backend ASP.NET Core 8'],
            en: ['MVVM', 'Jetpack Compose', 'REST API', 'ASP.NET Core 8 backend'],
        },
        challenges: {
            es: [
                'Integrar Google Maps SDK para validación de visitas por geolocalización.',
                'Consumir APIs con Retrofit y mantener sincronización confiable.',
                'Asegurar lógica de negocio entre app Android y backend SQL Server en Azure.',
            ],
            en: [
                'Integrate Google Maps SDK for geolocation-based visit validation.',
                'Consume APIs with Retrofit while keeping reliable synchronization.',
                'Ensure business logic consistency between Android app and SQL Server backend on Azure.',
            ],
        },
        stack: ['Kotlin', 'Jetpack Compose', 'Google Maps SDK', 'Retrofit', 'ASP.NET Core 8', 'SQL Server', 'Azure'],
        links: {
            repo: 'https://github.com/IsaacGtzGz/KairosAndroidStudio',
            demo: '',
        },
        gallery: {
            es: [
                'Diseño de interfaz mobile con enfoque en claridad visual.',
                'Flujo de tareas y estados implementado con componentes reutilizables.',
            ],
            en: [
                'Mobile interface design focused on visual clarity.',
                'Task and state flow implemented with reusable components.',
            ],
        },
    },
    {
        id: 'sizes-and-colors-medical-scheduler',
        title: 'Sizes and Colors Agenda Médica',
        role: {
            es: 'Desarrollador de Software (Estadía TSU)',
            en: 'Software Developer (Associate Degree Internship)',
        },
        summary: {
            es: 'Sistema de agenda médica desarrollado en PowerBuilder. Proyecto empresarial para la estadía profesional de TSU.',
            en: 'Medical scheduling system developed in PowerBuilder. Enterprise project for the Associate Degree (TSU) internship.',
        },
        context: {
            es: 'Proyecto aplicado en Sizes and Colors de México S.A. de C.V. para la gestión de citas médicas y control operativo interno.',
            en: 'Applied project at Sizes and Colors de Mexico S.A. de C.V. for medical appointment management and internal operational control.',
        },
        architecture: {
            es: ['Aplicación de escritorio', 'Arquitectura modular', 'Persistencia relacional'],
            en: ['Desktop application', 'Modular architecture', 'Relational persistence'],
        },
        challenges: {
            es: [
                'Estructurar flujos de agenda médica para operación diaria.',
                'Mantener consistencia en captura y consulta de información clínica.',
                'Documentar entregables técnicos para la validación del proyecto.',
            ],
            en: [
                'Structure medical scheduling flows for daily operations.',
                'Maintain consistency in clinical data capture and retrieval.',
                'Document technical deliverables for project validation.',
            ],
        },
        stack: ['PowerBuilder', 'SQL', 'Desktop Application'],
        links: {
            repo: '',
            demo: '',
        },
        isEnterprisePrivate: true,
        gallery: {
            es: [
                'Agenda médica con operaciones de registro y seguimiento.',
                'Estructura de datos orientada a control operativo interno.',
            ],
            en: [
                'Medical scheduler with registration and tracking operations.',
                'Data structure focused on internal operational control.',
            ],
        },
    },
    {
        id: 'sicefa',
        title: 'Sicefa Sucursales',
        role: {
            es: 'Desarrollador Full Stack',
            en: 'Full Stack Developer',
        },
        summary: {
            es: 'Desarrollo del módulo de sucursales de SICEFA con captura, edición, consulta y geolocalización integrada.',
            en: 'Development of the SICEFA branch module with capture, editing, querying, and integrated geolocation.',
        },
        context: {
            es: 'Desarrollo del módulo de sucursales de SICEFA, enfocado en la captura, edición y consulta de registros, con integración de mapas para geolocalización de sucursales y soporte documental para la base de datos del proyecto.',
            en: 'Development of the SICEFA branch module, focused on capturing, editing, and querying records, with map integration for branch geolocation and documentation support for the project database.',
        },
        architecture: {
            es: [
                'Aplicación web modular.',
                'Frontend basado en HTML, CSS y JavaScript.',
                'Integración de mapas y manejo de datos geográficos.',
                'Persistencia y documentación mediante archivos SQL y modelo ER.',
            ],
            en: [
                'Modular web application.',
                'Frontend based on HTML, CSS, and JavaScript.',
                'Maps integration and geographic data handling.',
                'Persistence and documentation through SQL files and ER modeling.',
            ],
        },
        challenges: {
            es: [
                'Integrar Here Maps para geolocalización interactiva de sucursales.',
                'Diseñar flujos CRUD estables para administración diaria.',
                'Mantener consistencia de datos para escalabilidad del módulo.',
            ],
            en: [
                'Integrate Here Maps for interactive branch geolocation.',
                'Design stable CRUD flows for daily operations.',
                'Maintain data consistency to support module scalability.',
            ],
        },
        stack: ['HTML', 'CSS', 'JavaScript', 'SQL', 'MySQL', 'Here Maps API', 'Modelado de base de datos'],
        links: {
            repo: 'https://github.com/IsaacGtzGz/sicefa-sucursales',
            demo: '',
        },
        gallery: {
            es: [
                'CRUD de sucursales.',
                'Visualización de ubicaciones con integración de Here Maps API.',
                'Captura de domicilio, colonia, ciudad, CP, teléfono y coordenadas.',
                'Navegación modular entre vistas del sistema.',
            ],
            en: [
                'Branch CRUD operations.',
                'Location visualization with Here Maps API integration.',
                'Capture of address, neighborhood, city, ZIP code, phone number, and coordinates.',
                'Modular navigation between system views.',
            ],
        },
    },
    {
        id: 'dongalletita',
        title: 'Don Galletita',
        role: {
            es: 'Desarrollador Backend',
            en: 'Backend Developer',
        },
        summary: {
            es: 'Proyecto académico orientado a lógica de negocio y persistencia de datos.',
            en: 'Academic project focused on business logic and data persistence.',
        },
        context: {
            es: 'Se planteó como ejercicio de modelado y automatización de procesos de un negocio pequeño.',
            en: 'Designed as a modeling and process automation exercise for a small business.',
        },
        architecture: {
            es: ['Capas', 'Servicios de negocio', 'Persistencia relacional'],
            en: ['Layered', 'Business services', 'Relational persistence'],
        },
        challenges: {
            es: [
                'Traducir reglas de negocio a servicios reutilizables.',
                'Modelar entidades y relaciones de forma clara.',
                'Mantener código organizado para futuras extensiones.',
            ],
            en: [
                'Translate business rules into reusable services.',
                'Model entities and relationships clearly.',
                'Keep code organized for future extensions.',
            ],
        },
        stack: ['Python', 'SQL', 'Git'],
        links: {
            repo: 'https://github.com/IsaacGtzGz/don_galletita',
            demo: '',
        },
        gallery: {
            es: [
                'Modelado de entidades y flujo operacional principal.',
                'Persistencia de información y consultas de negocio.',
            ],
            en: [
                'Entity modeling and main operational flow.',
                'Information persistence and business queries.',
            ],
        },
    },
    {
        id: 'ecosense',
        title: 'EcoSense',
        role: {
            es: 'Desarrollador Backend / Integración',
            en: 'Backend / Integration Developer',
        },
        summary: {
            es: 'Plataforma para monitoreo y visualización de datos ambientales.',
            en: 'Platform for environmental data monitoring and visualization.',
        },
        context: {
            es: 'Se construyó para centralizar lectura de datos y exponer información útil para seguimiento.',
            en: 'Built to centralize data capture and expose useful tracking information.',
        },
        architecture: {
            es: ['API REST', 'Arquitectura en capas', 'Integración DB'],
            en: ['REST API', 'Layered architecture', 'DB integration'],
        },
        challenges: {
            es: [
                'Diseñar endpoints claros para consumo frontend.',
                'Optimizar consultas y estructura de datos para reportes.',
                'Mantener trazabilidad en flujo de información ambiental.',
            ],
            en: [
                'Design clear endpoints for frontend consumption.',
                'Optimize queries and data structures for reporting.',
                'Keep traceability across environmental data flows.',
            ],
        },
        stack: ['ASP.NET Core', 'C#', 'MySQL'],
        links: {
            repo: 'https://github.com/IsaacGtzGz/EcoSenseAPI',
            demo: '',
        },
        gallery: {
            es: [
                'Diseño de API para operaciones de monitoreo.',
                'Integración con base de datos para almacenamiento histórico.',
            ],
            en: [
                'API design for monitoring operations.',
                'Database integration for historical storage.',
            ],
        },
    },
    {
        id: 'theglobaltops',
        title: 'The Global Tops',
        role: {
            es: 'Desarrollador Full Stack',
            en: 'Full Stack Developer',
        },
        summary: {
            es: 'Aplicación web para gestión de videojuegos, catálogo y administración.',
            en: 'Web app for video game management, catalog administration and operations.',
        },
        context: {
            es: 'Se desarrolló para administrar productos y categorías en una experiencia visual orientada a gaming.',
            en: 'Built to manage products and categories in a visual gaming-oriented experience.',
        },
        architecture: {
            es: ['SPA + API REST', 'Angular + ASP.NET Core', 'EF Core'],
            en: ['SPA + REST API', 'Angular + ASP.NET Core', 'EF Core'],
        },
        challenges: {
            es: [
                'Conectar frontend Angular con API robusta en ASP.NET Core.',
                'Administrar catálogos con operaciones y filtros eficientes.',
                'Conservar coherencia de datos entre vistas y backend.',
            ],
            en: [
                'Connect Angular frontend with a robust ASP.NET Core API.',
                'Manage catalogs with efficient operations and filters.',
                'Maintain data consistency between views and backend.',
            ],
        },
        stack: ['Angular', 'TypeScript', 'ASP.NET Core', 'SQL Server'],
        links: {
            repo: 'https://github.com/IsaacGtzGz/videojuegos-app',
            backend: 'https://github.com/IsaacGtzGz/videojuegos-app-back',
            demo: '',
        },
        gallery: {
            es: [
                'Panel de gestión de productos y categorías.',
                'Integración backend con EF Core y SQL Server.',
            ],
            en: [
                'Products and categories management panel.',
                'Backend integration with EF Core and SQL Server.',
            ],
        },
    },
]

export const getProjectById = (id) =>
    projects.find((project) => project.id === id)