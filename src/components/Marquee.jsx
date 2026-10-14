const items = ['SEO', 'Social media', 'Google Ads', 'Web development', 'App development', '360 marketing']

export default function Marquee() {
  return (
    <div className="marq" aria-label="Blix services">
      <div>
        <b>What we do</b>
        {items.map((t) => <span key={t}>{t}</span>)}
      </div>
    </div>
  )
}
