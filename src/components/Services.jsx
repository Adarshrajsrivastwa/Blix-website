import { Link } from 'react-router-dom'
import { services } from '../pages/ServicesPage.jsx'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="top">
          <div>
            <span className="kicker reveal">Our service list</span>
            <h2 className="h2 reveal">What we offer to you</h2>
          </div>
          <p className="reveal">
            <strong>Helping your business shine online</strong>
            From SEO and social media to web, apps, and custom software — pick one service or stack them all into a 360° growth engine.
          </p>
        </div>
        <div className="bento reveal-stagger">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="tile reveal-flip"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="tile-head">
                <div className="ic">{s.icon}</div>
                <h3>{s.title}</h3>
              </div>
              <p>{s.text}</p>
              <span className="go">LEARN MORE →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
