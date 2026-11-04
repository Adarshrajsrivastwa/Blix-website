import { useParams, useLocation, Link } from 'react-router-dom'
import { services } from './ServicesPage.jsx'
import SEO from '../components/SEO.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const { pathname } = useLocation()
  const isOrmRoute = pathname.startsWith('/online-reputation-management')
  const svc = (isOrmRoute ? services.find((s) => s.slug === 'orm') : services.find((s) => s.slug === slug || (s.aliases && s.aliases.includes(slug)))) || services[0]
  const isOrm = svc.slug === 'orm'
  const seoDescription = 'Manage your brand image with Blix Technologies. Get Google review management, negative review handling and online reputation management services in Noida.'
  const heroTitle = isOrm ? 'Online Reputation Management Services in Noida' : svc.title
  const heroDescription = isOrm
    ? 'Build trust at every point where people encounter your brand. Blix Technologies helps businesses monitor Google reviews, respond to feedback thoughtfully, and strengthen their online reputation.'
    : svc.text
  const ormWork = [
    'Google review monitoring and response guidance',
    'Negative review handling with calm, timely, customer-first responses',
    'Review generation guidance to invite authentic customer feedback',
    'Brand mention and search-result monitoring',
    'Business profile consistency and reputation audits',
    'Ongoing reporting with practical next steps',
  ]
  const ormProcess = [
    'Review your current search results, public reviews, and business profiles.',
    'Identify reputation priorities, response needs, and the right monitoring scope.',
    'Set up a clear review-response approach and encourage genuine feedback.',
    'Track changes and share regular updates so your team can act with confidence.',
  ]

  const svcLd = [
    {
      id: 'service',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: svc.title,
        description: isOrm ? seoDescription : svc.text,
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
    <main id="top" className="service-detail-page">
      <SEO
        title={isOrm ? 'Online Reputation Management Services in Noida' : svc.title}
        description={isOrm ? seoDescription : svc.text}
        keywords={isOrm ? 'Online Reputation Management Services, Online Reputation Management Company in Noida' : `${svc.title}, Blix Technologies services, digital marketing services Noida, ${svc.short}`}
        canonicalUrl={isOrm ? 'https://blixtechnologies.com/online-reputation-management/' : undefined}
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
              <h1 className="reveal">{heroTitle}</h1>
              <p className="reveal">{heroDescription}</p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }} className="reveal-zoom">
                <Link to="#contact" className="btn btn-pink">Get a custom quote</Link>
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
              <h2 className="reveal-slide">{isOrm ? 'Protect trust in your brand online' : `What you get with ${svc.title}`}</h2>
              <p className="reveal">{isOrm ? 'Potential customers often check reviews and search results before they contact a business. A consistent reputation-management process helps you understand what people are saying, respond constructively, and keep your business information accurate.' : 'Every engagement is built around measurable outcomes. We scope the work, align on KPIs, and report progress on a regular cadence so you always know where your budget is going and what it’s returning.'}</p>
              <ul className="reveal">
                {(isOrm ? ormWork : svc.bullets).map((b) => (<li key={b}>{b}</li>))}
              </ul>

              <h2 className="reveal-slide">{isOrm ? 'A clear process for managing feedback' : 'How we work'}</h2>
              <p className="reveal">{isOrm ? 'We begin with a reputation audit, agree on priorities with your team, and create a practical plan for monitoring and responding. You stay involved in important customer conversations, while we help keep the process organized and consistent.' : 'We start with an audit and a clear strategy document. Once you approve the roadmap, we move into weekly execution sprints — regular check-ins, transparent reporting, and continuous optimization. You get one dedicated account manager plus the full specialist team behind the scenes.'}</p>
              <ul className="reveal">
                {(isOrm ? ormProcess : ['Discovery call + audit & research', 'Strategy, KPI definition & written roadmap', 'Weekly execution, check-ins, and reporting', 'Monthly strategy review and optimization plan']).map((step) => <li key={step}>{step}</li>)}
              </ul>

              <h2 className="reveal-slide">{isOrm ? 'Reputation management built around your customers' : 'Expected outcome'}</h2>
              <p className="reveal">{isOrm ? 'The goal is a reliable reputation workflow: timely review awareness, thoughtful responses, accurate profiles, and a clearer picture of customer feedback. We tailor the scope to your locations, platforms, and team.' : svc.deliverable}</p>
              {isOrm && <>
                <h2 className="reveal-slide">Frequently asked questions</h2>
                <h3>Can you remove negative Google reviews?</h3>
                <p className="reveal">Reviews can only be removed by the platform when they violate its policies. We help you assess the review, report policy violations where appropriate, and prepare a professional response.</p>
                <h3>How should a business respond to a negative review?</h3>
                <p className="reveal">A prompt, respectful response that acknowledges the concern and offers a suitable next step can show readers that your business takes feedback seriously.</p>
                <h3>Can you help us get more customer reviews?</h3>
                <p className="reveal">We can help create a simple process for inviting genuine feedback from customers, while keeping requests fair and aligned with platform policies.</p>
                <p className="reveal">Explore our <Link to="/services/seo">SEO services</Link> or <Link to="/services/social-media">social media marketing</Link> to support a stronger, consistent online presence.</p>
              </>}
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
                <Link to="#contact" className="btn btn-white" style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}>Book free audit</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
