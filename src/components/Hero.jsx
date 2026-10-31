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
            <i />AI digital marketing &amp; technology
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
            <img src="/home-team-strategy.png" alt="Digital marketing team planning ideas and growth strategy together" fetchPriority="high" />
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
