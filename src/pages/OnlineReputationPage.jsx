import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

const work = [
  ['01', 'Google Review Management', 'Google reviews are often one of the first things people check when searching for a business. We help monitor and manage reviews on your Google Business Profile.', ['Checking new Google reviews', 'Responding to customer reviews', 'Managing customer feedback', 'Identifying negative reviews', 'Planning review responses', 'Monitoring review activity']],
  ['02', 'Negative Review Management', 'Negative reviews can affect your business image, especially when customers do not receive a response. We help manage negative feedback in a professional manner.', ['Checking negative reviews', 'Understanding customer complaints', 'Writing suitable review responses', 'Monitoring customer feedback', 'Identifying common problems', 'Suggesting ways to improve customer experience'], 'We believe every genuine complaint deserves proper attention. Our focus is on resolving concerns, not hiding customer feedback.'],
  ['03', 'Online Brand Monitoring', 'Customers may talk about your business on Google, social media and other websites. We help you keep track of these conversations so you know what people are saying about your brand.', ['Business name monitoring', 'Brand mention tracking', 'Social media comment monitoring', 'Customer feedback tracking', 'Competitor review checking', 'Identifying reputation-related issues']],
  ['04', 'Social Media Reputation Management', 'Your social media pages are places where customers ask questions, share feedback and discuss their experiences. We help manage these interactions professionally.', ['Monitoring social media comments', 'Managing customer feedback', 'Responding to public queries', 'Checking brand mentions', 'Monitoring negative comments', 'Maintaining professional communication']],
  ['05', 'Google Business Profile Management', 'Your Google Business Profile helps customers find important information about your business. Incorrect contact details, outdated timings or incomplete information can create confusion.', ['Business name and contact details', 'Address and business hours', 'Business description', 'Services and business information', 'Profile updates', 'Customer review monitoring'], 'Our aim is to make sure customers can find correct and updated information about your business.'],
  ['06', 'Online Reputation Improvement', 'Building a good online reputation takes time and regular effort. We focus on genuine customer experiences and professional communication to help your business build trust.', ['Online reputation checking', 'Customer feedback analysis', 'Review response management', 'Genuine review generation strategies', 'Brand communication improvement', 'Regular reputation monitoring']],
  ['07', 'Competitor Review Analysis', 'Knowing what customers say about your competitors can help you understand what people expect from businesses in your industry. We study publicly available reviews and feedback.', ['Competitor review checking', 'Customer feedback analysis', 'Common complaint identification', 'Review rating comparison', 'Reputation improvement suggestions']],
]

const reasons = [
  ['Build customer trust', 'Genuine reviews and thoughtful responses help potential customers understand how you work.'],
  ['Handle complaints professionally', 'A considered response can acknowledge a concern and show that your business takes feedback seriously.'],
  ['Learn from customer feedback', 'Review patterns can help you spot friction and identify improvements to the customer experience.'],
  ['Keep your brand informed', 'Monitoring helps you stay aware of reviews, comments, and public brand mentions.'],
  ['Stay updated about your brand', 'Keep track of what people are saying about your company across different websites and social media platforms.'],
  ['Create more business opportunities', 'A good online image can encourage potential customers to trust your business and make an enquiry.'],
]

const platforms = [
  ['Google Business Profile', 'Reviews, ratings, business details, and customer feedback.'],
  ['Facebook', 'Recommendations, comments, and page interactions.'],
  ['Instagram', 'Comments, mentions, and customer conversations.'],
  ['LinkedIn', 'Business-related conversations and professional brand presence.'],
  ['YouTube', 'Comments and discussions on your business videos.'],
  ['Industry review sites', 'Relevant directories and review websites selected for your business.'],
]

const process = [
  ['Check your online presence', 'Review Google feedback, social pages, and other relevant public profiles.'],
  ['Find areas needing attention', 'Identify unanswered reviews, recurring complaints, and incorrect business information.'],
  ['Prepare a practical plan', 'Set priorities and monitoring coverage based on your business and current online presence.'],
  ['Manage reviews and feedback', 'Organize feedback and support professional, timely responses with your team.'],
  ['Monitor your brand', 'Check selected platforms for new reviews, comments, and brand mentions.'],
  ['Share clear updates', 'Report review activity and work completed, with practical recommendations.'],
]

const industries = [
  ['Real Estate Companies', 'Manage property-related reviews, customer complaints and feedback to build trust with potential buyers.'],
  ['Hospitals & Clinics', 'Monitor patient reviews and maintain professional communication with patients.'],
  ['Hotels & Restaurants', 'Manage customer ratings, food reviews and feedback across Google and other review platforms.'],
  ['Educational Institutes', 'Keep track of student and parent feedback and maintain your institution’s online image.'],
  ['E-commerce Businesses', 'Monitor product reviews, customer complaints and online brand mentions.'],
  ['IT & Software Companies', 'Manage client feedback and maintain a professional business image.'],
  ['Local Businesses', 'Improve your online presence and manage customer reviews on Google and other platforms.'],
  ['Consultants & Professionals', 'Build trust and maintain a professional online identity.'],
]

