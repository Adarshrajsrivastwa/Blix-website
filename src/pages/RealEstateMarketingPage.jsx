import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

const serviceRows = [
  ['Lead generation', 'Qualified buyers and investors ready to discuss your project.'],
  ['Real estate SEO', 'Search visibility and organic enquiries from project and locality searches.'],
  ['Social media marketing', 'Organic reach, engagement, and recognition buyers remember.'],
  ['Personal branding', 'A trusted, recognizable name for consultants and property professionals.'],
]

const leadSteps = [
  ['01', 'Research', 'Study your market, buyers, and competitors.'],
  ['02', 'Strategy', 'Choose the right mix of search, social, and landing pages.'],
  ['03', 'Build', 'Create fast, mobile-first pages with simple enquiry forms.'],
  ['04', 'Qualify', 'Help your team focus on relevant, high-intent enquiries.'],
  ['05', 'Optimize', 'Track cost per lead and site visits, then improve campaigns.'],
]

const seoIncludes = ['Project, locality, and budget keyword research', 'Optimized project pages, titles, and headings', 'Google Business Profile, maps, and review support', 'Technical improvements for speed and mobile usability', 'Locality guides, project explainers, and buyer FAQs', 'Relevant link building and monthly plain-language reporting']
const seoBenefits = ['Be visible when buyers start on Google', 'Build an organic channel that compounds over time', 'Earn credibility through useful, relevant pages', 'Reduce dependence on third-party property portals', 'Reach buyers across their research journey']

const socialContent = ['Walkthrough reels, site updates, and locality tours', 'Home-buying tips, RERA basics, and investment explainers', 'Client stories and possession-day moments, shared with consent', 'Consistent calendars for Instagram, Facebook, LinkedIn, and YouTube']
const brandBenefits = ['Brand positioning: your niche, story, and edge', 'Professional LinkedIn, Instagram, Facebook, and Google profiles', 'Content strategy for market updates and buyer education', 'Video scripts and editing to help you show up with confidence', 'Reputation support through reviews and testimonials', 'A personal website or landing page that turns visibility into enquiries']
const whyBlix = [
  ['Real estate focus', 'Campaigns shaped around launches, buyer behavior, and clear property messaging.'],
  ['Full-funnel approach', 'Lead generation, SEO, social, and branding work together.'],
  ['Transparent reporting', 'Track real enquiries, lead costs, rankings, and progress.'],
  ['Custom strategy', 'No copy-paste packages; the plan fits your project and audience.'],
  ['Noida roots, India reach', 'Local market understanding with support for businesses across India.'],
  ['Dedicated support', 'A team that gets to know your business and goals.'],
]
const faqs = [
  ['What does a real estate marketing company do?', 'It helps developers, brokers, and consultants attract buyers through lead generation, SEO, social media, and branding, then supports the path from enquiry to site visit.'],
  ['Why choose a real estate marketing company in Noida?', 'A Noida-based team can bring local context to Delhi NCR micro-markets, buyer behavior, and competition while supporting campaigns across wider markets.'],
  ['How long does real estate SEO take?', 'SEO is a long-term channel. The timeline depends on competition and your website’s current health. We review progress and share realistic expectations from the start.'],
  ['Do you offer lead generation for individual consultants?', 'Yes. We work with builders, brokers, channel partners, and individual consultants.'],
  ['Can you help build my personal brand?', 'Yes. Support can include positioning, profile improvements, content, video, and reputation building.'],
  ['Do you work outside Noida?', 'Yes. We work with real estate businesses across India.'],
]

