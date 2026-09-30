const testimonials = [
  {
    initials: 'RP',
    name: 'Roshni Patel',
    role: 'GM Sales',
    quote: 'What could be more rewarding than seamless execution without the hassle of constant follow-ups? I partnered with Blix Technologies for my digital marketing needs, and the experience has been nothing short of exceptional. Grateful for the amazing team and excited to continue the journey!',
  },
  {
    initials: 'CN',
    name: 'Chirag Negi',
    role: 'CEO',
    quote: 'The Blix Technologies team is exceptionally professional when it comes to website development. From start to finish, their expertise and creativity ensured a seamless and enjoyable experience. I had a fantastic journey working with them. Thank you team Blix Technologies.',
  },
]

export default function Voices() {
  return (
    <section className="voices" id="voices">
      <div className="wrap">
        <span className="kicker reveal" style={{ color: '#FF7AC9' }}>Client's testimonial</span>
        <h2 className="h2 reveal">Reviews from our happy clients</h2>
        <p className="sub reveal">Your next big idea deserves our creative touch. Let's collaborate on bringing your next business vision to life.</p>
        <div className="vgrid reveal-stagger">
          {testimonials.map((t) => (
            <figure key={t.name} className="q reveal-blur" style={{ margin: 0 }}>
              <p>{t.quote}</p>
              <figcaption className="who">
                <div className="av">{t.initials}</div>
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
