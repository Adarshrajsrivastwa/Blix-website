import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'

const MarketingOrb = lazy(() => import('./MarketingOrb.jsx'))

const focusAreas = [
  { number: '01', name: 'Find the audience', detail: 'Research, positioning and a clear plan' },
  { number: '02', name: 'Build the system', detail: 'Search, content, campaigns and digital products' },
  { number: '03', name: 'Improve what works', detail: 'Reporting that leads to practical next steps' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="pill2"><i />Digital marketing & technology · Noida, India</span>
          <h1>
            Good marketing starts with <em>a clear direction.</em>
          </h1>
          <p className="lead">
            Blix brings strategy, creative work and technology together to help businesses build a stronger digital presence.
          </p>
          <div className="cta">
            <Link to="/#contact" className="btn btn-pink">Talk to our team <span aria-hidden="true">↗</span></Link>
            <Link to="/services" className="hero-text-link">Explore our services <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-note"><span /> One team, from first conversation to ongoing improvement</div>
        </div>

        <aside className="hero-visual-wrap" aria-label="Blix team and approach">
          <div className="hero-photo-frame">
            <img src="/studio-session.png" alt="A team discussing campaign ideas around a table" fetchPriority="high" />
            <div className="hero-photo-shade" />
            <Suspense fallback={null}><MarketingOrb /></Suspense>
            <div className="hero-photo-copy">
              <span>BUILT AROUND YOUR BUSINESS</span>
              <b>People first.<br />Performance with purpose.</b>
            </div>
          </div>
          <div className="hero-focus-list">
            {focusAreas.map((item) => (
              <div key={item.number}>
                <span>{item.number}</span><b>{item.name}</b>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