const faqs = [
  ['What is Online Reputation Management (ORM)?', 'ORM is the process of monitoring and managing what people say about your business online. It can include review management, customer feedback, social media monitoring, and brand mention tracking.'],
  ['Why is online reputation important?', 'Customers often look at reviews and ratings before choosing a business. A credible online presence and professional responses can help them make a more informed decision.'],
  ['Can you remove negative Google reviews?', 'Only the platform can remove reviews, and it may do so when they violate its policies. We can help assess a review and report policy violations where appropriate. Genuine complaints should be addressed with a thoughtful response.'],
  ['How do you manage negative reviews?', 'We help understand the concern, prepare a professional response, and identify repeated issues that may point to improvements in the customer experience.'],
  ['How long does it take to improve an online reputation?', 'It depends on your current reviews, feedback, and monitoring needs. Some issues can be addressed quickly, while building a stronger reputation takes consistent effort.'],
  ['Do you provide Google review management?', 'Yes. We help businesses monitor Google reviews, organize customer feedback, and manage their Google Business Profile information.'],
  ['Can you manage social media reputation?', 'Yes. We can monitor comments, feedback, and brand mentions on the social platforms relevant to your business.'],
  ['How much do ORM services cost?', 'Cost depends on review volume, platform coverage, and the work involved. Contact us to discuss your requirements and request a tailored proposal.'],
  ['Do you provide ORM services in Noida and Delhi NCR?', 'Yes. Blix Technologies is based in Noida and serves businesses across Noida, Greater Noida, Ghaziabad, Delhi, Gurugram, and other Delhi NCR locations.'],
]

