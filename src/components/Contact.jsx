import { useState } from 'react'

const info = [
  {
    title: 'Location',
    icon: <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />,
    body: <span>NX One, Office – T3- A 1111, Techzone – 4, Greater Noida West, Noida, India, 201306</span>,
  },
  {
    title: 'Sales enquiry',
    icon: <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.25 1z" />,
    body: <a href="tel:+918448983343">+91-84489 83343</a>,
  },
  {
    title: 'Email',
    icon: <path d="M3 5h18a1 1 0 0 1 1 1v.5l-10 6.5L2 6.5V6a1 1 0 0 1 1-1zm-1 4.2l10 6.5 10-6.5V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />,
    body: <a href="mailto:info@blixtechnologies.com">info@blixtechnologies.com</a>,
  },
  {
    title: 'Working hours',
    icon: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v5.4l3.8 2.3-.8 1.3L11 13V7z" />,
    body: <span>Mon to Fri, 10:00 AM to 7:00 PM</span>,
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-home-head reveal">
          <span className="kicker">Contact</span>
          <h2 className="h2">Get in touch</h2>
          <p>Have a project in mind? Tell us what you’re looking to achieve and we’ll help you plan the next step.</p>
        </div>
        <div className="grid">
          <div className="card-info reveal-left" data-vi="up" data-vi-speed="25">
            <div className="contact-home-card-head">
              <span>Contact details</span>
              <h3>We’re here to help</h3>
              <p>Reach out directly and our team will point you in the right direction.</p>
            </div>
            <div className="contact-home-list">
              {info.map((item) => (
                <div className="contact-home-item" key={item.title}>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{item.icon}</svg>
                  <span>
                    <h3>{item.title}</h3>
                    {item.body}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} noValidate className="reveal-right">
            <div className="contact-home-form-head full">
              <span>Start a conversation</span>
              <h3>Tell us about your project</h3>
              <p>Share a few details and we’ll help you find the right solution.</p>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Name *"
              aria-label="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              aria-label="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone no."
              aria-label="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="url"
              name="website"
              placeholder="Your website (Optional)"
              aria-label="Your website (Optional)"
              value={formData.website}
              onChange={handleChange}
            />
            <textarea
              className="full"
              name="message"
              placeholder="Message"
              aria-label="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="btn btn-pink"
              style={{ gridColumn: '1 / -1', justifySelf: 'start', cursor: 'pointer' }}
            >
              Submit
            </button>
            <p className={`ok-msg full${sent ? ' show' : ''}`} role="status">
              Thanks! We've received your message and will reply within one working day.
            </p>
          </form>
        </div>
        <div className="contact-map-wrap reveal">
          <iframe
            className="contact-map"
            title="Blix Technologies office location"
            src="https://www.google.com/maps?q=NX%20One%2C%20Office%20T3-A%201111%2C%20Techzone%204%2C%20Greater%20Noida%20West%2C%20Noida%2C%20India&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a className="contact-map-link" href="https://maps.app.goo.gl/UUCY7FeMWDv5mVbQ7" target="_blank" rel="noreferrer">
            Open location in Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  )
}
