import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

const personalBrandingImage = 'https://blixtechnologies.com/wp-content/uploads/2025/08/personal-branding_blix-2-1024x683.jpg'
const contentImage = 'https://blixtechnologies.com/wp-content/uploads/2025/08/personal-branding_blix_2-1024x628.jpg'

const pillars = [
  ['01', 'Your voice, your brand—designed with purpose', 'We develop a clear brand message, tone, and visual identity that stays consistent across LinkedIn, Instagram, and your personal website.'],
  ['02', 'Smart content that builds authority', 'We plan content around your insights, achievements, and behind-the-scenes moments to showcase your knowledge, values, and credibility.'],
  ['03', 'Boost your digital presence, organically', 'Optimized bios, strong headlines, and platform-specific strategies help the right audience discover you—whether they’re looking for a speaker, collaborator, or expert.'],
  ['04', 'Track growth that actually matters', 'Regular reports on engagement, profile reach, and inbound leads help you understand what is working and how your online presence supports professional growth.'],
]

export default function PersonalBrandingPage() {
  return (
    <main id="top" className="digital-marketing-page dm-redesign personal-branding-page">
      <SEO title="Personal Branding Services | Blix Technologies" description="Build a distinctive personal brand with a clear identity, strategic content, stronger digital visibility, and performance tracking from Blix Technologies." keywords="personal branding services, personal brand strategy, LinkedIn branding, professional brand, Blix Technologies" />

      <section className="dm-new-hero pb-hero">
        <div className="wrap dm-new-hero-grid">
          <div className="dm-new-hero-copy">
            <span className="dm-new-eyebrow"><i /> Personal branding · Blix Technologies</span>
            <h1>You’re the brand. <span>We’re the strategy behind it.</span></h1>
            <p>We craft powerful personal brands that showcase your identity, build trust, and leave a lasting impact.</p>
            <Link className="dm-pink-link" to="#contact">Shape your personal brand <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="dm-new-hero-image pb-hero-image"><img src={personalBrandingImage} alt="Personal branding services by Blix Technologies" fetchPriority="high" /><div className="pb-image-card"><span>YOUR IDENTITY, CLEARLY TOLD</span><b>Be known for<br />what makes you, you.</b></div></div>
        </div>
      </section>

      <section className="dm-new-intro pb-intro">
        <div className="wrap dm-new-intro-grid">
          <div className="dm-new-intro-image pb-intro-image"><img src={contentImage} alt="Personal branding content and visual identity planning" loading="lazy" /><span>YOUR STORY, WITH PURPOSE <b>↗</b></span></div>
          <div className="dm-new-copy">
            <span className="dm-new-eyebrow">Why personal branding is a game-changer</span>
            <h2>Why personal branding is a game-changer.</h2>
            <p>In today’s digital world, people connect with people—not logos. Whether you’re a working professional, entrepreneur, or creator, your personal brand is what sets you apart. At Blix Technologies, we help you craft a brand identity that reflects your values, expertise, and personality—making you stand out in your industry with confidence.</p>
          </div>
        </div>
      </section>

      <section className="pb-pillars">
        <div className="wrap">
          <div className="dm-new-section-head"><div><span className="dm-new-eyebrow">You’re the brand · We’re the strategy</span><h2>Your personal brand,<br /><span>designed with purpose.</span></h2></div><p>From the story you tell to the way people find you, we build a consistent presence that reflects who you are and where you want to go.</p></div>
          <div className="pb-pillar-grid">{pillars.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="pb-related-services">
        <div className="wrap">
          <div><span className="dm-new-eyebrow">Explore connected services</span><h2>Build your brand across every touchpoint.</h2></div>
          <nav aria-label="Related marketing services">
            <Link to="/services/seo">SEO services <span aria-hidden="true">↗</span></Link>
            <Link to="/services/social-media">Social media marketing <span aria-hidden="true">↗</span></Link>
            <Link to="/services/digital-marketing#dm-services">Content marketing <span aria-hidden="true">↗</span></Link>
            <Link to="/services/social-media#social-services">LinkedIn marketing <span aria-hidden="true">↗</span></Link>
          </nav>
        </div>
      </section>


      <section className="pb-measure">
        <div className="wrap pb-measure-inner"><div><span className="dm-new-eyebrow">Ready to make your expertise visible?</span><h2>Build a personal brand people remember.</h2><p>Let’s shape a clear, credible presence that reflects who you are and helps the right people find you.</p></div><a className="dm-new-cta-link" href="https://wa.me/918448983343?text=Hi%20Blix%20Technologies%2C%20I%27d%20like%20to%20discuss%20personal%20branding." target="_blank" rel="noreferrer">WhatsApp enquiry <span aria-hidden="true">↗</span></a></div>
      </section>
    </main>
  )
}
