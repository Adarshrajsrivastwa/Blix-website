import AppLink from './AppLink.jsx'

const useful = [
  { label: '360 Digital Marketing', to: '/services/digital-marketing' },
  { label: 'SEO Services', to: '/services/seo' },
  { label: 'Social Media Services', to: '/services/social-media' },
  { label: 'Real Estate Marketing', to: '/services/real-estate-marketing' },
  { label: 'Online Reputation Management', to: '/services/orm' },
  { label: 'Personal Branding', to: '/services/personal-branding' },
  { label: 'Web Development', to: '/services/web-development' },
  { label: 'Mobile App Development', to: '/services/app-development' },
  { label: 'Software Development', to: '/services/software-development' },
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
        <path fillRule="evenodd" clipRule="evenodd" d="M21.58 7.19a2.7 2.7 0 0 0-1.9-1.9C17.99 4.8 12 4.8 12 4.8s-5.99 0-7.68.49a2.7 2.7 0 0 0-1.9 1.9A28.4 28.4 0 0 0 2 12a28.4 28.4 0 0 0 .42 4.81 2.7 2.7 0 0 0 1.9 1.9c1.69.49 7.68.49 7.68.49s5.99 0 7.68-.49a2.7 2.7 0 0 0 1.9-1.9A28.4 28.4 0 0 0 22 12a28.4 28.4 0 0 0-.42-4.81ZM10 15.5V8.5l6 3.5-6 3.5Z" />
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
          <p>Blix Technologies helps businesses grow online with digital marketing, SEO, website development, mobile app development, and software solutions. We help businesses improve their online presence, reach more customers, generate leads, and build a strong brand. From promoting your business online to developing websites, apps, and software as per your requirements, we provide solutions that help your business grow.</p>
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
