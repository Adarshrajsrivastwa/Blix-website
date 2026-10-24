import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import AppLink from './AppLink.jsx'

const serviceLinks = [
  { to: '/services/digital-marketing', label: '360 Digital Marketing' },
  { to: '/services/seo', label: 'SEO Services' },
  { to: '/services/social-media', label: 'Social Media Services' },
  { to: '/services/real-estate-marketing', label: 'Real Estate Marketing' },
  { to: '/services/orm', label: 'Online Reputation Management' },
  { to: '/services/personal-branding', label: 'Personal Branding' },
  { to: '/services/web-development', label: 'Web Development' },
  { to: '/services/app-development', label: 'Mobile App Development' },
  { to: '/services/software-development', label: 'Software Development' },
]

const links = [
  { to: '/', label: 'Home', key: 'home' },
  { to: '/about', label: 'About Us', key: 'about' },
  { to: '/services', label: 'Services', key: 'services', dropdown: true },
  { to: '/portfolio', label: 'Portfolio', key: 'portfolio' },
  { to: '/case-study', label: 'Case Study', key: 'case-study' },
  { to: '/blog', label: 'Blog', key: 'blog' },
  { to: '/#contact', label: 'Contact Us', key: 'contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [ddOpen, setDdOpen] = useState(false)
  const { pathname, hash } = useLocation()

  const isActive = (l) => {
    if (l.key === 'home') return pathname === '/' && (!hash || hash === '')
    if (l.key === 'contact') return hash === '#contact'
    if (l.key === 'portfolio') return pathname === '/portfolio' && (!hash || hash === '')
    if (l.key === 'case-study') return pathname.startsWith('/case-study') || pathname.startsWith('/case-studies') || (pathname === '/portfolio' && hash === '#selected-projects')
    if (l.key === 'services') return pathname.startsWith('/services')
    return pathname === l.to
  }

  return (
    <header className="hdr">
      <div className="bar2">
        <AppLink className="logo2" to="/" aria-label="Blix Technologies home">
          <img className="brand-logo" src="/blix-gradient-logo.png" alt="Blix Technologies" />
        </AppLink>

        <nav id="nav" className={open ? 'open' : ''} aria-label="Main">
          <ul onClick={() => { setOpen(false); setDdOpen(false) }}>
            {links.map((l) => (
              <li key={l.label} className={l.dropdown ? 'dd-wrap' : ''} onClick={(e) => l.dropdown && e.stopPropagation()}>
                {l.dropdown ? (
                  <>
                    <Link
                      to={l.to}
                      className={`nav-lnk ${isActive(l) ? 'on' : ''}`}
                      onClick={(e) => e.preventDefault()}
                      onMouseEnter={() => setDdOpen(true)}
                      aria-expanded={ddOpen}
                      aria-haspopup="true"
                    >
                      {l.label}
                      <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginLeft: '4px', transition: 'transform .2s', transform: ddOpen ? 'rotate(180deg)' : 'none' }}><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                    <div
                      className={`dd ${ddOpen ? 'open' : ''}`}
                      onMouseEnter={() => setDdOpen(true)}
                      onMouseLeave={() => setDdOpen(false)}
                    >
                      {serviceLinks.map((s) => (
                        <Link key={s.to} to={s.to} onClick={() => setDdOpen(false)} className="dd-lnk">
                          <span className="dd-dot" />
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={l.to} className={`nav-lnk ${isActive(l) ? 'on' : ''}${l.accent ? ' nav-accent' : ''}`}>
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/#contact" className="btn2 btn-q">Get A Quote</Link>
        <button className="mb2" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 22 22"><g stroke="#2E3191" strokeWidth="2.2" strokeLinecap="round"><path d="M3 6h16M3 11h16M3 16h16" /></g></svg>
        </button>
      </div>
    </header>
  )
}
