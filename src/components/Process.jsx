const steps = [
  { icon: 'search', title: 'Understand your market', text: 'We study your audience and competitors before planning anything.' },
  { icon: 'campaign', title: 'Launch tailored campaigns', text: 'Content, ads and search work built around your goals.' },
  { icon: 'chart', title: 'Measure and improve', text: 'Analytics guide every next decision so ROI keeps growing.' },
]

function StepIcon({ name }) {
  const paths = {
    search: <><circle cx="10.8" cy="10.8" r="6.3" /><path d="m16 16 4.2 4.2M8.5 10.8h4.6M10.8 8.5v4.6" /></>,
    campaign: <><path d="M4 13.5V8.8a1.8 1.8 0 0 1 1.8-1.8h3.3L18 3v16l-8.9-4H5.8A1.8 1.8 0 0 1 4 13.5Z" /><path d="m8 15 1.5 5h3L11 15M20 9v4" /></>,
    chart: <><path d="M4 19.5h17M6.5 16V11M12 16V6M17.5 16V9" /><path d="m5.5 8 5-3 5.2 2 4.8-4" /></>,
  }
  return <svg className="st-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

export default function Process() {
  return (
    <section className="process">
      <div className="wrap">
        <span className="kicker reveal">How we work</span>
        <h2 className="h2 reveal">Great experience, delivered quickly, with the best digital marketing</h2>
        <div className="steps reveal-stagger">
          {steps.map((s) => (
            <div key={s.title} className="st reveal-zoom" data-vi="zoom">
              <div className="st-mark"><span className="st-number" aria-hidden="true" /> <StepIcon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
