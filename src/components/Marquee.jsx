const items = ['SEO', 'Social media', 'Google Ads', 'Web development', 'App development', '360 marketing']

export default function Marquee() {
  return (
    <div className="marq" aria-hidden="true">
      <div>
        {[...items, ...items].map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  )
}
