const clients = [
  { name: 'RCI Real Capital Infra', src: 'rci.webp' },
  { name: 'Renepho Hospital', src: 'renepho.webp' },
  { name: 'Junior Ville Preschool and Daycare', src: 'junior-ville.webp' },
  { name: 'Tech Haven', src: 'tech-haven.webp' },
  { name: 'Dent-O-Touch Advanced Laser Dental Clinic', src: 'dent-o-touch.webp' },
  { name: 'Investment Mantra', src: 'investment-mantra.webp' },
  { name: 'Banaras Caterers', src: 'banaras-caterers.webp' },
  { name: 'Property Nexus', src: 'property-nexus.webp' },
  { name: 'RTO Agent Services', src: 'rto-agent-services.webp' },
  { name: 'Investors Junction', src: 'investors-junction.webp' },
]

function LogoSet({ duplicate = false }) {
  return (
    <div className="client-logo-set" aria-hidden={duplicate || undefined}>
      {clients.map(({ name, src }) => (
        <div className="client-logo" key={name}>
          <img src={`/client-logos/${src}`} alt={duplicate ? '' : name} />
        </div>
      ))}
    </div>
  )
}

export default function Clients() {
  return (
    <section className="clients" aria-label="Recent clients">
      <div className="wrap">
        <span className="kicker">Our recent clients</span>
        <h2 className="h2">Brands that trust our work</h2>
      </div>
      <div className="client-carousel" role="group" aria-label="Recent client logos, continuously sliding">
        <div className="client-track">
          <LogoSet />
          <LogoSet duplicate />
        </div>
      </div>
    </section>
  )
}
