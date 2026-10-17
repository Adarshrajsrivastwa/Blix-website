import { Link } from 'react-router-dom'

const services = [
  {
    slug: 'digital-marketing',
    cls: 't1',
    title: '360 Digital Marketing',
    text: 'Every channel run by one team — SEO, paid, social, content, email, CRO — one unified strategy, one KPI report.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>),
  },
  {
    slug: 'seo',
    cls: 't2',
    title: 'SEO Services',
    text: 'Personalized SEO solutions that boost rankings and attract organic traffic with on-page, off-page, technical, and local SEO.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="6" /><path d="M15 15l6 6" /></svg>),
  },
  {
    slug: 'social-media',
    cls: 't3',
    title: 'Social Media Services',
    text: 'Creative content, paid campaigns, and community management across Instagram, Facebook, LinkedIn, YouTube, and X.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M8 10h8M8 14h5" /></svg>),
  },
  {
    slug: 'real-estate-marketing',
    cls: 't4',
    title: 'Real Estate Marketing',
    text: 'Reach property buyers and tenants with focused campaigns, listing content, local search, and clear lead follow-up.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5" /><path d="M5 9v12h14V9M9 21v-7h6v7" /></svg>),
  },
  {
    slug: 'orm',
    cls: 't5',
    title: 'Online Reputation Management',
    text: 'Own page one of Google. Suppress negatives, amplify positives, and protect your brand search results.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V5z" /><path d="M9 12l2 2 4-4" /></svg>),
  },
  {
    slug: 'personal-branding',
    cls: 't6',
    title: 'Personal Branding',
    text: 'Founder and executive personal branding — narrative, content, and LinkedIn/YouTube engine that opens real doors.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></svg>),
  },
  {
    slug: 'web-development',
    cls: 't5',
    title: 'Web Development',
    text: 'Fast, mobile-first websites built on WordPress, React/Next.js, or Shopify — tuned for conversions and speed.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>),
  },
  {
    slug: 'app-development',
    cls: 't4',
    title: 'Mobile App Development',
    text: 'Android and iOS apps — React Native or native — designed for real users, shipped on time and on budget.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>),
  },
  {
    slug: 'software-development',
    cls: 't5',
    title: 'Software Development',
    text: 'Custom SaaS, internal tools, dashboards, APIs, and automation — real engineering, not glue scripts.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /><path d="M14 4l-4 16" /></svg>),
  },
]

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
              className={`tile ${s.cls} reveal-flip`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="ic">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="go">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
