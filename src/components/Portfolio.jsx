import { Link } from 'react-router-dom'

const work = [
  {
    type: 'Strategy & growth',
    title: 'Campaigns built around a clear plan',
    description: 'Audience research, channel planning, and measurement brought together from the first brief.',
    image: '/campaign-planning.png',
    imageAlt: 'Team planning a digital marketing campaign',
    className: 'portfolio-strategy',
  },
  {
    type: 'Content & creative',
    title: 'Creative that connects every channel',
    description: 'A consistent brand voice shaped into useful content for social, search, and paid media.',
    image: '/studio-session.png',
    imageAlt: 'Creative team collaborating on campaign ideas',
    className: 'portfolio-creative',
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio" aria-labelledby="portfolio-title">
      <div className="wrap">
        <div className="portfolio-head">
          <div>
            <span className="kicker reveal">Portfolio</span>
            <h2 className="h2 reveal" id="portfolio-title">Strategy, creative, and digital experiences</h2>
          </div>
          <p className="reveal">A preview of the kind of work we bring together to help brands grow online.</p>
        </div>

        <div className="portfolio-grid reveal-stagger">
          {work.map((item, index) => (
            <article className={`portfolio-card ${item.className} reveal-flip`} key={item.title}>
              <div className="portfolio-media">
                <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
                <span className="portfolio-index">BLIX / 0{index + 1}</span>
              </div>
              <div className="portfolio-copy">
                <span className="portfolio-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to="/services" className="portfolio-link">Explore our services <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}

          <article className="portfolio-card portfolio-digital reveal-flip">
            <div className="portfolio-media portfolio-ui" aria-hidden="true">
              <div className="portfolio-ui-window">
                <div className="portfolio-ui-bar"><i /><i /><i /><span>blix.digital</span></div>
                <div className="portfolio-ui-content">
                  <span>BUILT FOR WHAT'S NEXT</span>
                  <b>Digital experiences<br />made to move.</b>
                  <div className="portfolio-ui-button" />
                </div>
                <div className="portfolio-ui-orb" />
              </div>
              <span className="portfolio-index">BLIX / 03</span>
            </div>
            <div className="portfolio-copy">
              <span className="portfolio-type">Web &amp; product</span>
              <h3>Digital experiences with purpose</h3>
              <p>Responsive websites and products designed around real people, clear journeys, and business goals.</p>
              <Link to="/services/web-development" className="portfolio-link">Explore web development <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
