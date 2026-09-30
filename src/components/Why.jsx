import { Link } from 'react-router-dom'

const reasons = [
  { title: 'In-depth market insight', text: 'Digital strategies that boost visibility, attract quality leads and grow lasting customer relationships with measurable results.' },
  { title: 'Data-driven strategies', text: 'Advanced analytics measure campaign performance, optimize strategy and deliver tangible results.' },
  { title: 'Creative content mastery', text: 'Expert creators craft engaging content that captivates audiences and strengthens your brand.' },
  { title: 'Proven track record', text: 'A history of successful campaigns and a proven ability to deliver ROI and exceed expectations.' },
  { title: 'Dedicated account management', text: 'One account manager as your single point of contact for seamless, personalized service.' },
  { title: 'Strategic social media services', text: 'Strategy, content creation, community management and performance analysis in one full suite.' },
  { title: 'Powered by technology and innovation', text: 'Modern tools and AI-assisted workflows keep your campaigns efficient and ahead of the curve.' },
  { title: 'Trusted by businesses worldwide', text: 'Brands across industries rely on Blix Technologies to grow their online presence.' },
]

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M10 8l4 4-4 4" />
    </svg>
  )
}

export default function Why() {
  return (
    <section className="why">
      <div className="wrap">
        <div className="side">
          <span className="kicker reveal">Why Blix</span>
          <h2 className="h2 reveal">Why partner with Blix Technologies?</h2>
          <p className="reveal">Strategy, creativity and technology working together, with one dedicated contact for your account.</p>
          <Link to="/contact" className="btn btn-pink reveal-zoom">Talk to our team</Link>
        </div>
        <div className="list reveal-stagger">
          {reasons.map((r) => (
            <div key={r.title} className="row reveal-right" data-vi="up" data-vi-speed="15">
              <Check />
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
