import AppLink from './AppLink.jsx'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="collage about-visual reveal-left">
          <img src="/campaign-planning.png" alt="Creative team planning a brand campaign" loading="lazy" decoding="async" />
          <div className="about-photo-note">
            <span className="about-note-mark" aria-hidden="true">b</span>
            <span><strong>Strategy meets creativity</strong><small>Thoughtful digital growth, built around your goals</small></span>
          </div>
        </div>
        <div>
          <h2 className="h2 reveal-slide reveal-right"><span>Digital Marketing Agency in Noida</span><span>that Offers Guaranteed Results</span></h2>
          <p className="reveal reveal-right">Blix Technologies is a globally recognized digital marketing agency based in Noida, India, celebrated for raising the bar in quality and innovation. We deliver impactful marketing and advertising solutions tailored to each client's goals, working tirelessly to exceed expectations. With a creative approach, strategic expertise and a client-first mindset, we stand among India's top digital marketing agencies.</p>
          <AppLink className="btn btn-line agency-link-button reveal-zoom reveal-right" to="/about">Know more about agency</AppLink>
        </div>
      </div>
    </section>
  )
}