export default function OnlineReputationPage() {
  return (
    <main id="top" className="orm-page">
      <SEO
        title="Online Reputation Management Services in Noida"
        description="Manage your brand image with Blix Technologies. Get Google review management, negative review handling and online reputation management services in Noida."
        keywords="Online Reputation Management Services, Online Reputation Management Company in Noida"
        canonicalUrl="https://blixtechnologies.com/online-reputation-management/"
      />

      <section className="orm-hero">
        <div className="wrap orm-hero-grid">
          <div className="orm-hero-copy">
            <div className="orm-eyebrow"><i /> Online Reputation Management Services</div>
            <h1>Your Online Reputation Matters. <span>Let’s Keep It Positive!</span></h1>
            <p>What do people see when they search for your business on Google? Before choosing a company, many customers check its Google reviews, ratings and social media pages. A few negative reviews or unanswered complaints can make them think twice before contacting you.</p>
            <p>At <strong>Blix Technologies</strong>, we help businesses manage their online reputation and maintain a good image across digital platforms. From managing Google reviews to monitoring customer feedback and brand mentions, we help you stay aware of what people are saying about your business.</p>
            <p>Whether you own a small business, run a company or manage an established brand, we help you take better care of your online reputation.</p>
            <Link className="orm-button" to="/contact">Get a Free Consultation <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="orm-hero-art" aria-label="Online reputation monitoring illustration">
            <div className="orm-art-orbit" />
            <div className="orm-art-card"><span className="orm-art-label">YOUR BRAND, IN FOCUS</span><b>Listen.<br />Respond.<br /><em>Build trust.</em></b><div className="orm-rating"><span aria-hidden="true">★★★★★</span><small>Customer feedback matters</small></div></div>
            <span className="orm-art-chip orm-chip-top">Reviews monitored <b>↗</b></span>
            <span className="orm-art-chip orm-chip-bottom"><i /> Clear, thoughtful responses</span>
          </div>
        </div>
      </section>

      <section className="orm-intro">
        <div className="wrap orm-intro-grid">
          <div className="orm-intro-heading"><span className="orm-eyebrow">Online Reputation Management Company in Noida</span><h2>Customers look you up <span>before they reach out.</span></h2><div className="orm-intro-index"><b>01</b><i /> FIRST IMPRESSIONS HAPPEN ONLINE</div></div>
          <div className="orm-intro-copy"><p>Your online reputation can influence a customer’s decision to work with you. Imagine a potential customer searching for your company on Google. They find your website, check your reviews and read comments from other customers. Based on what they see, they decide whether to contact you. This is why managing your online reviews and customer feedback is important.</p><p>At <strong>Blix Technologies</strong>, we help businesses keep track of their online reviews, respond to customer feedback and maintain a professional online image. We are based in Noida and provide online reputation management services to businesses across Noida, Greater Noida, Delhi NCR and other locations.</p><p>Our focus is simple: help you understand what customers are saying and manage your brand’s online presence in the right way.</p><Link to="#orm-services" className="orm-inline-link">See how we can help <span aria-hidden="true">↓</span></Link></div>
        </div>
      </section>

      <section className="orm-explainer">
        <div className="wrap orm-explainer-grid">
          <div className="orm-explainer-heading"><span className="orm-eyebrow">What Is Online Reputation Management?</span><h2>Make customer feedback part of the conversation.</h2><p>Online Reputation Management, also known as ORM, means keeping track of what people say about your business on the internet and managing your brand’s image.</p></div>
          <div className="orm-explainer-card"><p>It includes checking Google reviews, responding to customer complaints, monitoring social media comments and keeping your business information updated. For example, if a customer leaves a negative review on Google, ignoring it may create a poor impression on other people. A polite and helpful response can show that your business takes customer feedback seriously. At Blix Technologies, we help you manage these activities so your business maintains a professional and trustworthy online presence.</p><div className="orm-three-actions"><article><span>01</span><b>Listen</b><small>Monitor what customers share.</small></article><article><span>02</span><b>Respond</b><small>Address feedback with care.</small></article><article><span>03</span><b>Improve</b><small>Learn from recurring themes.</small></article></div></div>
        </div>
      </section>

      <section className="orm-benefits">
        <div className="wrap"><div className="orm-section-head"><div><span className="orm-eyebrow">Why Does Your Business Need Online Reputation Management?</span><h2>Trust is built in the details.</h2></div><p>People often read reviews before choosing a product, service or company. Your online reputation can influence whether they decide to contact you or choose a competitor.</p></div>
          <div className="orm-benefit-grid">{reasons.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="orm-services" id="orm-services">
        <div className="wrap"><div className="orm-section-head"><div><span className="orm-eyebrow">Our Online Reputation Management Services</span><h2>Practical support for your online reputation.</h2></div><p>We provide complete ORM solutions to help businesses manage online reviews, customer feedback and brand mentions.</p></div>
          <div className="orm-work-grid">{work.map(([number, title, text, items, note]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>{note && <p className="orm-service-note">{note}</p>}</div><i aria-hidden="true">↗</i></article>)}</div>
        </div>
      </section>

      <section className="orm-platforms">
        <div className="wrap orm-platforms-grid"><div><span className="orm-eyebrow">Platforms We Monitor</span><h2>Be present where customers are talking.</h2><p>Your business reputation is spread across different websites and social media platforms. Depending on your requirements, we monitor the platforms that matter most to your business and customers.</p></div>
          <div className="orm-platform-list">{platforms.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="orm-process">
        <div className="wrap"><div className="orm-section-head"><div><span className="orm-eyebrow">How We Manage Your Online Reputation</span><h2>A simple process, handled with care.</h2></div><p>We follow a simple process to understand your current online image and manage it properly.</p></div>
          <div className="orm-process-grid">{process.map(([title, text], index) => <article key={title}><span>STEP 0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="orm-industries">
        <div className="wrap"><div className="orm-section-head"><div><span className="orm-eyebrow">Who Needs Online Reputation Management Services?</span><h2>ORM for businesses that rely on trust.</h2></div><p>ORM is useful for any business that wants to maintain a good online image and build customer trust.</p></div>
          <div className="orm-industry-grid">{industries.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="orm-why">
        <div className="wrap orm-why-inner"><div><span className="orm-eyebrow">Why Choose Blix Technologies for Online Reputation Management?</span><h2>Thoughtful management for long-term trust.</h2><p>People take time to trust a business. Your online reviews and brand image play an important role in building that trust. At <strong>Blix Technologies</strong>, we help businesses manage their online reputation with regular monitoring, professional communication and the right strategy. Here’s what you can expect from our team:</p></div>
          <ul><li><strong>We Understand Your Business</strong><br />Before starting, we learn about your company, customers and industry.</li><li><strong>We Take Customer Feedback Seriously</strong><br />We help you handle positive and negative reviews with professional responses.</li><li><strong>We Keep Track of Your Online Presence</strong><br />We monitor relevant platforms to help you stay informed about customer feedback and brand mentions.</li><li><strong>We Offer Complete Digital Marketing Support</strong><br />Along with ORM, we also provide SEO, social media marketing, content writing and other digital marketing services.</li><li><strong>We Keep You Updated</strong><br />We share updates about our work and important changes in your online reputation.</li><li><strong>We Focus on Long-Term Trust</strong><br />Our goal is to help you build a good relationship with your customers through genuine feedback and better communication.</li></ul>
        </div>
      </section>

      <section className="orm-faq">
        <div className="wrap"><div className="orm-section-head"><div><span className="orm-eyebrow">Frequently asked questions</span><h2>Clear answers about ORM.</h2></div><p>More about reviews, customer feedback, and protecting trust online.</p></div>
          <div className="orm-faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>0{index + 1}</span>{question}<i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="orm-cta"><div className="wrap orm-cta-inner"><div><span className="orm-eyebrow">Your Business Reputation Deserves Better Care!</span><h2>Let’s build a stronger online reputation.</h2><p>What customers say about your business online can influence the decisions of future customers. Don’t ignore negative feedback or leave customer reviews unanswered. Take the right steps to manage your online presence.</p><p>At <strong>Blix Technologies</strong>, we help businesses monitor reviews, manage customer feedback and maintain a professional online image. Whether you need Google review management or complete online reputation management, our team is ready to help.</p><p><strong>Let’s work together to build a stronger online reputation for your business.</strong></p><p><strong>Blix Technologies Pvt. Ltd.</strong><br />Your Digital Growth Partner.</p></div><Link className="orm-button" to="/contact">Get a Free Consultation <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  )
}
