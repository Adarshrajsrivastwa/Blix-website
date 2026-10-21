import { useParams, Link } from 'react-router-dom'
import { services } from './ServicesPage.jsx'
import SEO from '../components/SEO.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const svc = services.find((s) => s.slug === slug || (s.aliases && s.aliases.includes(slug))) || services[0]

  const svcLd = [
    {
      id: 'service',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: svc.title,
        description: svc.text,
        serviceType: svc.title,
        provider: { '@type': 'Organization', name: 'Blix Technologies' },
        areaServed: 'IN,US,UK,CA,AE,SG,AU',
      },
    },
    {
      id: 'breadcrumbs',
      data: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://blixtechnologies.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://blixtechnologies.com/services' },
          { '@type': 'ListItem', position: 3, name: svc.title },
        ],
      },
    },
  ]

  return (
    <main id="top">
      <SEO
        title={`${svc.title} | Blix Technologies`}
        description={svc.text}
        keywords={`${svc.title}, Blix Technologies services, digital marketing services Noida, ${svc.short}`}
        jsonLd={svcLd}
      />
      <section className="sd-head">
        <div className="wrap">
          <div className="breadcrumbs" style={{ padding: 0, marginTop: 0, background: 'transparent', marginBottom: 20 }}>
            <div className="bc reveal">
              <Link to="/">Home</Link>
              <span className="bc-sep">/</span>
              <Link to="/services">Services</Link>
              <span className="bc-sep">/</span>
              <span className="bc-current">{svc.title}</span>
            </div>
          </div>
          <div className="sd-hero">
            <div>
              <span className="kicker reveal-blur">Service detail</span>
              <h1 className="reveal">{svc.title}</h1>
              <p className="reveal">{svc.text}</p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }} className="reveal-zoom">
                <Link to="/#contact" className="btn btn-pink">Get a custom quote</Link>
                <Link to="/services" className="btn btn-line">See all services</Link>
              </div>
            </div>
            <div className="sd-art reveal-right" aria-hidden="true" data-vi="zoom">
              {svc.icon}
            </div>
          </div>
        </div>
      </section>

      <section className="sd-body">
        <div className="wrap">
          <div className="sd-grid">
            <div className="sd-main reveal-stagger">
              <h2 className="reveal-slide">What you get with {svc.title}</h2>
              <p className="reveal">Every engagement is built around measurable outcomes. We scope the work, align on KPIs, and report progress on a regular cadence so you always know where your budget is going and what it's returning.</p>
              <ul className="reveal">
                {svc.bullets.map((b) => (<li key={b}>{b}</li>))}
              </ul>

              <h2 className="reveal-slide">How we work</h2>
              <p className="reveal">We start with an audit and a clear strategy document. Once you approve the roadmap, we move into weekly execution sprints — regular check-ins, transparent reporting, and continuous optimization. You get one dedicated account manager plus the full specialist team behind the scenes.</p>
              <ul className="reveal">
                <li>Discovery call + audit &amp; research</li>
                <li>Strategy, KPI definition &amp; written roadmap</li>
                <li>Weekly execution, check-ins, and reporting</li>
                <li>Monthly strategy review and optimization plan</li>
              </ul>

              <h2 className="reveal-slide">Expected outcome</h2>
              <p className="reveal">{svc.deliverable}</p>
              <p className="reveal">Every plan is tailored to your specific industry, audience, and business goals. Pricing depends on scope, speed, and how many channels are running together.</p>
            </div>

            <aside className="sd-side reveal-right" data-vi="up" data-vi-speed="30">
              <div className="sd-card reveal">
                <h3>Quick facts</h3>
                <ul className="quick-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M10 8l4 4-4 4" /></svg>
                    Dedicated account manager
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M10 8l4 4-4 4" /></svg>
                    Transparent monthly reporting
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M10 8l4 4-4 4" /></svg>
                    Results-driven KPIs
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M10 8l4 4-4 4" /></svg>
                    Weekly check-ins (on request)
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M10 8l4 4-4 4" /></svg>
                    Agency-experienced specialists
                  </li>
                </ul>
              </div>

              <div className="sd-card reveal-zoom" style={{ background: 'linear-gradient(135deg,var(--magenta),#2E3191)' }}>
                <h3>Ready to start?</h3>
                <p>Book a free 30-minute consultation. We'll audit your current setup and recommend the best next steps — no hard sell.</p>
                <Link to="/#contact" className="btn btn-white" style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}>Book free audit</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
