const industriesList = [
  {
    id: 'real-estate',
    title: 'Real Estate & Infra',
    tag: 'Lead Gen & Virtual Tours',
    desc: 'High-intent buyer leads, property launches and 360° virtual showcase campaigns.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18M5 21V7l8-4v18M13 21V9l6 3v9" />
        <path d="M9 10h1M9 14h1M9 18h1M16 15h1M16 18h1" />
      </svg>
    ),
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Clinics',
    tag: 'Patient Acquisition',
    desc: 'Patient bookings, clinic local SEO and authority-building for medical specialists.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'education',
    title: 'Education & EdTech',
    tag: 'Student Admissions',
    desc: 'School admissions, institute enrollments and scalable digital course marketing.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Retail',
    tag: 'ROAS & Scaled Sales',
    desc: 'High-conversion ad funnels, cart abandonment recovery and catalog shopping ads.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    id: 'technology',
    title: 'Technology & SaaS',
    tag: 'B2B Demo Pipeline',
    desc: 'Qualified software demos, technical SEO and pipeline generation for IT enterprises.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'finance',
    title: 'Finance & Investments',
    tag: 'High-Value Leads',
    desc: 'Wealth advisory leads, investor trust funnels and high-compliance financial marketing.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Food',
    tag: 'Footfall & Bookings',
    desc: 'Restaurant walk-ins, hotel direct bookings and event catering lead generation.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    id: 'automotive',
    title: 'Automotive & Logistics',
    tag: 'Test Drives & Freight',
    desc: 'Dealership test drive inquiries, transport logistics and fleet service contracts.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: 'corporate',
    title: 'Legal & Consulting',
    tag: 'Authority & Retainers',
    desc: 'Corporate client acquisition, executive personal branding and retainer inquiries.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    id: 'lifestyle',
    title: 'Fashion & Lifestyle',
    tag: 'Brand Virality',
    desc: 'Influencer campaigns, social media virality and aspirational consumer storytelling.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

function IndustryCardsSet({ duplicate = false }) {
  return (
    <div className="industries-set" aria-hidden={duplicate || undefined}>
      {industriesList.map((item) => (
        <div className="industry-card" key={duplicate ? `${item.id}-dup` : item.id}>
          <div className="industry-card-top">
            <div className="industry-icon-wrap" aria-hidden="true">
              {item.icon}
            </div>
            <span className="industry-tag">{item.tag}</span>
          </div>
          <h3 className="industry-title">{item.title}</h3>
          <p className="industry-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default function Industries() {
  return (
    <section className="industries" id="industries" aria-label="Industries We Serve">
      <div className="wrap">
        <div className="industries-head">
          <span className="kicker">Industries We Serve</span>
          <h2 className="h2">Tailored marketing built for <span className="text-pink">diverse industries</span></h2>
          <p className="sub">Every vertical requires distinct audience psychology and growth funnels. We create specialized strategies engineered for your specific market.</p>
        </div>
      </div>

      <div className="industries-carousel" role="region" aria-label="Industries we serve, auto-scrolling single row">
        <div className="industries-track">
          <IndustryCardsSet />
          <IndustryCardsSet duplicate />
        </div>
      </div>
    </section>
  )
}
