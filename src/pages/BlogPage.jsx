import { useState } from 'react'
import SEO from '../components/SEO.jsx'

export const posts = [
  {
    tag: 'SEO',
    image: '/campaign-planning.png',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="6" /><path d="M15 15l6 6" /></svg>),
    date: '28 Sep 2026',
    read: '6 min',
    title: '7 SEO changes you should make before the 2026 festive season',
    text: 'Core Web Vitals, structured data, local pack optimization, and content pruning — here is the shortlist we execute for every client before Diwali traffic spikes.',
  },
  {
    tag: 'Paid Ads',
    image: '/studio-session.png',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8M15 7h6v6" /></svg>),
    date: '22 Sep 2026',
    read: '8 min',
    title: 'Performance Max campaigns: how to structure them for real ROI in India',
    text: 'PMax can work beautifully — or burn your budget. Here is how we set up asset groups, signals, negative keywords, and landing pages for D2C and B2B clients.',
  },
  {
    tag: 'Social Media',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M8 10h8M8 14h5" /></svg>),
    date: '18 Sep 2026',
    read: '5 min',
    title: 'Instagram reels that convert: the 4-part formula we use for clients',
    text: 'Hook, proof, benefit, CTA. It sounds simple but each step has a specific job. Here is our framework with real examples from e-commerce and services brands.',
  },
  {
    tag: 'Web Design',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>),
    date: '12 Sep 2026',
    read: '7 min',
    title: 'Landing page CRO: 11 changes that doubled lead volume for a B2B SaaS client',
    text: 'We rebuilt one form-heavy landing page and doubled qualified lead volume without increasing traffic. Here are the exact design, copy, and trust signals that moved the needle.',
  },
  {
    tag: 'Branding',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>),
    date: '08 Sep 2026',
    read: '6 min',
    title: 'Brand voice in 2026: why AI copy makes consistency more important, not less',
    text: 'AI lets anyone write. It also makes sameness louder than ever. Here is how we build and maintain a distinct, recognizable brand voice across every channel.',
  },
  {
    tag: 'AI & Tools',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M12 2v5M12 17v5M2 12h5M17 12h5" /></svg>),
    date: '02 Sep 2026',
    read: '9 min',
    title: 'The AI tools we actually use every month in a live digital agency',
    text: 'Not every AI tool sticks. Here are the ones still in our workflow after the hype cycle — for ad copy, SEO briefs, creative QA, reporting, and client delivery.',
  },
  {
    tag: 'Email Marketing',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>),
    date: '29 Sep 2026',
    read: '6 min',
    title: 'Welcome emails that turn new subscribers into engaged customers',
    text: 'A useful welcome flow sets expectations, delivers the promised value, and gives readers one clear next step. Here is how to plan the first three emails and measure what earns attention.',
  },
]

const tags = ['SEO', 'Paid Ads', 'Social Media', 'Web Design', 'Branding', 'AI & Tools', 'Email Marketing']

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState('')
  const filteredPosts = activeTag ? posts.filter((post) => post.tag === activeTag) : posts

  const blogLd = [
    {
      id: 'blog',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Blix Technologies Blog',
        description: 'Playbooks, tactics, and case studies from a live AI digital marketing agency in Noida.',
        blogPost: posts.map((p, i) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          description: p.text,
          datePublished: p.date,
          keywords: p.tag,
          articleSection: p.tag,
          author: { '@type': 'Organization', name: 'Blix Technologies' },
          position: i + 1,
        })),
      },
    },
  ]

  return (
    <main id="top">
      <SEO
        title="Blog | Digital Marketing, SEO & AI Case Studies"
        description="Read practical playbooks, SEO tactics, paid ads case studies, social media strategies, and AI tool reviews from Blix Technologies — a Noida digital marketing agency."
        keywords="digital marketing blog, SEO case studies, Google Ads tips, social media strategy blog, AI marketing tools, Blix Technologies blog"
        jsonLd={blogLd}
      />
      <section className="sd-head">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="kicker reveal-blur">Blix blog</span>
          <h1 className="reveal" style={{ maxWidth: '16em', margin: '0 auto' }}>Playbooks, tactics, and case studies from our agency floor</h1>
          <p className="about-lead reveal" style={{ maxWidth: '40em', margin: '18px auto 0' }}>
            Practical, non-fluffy writing from the team running campaigns every day. No frameworks without screenshots, no advice without results.
          </p>
          <div className="tag-cloud reveal-stagger" role="group" aria-label="Filter articles by topic">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`tag-chip reveal${activeTag === tag ? ' active' : ''}`}
                aria-pressed={activeTag === tag}
                onClick={() => setActiveTag((currentTag) => currentTag === tag ? '' : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="sd-body" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="blog-grid reveal-stagger">
            {filteredPosts.map((p) => (
              <article key={p.title} className="blog-card reveal-flip" data-vi="up" data-vi-speed="15">
                <div className="blog-img">
                  {p.image && <img className="blog-photo" src={p.image} alt="" loading="lazy" decoding="async" />}
                  <span className="b-tag">{p.tag}</span>
                  {!p.image && <div className="blog-ic">{p.icon}</div>}
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span><b>{p.date}</b></span>
                    <span>·</span>
                    <span>{p.read} read</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <a className="blog-read" href="#top">Read article →</a>
                </div>
              </article>
            ))}
            {filteredPosts.length === 0 && (
              <p className="blog-empty" role="status">No articles in {activeTag} yet. Choose another topic to keep browsing.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
