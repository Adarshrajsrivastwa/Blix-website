import { Link } from 'react-router-dom'
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
  { label: 'Our services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Career', to: '/#contact' },
]
const social = [
  { label: 'Facebook', href: 'https://www.facebook.com/blixtechnologies', icon: <path d="M13.3 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V10H7.4v3h2.7v8h3.2Z" fill="currentColor" /> },
  { label: 'Instagram', href: 'https://www.instagram.com/blixtechnologies/', icon: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.8" cy="6.5" r=".8" fill="currentColor" stroke="none" /></> },
  { label: 'X', href: 'https://x.com/blixtechnlogies', icon: <path d="M5 4h3.8l10.2 16h-3.8L5 4Zm0 16 6.1-7.1M12.9 11.1 19 4" /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/blixtechnologies/posts/', icon: <><path d="M6 9v9M6 6.2v.1M10 18v-5.1a3 3 0 0 1 6 0V18M10 10v8" /><circle cx="6" cy="6" r="1" fill="currentColor" stroke="none" /></> },
  { label: 'YouTube', href: 'https://www.youtube.com/@blixtechnologies', icon: <><path d="M21 8.2a2.6 2.6 0 0 0-1.8-1.9C17.6 5.8 12 5.8 12 5.8s-5.6 0-7.2.5A2.6 2.6 0 0 0 3 8.2a27 27 0 0 0-.5 3.8 27 27 0 0 0 .5 3.8 2.6 2.6 0 0 0 1.8 1.9c1.6.5 7.2.5 7.2.5s5.6 0 7.2-.5a2.6 2.6 0 0 0 1.8-1.9 27 27 0 0 0 .5-3.8 27 27 0 0 0-.5-3.8Z" /><path d="m10 9.5 5 2.5-5 2.5v-5Z" fill="currentColor" stroke="none" /></> },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap fg">
        <div>
          <h3>Blix Technologies Pvt. Ltd.</h3>
          <p>Blix Technologies offers innovative, results-oriented digital marketing and web development solutions. From SEO and social media to web and mobile apps, we help brands win online.</p>
        </div>
        <div>
          <h3>Our services</h3>
          <ul>
            {useful.map((u) => (
              <li key={u.label}><AppLink to={u.to}>{u.label}</AppLink></li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            {company.map((c) => (
              <li key={c.label}><AppLink to={c.to}>{c.label}</AppLink></li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact info</h3>
          <ul>
            <li><b>Address:</b> T-3, A-423, NX One, Techzone-4, Greater Noida West, Uttar Pradesh 201306</li>
            <li><b>Email:</b> <a href="mailto:info@blixtechnologies.com">info@blixtechnologies.com</a></li>
            <li><b>Phone:</b> <a href="tel:+918448983343">+91-84489 83343</a></li>
          </ul>
        </div>
      </div>
      <div className="soc">
        {social.map((s) => (
          <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg></a>
        ))}
      </div>
      <div className="wrap legal">
        <span>
          <AppLink to="/#contact">Support</AppLink>
          {' | '}
          <AppLink to="/#contact">Privacy Policy</AppLink>
          {' | '}
          <AppLink to="/#contact">Terms &amp; Condition</AppLink>
        </span>
        <span>Copyright © 2019-2026 Blix Technologies.</span>
      </div>
    </footer>
  )
}
