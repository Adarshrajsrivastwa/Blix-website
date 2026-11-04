const reasons = [
  { icon: 'insight', title: 'In-depth market insight', text: 'Digital strategies that boost visibility, attract quality leads and grow lasting customer relationships with measurable results.' },
  { icon: 'analytics', title: 'Data-driven strategies', text: 'Advanced analytics measure campaign performance, optimize strategy and deliver tangible results.' },
  { icon: 'creative', title: 'Creative content mastery', text: 'Expert creators craft engaging content that captivates audiences and strengthens your brand.' },
  { icon: 'record', title: 'Proven track record', text: 'A history of successful campaigns and a proven ability to deliver ROI and exceed expectations.' },
  { icon: 'people', title: 'Dedicated account management', text: 'One account manager as your single point of contact for seamless, personalized service.' },
  { icon: 'social', title: 'Strategic social media services', text: 'Strategy, content creation, community management and performance analysis in one full suite.' },
  { icon: 'tools', title: 'Powered by technology and innovation', text: 'Modern tools and AI-assisted workflows keep your campaigns efficient and ahead of the curve.' },
  { icon: 'globe', title: 'Trusted by businesses worldwide', text: 'Brands across industries rely on Blix Technologies to grow their online presence.' },
]

function ReasonIcon({ name }) {
  const drawings = {
    insight: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4 4M8 12l2-2 2 1 2.5-3" /></>,
    analytics: <><path d="M4 19.5h16M6.5 16v-4M11.8 16V6M17.2 16V9" /><path d="m5.5 9 5-3 5 2 3-3" /></>,
    creative: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></>,
    record: <><path d="M12 3.5 14.6 9l6 .9-4.3 4.2 1 5.9-5.3-2.8-5.3 2.8 1-5.9-4.3-4.2 6-.9L12 3.5Z" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3.5 20v-1.5A5.5 5.5 0 0 1 9 13h1a5.5 5.5 0 0 1 5.5 5.5V20H3.5Z" /><path d="M16 5.2a3 3 0 0 1 0 5.6M17 13a5 5 0 0 1 3.5 4.8V20h-2" /></>,
    social: <><path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z" /><path d="M8.5 12h2l1.2-2.2 1.7 4.3 1.2-2.1h1.4" /></>,
    tools: <><path d="M14 6a5 5 0 0 0-6.2 6.2L3.5 16.5a2.1 2.1 0 0 0 3 3l4.3-4.3A5 5 0 0 0 17 9l-3 3-3-3 3-3Z" /><path d="m16.5 16.5 4 4" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  }
  return (
    <svg className="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {drawings[name]}
    </svg>
  )
}

export default function Why() {
  return (
    <section className="why">
      <div className="wrap">
        <div className="side">
          <h2 className="h2 reveal">Why Partner with Blix Technologies for Digital Marketing Services?</h2>
        </div>
        <div className="list reveal-stagger">
          {reasons.map((r) => (
            <div key={r.title} className="row reveal" data-vi="up" data-vi-speed="15">
              <ReasonIcon name={r.icon} />
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
