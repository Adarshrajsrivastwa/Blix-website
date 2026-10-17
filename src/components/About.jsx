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
          <span className="kicker reveal">About the agency</span>
          <h2 className="h2 reveal-slide">A Noida agency that raises the bar</h2>
          <p className="reveal">Blix Technologies is a globally recognized digital marketing agency based in Noida, India, celebrated for raising the bar in quality and innovation. We deliver impactful marketing and advertising solutions tailored to each client's goals, working tirelessly to exceed expectations. With a creative approach, strategic expertise and a client-first mindset, we stand among India's top digital marketing agencies.</p>
          <AppLink className="btn btn-line agency-link-button reveal-zoom" to="/about">Know more about agency</AppLink>
        </div>
      </div>
    </section>
  )
}
