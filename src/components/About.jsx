import AppLink from './AppLink.jsx'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="collage reveal-left" aria-hidden="true" data-vi="rotate" data-vi-speed="5">
          <div className="a">
            <svg viewBox="0 0 400 400">
              <g stroke="#fff" strokeOpacity=".08">
                <path d="M0 100H400M0 200H400M0 300H400M100 0V400M200 0V400M300 0V400" />
              </g>
              <polyline points="30,320 100,260 160,285 230,190 290,215 370,100" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="30,340 100,315 160,325 230,285 290,300 370,250" fill="none" stroke="#EC008C" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 10" />
              <circle cx="370" cy="100" r="12" fill="#EC008C" />
              <circle cx="370" cy="100" r="24" fill="#EC008C" opacity=".3" />
              <g fill="#fff" opacity=".85">
                <rect x="40" y="50" width="70" height="10" rx="5" />
                <rect x="40" y="72" width="44" height="10" rx="5" opacity=".5" />
              </g>
            </svg>
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
