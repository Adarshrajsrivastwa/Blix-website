import { useState } from 'react'
import SEO from '../components/SEO.jsx'

const info = [
  {
    title: 'Our address',
    icon: <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />,
    body: <span>NX One, T-3, Office A 423, Techzone 4, Greater Noida West, Uttar Pradesh 201306</span>,
  },
  {
    title: 'Call us',
    icon: <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.25 1z" />,
    body: <a href="tel:+918448983343">+91-84489 83343</a>,
  },
  {
    title: 'Email us',
    icon: <path d="M3 5h18a1 1 0 0 1 1 1v.5l-10 6.5L2 6.5V6a1 1 0 0 1 1-1zm-1 4.2l10 6.5 10-6.5V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />,
    body: <a href="mailto:info@blixtechnologies.com">info@blixtechnologies.com</a>,
  },
  {
    title: 'Working hours',
    icon: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v5.4l3.8 2.3-.8 1.3L11 13V7z" />,
    body: <span>Mon to Fri · 10:00 AM to 7:00 PM</span>,
  },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  const contactLd = [
    {
      id: 'contact',
      data: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        mainEntity: {
          '@type': 'LocalBusiness',
          name: 'Blix Technologies',
          email: 'info@blixtechnologies.com',
          telephone: '+91-8448983343',
          openingHours: ['Mo-Fr 10:00-19:00'],
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'NX One, T-3, Office A 423, Techzone 4',
            addressLocality: 'Greater Noida West',
            addressRegion: 'Uttar Pradesh',
            postalCode: '201306',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 28.4545,
            longitude: 77.504,
          },
        },
      },
    },
  ]

  return (
    <main id="top">
      <SEO
        title="Contact Us | Blix Technologies Noida Office"
        description="Contact Blix Technologies — AI digital marketing agency in Noida (Greater Noida West). Call +91-84489-83343, email info@blixtechnologies.com, or visit our NX One office. Mon–Fri 10 AM to 7 PM."
        keywords="contact Blix Technologies, Noida marketing agency address, digital marketing agency phone, info@blixtechnologies.com, Blix office location"
        jsonLd={contactLd}
      />
      <section className="contact-page">
        <div className="wrap">
          <div className="top reveal">
            <span className="kicker reveal-blur">Get in touch</span>
            <h1 className="h2 reveal-slide" style={{ color: 'var(--indigo)' }}>
              Let's plan your next growth chapter
            </h1>
            <p className="reveal">
              Tell us a little about your business, or just say hi. A senior strategist will reply within one working day — no auto-replies, no generic pitches.
            </p>
          </div>

          <div className="cinfo-grid reveal-stagger">
            {info.map((item) => (
              <div key={item.title} className="cinfo reveal-zoom" data-vi="up" data-vi-speed="20">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="currentColor">{item.icon}</svg>
                </div>
                <h3>{item.title}</h3>
                <span>{item.body}</span>
              </div>
            ))}
          </div>

          <div className="grid">
            <div className="card-info reveal-left" data-vi="up" data-vi-speed="30">
              <div>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
                <span>
                  <h3>Visit our office</h3>
                  NX One, T-3, Office A 423, Techzone 4, Greater Noida West, Uttar Pradesh 201306
                </span>
              </div>
              <div>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.25 1z" /></svg>
                <span>
                  <h3>Sales enquiry</h3>
                  <a href="tel:+918448983343">+91-84489 83343</a>
                </span>
              </div>
              <div>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18a1 1 0 0 1 1 1v.5l-10 6.5L2 6.5V6a1 1 0 0 1 1-1zm-1 4.2l10 6.5 10-6.5V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" /></svg>
                <span>
                  <h3>Email</h3>
                  <a href="mailto:info@blixtechnologies.com">info@blixtechnologies.com</a>
                </span>
              </div>
              <div>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v5.4l3.8 2.3-.8 1.3L11 13V7z" /></svg>
                <span>
                  <h3>Working hours</h3>
                  Mon to Fri, 10:00 AM to 7:00 PM
                </span>
              </div>
            </div>
            <form onSubmit={handleSubmit} noValidate className="reveal-right">
              <input type="text" placeholder="Full name" aria-label="Full name" required />
              <input type="email" placeholder="Email address" aria-label="Email address" required />
              <input type="tel" placeholder="Phone number" aria-label="Phone number" />
              <input type="text" placeholder="Company name (optional)" aria-label="Company name" />
              <select className="full" style={{ width: '100%', padding: '16px 20px', borderRadius: '16px', border: '2px solid var(--line)', background: 'var(--mist)', color: 'var(--ink)', fontSize: '16px', fontFamily: 'inherit', outline: 'none' }}>
                <option value="">How can we help? (pick one)</option>
                <option>SEO &amp; organic growth</option>
                <option>Social Media Marketing</option>
                <option>Google Ads / PPC</option>
                <option>Website Development</option>
                <option>Mobile App Development</option>
                <option>360° Digital Marketing</option>
                <option>Blix Academy enquiry</option>
                <option>Other / Not sure yet</option>
              </select>
              <textarea className="full" placeholder="Tell us a little about your project, goals, and timelines…" aria-label="Message"></textarea>
              <button className="btn btn-pink" type="submit">Send message</button>
              <p className={`ok-msg full${sent ? ' show' : ''}`} role="status">
                Thanks! We've received your message and will reply within one working day.
              </p>
            </form>
          </div>

          <div className="map reveal-zoom" aria-hidden="true" data-vi="zoom">
            <div className="map-pin">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
              <span>Blix Technologies · NX One, Greater Noida West</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
