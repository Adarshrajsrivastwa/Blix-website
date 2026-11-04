import { Link } from 'react-router-dom'
import { services } from '../pages/ServicesPage.jsx'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="top">
          <div>
            <span className="kicker reveal reveal-left">Our service list</span>
            <h2 className="h2 reveal reveal-left">What We Offer To You !</h2>
          </div>
          <p className="reveal reveal-right">
            <strong>Helping Your Business Shine Online</strong>
            From boosting your digital presence to engaging your audience, we’re here to drive your growth. Let’s team up to unlock your true potential and achieve online success!
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
