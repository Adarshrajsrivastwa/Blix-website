import { useState } from 'react'

const faqs = [
  {
    q: 'What digital marketing services does Blix Technologies offer?',
    a: 'We offer SEO, search and social advertising, social media marketing, personal branding, online reputation management, and web, app, and software development.',
  },
  {
    q: 'Can you create a strategy tailored to my business?',
    a: 'Yes. We start by understanding your business, audience, goals, and current marketing, then recommend a plan suited to your needs.',
  },
  {
    q: 'How soon should I expect to see results?',
    a: 'Timing depends on the service, competition, budget, and starting point. Paid campaigns can generate early data, while SEO and other longer-term work take time to build. We’ll agree on suitable measures and review progress with you.',
  },
  {
    q: 'Do you work with businesses outside Noida?',
    a: 'Yes. We’re based in Noida and work with businesses across India and in international markets.',
  },
  {
    q: 'How can I get started?',
    a: 'Use the contact form below to tell us about your business and what you’re looking to achieve. Our team can discuss the right next steps with you.',
  },
]

export default function HomeFaq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="home-faq" aria-labelledby="home-faq-title">
      <div className="wrap">
        <div className="home-faq-head">
          <h2 className="h2" id="home-faq-title">Frequently asked questions</h2>
          <p>Quick answers about our services, process, and getting started.</p>
        </div>
        <div className="faq-grid">
          {faqs.map(({ q, a }, i) => {
            const answerId = `home-faq-answer-${i}`
            const isOpen = open === i
            return (
              <div key={q} className="faq-item">
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {q}
                  <i aria-hidden="true" className={isOpen ? 'is-open' : ''}>+</i>
                </button>
                <p className="faq-a" id={answerId} hidden={!isOpen}>{a}</p>
              </div>
            )
          })}
        </div>
        <p className="home-faq-contact">Still have a question? <a href="#contact">Talk to our team <span aria-hidden="true">→</span></a></p>
      </div>
    </section>
  )
}
