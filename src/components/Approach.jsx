import { Link } from 'react-router-dom'

const offerings = [
  { icon: 'search', title: 'SEO', lines: ['Better rankings', 'More organic traffic'], className: 'seo' },
  { icon: 'chart', title: 'Paid Advertising', lines: ['Targeted campaigns', 'Quality leads'], className: 'paid' },
  { icon: 'megaphone', title: 'Digital Marketing', lines: ['Stronger brand presence', 'More customers'], className: 'digital' },
  { icon: 'people', title: 'Social Media', lines: ['Engage and grow', 'your audience'], className: 'social' },
  { icon: 'content', title: 'Content Creation', lines: ['Relevant and engaging', 'content'], className: 'content' },
  { icon: 'gear', title: 'Web & App Development', lines: ['Powerful digital', 'experiences'], className: 'development' },
]

const steps = [
  { icon: 'clipboard', number: '01', title: 'Understand', text: 'We learn about your business, audience, and goals.' },
  { icon: 'target', number: '02', title: 'Plan', text: 'We research, find opportunities, and create a customised strategy.' },
  { icon: 'rocket', number: '03', title: 'Execute', text: 'Our team implements the plan across marketing and technology channels.' },
  { icon: 'bars', number: '04', title: 'Track', text: 'We monitor performance with clear reports and key metrics.' },
  { icon: 'trend', number: '05', title: 'Grow', text: 'We refine strategies and keep improving for long-term results.' },
]

const iconShapes = {
  search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></>,
  chart: <><path d="M4 20V12h4v8M10 20V5h4v15M16 20V9h4v11M3 20h18"/></>,
  megaphone: <><path d="M3 11v-2a2 2 0 0 1 2-2h4l10-4v14L9 13H5a2 2 0 0 1-2-2Z"/><path d="m8 13 2 7h4l-2-8M21 8v5"/></>,
  people: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5v1"/></>,
  content: <><path d="M6 3h9l4 4v14H6zM15 3v5h4M9 12h7M9 16h7"/></>,
  gear: <><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.2 1-1.5 2.6-1.5-.6a8 8 0 0 1-1.7 1l-.3 1.6h-3l-.3-1.6a8 8 0 0 1-1.7-1l-1.5.6-1.5-2.6 1.2-1a7 7 0 0 1 0-2l-1.2-1 1.5-2.6 1.5.6a8 8 0 0 1 1.7-1l.3-1.6h3l.3 1.6a8 8 0 0 1 1.7 1l1.5-.6 1.5 2.6-1.2 1a7 7 0 0 1 0 2Z"/></>,
  clipboard: <><rect x="5" y="5" width="14" height="16" rx="2"/><path d="M9 5V3h6v2M8 11h8M8 15h8"/></>,
  target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="m13 11 7-7"/></>,
  rocket: <><path d="M5 15c-2 0-3 2-3 5 3 0 5-1 5-3M5 15l4 4M7 13c3-6 8-9 14-10-1 6-4 11-10 14M11 7l6 6"/><circle cx="16" cy="8" r="1"/></>,
  bars: <><path d="M4 20h17M6 17v-6h3v6M11 17V5h3v12M16 17V8h3v9"/></>,
  trend: <><path d="m3 17 6-6 4 3 8-9M15 5h6v6"/></>,
}

function Icon({ name }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconShapes[name]}</svg>
}

export default function Approach() {
  return (
    <section className="approach" aria-labelledby="approach-title">
      <div className="wrap">
        <div className="approach-main">
          <div className="approach-copy">
            <span className="approach-kicker">Our approach <i /></span>
            <h2 id="approach-title">Our Approach to <span>Digital Growth</span></h2>
            <p>At Blix Technologies, we believe that successful digital growth starts with understanding your business, your audience, and your goals. We combine strategy, creativity, and technology to help businesses build a strong online presence and reach the right customers.</p>
            <p>Our approach brings together digital marketing, SEO, paid advertising, social media marketing, content creation, and technology solutions like website development, mobile apps, and software. We create a customised plan based on your business needs, execute it with a focused team, and continuously track results to ensure measurable growth.</p>
            <Link className="approach-cta" to="/#contact">Let’s Discuss Your Growth Goals <span aria-hidden="true">→</span></Link>
          </div>
          <div className="approach-visual" aria-label="Blix team working together on a digital growth strategy">
            <div className="approach-orbit" />
            <img src="/about-strategy-meeting.png" alt="Digital marketing team reviewing strategy and campaign performance together" loading="lazy" decoding="async" />
            {offerings.map((item) => <div className={`approach-float ${item.className}`} key={item.title}><span className="approach-float-icon"><Icon name={item.icon} /></span><span><strong>{item.title}</strong><small>{item.lines.map(line => <span key={line}>{line}</span>)}</small></span></div>)}
            <div className="approach-growth"><strong>Business Growth</strong><b>↗ +150%</b><div aria-hidden="true">{[18, 27, 38, 48, 60, 72, 88].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div></div>
          </div>
          <img className="approach-mobile-art" src="/studio-session.png" alt="Marketing team collaborating around a table" loading="lazy" decoding="async" />
        </div>
        <div className="approach-steps">
          {steps.map((step, i) => <article className="approach-step" key={step.number}>
            <div className="approach-step-top"><span className={`approach-step-icon tone-${i}`}><Icon name={step.icon} /></span><span className="approach-step-number">{step.number}</span><span className="approach-step-title">{step.title}</span>{i < steps.length - 1 && <span className="approach-step-arrow" aria-hidden="true">╌╌╌›</span>}</div>
            <p>{step.text}</p>
          </article>)}
        </div>
      </div>
    </section>
  )
}
