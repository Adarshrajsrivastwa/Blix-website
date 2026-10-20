import AppLink from './AppLink.jsx'

const useful = [
  { label: '360 Digital Marketing', to: '/services/digital-marketing' },
  { label: 'SEO Services', to: '/services/seo' },
  { label: 'Social Media Services', to: '/services/social-media' },
  { label: 'Web Development', to: '/services/web-development' },
  { label: 'App Development', to: '/services/app-development' },
]

const company = [
  { label: 'About us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Career', to: '/#contact' },
  { label: 'Academy', to: '/academy' },
]

const social = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/blixtechnologies',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.3 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V10H7.4v3h2.7v8h3.2Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/blixtechnologies/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.8" cy="6.5" r=".8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://x.com/blixtechnlogies',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.1 4.1 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.7A11.7 11.7 0 0 1 3.2 4.6a4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2.8 18c-.3 0-.7 0-1-.1A11.6 11.6 0 0 0 9.3 20c7.5 0 11.7-6.3 11.7-11.7v-.5A8.4 8.4 0 0 0 22 5.8Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/blixtechnologies/posts/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
        <path d="M6 9v9M6 6.2v.1M10 18v-5.1a3 3 0 0 1 6 0V18M10 10v8" />
        <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@blixtechnologies',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 8.2a2.6 2.6 0 0 0-1.8-1.9C17.6 5.8 12 5.8 12 5.8s-5.6 0-7.2.5A2.6 2.6 0 0 0 3 8.2a27 27 0 0 0-.5 3.8 27 27 0 0 0 .5 3.8 2.6 2.6 0 0 0 1.8 1.9c1.6.5 7.2.5 7.2.5s5.6 0 7.2-.5a2.6 2.6 0 0 0 1.8-1.9 27 27 0 0 0 .5-3.8 27 27 0 0 0-.5-3.8Z" />
        <path d="m10 9.5 5 2.5-5 2.5v-5Z" fill="#FFFFFF" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="ft">
      {/* 4-column main section */}
      <div className="wrap ft-grid">
        <div className="ft-col">
          <h3>Blix Technologies Pvt. Ltd.</h3>
          <p>Blix Technologies offers innovative, results-oriented digital marketing and web development solutions.</p>
        </div>
        <div className="ft-col">
          <h3>Useful Links</h3>
          <ul>
            {useful.map((u) => (
              <li key={u.label}><AppLink to={u.to}>{u.label}</AppLink></li>
            ))}
          </ul>
        </div>
        <div className="ft-col">
          <h3>Our Company</h3>
          <ul>
            {company.map((c) => (
              <li key={c.label}><AppLink to={c.to}>{c.label}</AppLink></li>
            ))}
          </ul>
        </div>
        <div className="ft-col">
          <h3>Connect with us</h3>
          <ul className="ft-contact">
            <li><b>Address : </b>NX One, Office – T3- A 1111, Techzone – 4, Greater Noida West, Noida, India, 201306</li>
            <li><b>Email : </b><a href="mailto:info@blixtechnologies.com">info@blixtechnologies.com</a></li>
            <li><b>Phone : </b><a href="tel:+918448983343">+91-84489 83343</a></li>
          </ul>
        </div>
      </div>

      {/* Social media strip — darker blue band */}
      <div className="ft-soc-band">
        <div className="ft-soc">
          {social.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className="ft-soc-btn">
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom legal bar */}
      <div className="ft-legal-bar">
        <div className="wrap ft-legal">
          <span className="ft-legal-links">
            <AppLink to="/#contact">Support</AppLink>
            {' | '}
            <AppLink to="/#contact">Privacy Policy</AppLink>
            {' | '}
            <AppLink to="/#contact">Terms &amp; Condition</AppLink>
          </span>
          <span className="ft-copy">Copyright © 2019-2026 Blix Technologies.</span>
        </div>
      </div>
    </footer>
  )
}
