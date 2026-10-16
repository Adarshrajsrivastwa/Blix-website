const publications = [
  { name: 'Clutch', src: 'clutch.png' },
  { name: 'GoodFirms', src: 'goodfirms.png' },
  { name: 'Trustpilot', src: 'trustpilot.png' },
  { name: 'Justdial', src: 'justdial.png' },
  { name: 'Dailyhunt', src: 'dailyhunt.png' },
  { name: 'IndiaMART', src: 'indiamart.png' },
]

function LogoSet({ duplicate = false }) {
  return (
    <div className="featured-logo-set" aria-hidden={duplicate || undefined}>
      {publications.map(({ name, src }) => (
        <div className="featured-logo" key={name}>
          <img src={`/featured-logos/${src}`} alt={duplicate ? '' : name} />
        </div>
      ))}
    </div>
  )
}

export default function FeaturedWith() {
  return (
    <section className="featured-with" aria-label="Featured on">
      <div className="wrap">
        <span className="kicker">Featured on</span>
        <h2 className="h2">Recognized by trusted platforms</h2>
      </div>
      <div className="featured-carousel" role="group" aria-label="Featured platform logos, continuously sliding">
        <div className="featured-track">
          <LogoSet />
          <LogoSet duplicate />
        </div>
      </div>
    </section>
  )
}
