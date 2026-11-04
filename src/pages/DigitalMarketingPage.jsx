import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import HomeFaq from '../components/HomeFaq.jsx'

const services = [
  ['01', 'Search Engine Optimization (SEO)', 'Want your website to appear on Google when people search for your services? Our SEO services help improve your website’s visibility in search results and bring relevant visitors to your website.', ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Off-Page SEO', 'Local SEO', 'Website Content Optimisation', 'Competitor Analysis', 'SEO Performance Monitoring'], '/services/seo', 'Explore SEO Services'],
  ['02', 'Google Ads & PPC Management', 'Want to reach potential customers who are already searching for your products or services? We plan, run and manage campaigns based on your target audience and budget.', ['Google Search Ads', 'Display Ads', 'YouTube Ads', 'Remarketing Campaigns', 'Keyword Research', 'Ad Copywriting', 'Campaign Setup', 'Conversion Tracking', 'Campaign Optimisation'], '#contact', 'Explore Google Ads Services'],
  ['03', 'Social Media Marketing', 'Social media gives your business an opportunity to connect with customers and build a recognisable brand. We manage your pages with regular content, creative designs and marketing campaigns.', ['Facebook Marketing', 'Instagram Marketing', 'LinkedIn Marketing', 'Social Media Strategy', 'Social Media Post Designing', 'Reels and Video Content', 'Content Calendar Planning', 'Social Media Advertising', 'Page Management'], '/services/social-media', 'Explore Social Media Marketing'],
  ['04', 'Content Marketing & Writing', 'Good content helps customers understand your business and make better decisions. We create simple, informative and engaging content for websites, blogs and social platforms.', ['Website Content Writing', 'SEO Blog Writing', 'Service Page Content', 'Social Media Captions', 'Landing Page Content', 'Article Writing', 'Product Descriptions', 'Marketing Content'], '#contact', 'Explore Content Marketing'],
  ['05', 'Email Marketing', 'Email marketing helps you stay connected with existing customers and follow up with potential buyers. We create campaigns to share updates, promote services and build customer relationships.', ['Email Campaign Management', 'Promotional Emails', 'Newsletter Designing', 'Email Automation', 'Lead Follow-up Emails', 'Customer Engagement Campaigns', 'Email Performance Tracking'], '#contact', 'Discuss Email Marketing'],
  ['06', 'Online Reputation Management (ORM)', 'What people say about your business online can influence their decision to work with you. We help monitor your brand image and maintain a positive online presence.', ['Online Review Monitoring', 'Customer Feedback Management', 'Review Response Strategy', 'Brand Mention Monitoring', 'Business Profile Management', 'Online Reputation Improvement'], '/services/orm', 'Explore Reputation Management'],
  ['07', 'Personal Branding', 'A strong personal brand helps business owners, founders, CEOs, consultants and professionals build trust and connect with the right audience.', ['Personal Branding Strategy', 'LinkedIn Profile Optimisation', 'Professional Content Writing', 'LinkedIn Marketing', 'Social Media Management', 'Personal Branding Reels', 'Online Visibility Improvement'], '/services/personal-branding', 'Explore Personal Branding Services'],
  ['08', 'Website Design & Development', 'Your website helps customers learn about your business, explore your services and contact you. We create sites that are easy to use, mobile-friendly and suitable for your needs.', ['Business Website Development', 'WordPress Website Development', 'E-commerce Website Development', 'Landing Page Designing', 'Website Redesign', 'Responsive Website Design', 'Website Speed Optimisation', 'Website Maintenance'], '/services/web-development', 'Explore Website Development Services'],
]

const benefits = [
  ['Reach More Customers', 'Connect with people who are interested in your products or services through Google, social media and other online platforms.'],
  ['Build Your Brand', 'Make more people aware of your business through regular marketing activities.'],
  ['Generate More Enquiries', 'Attract potential customers through search engines, paid advertisements and social media campaigns.'],
  ['Improve Customer Engagement', 'Stay connected with your audience through useful content, social media and email marketing.'],
  ['Understand Your Marketing Performance', 'Track website visitors, campaign performance, customer enquiries and other important marketing activities.'],
  ['Grow Your Business Online', 'Build a stronger digital presence and create more opportunities to reach new customers.'],
]

const process = [
  ['01', 'Understand Your Business', 'First, we discuss your business, services, target audience and marketing goals.'],
  ['02', 'Research & Planning', 'We study your competitors, industry and market to identify the right marketing opportunities.'],
  ['03', 'Create a Marketing Strategy', 'Based on our research, we prepare a marketing plan that suits your business requirements and budget.'],
  ['04', 'Start Marketing Activities', 'Our team starts work on the selected services, such as SEO, Google Ads, social media and content creation.'],
  ['05', 'Check Performance', 'We regularly review website traffic, campaign performance, engagement and enquiries.'],
  ['06', 'Improve the Strategy', 'Based on the results, we make the necessary changes to improve your marketing activities.'],
]

const strengths = [
  ['Complete Digital Marketing Solutions', 'From SEO and Google Ads to social media and website development, get multiple services under one roof.'],
  ['A Team with Different Skills', 'Our team works across digital marketing, content writing, graphic designing, video editing and website development.'],
  ['Strategies Based on Your Business', 'We understand your requirements before suggesting which marketing services are suitable for you.'],
  ['Regular Communication', 'We keep you informed about ongoing work, campaign performance and important updates.'],
  ['Focus on Business Goals', 'We work towards improving your online presence, reaching relevant audiences and generating business opportunities.'],
  ['Solutions for Different Budgets', 'We offer marketing solutions based on your business size, requirements and available budget.'],
]

const industries = ['Real Estate & Property Businesses', 'IT & Software Companies', 'Healthcare & Dental Clinics', 'Educational Institutes', 'E-commerce & Retail Businesses', 'Manufacturing Companies', 'Hotels & Restaurants', 'Consultants & Professional Services', 'Startups & Small Businesses']

const faqs = [
  ['What services are included in 360° digital marketing?', '360° digital marketing includes SEO, Google Ads, social media marketing, content marketing, email marketing, online reputation management, personal branding and website development. The services work together to improve your online presence.'],
  ['Why should I hire a digital marketing agency?', 'A digital marketing agency helps you manage your online marketing activities professionally. It brings together different skills and resources to plan campaigns, reach customers and track marketing performance.'],
  ['How much do digital marketing services cost?', 'The cost depends on the services you need, your business goals, the number of platforms and the amount of work involved. We provide customised packages based on your requirements and budget.'],
  ['How long does digital marketing take to show results?', 'It depends on the service you choose. Google Ads can start bringing visitors and enquiries soon after campaigns go live, while SEO usually takes several months of consistent work to show meaningful improvements.'],
  ['Which digital marketing service is right for my business?', 'It depends on your goals. If you want organic website traffic, SEO may be suitable. If you need to reach people searching for your services, Google Ads can help. Social media marketing is useful for brand awareness and audience engagement.'],
  ['Do you provide digital marketing services in Delhi NCR?', 'Yes. Blix Technologies is based in Noida and provides digital marketing services across Noida, Greater Noida, Ghaziabad, Delhi, Gurugram and other locations in Delhi NCR.'],
  ['Can you manage all my digital marketing activities?', 'Yes. We offer complete digital marketing solutions, including SEO, Google Ads, social media management, content marketing, email marketing and website development. You can choose individual services or combine them based on your needs.'],
  ['Do you provide monthly reports?', 'Yes. We share regular updates and performance reports based on the services selected. These can include website traffic, keyword performance, advertising results, social media engagement and lead generation data.'],
]

export default function DigitalMarketingPage() {
  return (
    <main id="top" className="digital-marketing-page dm-redesign digital-marketing-services-page">
      <SEO title="360° Digital Marketing Services in Noida | Blix Technologies" description="Grow your business with tailored digital marketing from Blix Technologies in Noida: SEO, Google Ads, social media, content, email, reputation management, personal branding, and web development." keywords="360 digital marketing services, digital marketing agency Noida, SEO, Google Ads, social media marketing, Blix Technologies" />

      <section className="dm-new-hero">
        <div className="wrap dm-new-hero-grid">
          <div className="dm-new-hero-copy">
            <span className="dm-new-eyebrow"><i /> 360° Digital Marketing Services</span>
            <h1>Grow Your Business with <span>the Right Digital Marketing Strategy</span></h1>
            <p>Want more customers to find your business online? In today’s competitive market, having a website or social media page is not enough. You need the right marketing strategy to reach potential customers, build trust and grow your business.</p>
            <p>At <strong>Blix Technologies</strong>, we help businesses grow online with complete digital marketing services. From SEO and Google Ads to social media management, content writing and website development, we manage everything your business needs to build a strong online presence.</p>
            <p>Whether you run a startup, small business or an established company, we create marketing plans based on your business goals and budget.</p>
            <Link className="dm-pink-link" to="/contact">Get a Free Consultation <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="dm-new-hero-image"><img src="/dm-360-hero.png" alt="Team presenting social media, cloud, and digital marketing ideas" fetchPriority="high" /><div className="dm-hero-image-tag"><span>BLIX TECHNOLOGIES</span><b>Let’s take your business<br />to more customers.</b></div><span className="dm-hero-image-number">01 <i /> DIGITAL GROWTH</span></div>
        </div>
      </section>

      <section className="dm-new-intro"><div className="wrap dm-new-intro-grid">
        <div className="dm-new-intro-image"><img src="/dm-360-second.png" alt="Hand holding a phone surrounded by marketing icons" loading="lazy" /><span>PLAN WITH PURPOSE <b>↗</b></span></div>
        <div className="dm-new-copy"><span className="dm-new-eyebrow">Your Trusted Digital Marketing Agency in Noida, India</span><h2>Find the right customers and give them a reason to choose you.</h2>
          <p>Finding customers online is not always easy. You need to understand where your audience spends time, what they are searching for and how to reach them. That’s where we can help.</p>
          <p>At Blix Technologies, we take time to understand your business before planning any marketing activity. We study your target audience, competitors and industry to find the right ways to promote your brand.</p>
          <p>Our team works on different digital marketing channels to improve your online visibility, attract potential customers and support business growth. Based in Noida, we provide digital marketing services to businesses across Delhi NCR, India and international markets.</p>
          <p>Whether you need more website traffic, business enquiries or better social media engagement, we help you choose the right marketing solutions.</p>
          <Link className="dm-pink-link" to="/contact">Talk through your goals <span aria-hidden="true">↗</span></Link>
        </div>
      </div></section>

      <section className="dm-new-growth"><div className="wrap dm-new-growth-grid">
        <div className="dm-new-copy"><span className="dm-new-eyebrow">One connected strategy</span><h2>What Are 360° Digital Marketing Services?</h2>
          <p>360° digital marketing means promoting your business through different online platforms and marketing channels. It brings services like SEO, Google Ads, social media marketing, content marketing and email marketing together to reach potential customers at different stages of their buying journey.</p>
          <p>For example, a customer may discover your business through Google, visit your website, follow you on Instagram and later contact you after seeing an advertisement. When all these activities work together, your business gets more opportunities to connect with customers.</p>
          <p>At Blix Technologies, we plan and manage these activities according to your business requirements.</p>
          <Link className="dm-pink-link" to="#dm-services">See Our Services <span aria-hidden="true">↓</span></Link>
        </div>
        <div className="dm-new-growth-image dm-360-writing"><img src="/dm-360-third.png" alt="Hand writing 360 degree marketing" loading="lazy" /><div><span>REACH THE RIGHT AUDIENCE</span><b>Make every channel<br />work together.</b></div></div>
      </div></section>

      <section className="dm-new-services" id="dm-services"><div className="wrap">
        <div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Our Digital Marketing Services</span><h2>Everything your brand needs<br /><span>to grow online.</span></h2></div><p>We offer different digital marketing services under one roof, so you don’t have to work with multiple agencies for your marketing needs.</p></div>
        <div className="dm-new-service-grid">{services.map(([number, title, text, items, href, label]) => <article className="dm-new-service-card" key={number}>
          <div className="dm-new-card-top"><span>{number}</span><i aria-hidden="true">↗</i></div><h3>{title}</h3><p>{text}</p>
          <ul className="dm-service-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
          <Link className="dm-pink-link" to={href}>{label} <span aria-hidden="true">→</span></Link>
        </article>)}</div>
      </div></section>

      <section className="dm-new-intro dm-benefits-section"><div className="wrap">
        <div className="dm-new-section-head"><div><span className="dm-new-eyebrow">How Digital Marketing Can Help</span><h2>Build momentum<br /><span>that supports growth.</span></h2></div><p>Digital marketing gives your business more ways to reach potential customers and promote your products or services. With the right strategy, it can help you:</p></div>
        <div className="dm-new-service-grid">{benefits.map(([title, text], index) => <article className="dm-new-service-card" key={title}><div className="dm-new-card-top"><span>0{index + 1}</span><i aria-hidden="true">↗</i></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="dm-new-why"><div className="wrap dm-new-why-grid">
        <div className="dm-new-why-image"><img src="/dm-360-laptop.png" alt="Person working on a laptop that says marketing" loading="lazy" /><span>YOUR STRATEGY PARTNER <b>↗</b></span></div>
        <div className="dm-new-copy"><span className="dm-new-eyebrow">Our Digital Marketing Process</span><h2>A clear process, from planning to improvement.</h2><p>We follow a simple process to understand your business and plan the right marketing activities.</p>
          <div className="dm-new-strength-list">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </div></section>

      <section className="dm-new-services dm-why-choose"><div className="wrap">
        <div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Why Choose Blix Technologies for Digital Marketing?</span><h2>A team that understands<br /><span>your business goals.</span></h2></div><p>Choosing a digital marketing agency is an important decision. We work closely with clients to understand their requirements and provide suitable marketing solutions.</p></div>
        <div className="dm-new-service-grid">{strengths.map(([title, text], index) => <article className="dm-new-service-card" key={title}><div className="dm-new-card-top"><span>0{index + 1}</span><i aria-hidden="true">↗</i></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="dm-closing-note">We believe in building long-term relationships with our clients through honest communication, consistent work and a clear understanding of their goals.</p>
      </div></section>

      <section className="dm-new-growth dm-industries-section"><div className="wrap dm-new-growth-grid">
        <div className="dm-new-copy"><span className="dm-new-eyebrow">Industries We Serve</span><h2>Marketing shaped around your market.</h2><p>We provide digital marketing solutions for businesses across different industries. We understand that every industry has different customers and marketing requirements, so we plan our strategies according to your business.</p><div className="dm-industries-list">{industries.map((industry) => <span key={industry}>{industry}</span>)}</div></div>
        <div className="dm-new-growth-image"><img src="/studio-session.png" alt="Marketing team collaborating on campaign ideas for different industries" loading="lazy" /><div><span>BUILT AROUND YOUR BUSINESS</span><b>Useful strategy.<br />Made for your market.</b></div></div>
      </div></section>

      <HomeFaq items={faqs.map(([q, a]) => ({ q, a }))} description="Answers to common questions about choosing and planning digital marketing services for your business." contactHref="/contact" />

      <section className="dm-new-cta"><div className="wrap dm-new-cta-inner"><div><span className="dm-new-eyebrow">Looking for the Right Digital Marketing Partner?</span><h2>Let’s find the right way to grow online.</h2><p>Growing a business online takes the right strategy, regular effort and a clear understanding of your customers. Whether you need SEO, Google Ads, social media marketing or complete digital marketing support, our team is ready to understand your requirements.</p><p><strong>Tell us about your business. Let’s discuss how we can help you grow online.</strong></p><p><strong>Blix Technologies Pvt. Ltd.</strong><br />Your Digital Growth Partner.</p></div><Link className="dm-new-cta-link" to="/contact">Get a Free Consultation <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  )
}
