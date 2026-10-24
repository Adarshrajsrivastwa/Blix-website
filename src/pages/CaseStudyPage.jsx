import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

const cases = [
  {
    tag: 'SEO & Content',
    title: 'How Blix Scaled Organic Traffic by 320% in 6 Months',
    desc: 'A deep dive into the keyword strategy, technical SEO fixes, and content calendar that tripled organic visits for a mid-size e-commerce brand.',
    metric: '320%',
    metricLabel: 'Organic Traffic Growth',
    color: 'cs-blue',
  },
  {
    tag: 'Paid Campaigns',
    title: 'Achieving 4.8x ROAS on Google Ads for a Real-Estate Developer',
    desc: 'From audience research to ad creative and bid strategies -- how we turned a Rs5L/month ad budget into measurable pipeline.',
    metric: '4.8x',
    metricLabel: 'Return on Ad Spend',
    color: 'cs-pink',
  },
  {
    tag: 'Social Media',
    title: 'Growing a Brand Instagram Followers from 2K to 50K Organically',
    desc: 'Content pillars, posting cadence, Reels strategy, and community management that drove genuine follower growth for a lifestyle brand.',
    metric: '25x',
    metricLabel: 'Follower Growth',
    color: 'cs-indigo',
  },
  {
    tag: 'Web Development',
    title: 'Redesigning a B2B Website that Doubled Lead Conversions',
    desc: 'UX audit, wireframes, custom React build, and conversion rate optimisation that halved bounce rate and doubled demo bookings.',
    metric: '2x',
    metricLabel: 'Lead Conversions',
    color: 'cs-blue',
  },
  {
    tag: 'Online Reputation',
    title: 'Recovering Brand Reputation After a Viral Negative Review Cycle',
    desc: 'A structured ORM campaign across Google, Trustpilot, and social channels that restored star-ratings and rebuilt customer trust.',
    metric: '4.7',
    metricLabel: 'Avg Rating (was 2.9)',
    color: 'cs-pink',
  },
  {
    tag: 'Personal Branding',
    title: 'Building a Founder LinkedIn Presence to 30K Engaged Followers',
    desc: 'Thought leadership content, engagement strategy, and profile optimisation that positioned a founder as a credible industry voice.',
    metric: '30K',
    metricLabel: 'LinkedIn Followers',
    color: 'cs-indigo',
  },
]

export default function CaseStudyPage() {
  return (
    <main className="cs-page" id="top">
      <SEO
        title="Case Studies | Blix Technologies"
        description="Explore real client results from Blix Technologies -- from SEO and paid campaigns to web development and reputation management."
        keywords="digital marketing case studies, SEO success stories, Google Ads ROAS, social media growth, Blix Technologies results"
      />

      <section className="cs-hero">
        <div className="wrap">
          <span className="kicker reveal">CASE STUDIES</span>
          <h1 className="reveal">Real work.<br /><span>Real results.</span></h1>
          <p className="reveal">A collection of client stories that show what happens when strategy meets execution.</p>
        </div>
      </section>

      <section className="cs-grid-section">
        <div className="wrap">
          <div className="cs-grid">
            {cases.map((c, i) => (
              <article className={`cs-card ${c.color} reveal-flip`} key={i}>
                <div className="cs-card-top">
                  <span className="cs-tag">{c.tag}</span>
                  <div className="cs-metric">
                    <span className="cs-metric-num">{c.metric}</span>
                    <span className="cs-metric-lbl">{c.metricLabel}</span>
                  </div>
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <Link to="/#contact" className="cs-read-btn">
                  Talk to us about this <span aria-hidden="true">rarr;</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="cs-cta reveal">
            <div className="cs-cta-inner">
              <span className="kicker">YOUR BRAND NEXT?</span>
              <h2>Let us create your success story.</h2>
              <p>Tell us about your business and what you want to achieve. Our team will come back with a plan.</p>
              <Link to="/#contact" className="btn btn-pink">Get a Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
