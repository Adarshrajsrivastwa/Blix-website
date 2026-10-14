const steps = [
  { title: 'Understand your market', text: 'We study your audience and competitors before planning anything.' },
  { title: 'Launch tailored campaigns', text: 'Content, ads and search work built around your goals.' },
  { title: 'Measure and improve', text: 'Analytics guide every next decision so ROI keeps growing.' },
]

export default function Process() {
  return (
    <section className="process">
      <div className="wrap">
        <span className="kicker reveal">How we work</span>
        <h2 className="h2 reveal">Great experience, delivered quickly, with the best digital marketing</h2>
        <div className="steps reveal-stagger">
          {steps.map((s) => (
            <div key={s.title} className="st reveal-zoom" data-vi="zoom">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
