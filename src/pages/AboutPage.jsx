import SEO from '../components/SEO.jsx'

const brands = ['Apollo Hospitals', 'Bajaj Finserv', 'Airtel', 'Honda', 'Mahindra']
const markets = ['India', 'US', 'UK', 'Canada', 'UAE', 'Singapore', 'Australia']
const stats = [
  { value: '2019', label: 'Founded in Noida (Delhi NCR), India' },
  { value: '7', label: 'Countries served across global markets' },
  { value: '360°', label: 'Full-service digital stack under one roof' },
]

export default function AboutPage() {
  const aboutLd = [
    {
      id: 'about',
      data: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        mainEntity: {
          '@type': 'Organization',
          name: 'Blix Technologies',
          foundingDate: '2019',
          foundingLocation: 'Noida, Uttar Pradesh, India',
          description: 'Full-service AI digital marketing agency headquartered in Noida (Delhi NCR), India, dedicated to driving business growth with innovative strategies, creative storytelling, and data-driven insights.',
        },
      },
    },
  ]

  return (
    <main id="top">
      <SEO
        title="About Us | Digital Marketing Agency in Noida"
        description="Learn about Blix Technologies — a Noida-based AI digital marketing agency founded in 2019, serving brands across India, US, UK, Canada, UAE, Singapore, and Australia. Meet the team, vision, and story."
        keywords="about Blix Technologies, digital marketing agency Noida, Blix Technologies story, AI marketing company India, Noida marketing agency"
        jsonLd={aboutLd}
      />
      <div className="page-head">
        <div className="wrap">
          <span className="kicker kicker-light reveal-blur">About us</span>
          <h1 className="reveal">We're working to grow your business</h1>
          <p className="about-lead reveal">At Blix Technologies, our mission is to deliver transformative growth for every client, measuring success solely by the tangible impact on their bottom line. As a full-service digital marketing agency and one of India's leading web development companies, we combine innovation, expertise, and strategy to help brands achieve lasting success.</p>
        </div>
      </div>

      <section className="about-page">
        <div className="wrap">
          <div className="about-grid">
            <div className="collage reveal-left" aria-hidden="true" data-vi="rotate" data-vi-speed="5">
              <div className="a">
                <img src="/campaign-planning.png" alt="" loading="lazy" decoding="async" />
              </div>
              <div className="b">
                <svg viewBox="0 0 100 100" style={{ width: '58%', height: '58%' }}>
                  <circle cx="50" cy="50" r="34" fill="none" stroke="#fff" strokeWidth="10" strokeDasharray="120 94" />
                  <circle cx="50" cy="50" r="34" fill="none" stroke="#fff" strokeOpacity=".4" strokeWidth="10" strokeDasharray="70 144" strokeDashoffset="-120" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="about-h3 reveal-slide">Who we are</h3>
              <p className="reveal">Blix Technologies is a full-service digital marketing agency headquartered in Noida (Delhi NCR), India, dedicated to driving business growth without compromising on ethics or customer trust. We blend innovative strategies, creative storytelling, and data-driven insights to help brands shine in today's competitive digital world.</p>
              <p className="reveal">Our work has earned the trust of leading brands such as Apollo Hospitals, Bajaj Finserv, Airtel, Honda, and Mahindra. Every collaboration is built on transparency, innovation, and measurable results, ensuring lasting success for our clients.</p>
              <div className="trust reveal-stagger">
                {brands.map((b) => (
                  <span key={b} className="trust-chip reveal-zoom">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="story">
          <div className="wrap story-grid">
            <div>
              <span className="kicker kicker-light reveal">Our story</span>
              <h3 className="reveal">From Noida to global markets</h3>
              <p className="reveal">Since its inception in 2019, Blix Technologies has steadily grown to become one of India's leading names in SEO, social media marketing, digital marketing services, website designing, and mobile app development. Our commitment to innovation, transparency, and results has helped us build a strong reputation in the industry.</p>
              <p className="reveal">Today, we serve a diverse portfolio of clients — from large conglomerates and renowned brands to ambitious SMEs — across India and in global markets including the US, UK, Canada, UAE, Singapore, and Australia.</p>
              <div className="trust reveal-stagger">
                {markets.map((m) => (
                  <span key={m} className="trust-chip reveal-zoom">{m}</span>
                ))}
              </div>
            </div>
            <div className="story-stats reveal-stagger">
              {stats.map((s) => (
                <div key={s.value} className="stat reveal-flip" data-vi="up" data-vi-speed="20">
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wrap vm-wrap reveal-stagger">
          <div className="vm-card reveal-left" data-vi="up" data-vi-speed="20">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3>Our vision</h3>
            <p>Blix Technologies strives to be among the foremost digital marketing agencies, delivering impactful digital sales solutions, crafting effective marketing strategies, and providing expert internet brand management. Our vision is to stand out as a beacon of innovation and excellence in the ever-evolving digital marketing landscape, guiding businesses toward growth and lasting online success.</p>
          </div>
          <div className="vm-card reveal-right" data-vi="up" data-vi-speed="20">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1.5" />
              </svg>
            </div>
            <h3>Our mission</h3>
            <p>Our mission is to help businesses of all sizes thrive in their internet marketing efforts. We are dedicated to delivering top-notch, high-quality marketing solutions at a cost-effective price. Our partnership doesn't stop after completing your initial project; we continue to collaborate with you to ensure you stay competitive and achieve ongoing success in your online business ventures.</p>
          </div>
        </div>

        <div className="wrap">
          <div className="director reveal-zoom" data-vi="zoom">
            <div>
              <span className="kicker kicker-light reveal">Director's message</span>
              <h3 className="reveal">Always one step ahead</h3>
              <p className="reveal">Blix Technologies is led by our Director, Rahul — a seasoned digital strategist with 12+ years of global experience helping brands grow and stand out. His vision and expertise have guided businesses toward stronger online presence, measurable results, and lasting success in competitive markets.</p>
              <p className="reveal">We provide a complete range of digital solutions, including SEO, social media marketing, digital marketing, website designing and mobile app development. By fusing creativity, technology, and strategy, we craft tailored solutions that drive growth and build enduring customer relationships.</p>
              <div className="sign">
                <b className="reveal">Rahul</b>
                <span className="reveal">Director, Blix Technologies</span>
              </div>
            </div>
            <div className="director-card reveal-right">
              <div className="d-av" aria-hidden="true">R</div>
              <b>Rahul</b>
              <span>Director & Digital Strategist</span>
              <small>12+ years of global experience</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
