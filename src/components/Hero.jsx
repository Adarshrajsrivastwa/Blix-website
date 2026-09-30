import { Link } from 'react-router-dom'

const serviceTags = [
  {
    cls: 'tag-seo',
    label: 'SEO',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="6" /><path d="M15 15l6 6" /></svg>),
  },
  {
    cls: 'tag-sem',
    label: 'SEM',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3l14 9-14 9V3z" /><circle cx="15" cy="12" r="1.5" fill="currentColor" /></svg>),
  },
  {
    cls: 'tag-smm',
    label: 'SMM',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M8 10h8M8 14h5M16 9h.01M13 9h.01M10 9h.01" /></svg>),
  },
  {
    cls: 'tag-web',
    label: 'Web Design',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>),
  },
  {
    cls: 'tag-app',
    label: 'Mobile App',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>),
  },
]

function Sparkles() {
  const dots = Array.from({ length: 26 }, (_, i) => {
    const top = 5 + Math.random() * 90
    const left = 5 + Math.random() * 90
    const size = 2 + Math.random() * 4
    const delay = Math.random() * 3
    return { top, left, size, delay, i }
  })
  return (
    <>
      {dots.map((d) => (
        <span
          key={d.i}
          className="ai-sparkle"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animation: `pulse ${2 + d.delay}s ease-in-out ${d.delay}s infinite`,
            opacity: 0.6 + Math.random() * 0.4,
          }}
        />
      ))}
    </>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="pill2 reveal-blur"><i></i>AI Digital Marketing Agency in Noida</span>
          <h1 className="reveal" style={{ lineHeight: '1.1' }}>
            Accelerate Your Business Growth with Expert{' '}
            <em>AI Digital Marketing Solutions</em>
          </h1>
          <p className="lead reveal">
            Grow your brand with personalized, results-driven AI digital marketing strategies from industry-leading experts.
          </p>
          <div className="cta reveal-zoom">
            <Link to="/contact" className="btn btn-pink">Get Started Today</Link>
            <Link to="/services" className="btn btn-line">Explore services</Link>
          </div>
        </div>

        <div className="hero-visual reveal-right" aria-hidden="true" data-vi="up" data-vi-speed="30">
          <div className="ai-stage">
            <div className="orbit">
              <div className="orbit-ring" />
              <div className="orbit-ring r2" />
            </div>

            <svg className="orbit-arrows" viewBox="0 0 100 100" style={{ position: 'absolute', left: '-4%', top: '50%', transform: 'translateY(-50%)', width: '64%', aspectRatio: '1' }}>
              <path d="M50,6 L58,18 L50,16 L58,24" />
              <path d="M8,50 L22,58 L14,50 L22,42" />
              <path d="M50,94 L42,82 L50,84 L42,76" />
            </svg>

            <div className="ai-sphere">
              <Sparkles />
            </div>

            <svg className="ai-robot" viewBox="0 0 200 280">
              <defs>
                <linearGradient id="robotBody" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset=".5" stopColor="#E5ECFF" />
                  <stop offset="1" stopColor="#B9C7FF" />
                </linearGradient>
                <linearGradient id="robotDark" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#2E3192" />
                  <stop offset="1" stopColor="#191756" />
                </linearGradient>
                <radialGradient id="robotEye" cx=".3" cy=".3" r="1">
                  <stop offset="0" stopColor="#8E92FF" />
                  <stop offset=".6" stopColor="#2563EB" />
                  <stop offset="1" stopColor="#EC008C" />
                </radialGradient>
                <linearGradient id="cable" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#EC008C" />
                  <stop offset="1" stopColor="#8E92FF" />
                </linearGradient>
              </defs>

              <path d="M56 222 C 42 212, 36 198, 36 180 L 36 158 C 36 140, 48 126, 62 120 L 70 68 C 74 54, 88 46, 100 46 C 112 46, 126 54, 130 68 L 138 120 C 152 126, 164 140, 164 158 L 164 180 C 164 198, 158 212, 144 222 Z"
                    fill="url(#robotBody)" stroke="url(#robotDark)" strokeWidth="2.5" />

              <rect x="82" y="28" width="36" height="22" rx="8" fill="url(#robotDark)" opacity=".9" />
              <circle cx="100" cy="16" r="5" fill="#EC008C">
                <animate attributeName="r" values="4;6;4" dur="1.8s" repeatCount="indefinite" />
              </circle>
              <path d="M100 21 L 100 28" stroke="url(#robotDark)" strokeWidth="3" strokeLinecap="round" />

              <ellipse cx="100" cy="92" rx="42" ry="32" fill="url(#robotDark)" opacity=".92" />
              <circle cx="84" cy="92" r="9" fill="url(#robotEye)">
                <animate attributeName="opacity" values="1;.4;1" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="116" cy="92" r="9" fill="url(#robotEye)">
                <animate attributeName="opacity" values="1;.4;1" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <path d="M88 112 Q 100 120 112 112" stroke="url(#cable)" strokeWidth="3" fill="none" strokeLinecap="round" />

              <path d="M66 140 Q 50 146 44 162 Q 38 176 52 188 L 66 182 Z" fill="url(#robotBody)" stroke="url(#robotDark)" strokeWidth="2" />
              <ellipse cx="50" cy="188" rx="12" ry="6" fill="url(#robotDark)" />

              <path d="M134 140 Q 150 146 156 162 Q 162 176 148 188 L 134 182 Z" fill="url(#robotBody)" stroke="url(#robotDark)" strokeWidth="2" />
              <ellipse cx="150" cy="188" rx="12" ry="6" fill="url(#robotDark)" />

              <circle cx="100" cy="170" r="18" fill="none" stroke="url(#cable)" strokeWidth="2.5" strokeDasharray="4 4">
                <animateTransform attributeName="transform" type="rotate" from="0 100 170" to="360 100 170" dur="12s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="170" r="8" fill="url(#cable)">
                <animate attributeName="opacity" values="1;.4;1" dur="2.2s" repeatCount="indefinite" />
              </circle>

              <rect x="78" y="206" width="44" height="56" rx="10" fill="url(#robotBody)" stroke="url(#robotDark)" strokeWidth="2.5" />
              <circle cx="100" cy="222" r="4" fill="#2563EB" />
              <circle cx="100" cy="236" r="4" fill="#EC008C" />
              <circle cx="100" cy="250" r="4" fill="#2E3192" />

              <g transform="translate(84 60)">
                <path d="M0 0 L -10 -8" stroke="url(#cable)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="-14" cy="-12" r="5" fill="#EC008C" opacity=".8">
                  <animate attributeName="r" values="3;6;3" dur="1.6s" repeatCount="indefinite" />
                </circle>
                <path d="M32 0 L 40 -10" stroke="url(#cable)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="44" cy="-14" r="5" fill="#8E92FF" opacity=".8">
                  <animate attributeName="r" values="3;6;3" dur="1.9s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>

            <div className="ai-phone">
              <div style={{ position: 'absolute', inset: '14px', borderRadius: '28px', overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
                <svg viewBox="0 0 100 200" style={{ width: '80%', height: '80%' }}>
                  <defs>
                    <linearGradient id="screenG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#FF5CBE" stopOpacity=".5" />
                      <stop offset=".5" stopColor="#8E92FF" stopOpacity=".4" />
                      <stop offset="1" stopColor="#2563EB" stopOpacity=".6" />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="6" width="92" height="188" rx="18" fill="url(#screenG)" />
                  <circle cx="50" cy="70" r="28" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="2" strokeDasharray="3 4">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 70" to="360 50 70" dur="15s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="50" cy="70" r="14" fill="#fff" opacity=".25" />
                  <rect x="16" y="120" width="68" height="8" rx="4" fill="#fff" opacity=".6" />
                  <rect x="16" y="136" width="52" height="6" rx="3" fill="#fff" opacity=".4" />
                  <rect x="16" y="150" width="40" height="6" rx="3" fill="#fff" opacity=".4" />
                  <rect x="16" y="168" width="68" height="20" rx="10" fill="#EC008C" />
                  <rect x="46" y="22" width="8" height="4" rx="2" fill="#fff" opacity=".7" />
                </svg>
              </div>
            </div>

            {serviceTags.map((t) => (
              <div key={t.cls} className={`service-tag ${t.cls}`}>
                <div className="t-ic">{t.icon}</div>
                <div className="t-lbl">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