export default function RealEstateMarketingPage() {
  return (
    <main id="top" className="digital-marketing-page dm-redesign real-estate-redesign">
      <SEO title="Real Estate Marketing Company in Noida | Blix Technologies" description="Generate qualified property leads, improve real estate search rankings, grow social reach, and build a trusted brand with Blix Technologies." keywords="real estate marketing company Noida, property lead generation, real estate SEO, real estate social media, personal branding for real estate consultants" />

      <section className="dm-new-hero re-hero"><div className="wrap dm-new-hero-grid">
        <div className="dm-new-hero-copy"><span className="dm-new-eyebrow"><i /> Real estate marketing · Noida, India</span><h1>Fill your pipeline with <span>buyers who are ready.</span></h1><p>More qualified leads. Better search visibility. A brand buyers trust. Blix Technologies helps builders, brokers, and real estate consultants turn online attention into site visits and closed deals.</p><div className="re-hero-points"><span>Qualified lead generation</span><span>Page-one SEO</span><span>Social media that gets noticed</span><span>Personal brands that sell</span></div><Link className="dm-pink-link" to="#contact">Get a free consultation <span aria-hidden="true">↗</span></Link></div>
        <div className="dm-new-hero-image re-hero-image"><img src="/real-estate-hero.png" alt="Person using a laptop with real estate, sale, and market icons" fetchPriority="high" /><div className="re-hero-card"><span>PROPERTY MARKETING</span><b>Be easy to find.<br />Easy to trust.</b></div></div>
      </div></section>

      <section className="re-intro"><div className="wrap re-intro-grid"><div className="re-intro-image"><img src="/real-estate-intro.png" alt="Team reviewing property documents and reports together" loading="lazy" /><span>FROM SEARCH TO SITE VISIT <b>↗</b></span></div><div className="dm-new-copy"><span className="dm-new-eyebrow">Buyers search online first</span><h2>Be the brand they find and trust.</h2><p>Before a buyer calls, they may have searched on Google, scrolled through social media, and formed an opinion about your credibility. If your business is not visible and trusted online, a competitor may get that first conversation.</p><p>Blix Technologies is a Noida-based real estate marketing company. We make your projects easier to discover, easier to trust, and easier to enquire about.</p></div></div></section>

      <section className="re-overview"><div className="wrap"><div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Our services at a glance</span><h2>One connected plan<br /><span>for property growth.</span></h2></div><p>From the first search to a site visit, bring the right marketing channels together around your property goals.</p></div><div className="re-overview-grid">{serviceRows.map(([name, description], index) => <article key={name}><span>0{index + 1}</span><div><h3>{name}</h3><p>{description}</p></div><b aria-hidden="true">↗</b></article>)}</div><p className="re-market-note">Real estate marketing for Noida, Delhi NCR, and cities across India.</p></div></section>

      <section className="re-leads"><div className="wrap re-leads-grid"><div className="dm-new-copy"><span className="dm-new-eyebrow">Lead generation that brings buyers, not just enquiries</span><h2>Focus on people ready to talk about your project.</h2><p>More enquiries mean little if they never become site visits. Our lead generation approach focuses on connecting builders, brokers, and consultants with relevant buyers and investors.</p><div className="re-audience-list"><article><b>Builders & developers</b><span>Launch campaigns, landing pages, and Google or Meta ads.</span></article><article><b>Brokers & channel partners</b><span>A steady flow of buyer and seller enquiries.</span></article><article><b>Real estate consultants</b><span>Targeted leads from investors and end-users in your area.</span></article></div><Link className="dm-pink-link" to="#contact">Get more qualified leads <span aria-hidden="true">↗</span></Link></div><div className="re-step-panel"><span className="dm-new-eyebrow">How we generate leads</span>{leadSteps.map(([number, title, text]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section className="re-seo"><div className="wrap re-feature-grid"><div className="re-feature-image re-seo-image"><img src="/real-estate-seo.png" alt="Laptop and phone showing a home search, location pin, and price" loading="lazy" /><span>REAL ESTATE SEO <b>↗</b></span></div><div className="dm-new-copy"><span className="dm-new-eyebrow">SEO for real estate · Be there when buyers search</span><h2>Show up when property buyers look.</h2><p>Someone searches “3 BHK flats in Noida.” Is it your website they find? We build SEO around how property buyers search by project, locality, budget, and intent.</p><h3>What’s included</h3><ul className="re-check-list">{seoIncludes.map((item) => <li key={item}>{item}</li>)}</ul><Link className="dm-pink-link" to="#contact">Request a free SEO audit <span aria-hidden="true">↗</span></Link></div></div><div className="wrap re-seo-benefits"><h3>Why SEO matters for property</h3><p>Real estate is a high-trust, high-value decision. SEO helps you stay visible while buyers research, compare, and decide.</p><div>{seoBenefits.map((benefit, index) => <article key={benefit}><span>0{index + 1}</span><p>{benefit}</p></article>)}</div></div></section>

      <section className="re-social"><div className="wrap re-feature-grid re-feature-reverse"><div className="dm-new-copy"><span className="dm-new-eyebrow">Social media marketing for real estate</span><h2>Grow organic reach and buyer trust.</h2><p>Buyers discover projects, watch walkthroughs, and decide whom to trust on social media. We create content people value so your growth does not depend on ad spend alone.</p><h3>What we create</h3><ul className="re-check-list">{socialContent.map((item) => <li key={item}>{item}</li>)}</ul><p className="re-small-note">We add paid social when it can help amplify your strongest content.</p><Link className="dm-pink-link" to="#contact">Grow your brand on social media <span aria-hidden="true">↗</span></Link></div><div className="re-feature-image re-social-image"><img src="/real-estate-social.png" alt="Advisors reviewing a home price with a calculator and model houses" loading="lazy" /><span>CONTENT THAT CONNECTS <b>↗</b></span></div></div></section>

      <section className="re-brand"><div className="wrap re-feature-grid"><div className="re-feature-image re-brand-image"><img src="/real-estate-brand.png" alt="Model house on property reports with a consultant working nearby" loading="lazy" /><span>YOUR NAME, YOUR MARKET <b>↗</b></span></div><div className="dm-new-copy"><span className="dm-new-eyebrow">Personal branding for real estate consultants</span><h2>Be the name buyers remember.</h2><p>When buyers compare consultants, a clear and trusted personal brand can make the difference. We help consultants, brokers, and sales leaders become recognized experts in their market.</p><ul className="re-check-list">{brandBenefits.map((item) => <li key={item}>{item}</li>)}</ul><p className="re-small-note">The result: warmer leads, more trust in the first call, and clients who are more likely to refer you.</p><Link className="dm-pink-link" to="#contact">Build your personal brand <span aria-hidden="true">↗</span></Link></div></div></section>

      <section className="re-why"><div className="wrap"><div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Why Blix Technologies?</span><h2>Real estate focus.<br /><span>Clear growth work.</span></h2></div><p>A development and marketing partner with local insight, connected services, and transparent campaign reporting.</p></div><div className="re-why-grid">{whyBlix.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="re-faq"><div className="wrap re-faq-grid"><div><span className="dm-new-eyebrow">Frequently asked questions</span><h2>Real estate marketing, clearly explained.</h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="dm-new-cta"><div className="wrap dm-new-cta-inner"><div><span className="dm-new-eyebrow">Ready to grow your real estate business?</span><h2>Let’s build your next growth plan.</h2><p>Tell us about your project and goals. We’ll share a clear plan to improve leads, rankings, and brand trust.</p></div><Link className="dm-new-cta-link" to="#contact">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  )
}
