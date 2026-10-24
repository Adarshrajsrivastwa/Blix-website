import { Link } from 'react-router-dom'

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
          <span className="pill2">
            <i />AI digital marketing &amp; technology · <span className="pill-loc"><svg className="pin-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>Noida, India</span>
          </span>
          <h1>
            Good marketing starts with a clear direction.
          </h1>
          <p className="lead">
            Blix brings strategy, creative work and technology together to help businesses build a stronger digital presence.
          </p>
          <div className="cta">
            <Link to="/#contact" className="btn btn-pink">Talk to our team <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-note"><span /> One team, from first conversation to ongoing improvement</div>
        </div>

        <aside className="hero-visual-wrap" aria-label="Blix team and approach">
          <div className="hero-photo-frame">
            <img src="/studio-session.png" alt="A team discussing campaign ideas around a table" fetchPriority="high" />
            <div className="hero-photo-shade" />
            
            {/* Clean Badges */}
            <div className="hero-float-badge badge-growth" aria-hidden="true">
              <span className="badge-pulse-dot" />
              <div className="badge-text">
                <small>AI Marketing</small>
                <b>+280% Growth</b>
              </div>
            </div>

            <div className="hero-float-badge badge-retention" aria-hidden="true">
              <span className="badge-icon-star">★</span>
              <div className="badge-text">
                <small>Client Impact</small>
                <b>99.4% Results</b>
              </div>
            </div>

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
