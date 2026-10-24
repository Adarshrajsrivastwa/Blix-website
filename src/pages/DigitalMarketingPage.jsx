import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Clients from '../components/Clients.jsx'
import Why from '../components/Why.jsx'
import Voices from '../components/Voices.jsx'
import HomeFaq from '../components/HomeFaq.jsx'
import Contact from '../components/Contact.jsx'

const focusAreas = [
  { number: '01', name: 'Know your audience', detail: 'Research, positioning and clear priorities' },
  { number: '02', name: 'Build your presence', detail: 'Search, content and campaigns that connect' },
  { number: '03', name: 'Keep improving', detail: 'Measure progress and refine what works' },
]

const digitalServices = [
  { title: 'Search Engine Optimization', text: 'Improve search visibility with technical, on-page, local, and content-led SEO shaped around the terms your customers use.' },
  { title: 'Content Marketing', text: 'Turn your expertise into useful blogs, landing pages, and social content that builds trust and encourages action.' },
  { title: 'Social Media Marketing', text: 'Grow a consistent social presence with platform-specific content, community management, and focused campaigns.' },
  { title: 'Paid Advertising', text: 'Reach high-intent audiences through planned Google and social campaigns, with clear budgets and conversion tracking.' },
  { title: 'Email Marketing', text: 'Nurture leads and strengthen customer relationships with relevant campaigns and automated journeys.' },
  { title: 'Online Reputation Management', text: 'Support customer confidence through review monitoring, thoughtful responses, and a stronger online presence.' },
]

export default function DigitalMarketingPage() {
  return (
    <main id="top" className="digital-marketing-page">
      <SEO
        title="Digital Marketing Services | Blix Technologies"
        description="Grow your business with digital marketing services from Blix Technologies, including SEO, paid advertising, social media, content, and email marketing."
        keywords="digital marketing services, SEO, social media marketing, content marketing, paid advertising, Blix Technologies"
      />

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="pill2"><i />Digital marketing services · Noida, India</span>
            <h1>Make your digital presence work harder.</h1>
            <p className="lead">Blix brings strategy, creative work, and technology together to help your business reach the right people and grow online.</p>
            <div className="cta">
              <Link to="/#contact" className="btn btn-pink">Talk to our team <span aria-hidden="true">↗</span></Link>
              <Link to="#digital-services" className="hero-text-link">Explore services <span aria-hidden="true">↓</span></Link>
            </div>
            <div className="hero-note"><span /> One connected team, from planning through ongoing improvement</div>
          </div>
          <aside className="hero-visual-wrap" aria-label="Blix digital marketing approach">
            <div className="hero-photo-frame">
              <img src="/studio-session.png" alt="Blix team collaborating on a digital marketing project" fetchPriority="high" />
              <div className="hero-photo-shade" />
              <div className="hero-photo-copy"><span>BUILT AROUND YOUR BUSINESS</span><b>Clear strategy.<br />Marketing with purpose.</b></div>
            </div>
            <div className="hero-focus-list">
              {focusAreas.map((item) => <div key={item.number}><span>{item.number}</span><b>{item.name}</b><small>{item.detail}</small></div>)}
            </div>
          </aside>
        </div>
      </section>

      <Clients />

      <section className="about digital-intro">
        <div className="wrap">
          <div className="collage about-visual reveal-left">
            <img src="/campaign-planning.png" alt="A marketing team planning a campaign" loading="lazy" decoding="async" />
            <div className="about-photo-note">
              <span className="about-note-mark" aria-hidden="true">b</span>
              <span><strong>Strategy meets creativity</strong><small>Digital growth shaped around your goals</small></span>
            </div>
          </div>
          <div>
            <span className="kicker">A practical growth partner</span>
            <h2 className="h2">Digital marketing that drives meaningful results</h2>
            <p>Every business has different customers, priorities, and challenges. We take time to understand yours, then create a clear plan to improve visibility, attract the right audience, and make it easier for people to choose you.</p>
            <p>From SEO and paid campaigns to social media and content, each activity works toward your goals. We measure progress, share what we learn, and improve the plan as your business grows.</p>
            <Link className="btn btn-line" to="/#contact">Plan your next step</Link>
          </div>
        </div>
      </section>

      <section className="services digital-services" id="digital-services">
        <div className="wrap">
          <div className="top">
            <div><span className="kicker">Our service list</span><h2 className="h2">Digital marketing, connected</h2></div>
            <p><strong>One plan, the right channels</strong>Bring search, content, social media, advertising, and email together around what your business needs most.</p>
          </div>
          <div className="bento">
            {digitalServices.map((service, index) => (
              <article className="tile" key={service.title}>
                <div className="tile-head"><div className="ic" aria-hidden="true"><span className="dm-tile-number">0{index + 1}</span></div><h3>{service.title}</h3></div>
                <p>{service.text}</p>
                <Link className="go" to="/#contact">Talk to our team <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Why />

      <section className="process digital-process">
        <div className="wrap">
          <span className="kicker kicker-light">How we work</span>
          <h2 className="h2">A clear process from first conversation to better results</h2>
          <div className="steps">
            <article className="st"><h3>Understand</h3><p>We learn about your business, audience, current channels, and goals before recommending a direction.</p></article>
            <article className="st"><h3>Plan &amp; deliver</h3><p>We agree on priorities and timelines, then our specialists put the strategy into action.</p></article>
            <article className="st"><h3>Measure &amp; improve</h3><p>We review meaningful performance data with you and use it to guide the next improvements.</p></article>
          </div>
        </div>
      </section>

      <Voices />
      <HomeFaq />
      <Contact />
    </main>
  )
}
