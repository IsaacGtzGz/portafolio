import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { WorkPage } from './pages/WorkPage'

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio_lang') || 'es')

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <BrowserRouter>
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/about" element={<AboutPage lang={lang} />} />
          <Route path="/work" element={<WorkPage lang={lang} />} />
          <Route path="/work/:projectId" element={<ProjectDetailPage lang={lang} />} />
          <Route path="/contact" element={<ContactPage lang={lang} />} />
          <Route path="/en" element={<HomePage lang={lang} />} />
          <Route path="/en/about" element={<AboutPage lang={lang} />} />
          <Route path="/en/work" element={<WorkPage lang={lang} />} />
          <Route path="/en/work/:projectId" element={<ProjectDetailPage lang={lang} />} />
          <Route path="/en/contact" element={<ContactPage lang={lang} />} />
          <Route path="*" element={<NotFoundPage lang={lang} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
