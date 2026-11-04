import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

const seoServices = [
  ['01', 'Keyword research', 'Find the terms potential customers use to search for your products and services. We prioritize relevance, competition, search intent, and business value.'],
  ['02', 'On-page SEO', 'Improve page titles, meta descriptions, headings, images, content, and internal links so pages are useful to visitors and easier for search engines to understand.'],
  ['03', 'Technical SEO', 'Review site speed, mobile usability, indexing, broken links, sitemaps, and other technical issues that may affect search performance.'],
  ['04', 'Local SEO', 'Improve location-based visibility with local keywords, Google Business Profile support, accurate business details, and local listings.'],
  ['05', 'Off-page SEO & link building', 'Support your website’s credibility through relevant backlinks, brand mentions, and content outreach focused on quality.'],
  ['06', 'SEO content writing', 'Create and improve website pages, blogs, and service content with relevant keywords used naturally to answer customer questions.'],
]

const steps = [
  ['01', 'Website audit', 'Check your website to find SEO issues and areas that need improvement.'],
  ['02', 'Competitor research', 'Review competitors to understand the searches they target and how their websites perform.'],
  ['03', 'Keyword planning', 'Select relevant keywords and decide which pages should target them.'],
  ['04', 'SEO implementation', 'Work across content, technical, on-page, local SEO, and link building according to the project scope.'],
  ['05', 'Performance monitoring', 'Track keyword visibility, organic traffic, and other relevant website metrics.'],
  ['06', 'Regular updates', 'Review results and refine the work where needed to support better performance.'],
]

const outcomes = [
  'Improve visibility for relevant Google searches',
  'Bring more relevant visitors to your website',
  'Reach people searching for your products or services',
  'Create more opportunities for enquiries and sales',
  'Build trust with useful content and a better user experience',
  'Understand website performance through regular reporting',
  'Reduce long-term dependence on paid advertising',
]

const reasons = [
  ['Customized SEO plans', 'We prepare strategies around your business, website, goals, and audience.'],
  ['Complete SEO services', 'Technical, on-page, off-page, local, and content SEO can be managed together.'],
  ['Clear communication', 'Stay informed about the work, priorities, and progress.'],
  ['Regular reporting', 'Get performance updates that help you understand the results and next steps.'],
  ['Business-focused approach', 'We focus on relevant visitors and opportunities for enquiries, not rankings alone.'],
  ['Long-term planning', 'SEO is ongoing work. We plan improvements to build your organic presence over time.'],
]

