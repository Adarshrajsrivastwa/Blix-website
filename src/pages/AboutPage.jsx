import SEO from '../components/SEO.jsx'
import { services } from './ServicesPage.jsx'

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
    <main id="top" className="about-route">
      <SEO
        title="About Us | Digital Marketing Agency in Noida"
        description="Learn about Blix Technologies — a Noida-based AI digital marketing agency founded in 2019, serving brands across India, US, UK, Canada, UAE, Singapore, and Australia. Meet the team, vision, and story."
        keywords="about Blix Technologies, digital marketing agency Noida, Blix Technologies story, AI marketing company India, Noida marketing agency"
        jsonLd={aboutLd}
      />
      <div className="page-head">
        <div className="wrap">
          <h1 className="reveal">About Us</h1>
        </div>
      </div>

      <section className="about-intro">
        <div className="wrap">
          <h2>We’re Working to Grow Your Business</h2>
          <p>At Blix Technologies, our mission is to deliver transformative growth for every client, measuring success solely by the tangible impact on their bottom line. As a full-service digital marketing agency and one of India’s leading web development companies, we combine innovation, expertise, and strategy to help brands achieve lasting success.</p>
        </div>
      </section>

      <section className="about-page">
        <div className="wrap">
          <div className="about-grid">
            <img className="about-team-photo reveal-left" src="/campaign-planning.png" alt="Blix Technologies team planning a digital campaign" loading="lazy" decoding="async" />
            <div>
              <h3 className="about-h3 reveal-slide">Who We Are</h3>
              <p className="reveal">Blix Technologies is a full-service digital marketing agency headquartered in Noida (Delhi NCR), India, dedicated to driving business growth without compromising on ethics or customer trust. We blend innovative strategies, creative storytelling, and data-driven insights to help brands shine in today's competitive digital world.</p>
              <p className="reveal">Our work has earned the trust of leading brands such as Apollo Hospitals, Bajaj Finserv, Airtel, Honda, and Mahindra. Every collaboration is built on transparency, innovation, and measurable results, ensuring lasting success for our clients.</p>
            </div>
          </div>
        </div>

        <div className="story">
          <div className="wrap story-grid">
            <div>
              <h3 className="reveal">Our Story</h3>
              <p className="reveal">Since its inception in 2019, Blix Technologies has steadily grown to become one of India's leading names in SEO, social media marketing, digital marketing services, website designing, and mobile app development. Our commitment to innovation, transparency, and results has helped us build a strong reputation in the industry.</p>
              <p className="reveal">Today, we serve a diverse portfolio of clients — from large conglomerates and renowned brands to ambitious SMEs — across India and in global markets including the US, UK, Canada, UAE, Singapore, and Australia.</p>
            </div>
            <img className="about-story-photo reveal-right" src="/studio-session.png" alt="Blix Technologies team collaborating on a client strategy" loading="lazy" decoding="async" />
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
            <h3>Our Vision</h3>
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
            <h3>Our Mission</h3>
            <p>Our mission is to help businesses of all sizes thrive in their internet marketing efforts. We are dedicated to delivering top-notch, high-quality marketing solutions at a cost-effective price. Our partnership doesn't stop after completing your initial project; we continue to collaborate with you to ensure you stay competitive and achieve ongoing success in your online business ventures.</p>
          </div>
        </div>

        <section className="about-services">
          <div className="wrap">
            <div className="about-services-head">
              <span>OUR SERVICES</span>
              <h2>What Makes Blix Technologies the Go-To Digital Partner</h2>
              <div className="about-service-dots" aria-hidden="true">••••••••••••••••</div>
              <p>We focus on empowering businesses to strengthen their online visibility and engage meaningfully with their target audience. Through our comprehensive range of services, we ensure brands achieve these objectives with measurable success.</p>
            </div>
            <div className="about-services-grid">
              {services.map((service) => (
                <div className="about-service-item" key={service.slug}>
                  <div className="about-service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-director">
        <div className="wrap">
          <div className="director reveal-zoom" data-vi="zoom">
            <div>
              <h3 className="reveal">Blix Technologies—Always One Step Ahead</h3>
              <p className="reveal">Blix Technologies is led by our Director, Rahul — a seasoned digital strategist with 12+ years of global experience helping brands grow and stand out. His vision and expertise have guided businesses toward stronger online presence, measurable results, and lasting success in competitive markets.</p>
              <p className="reveal">We provide a complete range of digital solutions, including SEO, social media marketing, digital marketing, website designing and mobile app development. By fusing creativity, technology, and strategy, we craft tailored solutions that drive growth and build enduring customer relationships.</p>
              <div className="sign">
                <b className="reveal">Rahul</b>
                <span className="reveal">Director, Blix Technologies</span>
              </div>
            </div>
            <img className="director-photo reveal-right" src="/rahul-director.png" alt="Rahul, Director of Blix Technologies" loading="lazy" decoding="async" />
          </div>
        </div>
        </section>
      </section>
    </main>
  )
}
