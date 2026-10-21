import { Link } from 'react-router-dom'
import AppLink from '../components/AppLink.jsx'
import SEO from '../components/SEO.jsx'

const services = [
  {
    slug: 'digital-marketing',
    aliases: ['web-designing'],
    cls: 't1',
    title: '360 Digital Marketing',
    short: 'Every channel, one team — one consistent, measurable strategy.',
    text: 'SEO, paid ads, social media, content, email, and CRO — all orchestrated by one cohesive team. No silos, no inconsistent messaging, just a compounding digital growth engine built around your KPIs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 14.5l2.2-4.5 7.8-3v8.5l-7.8-3H4z" />
        <path d="M6 12.8v3.7a1.5 1.5 0 0 0 1.5 1.5h1" />
        <line x1="16.5" y1="6.5" x2="19.5" y2="4.5" />
        <line x1="17.5" y1="10" x2="21" y2="10" />
        <line x1="16.5" y1="13.5" x2="19.5" y2="15.5" />
      </svg>
    ),
    bullets: ['SEO + Paid Ads + Social + Content + Email', 'Unified brand strategy & content calendar', 'Cross-channel attribution & ROI tracking', 'Dedicated account manager', 'Monthly strategy reviews', 'One unified performance report'],
    deliverable: 'A complete digital marketing engine where every channel works together to accelerate leads, revenue, and brand recall.',
  },
  {
    slug: 'seo',
    cls: 't2',
    title: 'SEO Services',
    short: 'Higher rankings, consistent organic traffic, and search visibility that converts.',
    text: 'Personalized SEO solutions that boost rankings and attract organic traffic with on-page, off-page, technical, and local SEO.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="8" cy="11" r="5.5" />
        <line x1="4" y1="15" x2="1.5" y2="17.5" strokeWidth="2.2" />
        <line x1="15" y1="16.5" x2="15" y2="12.5" strokeWidth="2.4" />
        <line x1="18" y1="16.5" x2="18" y2="9.5" strokeWidth="2.4" />
        <line x1="21" y1="16.5" x2="21" y2="6.5" strokeWidth="2.4" />
      </svg>
    ),
    bullets: ['On-page & Technical SEO audits', 'Keyword research & content briefs', 'High-quality link building', 'Local SEO & Google Business Profile', 'Content optimization & E-E-A-T', 'Monthly ranking & traffic reports'],
    deliverable: 'Top-page organic rankings for revenue keywords, predictable traffic growth, and a search presence that keeps compounding.',
  },
  {
    slug: 'social-media',
    aliases: ['social-media-marketing'],
    cls: 't3',
    title: 'Social Media Services',
    short: 'Content, community, and paid social — platforms that actually feed your pipeline.',
    text: 'Creative content, paid campaigns, and community management across Instagram, Facebook, LinkedIn, YouTube, and X.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="3.5" width="19" height="17" rx="2.5" />
        <line x1="2.5" y1="8" x2="21.5" y2="8" />
        <rect x="5" y="10.5" width="4.5" height="4.5" rx="1" />
        <line x1="12" y1="11.5" x2="18.5" y2="11.5" />
        <line x1="12" y1="14.5" x2="17" y2="14.5" />
      </svg>
    ),
    bullets: ['IG / FB / LinkedIn / YouTube / X', 'Reels, carousels & static creatives', 'Meta & LinkedIn paid campaigns', 'Community & DM management', 'Influencer collaborations', 'Brand voice & visual guidelines'],
    deliverable: 'A social media presence that grows followers, deepens engagement, and reliably sends qualified leads to your sales team.',
  },
  {
    slug: 'real-estate-marketing',
    cls: 't4',
    title: 'Real Estate Marketing',
    short: 'Property marketing that brings listings, projects, and local audiences together.',
    text: 'Reach property buyers and tenants with focused campaigns, listing content, local search, and clear lead follow-up.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5 9v12h14V9M9 21v-7h6v7" />
      </svg>
    ),
    bullets: ['Audience, location & property keyword research', 'Project landing pages and enquiry forms', 'Google and social campaign planning', 'Local SEO and property listing support', 'Property photography, reels & content planning', 'Lead tracking and CRM follow-up setup'],
    deliverable: 'A connected property marketing system that presents each project clearly, makes enquiries easier, and tracks campaign activity from first click to follow-up.',
  },
  {
    slug: 'orm',
    cls: 't5',
    title: 'Online Reputation Management',
    short: 'Own page one of Google for your brand — and keep it clean.',
    text: 'Own page one of Google. Suppress negatives, amplify positives, and protect your brand search results.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    bullets: ['Branded SERP audit & strategy', 'Suppression of negative results', 'Positive content & PR amplification', 'Review generation & response', 'Crisis response support', 'Monthly SERP monitoring'],
    deliverable: 'A clean, controlled page one of Google — so when someone searches you, they see exactly the story you want told.',
  },
  {
    slug: 'personal-branding',
    cls: 't6',
    title: 'Personal Branding',
    short: 'Build a founder / executive brand that opens doors, not just profiles.',
    text: 'Founder and executive personal branding — narrative, content, and LinkedIn/YouTube engine that opens real doors.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
        <path d="M18 7l1-2 2-1-2-1-1-2-1 2-2 1 2 1z" />
      </svg>
    ),
    bullets: ['Narrative & positioning workshop', 'Content strategy & pillar themes', 'Ghostwritten posts & long-form', 'LinkedIn / X / YouTube execution', 'Media & speaking opportunities', 'Quarterly brand review'],
    deliverable: 'A recognizable personal brand that attracts talent, deals, and inbound opportunities on autopilot.',
  },
  {
    slug: 'web-development',
    aliases: ['website-development'],
    cls: 't5',
    title: 'Web Development',
    short: 'Fast, mobile-first, conversion-focused websites that look premium and perform.',
    text: 'Fast, mobile-first websites built on WordPress, React/Next.js, or Shopify — tuned for conversions and speed.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="3.5" width="19" height="13" rx="2" />
        <line x1="8" y1="20.5" x2="16" y2="20.5" />
        <line x1="12" y1="16.5" x2="12" y2="20.5" />
      </svg>
    ),
    bullets: ['WordPress · React · Next.js · Shopify', 'Mobile-first responsive UI', 'Core Web Vitals & speed tuning', 'SEO-ready architecture', 'Conversion-focused UX & copy', 'Care & maintenance plans'],
    deliverable: 'A fast, beautiful, conversion-ready website that builds trust and grows revenue around the clock.',
  },
  {
    slug: 'app-development',
    aliases: ['mobile-app-development'],
    cls: 't4',
    title: 'Mobile App Development',
    short: 'Android & iOS apps that feel premium, perform fast, and retain users.',
    text: 'Android and iOS apps — React Native or native — designed for real users, shipped on time and on budget.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="2.5" width="11" height="19" rx="2" />
        <line x1="6.5" y1="18" x2="9.5" y2="18" />
        <circle cx="18" cy="15.5" r="2.2" />
        <path d="M18 12.2v1M18 17.8v1M14.7 15.5h1M20.3 15.5h1M15.7 13.2l.7.7M19.6 17.1l.7.7M15.7 17.8l.7-.7M19.6 13.9l.7-.7" strokeWidth="1.8" />
      </svg>
    ),
    bullets: ['Android & iOS · React Native / Native', 'UX/UI design & prototyping', 'API & backend integration', 'Push notifications & analytics', 'ASO & launch checklist', 'Post-launch support & updates'],
    deliverable: 'A polished, high-retention mobile app users love — shipped on time, on budget, and ready to scale.',
  },
  {
    slug: 'software-development',
    cls: 't5',
    title: 'Software Development',
    short: 'Custom SaaS, internal tools, dashboards, and automation — built to spec.',
    text: 'Custom SaaS, internal tools, dashboards, APIs, and automation — real engineering, not glue scripts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        <path d="M14 4l-4 16" />
      </svg>
    ),
    bullets: ['SaaS products & MVPs', 'Internal tools, CRMs & dashboards', 'Data pipelines & ETL', 'API design & integrations', 'Cloud deployment (AWS/GCP)', 'Ongoing product iteration'],
    deliverable: 'Reliable, documented, maintainable software that saves your team hours and powers your next stage of growth.',
  },
]