export default function SEOPage() {
  return (
    <main id="top" className="digital-marketing-page dm-redesign seo-redesign">
      <SEO title="SEO Services to Improve Your Business Visibility on Google" description="Improve your website’s Google visibility with Blix Technologies. Reach the right customers through keyword research, technical SEO, local SEO, content, and link building." keywords="SEO Services, SEO Company in Noida, local SEO, technical SEO, keyword research, SEO content writing" />

      <section className="dm-new-hero">
        <div className="wrap dm-new-hero-grid">
          <div className="dm-new-hero-copy">
            <span className="dm-new-eyebrow"><i /> SEO services · Noida, India</span>
            <h1>SEO services to improve <span>your visibility on Google.</span></h1>
            <p>Having a website is important, but people need to be able to find it. We help improve Google visibility, bring relevant visitors to your website, and create better opportunities for enquiries.</p>
            <p>We first understand your business, services, audience, and competitors, then create an SEO plan around your goals.</p>
            <Link className="dm-pink-link" to="/#contact">Talk with an SEO specialist <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="dm-new-hero-image seo-hero-image">
            <img src="/seo-hero.png" alt="Illustration of a team reviewing search charts and analytics" fetchPriority="high" />
            <div className="seo-image-panel"><span>SEARCH VISIBILITY</span><b>Be found by<br />the right people.</b><i>↗</i></div>
          </div>
        </div>
      </section>

      <section className="dm-new-intro">
        <div className="wrap dm-new-intro-grid">
          <div className="dm-new-intro-image seo-intro-image"><img src="/seo-intro.png" alt="Laptop showing a marketing analytics dashboard" loading="lazy" /><span>STRATEGY BEFORE TACTICS <b>↗</b></span></div>
          <div className="dm-new-copy">
            <span className="dm-new-eyebrow">SEO company in Noida, India</span>
            <h2>Improve your website for search engines and people.</h2>
            <p>Blix Technologies provides SEO services to businesses in Noida, Greater Noida, Delhi NCR, and across India. We work on your content, keywords, website speed, technical issues, and backlinks.</p>
            <p>Our aim is to make your website more useful for visitors and easier for search engines to understand. We focus on relevant visitors who may be interested in your products or services—not keyword rankings alone.</p>
          </div>
        </div>
      </section>

      <section className="seo-basics">
        <div className="wrap">
          <div className="dm-new-section-head"><div><span className="dm-new-eyebrow">SEO, simply explained</span><h2>What is search engine<br /><span>optimization?</span></h2></div><p>SEO is the process of improving a website so it can appear higher in search engine results and help people discover your business.</p></div>
          <div className="seo-basics-grid">
            <article><span>01</span><h3>Quality traffic</h3><p>Reach people interested in your products or services, creating a better opportunity for genuine enquiries.</p></article>
            <article><span>02</span><h3>Organic traffic</h3><p>Help visitors discover your website through unpaid search results instead of paying for each click.</p></article>
            <article><span>03</span><h3>Better visibility</h3><p>Appear for relevant searches so more people can discover your business and learn about your services.</p></article>
          </div>
        </div>
      </section>

      <section className="dm-new-services seo-services" id="seo-services">
        <div className="wrap">
          <div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Our SEO services</span><h2>Improve rankings.<br /><span>Reach the right people.</span></h2></div><p>We provide SEO solutions to improve your website and help your business reach more potential customers.</p></div>
          <div className="dm-new-service-grid">{seoServices.map(([number, title, text]) => <article className="dm-new-service-card" key={number}><div className="dm-new-card-top"><span>{number}</span><i aria-hidden="true">↗</i></div><h3>{title}</h3><p>{text}</p><Link className="dm-pink-link" to="/#contact">Discuss this service <span aria-hidden="true">→</span></Link></article>)}</div>
        </div>
      </section>

      <section className="seo-outcomes">
        <div className="wrap seo-outcomes-grid">
          <div><span className="dm-new-eyebrow">How SEO can help your business</span><h2>Build visibility and make it easier to get discovered.</h2><p>A good SEO strategy can help your business reach people searching for your services and improve the experience visitors have on your website.</p><p>SEO is a continuous process. Results depend on competition, website condition, content quality, and regular optimization.</p></div>
          <div className="seo-outcome-list"><h3>What a focused SEO plan can support</h3>{outcomes.map((outcome, index) => <div key={outcome}><span>0{index + 1}</span><p>{outcome}</p><b aria-hidden="true">✓</b></div>)}</div>
        </div>
      </section>

      <section className="seo-process">
        <div className="wrap"><div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Our SEO working process</span><h2>Understand. Optimize.<br /><span>Review and improve.</span></h2></div><p>A straightforward process helps us organize the work and keep your SEO plan aligned with your requirements.</p></div><div className="seo-steps">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="seo-basics seo-why">
        <div className="wrap"><div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Why choose Blix Technologies?</span><h2>SEO shaped around<br /><span>your actual business.</span></h2></div><p>We focus on your requirements and your website instead of repeating the same plan for every client.</p></div>
          <div className="seo-basics-grid">{reasons.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="dm-new-cta"><div className="wrap dm-new-cta-inner"><div><span className="dm-new-eyebrow">Get started with SEO services</span><h2>Help the right customers find your business.</h2><p>Share your website and business requirements with us. We’ll review your needs and suggest a suitable SEO plan.</p></div><Link className="dm-new-cta-link" to="/#contact">Contact Blix Technologies <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  )
}
