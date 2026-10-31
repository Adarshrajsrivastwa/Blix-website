import { useState } from 'react'
import SEO from '../components/SEO.jsx'

export const posts = [
  {
    tag: 'PPC Advertising',
    image: '/blog-ppc-management.jpg',
    imageAlt: 'PPC management services and campaign planning',
    date: 'Oct 28, 2026',
    published: '2026-10-28',
    read: '6 min',
    title: 'PPC Management Services: How to Choose the Right Agency',
    text: 'Quick Answer: Hiring a professional or agency to design, manage, and enhance your pay-per-click campaigns can help you reach the right audience and get more from your ad budget.',
  },
  {
    tag: 'AEO, GEO, SEO',
    image: '/blog-google-ai-overviews.jpg',
    imageAlt: 'How to optimize a website for Google AI Overviews',
    date: 'Oct 21, 2026',
    published: '2026-10-21',
    read: '7 min',
    title: 'How to Optimize Your Website for Google AI Overviews',
    text: 'Quick Answer: Make sure your pages are indexable, explicitly address real questions, and use clear, helpful content that search engines can understand.',
  },
  {
    tag: 'Social Media Marketing',
    image: '/blog-social-pricing.jpg',
    imageAlt: 'Social media marketing services pricing and ROI guide',
    date: 'Oct 12, 2026',
    published: '2026-10-12',
    read: '8 min',
    title: 'Social Media Marketing Services: Pricing & ROI Guide 2026',
    text: "Quick Answer: Professional packages that oversee a company's presence on social media sites can include strategy, content, community management, and reporting.",
  },
  {
    tag: 'SEO',
    image: '/blog-technical-seo.jpg',
    imageAlt: 'Technical SEO guide for 2026',
    date: 'Sep 8, 2026',
    published: '2026-09-08',
    read: '8 min',
    title: 'What Is Technical SEO? The Complete Guide for 2026',
    text: 'Quick Answer: Technical SEO is the process of fixing a website’s behind-the-scenes elements so search engines can crawl, understand, and index it properly.',
  },
  {
    tag: 'Digital Marketing',
    image: '/blog-integrated-marketing.jpg',
    imageAlt: 'Integrated digital marketing strategy guide for 2026',
    date: 'Sep 1, 2026',
    published: '2026-09-01',
    read: '9 min',
    title: 'Integrated Digital Marketing: The Complete Strategy Guide for 2026',
    text: 'Quick Answer: Integrated digital marketing ensures that each channel supports the others, creating a consistent customer experience and a stronger overall strategy.',
  },
  {
    tag: 'Mobile App Development',
    image: '/blog-android-development.jpg',
    imageAlt: 'Android app development guide for 2026',
    date: 'Aug 25, 2026',
    published: '2026-08-25',
    read: '8 min',
    title: 'Android App Development: Complete Guide to Building Android Apps in 2026',
    text: 'The process of creating, testing, and releasing apps for Android devices is known as Android app development. This guide covers the key stages and tools.',
  },
  {
    tag: 'Online Reputation Management',
    image: '/blog-online-reputation.jpg',
    imageAlt: 'Online reputation management guide',
    date: 'Aug 19, 2026',
    published: '2026-08-19',
    read: '7 min',
    title: 'Online Reputation Management: The Complete Guide to Protecting and Growing Your Brand Online',
    text: 'Quick Answer: Online reputation management, or ORM, is the continuous process of keeping an eye on how your brand appears online and building trust with customers.',
  },
  {
    tag: 'Mobile App Development',
    image: '/blog-mobile-app-noida.jpg',
    imageAlt: 'Mobile app development company in Noida guide',
    date: 'Aug 11, 2026',
    published: '2026-08-11',
    read: '7 min',
    title: 'Mobile App Development Company in Noida: The Complete Guide',
    text: 'Over 7.5 billion people use smartphones worldwide, and most sectors now depend on mobile experiences to serve customers and grow their business.',
  },
  {
    tag: 'Digital Marketing',
    image: '/blog-digital-agency-india.jpg',
    imageAlt: 'How to choose the best digital marketing agency in India',
    date: 'Aug 11, 2026',
    published: '2026-08-11',
    read: '8 min',
    title: 'Best Digital Marketing Agency in India: How to Choose One That Actually Grows Your Business',
    text: 'Selecting the top digital marketing company in India can have a big impact on how your company reaches customers, earns leads, and grows.',
  },
  {
    tag: 'Website Development',
    image: '/blog-web-development.jpg',
    imageAlt: 'Web development services in India',
    date: 'Aug 5, 2026',
    published: '2026-08-05',
    read: '7 min',
    title: 'Web Development Services in India: Build a Fast, Secure & SEO-Friendly Website',
    text: "These days, a company's website frequently serves as the initial point of contact for potential customers. A fast, secure, search-friendly site helps make that first visit count.",
  },
]

const tags = [...new Set(posts.map((post) => post.tag))]

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
        description: 'Guides on PPC management, SEO, social media marketing, app development, online reputation, and web development.',
        blogPost: posts.map((p, i) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          description: p.text,
          datePublished: p.published,
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
        title="Blog | Digital Marketing, SEO, PPC & App Development Guides"
        description="Explore Blix Technologies guides on PPC management, Google AI Overviews, social media marketing, technical SEO, app development, online reputation, and web development."
        keywords="PPC management, Google AI Overviews, social media marketing, technical SEO, digital marketing guide, Android app development, online reputation management, web development"
        jsonLd={blogLd}
      />
      <section className="sd-head">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="kicker reveal-blur">Blix blog</span>
          <h1 className="reveal" style={{ maxWidth: '16em', margin: '0 auto' }}>Digital Marketing &amp; Development Guides</h1>
          <p className="about-lead reveal" style={{ maxWidth: '40em', margin: '18px auto 0' }}>
            Explore practical guides to PPC, SEO, social media, app development, online reputation, and building a stronger digital presence.
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
              <article key={p.title} className="blog-card reveal" data-vi="up" data-vi-speed="15">
                <div className="blog-img">
                  {p.image && <img className="blog-photo" src={p.image} alt={p.imageAlt} loading="lazy" decoding="async" />}
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
