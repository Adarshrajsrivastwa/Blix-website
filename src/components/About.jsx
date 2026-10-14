import AppLink from './AppLink.jsx'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
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
          <span className="kicker reveal">About the agency</span>
          <h2 className="h2 reveal-slide">A Noida agency that raises the bar</h2>
          <p className="reveal">Blix Technologies is a globally recognized digital marketing agency based in Noida, India, celebrated for raising the bar in quality and innovation. We deliver impactful marketing and advertising solutions tailored to each client's goals, working tirelessly to exceed expectations. With a creative approach, strategic expertise and a client-first mindset, we stand among India's top digital marketing agencies.</p>
          <AppLink className="btn btn-line reveal-zoom" to="/about">Know more about agency</AppLink>
        </div>
      </div>
    </section>
  )
}
