import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

const services = [
  { title: 'Search Engine Optimization', text: 'Improve your visibility in search with technical, on-page, local, and content-led SEO built around the terms your customers use.' },
  { title: 'Content Marketing', text: 'Turn expertise into useful blogs, landing pages, and social content that builds trust and helps customers take the next step.' },
  { title: 'Social Media Marketing', text: 'Create a consistent social presence with platform-specific content, community management, and campaigns that reach the right people.' },
  { title: 'Paid Advertising', text: 'Reach high-intent audiences through carefully planned Google and social campaigns, with clear budgets and conversion tracking.' },
  { title: 'Email Marketing', text: 'Nurture leads and strengthen customer relationships with relevant campaigns, automated journeys, and measurable improvements.' },
  { title: 'Online Reputation Management', text: 'Build confidence in your brand through review monitoring, thoughtful responses, and a stronger, more consistent online presence.' },
]

const benefits = [
  { title: 'Professional & Creative Minds', text: 'Work with specialists who bring fresh ideas, clear communication, and practical experience to every campaign.' },
  { title: 'A Strategy Built Around You', text: 'Your goals, audience, and budget shape the plan. We adapt the channels and priorities to fit your business.' },
  { title: 'Client-Oriented Approach', text: 'Stay involved with regular updates, transparent reporting, and a team that listens and responds as your needs evolve.' },
]

function MediaText({ image, alt, title, children, reverse = false }) {
  return (
    <section className={`dm-split${reverse ? ' dm-reverse' : ''}`}>
      <div className="dm-media"><img src={image} alt={alt} loading="lazy" /></div>
      <div className="dm-copy">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  )
}

export default function DigitalMarketingPage() {
  return (
    <main className="dm-page" id="top">
      <SEO
        title="Digital Marketing Services | Blix Technologies"
        description="Grow your business with data-driven digital marketing services from Blix Technologies, including SEO, paid advertising, social media, content, and email marketing."
        keywords="digital marketing services, SEO, social media marketing, content marketing, paid advertising, Blix Technologies"
      />

      <header className="dm-hero">
        <div className="wrap">
          <span className="dm-eyebrow">Blix Technologies</span>
          <h1>Digital Marketing Services</h1>
          <p>Grow your client base with data-driven and targeted strategies</p>
        </div>
      </header>

      <div className="wrap dm-content">
        <MediaText image="/studio-session.png" alt="Digital team working together on a marketing project" title="Digital Marketing That Drives Real Results">
          <p>At Blix Technologies, we provide digital marketing services designed to improve visibility, attract the right customers, and support sustainable growth. From SEO and paid advertising to social media and content, our team builds a practical strategy around your business goals.</p>
          <p>Whether you are launching a new business or growing an established brand, we focus on useful work, clear measurement, and steady improvement—so you can see how your marketing is progressing.</p>
        </MediaText>

        <MediaText image="/campaign-planning.png" alt="Marketing campaign planning materials on a desk" reverse>
          <p>At <strong>Blix Technologies</strong>, we know every business has different customers, priorities, and challenges. We take time to understand your audience and shape a plan that fits your market, resources, and goals.</p>
          <p>From search and social campaigns to content and website optimization, our team connects each activity to a clear purpose. We review performance with you and use the results to make informed improvements over time.</p>
        </MediaText>

        <section className="dm-growth">
          <div className="dm-section-heading">
            <span className="dm-eyebrow">A connected approach</span>
            <h2>Digital Marketing Services Drive Business Growth</h2>
            <p>Reach the right audience, build brand awareness, and create more opportunities to grow.</p>
          </div>
          <MediaText image="/studio-session.png" alt="Creative team discussing digital marketing ideas">
            <p>In today’s digital-first world, customers use online channels to discover, compare, and choose businesses. Digital marketing helps you show up at the right moments, communicate what makes your business useful, and make it easier for people to get in touch.</p>
            <p>A consistent online presence can attract new customers and strengthen relationships with existing ones. With thoughtful targeting and ongoing measurement, your campaigns can stay relevant while making better use of your marketing budget.</p>
          </MediaText>
        </section>

        <section className="dm-services">
          <div className="dm-section-heading dm-heading-left">
            <span className="dm-eyebrow">What we do</span>
            <h2>Our Digital Marketing Services</h2>
            <p>We plan and manage the channels that help your business connect with customers and make progress toward its goals.</p>
          </div>
          <div className="dm-service-grid">
            {services.map((service, index) => (
              <article className="dm-service-card" key={service.title}>
                <span className="dm-card-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link to="/#contact">Learn more <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="dm-why">
          <div className="dm-section-heading">
            <span className="dm-eyebrow">Your growth partner</span>
            <h2>Why Choose Blix for Digital Marketing?</h2>
          </div>
          <MediaText image="/campaign-planning.png" alt="Team planning a client marketing campaign">
            <p>Blix Technologies helps businesses build a stronger online presence with focused digital marketing and a team that stays close to your goals. We combine creative thinking with practical planning to make each campaign purposeful and easy to measure.</p>
            <p><strong>A clear, collaborative process:</strong> We learn about your business, agree on priorities, and keep you informed as work moves forward. You get transparent reporting and recommendations you can act on.</p>
            <p>As your needs change, we can refine the strategy and channel mix together—keeping your marketing aligned with the customers you want to reach.</p>
          </MediaText>
          <div className="dm-benefit-grid">
            {benefits.map((benefit) => (
              <article className="dm-benefit-card" key={benefit.title}>
                <span className="dm-benefit-mark" aria-hidden="true">✳</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="dm-cta">
        <div className="wrap">
          <span className="dm-eyebrow">Ready to grow?</span>
          <h2>Make your digital marketing work harder for your business</h2>
          <p>Talk with our team about your goals and get a tailored plan for reaching the right audience.</p>
          <Link to="/#contact" className="btn btn-pink">Get a free consultation <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  )
}
