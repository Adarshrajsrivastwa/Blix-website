import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

const technologies = [
  ['01', 'WordPress', 'Flexible, easy-to-manage websites for business, publishing, and e-commerce.'],
  ['02', 'PHP', 'Secure, dynamic web solutions tailored to your business requirements.'],
  ['03', 'Shopify', 'High-performing online stores with a smooth, trustworthy shopping experience.'],
  ['04', 'Node.js', 'Scalable, real-time applications and modern server-side experiences.'],
  ['05', 'React', 'Fast, responsive, interactive interfaces built for modern web products.'],
  ['06', 'Angular', 'Structured, scalable single-page applications for feature-rich experiences.'],
]

const process = [
  ['01', 'Discover', 'Understand your business, audience, goals, and user needs.'],
  ['02', 'Strategize', 'Plan the site structure, features, and technology for long-term growth.'],
  ['03', 'Design', 'Create a clear, distinctive experience that reflects your brand.'],
  ['04', 'Develop', 'Build responsive pages with reliable functionality and smooth navigation.'],
  ['05', 'Test', 'Check performance, security, responsiveness, and functionality before launch.'],
  ['06', 'Maintain', 'Support your website with updates, security checks, and improvements.'],
]

export default function WebDevelopmentPage() {
  return (
    <main id="top" className="digital-marketing-page dm-redesign webdev-redesign">
      <SEO title="Web Design & Development | Blix Technologies" description="Blix Technologies designs and builds secure, responsive websites and web products with compelling user experiences and scalable technology." keywords="web design Noida, website development, web development company India, Shopify, WordPress, React development" />

      <section className="dm-new-hero">
        <div className="wrap dm-new-hero-grid">
          <div className="dm-new-hero-copy">
            <span className="dm-new-eyebrow"><i /> Web design & development · Blix Technologies</span>
            <h1>Build a digital experience that <span>moves you forward.</span></h1>
            <p>We design and build industry-leading web products that bring value to your customers, delivered with compelling user experiences.</p>
            <Link className="dm-pink-link" to="#contact">Discuss your website <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="dm-new-hero-image webdev-hero-image"><img src="/webdev-hero.png" alt="Desktop, tablet, and phone showing a website and its code" fetchPriority="high" /><div className="webdev-hero-card"><span>DESIGN · BUILD · GROW</span><b>Your brand’s best<br />digital home.</b></div></div>
        </div>
      </section>

      <section className="dm-new-intro">
        <div className="wrap dm-new-intro-grid">
          <div className="dm-new-intro-image webdev-intro-image"><img src="/webdev-intro.png" alt="Designer working on a laptop with UX and UI interface panels" loading="lazy" /><span>MADE FOR PEOPLE <b>↗</b></span></div>
          <div className="dm-new-copy">
            <span className="dm-new-eyebrow">A best-in-class web development partner</span>
            <h2>Become a digital stand-out.</h2>
            <p>Stand out online with a website that attracts and engages your audience. Blix Technologies creates sites that are visually distinctive, easy to use, and work smoothly across devices.</p>
            <p>From polished business websites to robust e-commerce platforms, we build secure, scalable solutions that represent your brand and deliver a dependable experience for every visitor.</p>
          </div>
        </div>
      </section>

      <section className="webdev-basics">
        <div className="wrap"><div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Website development, simply explained</span><h2>Your website, built<br /><span>to work beautifully.</span></h2></div><p>Website development brings design, functionality, and technology together to create the online space where customers discover and interact with your business.</p></div>
          <div className="webdev-basics-grid"><article><span>01</span><h3>Design & experience</h3><p>Build an appealing, intuitive website that reflects your brand, earns trust, and helps visitors take the next step.</p></article><article><span>02</span><h3>Functionality & performance</h3><p>Make every interaction smooth with fast loading, responsive layouts, and reliable features across devices.</p></article><article><span>03</span><h3>Scalability & security</h3><p>Choose a secure foundation that can handle growth and adapt as your business needs change.</p></article></div>
        </div>
      </section>

      <section className="webdev-tech">
        <div className="wrap"><div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Modern technology stack</span><h2>Website development:<br /><span>the tools we use.</span></h2></div><p>We match the technology to your product, team, and goals—so the result is practical to manage and ready to grow.</p></div>
          <div className="dm-new-service-grid">{technologies.map(([number, title, text]) => <article className="dm-new-service-card" key={number}><div className="dm-new-card-top"><span>{number}</span><i aria-hidden="true">↗</i></div><h3>{title}</h3><p>{text}</p><Link className="dm-pink-link" to="#contact">Discuss your project <span aria-hidden="true">→</span></Link></article>)}</div>
        </div>
      </section>

      <section className="webdev-value"><div className="wrap webdev-value-grid"><div className="dm-new-copy"><span className="dm-new-eyebrow">Why professional website development?</span><h2>A stronger online presence, built to perform.</h2><p>An outdated or difficult-to-use website can make it harder for your business to reach its potential. We bring creative design, reliable performance, and room to scale together in a website that works for you around the clock.</p><p>Whether it’s a corporate site or an e-commerce store, we focus on fast loading, security, mobile usability, and clear paths that help visitors become customers.</p><Link className="dm-pink-link" to="#contact">Plan your website <span aria-hidden="true">↗</span></Link></div><div className="webdev-value-image"><img src="/webdev-value.png" alt="Laptop on a desk showing a product page for a yellow sofa" loading="lazy" /><div><span>BUILT AROUND YOUR BUSINESS</span><b>Useful by design.<br />Ready to grow.</b></div></div></div></section>

      <section className="webdev-process"><div className="wrap"><div className="dm-new-section-head"><div><span className="dm-new-eyebrow">From first conversation to launch</span><h2>A thoughtful process.<br /><span>A better website.</span></h2></div><p>We work collaboratively, keep decisions transparent, and guide your project through each stage.</p></div><div className="webdev-process-grid">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="dm-new-cta"><div className="wrap dm-new-cta-inner"><div><span className="dm-new-eyebrow">Ready to build a website that works for you?</span><h2>Let’s create your next digital success.</h2><p>Connect with our web development experts for a free consultation and a site built around your customers and goals.</p></div><Link className="dm-new-cta-link" to="/#contact">Get a free proposal <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  )
}
