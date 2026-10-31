import { useEffect, useState } from 'react'

const whatsappNumber = '918448983343'

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  // Auto popup after 5 seconds on site
  useEffect(() => {
    const hasSeen = sessionStorage.getItem('blix_lead_popup_seen')
    if (hasSeen) return undefined

    const timer = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem('blix_lead_popup_seen', 'true')
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      `*New Inquiry via Blix Website*`,
      `*Name:* ${data.get('name')}`,
      `*Phone:* ${data.get('phone') || 'Not provided'}`,
      `*Email:* ${data.get('email')}`,
      `*Requirement:* ${data.get('message')}`,
    ].join('\n')
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setOpen(false)
  }

  return (
    <>
      <a
        className="floating-whatsapp"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="We are online. Chat with Blix Technologies on WhatsApp at 84489 83343"
        title="We are online. Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.02 3.2A12.68 12.68 0 0 0 5.1 22.33L3.4 28.6l6.42-1.68A12.7 12.7 0 1 0 16.02 3.2Zm0 23.2c-2 0-3.97-.54-5.68-1.56l-.4-.24-3.8 1 .99-3.7-.26-.42A10.53 10.53 0 1 1 16.02 26.4Zm5.78-7.88c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.21.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.53.1-.22.05-.4-.03-.57-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.54-.73-.55h-.63c-.22 0-.57.08-.87.4-.3.32-1.14 1.11-1.14 2.7 0 1.6 1.17 3.14 1.33 3.36.16.21 2.3 3.52 5.58 4.94.78.34 1.4.54 1.88.69.79.25 1.5.21 2.06.13.63-.1 1.9-.78 2.17-1.54.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z" /></svg>
        <span>We are Online!</span>
      </a>

      {/* Floating circular contact icon */}
      <button
        className="floating-contact-button"
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Send Inquiry"
        title="Get in touch with Blix"
      >
        <span className="floating-btn-pulse" aria-hidden="true" />
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </button>

      {open && (
        <div className="contact-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="floating-contact-title">
            <button className="contact-modal-close" type="button" onClick={() => setOpen(false)} aria-label="Close contact form">×</button>
            <span className="contact-modal-kicker">Let’s Talk · Blix Technologies</span>
            <h2 id="floating-contact-title">Let’s Grow Your <span className="text-pink">Business</span></h2>
            <p>Fill in the details below and our team will get back to you with the right strategy.</p>
            <form onSubmit={handleSubmit}>
              <label>Full Name *<input name="name" placeholder="e.g. Rahul Sharma" autoComplete="name" required /></label>
              <div className="modal-two-col">
                <label>Phone Number *<input name="phone" type="tel" placeholder="+91 98765 43210" autoComplete="tel" required /></label>
                <label>Email Address *<input name="email" type="email" placeholder="name@company.com" autoComplete="email" required /></label>
              </div>
              <label>How Can We Help You? *<textarea name="message" rows="3" placeholder="Tell us about your project or marketing goals..." required /></label>
              <button className="btn btn-pink" type="submit">Submit &amp; Chat on WhatsApp →</button>
            </form>
          </section>
        </div>
      )}
    </>
  )
}
