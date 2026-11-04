import SEO from '../components/SEO.jsx'

export const posts = [
  {
    tag: 'PPC Advertising',
    categoryUrl: 'https://blixtechnologies.com/blog/category/ppc-advertising/',
    href: 'https://blixtechnologies.com/blog/ppc-management-services/',
    image: '/ppc-services-card.png',
    imageAlt: 'Team sketching app screens and campaign layouts',
    date: 'Oct 28, 2026',
    published: '2026-10-28',
    read: '6 min',
    title: 'PPC Management Services: How to Choose the Right Agency',
    text: 'Quick Answer: Hiring a professional or agency to design, manage, and enhance your pay-per-click campaigns can help you get more from your advertising investment.',
  },
  {
    tag: 'AEO, GEO, SEO',
    image: '/google-ai-card.png',
    imageAlt: 'Laptop showing a Google search on the screen',
    date: 'Oct 21, 2026',
    published: '2026-10-21',
    read: '7 min',
    title: 'How to Optimize Your Website for Google AI Overviews',
    text: 'Quick Answer: Make sure your pages are indexable, explicitly address real questions, and use clear, helpful content that search engines can understand.',
  },
  {
    tag: 'Social Media Marketing',
    image: '/social-media-card.png',
    imageAlt: 'Social media marketing notes beside design books',
    date: 'Oct 12, 2026',
    published: '2026-10-12',
    read: '8 min',
    title: 'Social Media Marketing Services: Pricing & ROI Guide 2026',
    text: "Quick Answer: Professional packages that oversee a company's presence on social media sites can include strategy, content, community management, and reporting.",
  },
  {
    tag: 'SEO',
    categoryUrl: 'https://blixtechnologies.com/blog/category/seo/',
    href: 'https://blixtechnologies.com/blog/what-is-technical-seo/',
    image: '/seo-card.png',
    imageAlt: 'Person working on a laptop beside large SEO letters',
    date: 'Sep 8, 2026',
    published: '2026-09-08',
    read: '8 min',
    title: 'What Is Technical SEO? The Complete Guide for 2026',
    text: 'Quick Answer: Technical SEO improves a website’s behind-the-scenes elements so search engines can crawl, understand, and index it properly.',
  },
  {
    tag: 'Digital Marketing',
    image: '/integrated-marketing-card.png',
    imageAlt: 'Tablet showing a marketing plan and strategy diagram',
    date: 'Sep 1, 2026',
    published: '2026-09-01',
    read: '9 min',
    title: 'Integrated Digital Marketing: The Complete Strategy Guide for 2026',
    text: 'Quick Answer: Integrated digital marketing ensures that each channel supports the others, creating a consistent customer experience and a stronger overall strategy.',
  },
  {
    tag: 'Mobile App Development',
    image: '/android-app-card.png',
    imageAlt: 'Illustration of a desktop and phone showing an app design',
    date: 'Aug 25, 2026',
    published: '2026-08-25',
    read: '8 min',
    title: 'Android App Development: Complete Guide to Building Android Apps in 2026',
    text: 'The process of creating, testing, and releasing apps for Android devices is known as Android app development. This guide covers the key stages and tools.',
  },
  {
    tag: 'Online Reputation Management',
    categoryUrl: 'https://blixtechnologies.com/blog/category/online-reputation-management/',
    href: 'https://blixtechnologies.com/blog/online-reputation-management/',
    image: '/orm-card.png',
    imageAlt: 'Chalkboard illustration about creating a positive online reputation',
    date: 'Aug 19, 2026',
    published: '2026-08-19',
    read: '7 min',
    title: 'Online Reputation Management: The Complete Guide to Protecting and Growing Your Brand Online',
    text: 'Quick Answer: Online reputation management, or ORM, is the continuous process of keeping an eye on how your brand appears online and building trust with customers.',
  },
  {
    tag: 'Mobile App Development',
    image: '/noida-app-card.png',
    imageAlt: 'Team arranging app screens around a tablet',
    date: 'Aug 11, 2026',
    published: '2026-08-11',
    read: '7 min',
    title: 'Mobile App Development Company in Noida: The Complete Guide',
    text: 'Over 7.5 billion people use smartphones worldwide, and most sectors now depend on mobile experiences to serve customers and grow their business.',
  },
  {
    tag: 'Digital Marketing',
    image: '/best-agency-card.png',
    imageAlt: 'Team working together around a conference table',
    date: 'Aug 11, 2026',
    published: '2026-08-11',
    read: '8 min',
    title: 'Best Digital Marketing Agency in India: How to Choose One That Actually Grows Your Business',
    text: 'Selecting the top digital marketing company in India can have a big impact on how your company reaches customers, earns leads, and grows.',
  },
  {
    tag: 'Website Development',
    categoryUrl: 'https://blixtechnologies.com/blog/category/website-development/',
    href: 'https://blixtechnologies.com/blog/web-development-services/',
    image: '/web-dev-card.png',
    imageAlt: 'Laptop on a desk used for web development work',
    date: 'Aug 5, 2026',
    published: '2026-08-05',
    read: '7 min',
    title: 'Web Development Services in India: Build a Fast, Secure & SEO-Friendly Website',
    text: "These days, a company's website frequently serves as the initial point of contact for potential customers. A fast, secure, search-friendly site helps make that first visit count.",
  },
]

const latestPostOrder = [
  'PPC Management Services: How to Choose the Right Agency',
  'What Is Technical SEO? The Complete Guide for 2026',
  'Online Reputation Management: The Complete Guide to Protecting and Growing Your Brand Online',
  'Web Development Services in India: Build a Fast, Secure & SEO-Friendly Website',
]
posts.sort((a, b) => {
  const indexA = latestPostOrder.indexOf(a.title)
  const indexB = latestPostOrder.indexOf(b.title)
  return (indexA < 0 ? latestPostOrder.length : indexA) - (indexB < 0 ? latestPostOrder.length : indexB)
})

export default function BlogPage() {
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
        title="Explore Blix Technologies Blogs | PPC, SEO & Web Development"
        description="Explore the latest Blix Technologies blogs on PPC management, technical SEO, online reputation management, web development, and digital growth."
        keywords="PPC management, Google AI Overviews, social media marketing, technical SEO, digital marketing guide, Android app development, online reputation management, web development"
        jsonLd={blogLd}
      />
      <section className="sd-head">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="kicker reveal-blur">Blix blog</span>
          <h1 className="reveal" style={{ maxWidth: '16em', margin: '0 auto' }}>Explore Blix Technologies Blogs</h1>
          <p className="about-lead reveal" style={{ maxWidth: '40em', margin: '18px auto 0' }}>
            Explore practical insights on PPC, SEO, online reputation, web development, and building a stronger digital presence.
          </p>
        </div>
      </section>

      <section className="sd-body" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="blog-grid reveal-stagger">
            {posts.map((p) => (
              <article key={p.title} className="blog-card reveal" data-vi="up" data-vi-speed="15">
                <div className="blog-img">
                  {p.image && <img className="blog-photo" src={p.image} alt={p.imageAlt} loading="lazy" decoding="async" />}
                  {!p.image && <div className="blog-ic">{p.icon}</div>}
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span><b>{p.date}</b></span>
                    <span>·</span>
                    {p.categoryUrl ? <a className="blog-category-link" href={p.categoryUrl}>{p.tag}</a> : <span>{p.tag}</span>}
                    <span>·</span>
                    <span>{p.read} read</span>
                  </div>
                  <h3><a href={p.href || '#top'}>{p.title}</a></h3>
                  <p>{p.text}</p>
                  <a className="blog-read" href={p.href || '#top'}>Read more →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
