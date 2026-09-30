import { Link } from 'react-router-dom'
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
  { label: 'Our services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Career', to: '/contact' },
  { label: 'Academy', to: '/academy' },
]
const social = [
  { label: 'Facebook', short: 'f' },
  { label: 'Instagram', short: 'ig' },
  { label: 'Twitter', short: 'x' },
  { label: 'LinkedIn', short: 'in' },
  { label: 'YouTube', short: 'yt' },
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
          <a key={s.label} href="#top" aria-label={s.label}>{s.short}</a>
        ))}
      </div>
      <div className="wrap legal">
        <span>
          <AppLink to="/contact">Support</AppLink>
          {' | '}
          <AppLink to="/contact">Privacy Policy</AppLink>
          {' | '}
          <AppLink to="/contact">Terms &amp; Condition</AppLink>
        </span>
        <span>Copyright © 2019-2026 Blix Technologies.</span>
      </div>
    </footer>
  )
}
