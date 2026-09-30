import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import AcademyPage from './pages/AcademyPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(pathname)
  useEffect(() => {
    const samePage = prevPath.current === pathname
    prevPath.current = pathname
    const behavior = samePage ? 'smooth' : 'instant'
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior })
      }, 50)
      return
    }
    window.scrollTo({ top: 0, behavior })
  }, [pathname, hash])
  return null
}

function ScrollReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const revealSelectors = ['.reveal','.reveal-left','.reveal-right','.reveal-zoom','.reveal-flip','.reveal-blur','.reveal-slide']
    const all = document.querySelectorAll(revealSelectors.join(','))
    all.forEach(el => { if (!el.classList.contains('keep-hidden')) el.classList.remove('is-reveal') })
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-reveal')
          if (!e.target.dataset.once) io.unobserve(e.target)
        } else if (e.target.dataset.once === 'false') {
          e.target.classList.remove('is-reveal')
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })
    all.forEach((el, idx) => {
      const parent = el.closest('.reveal-stagger')
      if (parent && !el.style.getPropertyValue('--i')) {
        const sibs = [...parent.children].filter(c => revealSelectors.some(s => c.matches(s)))
        const i = sibs.indexOf(el)
        if (i >= 0) el.style.setProperty('--i', i)
      }
      io.observe(el)
    })
    const vi = new IntersectionObserver(entries => {
      entries.forEach(e => {
        const el = e.target
        if (e.isIntersecting) {
          const rect = el.getBoundingClientRect()
          const vh = window.innerHeight
          const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)))
          const speed = parseFloat(el.dataset.viSpeed || '20')
          const mode = el.dataset.vi || 'up'
          if (mode === 'up') el.style.transform = `translateY(${(1 - progress) * speed}px)`
          else if (mode === 'down') el.style.transform = `translateY(${(progress - 1) * speed}px)`
          else if (mode === 'zoom') el.style.transform = `scale(${0.92 + progress * 0.08})`
          else if (mode === 'rotate') el.style.transform = `rotate(${(progress - 0.5) * 6}deg)`
          else if (mode === 'blur') el.style.filter = `blur(${(1 - progress) * 8}px)`
          el.style.opacity = 0.4 + progress * 0.6
        }
      })
    }, { threshold: Array.from({ length: 21 }, (_, i) => i / 20), rootMargin: '-5% 0px -5% 0px' })
    document.querySelectorAll('[data-vi]').forEach(el => vi.observe(el))
    return () => { io.disconnect(); vi.disconnect() }
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <ScrollReveal />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}
