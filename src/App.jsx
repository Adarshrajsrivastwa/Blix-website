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

function CursorSpotlight() {
  const lightRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined
    const light = lightRef.current
    if (!light) return undefined

    let mouseX = -200
    let mouseY = -200
    let currentX = -200
    let currentY = -200
    let raf

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.12
      currentY += (mouseY - currentY) * 0.12
      light.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={lightRef} className="cursor-spotlight" aria-hidden="true" />
}

function Interactive3DTilt() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    if (window.matchMedia('(pointer: coarse)').matches) return undefined

    const cards = document.querySelectorAll(
      '.tile, .vm-card, .st, .row, .q, .blog-card, .portfolio-card, .logo-card, .trend, .why-card, .learn, .faq-item, .fees, .cinfo, .card-info, .stat, .director-card, .hero-photo-frame, .featured-logo, [data-tilt-3d="true"]'
    )

    const cleanups = []

    cards.forEach((card) => {
      const onMouseMove = (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -9
        const rotateY = ((x - centerX) / centerX) * 9

        card.style.setProperty('--tilt-rx', `${rotateX.toFixed(2)}deg`)
        card.style.setProperty('--tilt-ry', `${rotateY.toFixed(2)}deg`)
        card.style.setProperty('--mouse-x', `${((x / rect.width) * 100).toFixed(1)}%`)
        card.style.setProperty('--mouse-y', `${((y / rect.height) * 100).toFixed(1)}%`)
      }

      const onMouseLeave = () => {
        card.style.setProperty('--tilt-rx', '0deg')
        card.style.setProperty('--tilt-ry', '0deg')
      }

      card.addEventListener('mousemove', onMouseMove, { passive: true })
      card.addEventListener('mouseleave', onMouseLeave, { passive: true })

      cleanups.push(() => {
        card.removeEventListener('mousemove', onMouseMove)
        card.removeEventListener('mouseleave', onMouseLeave)
      })
    })

    return () => {
      cleanups.forEach((fn) => fn())
    }
  }, [pathname])

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
        gsap.fromTo(element, { autoAlpha: 0, y: 26, rotationX: 5, rotationY: -1, scale: 0.98, transformPerspective: 900 }, {
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

      const depthTargets = gsap.utils.toArray('.tile,.vm-card,.st,.row,.q,.blog-card,.portfolio-card,.logo-card,.trend,.why-card,.learn,.faq-item,.fees,.cinfo,.card-info,.stat,.director-card,.hero-photo-frame,.acad-hero-visual,.fees-art,.about-grid img,.story-grid img,.collage,.sd-art')
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
      gsap.fromTo('.hero-copy > *', { autoAlpha: 0, y: 24, rotationX: 4, rotationY: -1, scale: 0.985, transformPerspective: 900 }, {
        autoAlpha: 1, y: 0, rotationX: 0, rotationY: 0, scale: 1, duration: 0.75, stagger: 0.09, ease: 'power3.out', clearProps: 'transform',
      })
      gsap.fromTo('.hero-visual-wrap', { autoAlpha: 0, y: 24, rotationY: -4, rotationX: 2, scale: 0.96, transformPerspective: 1000 }, {
        autoAlpha: 1, y: 0, rotationY: 0, rotationX: 0, scale: 1, duration: 0.95, delay: 0.18, ease: 'power3.out', clearProps: 'transform',
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
      <CursorSpotlight />
      <Interactive3DTilt />
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