export default function ServicesPage() {
  const servicesLd = [
    {
      id: 'services',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Digital Marketing Services',
        provider: { '@type': 'Organization', name: 'Blix Technologies' },
        areaServed: 'IN,US,UK,CA,AE,SG,AU',
        description: 'Digital marketing, SEO, social media, real estate marketing, online reputation management, personal branding, web development, mobile app development, and software development from a Noida-based agency.',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Blix Technologies Service Catalog',
          itemListElement: services.map((s, i) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, description: s.short, serviceType: s.title },
            position: i + 1,
          })),
        },
      },
    },
  ]

  return (
    <main id="top">
      <SEO
        title="Digital Marketing Services | SEO, SMM, Web & App Development"
        description="Explore Blix Technologies' services: digital marketing, SEO, social media, real estate marketing, online reputation management, personal branding, web and mobile app development, and custom software — Noida, India."
        keywords="SEO services Noida, social media marketing agency, real estate marketing, web development Noida, mobile app development, ORM services, personal branding agency, 360 digital marketing, Google Ads management"
        jsonLd={servicesLd}
      />
      <section className="sd-head">
        <div className="wrap">
          <div className="sd-hero">
            <div>
              <span className="kicker reveal-blur">Our services</span>
              <h1 className="reveal">Nine ways we can grow your brand &amp; build your digital presence</h1>
              <p className="reveal">Pick any service individually, or combine them into a 360° growth plan. Every engagement is run by real practitioners, with a single point of contact and transparent reporting.</p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }} className="reveal-zoom">
                <Link to="/#contact" className="btn btn-pink">Start with a free audit</Link>
                <Link to="/about" className="btn btn-line">Meet the agency</Link>
              </div>
            </div>
            <div className="sd-art reveal-right" aria-hidden="true" data-vi="up" data-vi-speed="30">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /><circle cx="12" cy="12" r="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="sd-body" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="services top" style={{ marginBottom: 40 }}>
            <div>
              <span className="kicker reveal">Full service list</span>
              <h2 className="h2 reveal">Choose the services your business needs</h2>
            </div>
            <p className="reveal">
              <strong>One account manager. One strategy. Multiple channels.</strong>
              Click any card to open the dedicated service page with full scope, process, and expected outcomes.
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
                <p>{s.short}</p>
                <span className="go">LEARN MORE →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export { services }
