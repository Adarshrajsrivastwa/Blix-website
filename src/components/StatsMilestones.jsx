import { useEffect, useRef, useState } from 'react'

const statsData = [
  {
    id: 'projects',
    value: 1250,
    suffix: '+',
    label: 'Total Projects Delivered',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: 'clients',
    value: 500,
    suffix: '+',
    label: 'Happy Clients',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'countries',
    value: 15,
    suffix: '+',
    label: 'Countries Served',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

function StatCounterItem({ stat, trigger }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const end = stat.value
    const duration = 1600
    const frameRate = 1000 / 60
    const totalFrames = Math.round(duration / frameRate)
    let frame = 0

    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start + (end - start) * ease)
      setCount(current)

      if (frame >= totalFrames) {
        clearInterval(timer)
        setCount(end)
      }
    }, frameRate)

    return () => clearInterval(timer)
  }, [trigger, stat.value])

  return (
    <div className="stats-strip-item">
      <div className="stats-strip-icon" aria-hidden="true">
        {stat.icon}
      </div>
      <div className="stats-strip-data">
        <div className="stats-strip-number">
          <span className="stats-strip-digits">{count.toLocaleString()}</span>
          <span className="stats-strip-plus">{stat.suffix}</span>
        </div>
        <span className="stats-strip-label">{stat.label}</span>
      </div>
    </div>
  )
}

export default function StatsMilestones() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-strip-section" ref={sectionRef} aria-label="Key Milestones">
      <div className="wrap">
        <div className="stats-strip-bar">
          {statsData.map((stat, idx) => (
            <div key={stat.id} className="stats-strip-cell">
              <StatCounterItem stat={stat} trigger={inView} />
              {idx < statsData.length - 1 && <span className="stats-strip-divider" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
