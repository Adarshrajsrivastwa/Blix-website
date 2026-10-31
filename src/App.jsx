import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import AcademyPage from './pages/AcademyPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import DigitalMarketingPage from './pages/DigitalMarketingPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import CaseStudyPage from './pages/CaseStudyPage.jsx'
import FloatingContact from './components/FloatingContact.jsx'

gsap.registerPlugin(ScrollTrigger)

function ScrollManager() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(pathname)
  useEffect(() => {
    const samePage = prevPath.current === pathname
    prevPath.current = pathname
    const behavior = samePage ? 'smooth' : 'instant'
    if (hash) {
      let attempts = 0
      let frame
      const scrollToHash = () => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior, block: 'start' })
          return
        }
        if (attempts++ < 20) frame = requestAnimationFrame(scrollToHash)
      }
      frame = requestAnimationFrame(scrollToHash)
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo({ top: 0, behavior })
  }, [pathname, hash])
  return null
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total <= 0) return
      const current = window.scrollY
      setProgress(Math.min(100, Math.max(0, (current / total) * 100)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  )
}

function PageMotion() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const revealSelector = '.reveal,.reveal-left,.reveal-right,.reveal-zoom,.reveal-flip,.reveal-blur,.reveal-slide'
      const allTargets = gsap.utils.toArray(revealSelector)
      const isHome = pathname === '/'
      const staggerGroups = isHome ? gsap.utils.toArray('.reveal-stagger') : []
      const staggeredTargets = new Set(staggerGroups.flatMap((group) => Array.from(group.querySelectorAll(revealSelector))))
      const targets = isHome ? allTargets.filter((element) => !staggeredTargets.has(element)) : allTargets
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) {
        gsap.set([...allTargets, ...gsap.utils.toArray('.hero-copy > *, .hero-visual-wrap')], { autoAlpha: 1, clearProps: 'transform' })
        return
      }
      targets.forEach((element, index) => {
        const sideDirection = element.classList.contains('reveal-left') ? -1 : element.classList.contains('reveal-right') ? 1 : 0
        const startingPose = isHome
          ? { autoAlpha: 0, x: sideDirection * 42, y: sideDirection ? 0 : 16, scale: 0.995 }
          : { autoAlpha: 0, y: 26, rotationX: 5, rotationY: -1, scale: 0.98, transformPerspective: 900 }
        gsap.fromTo(element, startingPose, {
          autoAlpha: 1,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.72,
          delay: Math.min((index % 5) * 0.055, 0.22),
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        })
      })

      staggerGroups.forEach((group) => {
        const items = Array.from(group.querySelectorAll(revealSelector))
        if (!items.length) return
        const timeline = gsap.timeline({ scrollTrigger: { trigger: group, start: 'top 84%', once: true } })
        items.forEach((element, index) => {
          const sideDirection = element.classList.contains('reveal-left') ? -1 : element.classList.contains('reveal-right') ? 1 : 0
          timeline.fromTo(element, {
            autoAlpha: 0,
            x: sideDirection * 42,
            y: sideDirection ? 0 : 18,
            scale: 0.992,
          }, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.68,
            ease: 'power3.out',
            clearProps: 'transform',
          }, index * 0.1)
        })
      })

      const depthTargets = gsap.utils.toArray('.vm-card,.st,.row,.q,.portfolio-card,.logo-card,.trend,.why-card,.learn,.faq-item,.fees,.cinfo,.card-info,.stat,.director-card,.hero-photo-frame,.acad-hero-visual,.fees-art,.about-grid img,.story-grid img,.collage,.sd-art')
      depthTargets.forEach((element, index) => {
        const direction = index % 2 === 0 ? 1 : -1
        gsap.fromTo(element, {
          '--scroll-rx': '4deg',
          '--scroll-ry': `${direction * 2.5}deg`,
          '--scroll-lift': '10px',
        }, {
          '--scroll-rx': '-4deg',
          '--scroll-ry': `${direction * -2.5}deg`,
          '--scroll-lift': '-10px',
          ease: 'none',
          scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: 0.7 },
        })
      })
      gsap.fromTo('.hero-copy > *', { autoAlpha: 0, x: -48, scale: 0.99 }, {
        autoAlpha: 1, x: 0, scale: 1, duration: 0.8, stagger: 0.09, ease: 'power3.out', clearProps: 'transform',
      })
      gsap.fromTo('.hero-visual-wrap', { autoAlpha: 0, x: 48, scale: 0.99 }, {
        autoAlpha: 1, x: 0, scale: 1, duration: 0.9, delay: 0.16, ease: 'power3.out', clearProps: 'transform',
      })
    })
    return () => context.revert()
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <ScrollManager />
      <PageMotion />
      <Header />
      <FloatingContact />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
