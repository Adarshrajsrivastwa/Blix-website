import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import AppLink from './AppLink.jsx'

const serviceLinks = [
  { to: '/services/digital-marketing', label: '360 Digital Marketing' },
  { to: '/services/seo', label: 'SEO Services' },
  { to: '/services/social-media', label: 'Social Media Services' },
  { to: '/services/personal-branding', label: 'Personal Branding' },
  { to: '/services/web-development', label: 'Web Development' },
  { to: '/services/orm', label: 'Online Reputation Management' },
  { to: '/services/app-development', label: 'App Development' },
  { to: '/services/software-development', label: 'Software Development' },
]

const links = [
  { to: '/', label: 'Home', key: 'home' },
  { to: '/about', label: 'About Us', key: 'about' },
  { to: '/services', label: 'Services', key: 'services', dropdown: true },
  { to: '/blog', label: 'Blog', key: 'blog' },
  { to: '/academy', label: 'Academy', key: 'academy' },
  { to: '/contact', label: 'Contact Us', key: 'contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [ddOpen, setDdOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (l) => {
    if (l.key === 'home') return pathname === '/'
    if (l.key === 'services') return pathname.startsWith('/services')
    return pathname === l.to
  }

  return (
    <header className="hdr">
      <div className="bar2">
        <AppLink className="logo2" to="/" aria-label="Blix Technologies home">
          <svg width="160" height="56" viewBox="0 0 160 56" aria-hidden="true">
            <defs>
              <linearGradient id="logoG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8E92FF" />
                <stop offset=".6" stopColor="#2E3192" />
                <stop offset="1" stopColor="#EC008C" />
              </linearGradient>
            </defs>
            <g>
              <path d="M12 5C7 5 3 9 3 15v10c0 5 4 10 9 10h6C23 35 27 31 27 26V25H17c-2 0-3-1-3-3V16c0-2 1-3 3-3h10V15C27 9 23 5 18 5h-6z" fill="url(#logoG)" />
            </g>
            <g fontFamily="'Bricolage Grotesque','Segoe UI',sans-serif" fontWeight="800">
              <text x="36" y="32" fontSize="34" fill="#2E3192" letterSpacing="-1">LIX</text>
              <text x="10" y="51" fontSize="10" fill="#5C5C7D" letterSpacing="2.4" fontWeight="600">technologies</text>
            </g>
            <circle cx="98" cy="9" r="2.8" fill="#EC008C" />
          </svg>
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
                  <Link to={l.to} className={`nav-lnk ${isActive(l) ? 'on' : ''}`}>
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/contact" className="btn2 btn-q">Get A Quote</Link>
        <button className="mb2" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 22 22"><g stroke="#2E3192" strokeWidth="2.2" strokeLinecap="round"><path d="M3 6h16M3 11h16M3 16h16" /></g></svg>
        </button>
      </div>
    </header>
  )
}
