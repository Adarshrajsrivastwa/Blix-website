import { useEffect, useLayoutEffect, useRef } from 'react'
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
import BlogPage from './pages/BlogPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'

gsap.registerPlugin(ScrollTrigger)

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

function PageMotion() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const targets = gsap.utils.toArray('.reveal,.reveal-left,.reveal-right,.reveal-zoom,.reveal-flip,.reveal-blur,.reveal-slide')
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) {
        gsap.set([...targets, ...gsap.utils.toArray('.hero-copy > *, .hero-visual-wrap')], { autoAlpha: 1, clearProps: 'transform' })
        return
      }
      targets.forEach((element, index) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 22, rotationX: 4, rotationY: -1, scale: 0.985, transformPerspective: 900 }, {
          autoAlpha: 1,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.68,
          delay: Math.min((index % 5) * 0.055, 0.22),
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        })
      })

      const depthTargets = gsap.utils.toArray('.tile,.vm-card,.st,.row,.q,.blog-card,.portfolio-card,.logo-card,.trend,.why-card,.learn,.faq-item,.fees,.cinfo,.card-info,.stat,.director-card,.hero-photo-frame,.acad-hero-visual,.fees-art,.about-grid img,.story-grid img,.collage,.sd-art')
      depthTargets.forEach((element, index) => {
        const direction = index % 2 === 0 ? 1 : -1
        gsap.fromTo(element, {
          '--scroll-rx': '5deg',
          '--scroll-ry': `${direction * 3}deg`,
          '--scroll-lift': '14px',
        }, {
          '--scroll-rx': '-5deg',
          '--scroll-ry': `${direction * -3}deg`,
          '--scroll-lift': '-14px',
          ease: 'none',
          scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: 0.7 },
        })
      })
      gsap.fromTo('.hero-copy > *', { autoAlpha: 0, y: 22, rotationX: 4, rotationY: -1, scale: 0.985, transformPerspective: 900 }, {
        autoAlpha: 1, y: 0, rotationX: 0, rotationY: 0, scale: 1, duration: 0.7, stagger: 0.09, ease: 'power3.out', clearProps: 'transform',
      })
      gsap.fromTo('.hero-visual-wrap', { autoAlpha: 0, y: 20, rotationY: -4, rotationX: 2, scale: 0.97, transformPerspective: 1000 }, {
        autoAlpha: 1, y: 0, rotationY: 0, rotationX: 0, scale: 1, duration: 0.9, delay: 0.18, ease: 'power3.out', clearProps: 'transform',
      })
    })
    return () => context.revert()
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <PageMotion />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
