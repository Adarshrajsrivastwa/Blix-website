import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import HomeFaq from '../components/HomeFaq.jsx'

const services = [
  ['01', 'Social Media Strategy & Planning', 'Before starting any social media activity, we understand your business and what you want to achieve. We then prepare a plan that gives your social media activities a clear direction.', ['Understanding your business and audience', 'Checking competitor social media pages', 'Selecting the right platforms', 'Planning monthly content', 'Deciding content topics', 'Creating a posting schedule']],
  ['02', 'Social Media Account Management', 'Managing social media pages regularly takes time and effort. We help manage your business accounts and keep them active with regular updates and content.', ['Business page setup', 'Profile optimisation', 'Regular post publishing', 'Caption writing', 'Hashtag research', 'Page updates', 'Comment monitoring', 'Monthly performance reports']],
  ['03', 'Social Media Content Creation', 'People are more likely to notice your brand when your content is interesting and easy to understand. Our creative team designs content based on your business and brand identity.', ['Promotional posts', 'Festival creatives', 'Business updates', 'Educational posts', 'Carousel designs', 'Infographics', 'Product posts', 'Reels and short videos', 'Social media captions']],
  ['04', 'Facebook & Instagram Ads', 'We create and manage paid advertising campaigns on Facebook and Instagram to help businesses reach potential customers. We regularly check performance and make changes wherever required.', ['Facebook Ads Management', 'Instagram Ads Management', 'Lead Generation Campaigns', 'Brand Awareness Ads', 'Website Traffic Campaigns', 'Audience Targeting', 'Ad Creative Designing', 'Ad Copywriting', 'Campaign Monitoring']],
  ['05', 'Instagram Marketing', 'Instagram is a useful platform to showcase your products, services and business activities. We help maintain a good presence and connect with the right audience.', ['Instagram Profile Optimisation', 'Post Designing', 'Reels and Stories', 'Content Planning', 'Instagram Ads', 'Caption Writing', 'Hashtag Research', 'Account Performance Tracking']],
  ['06', 'Facebook Marketing', 'Facebook helps businesses connect with customers, share updates and promote their services. We manage business pages and help you reach more people through regular content and advertising.', ['Facebook Business Page Management', 'Post Designing', 'Regular Publishing', 'Facebook Ads', 'Lead Generation', 'Audience Targeting', 'Customer Engagement', 'Performance Reports']],
  ['07', 'LinkedIn Marketing', 'LinkedIn is especially useful for companies that want to connect with other businesses, professionals and decision-makers. We create content that presents your business professionally and helps you connect with relevant people.', ['LinkedIn Company Page Management', 'Professional Post Designing', 'Content Writing', 'Content Planning', 'LinkedIn Ads', 'B2B Marketing Campaigns', 'Audience Engagement']],
  ['08', 'YouTube Marketing', 'YouTube gives businesses an opportunity to share videos and explain their products and services. We help you use YouTube to share useful content and promote your brand.', ['YouTube Channel Management', 'Video Content Planning', 'YouTube Shorts', 'Video Titles and Descriptions', 'Thumbnail Designing', 'YouTube Ads', 'Channel Optimisation']],
  ['09', 'Social Media Performance Reports', 'We regularly check your social media performance to understand how your pages and content are doing. Reports help us understand what is working and what needs improvement.', ['Post Reach', 'Likes and Comments', 'Audience Engagement', 'Follower Growth', 'Profile Visits', 'Advertising Performance', 'Lead Generation Results']],
]

const platforms = [
  ['Facebook', 'Promote your business, share updates and connect with customers.'],
  ['Instagram', 'Showcase products and services through posts, reels and stories.'],
  ['LinkedIn', 'Connect with professionals, business owners and potential B2B clients.'],
  ['YouTube', 'Share videos, product information and business-related content.'],
  ['X (Twitter)', 'Share business updates, industry news and communicate with your audience.'],
]

const benefits = [
  ['More People Can Discover Your Business', 'Regular posts and advertising help introduce your brand to new audiences.'],
  ['Build a Recognisable Brand', 'Consistent content and communication help people become familiar with your business.'],
  ['Get More Business Enquiries', 'Social media campaigns can help you reach people who are interested in your products or services.'],
  ['Showcase Your Products & Services', 'Share pictures, videos, customer feedback and business updates to give people a better idea of what you offer.'],
  ['Stay Connected With Customers', 'Respond to comments, answer questions and keep your audience updated about your business.'],
  ['Understand Your Customers Better', 'Check which posts and campaigns get more attention and use that information to plan future content.'],
]

const process = [
  ['01', 'Understand Your Business', 'We learn about your business, products, services and target customers.'],
  ['02', 'Check Your Social Media Pages', 'We review your existing accounts and check what can be improved.'],
  ['03', 'Prepare a Content Plan', 'We create a monthly content calendar based on your business requirements.'],
  ['04', 'Design & Create Content', 'Our team prepares posts, captions, reels and other creatives.'],
  ['05', 'Publish & Manage', 'We publish the approved content and manage your social media pages.'],
  ['06', 'Review Performance', 'We check the results and suggest improvements for the coming month.'],
]

const strengths = [
  ['Creative Content', 'We design posts and videos according to your brand.'],
  ['Business-Focused Planning', 'Our content plans are based on your products, services and goals.'],
  ['Complete Page Management', 'We help manage your social media accounts regularly.'],
  ['Advertising Support', 'We manage Facebook, Instagram and LinkedIn advertising campaigns.'],
  ['Experienced Team', 'Our team works across content, designing, video editing and digital marketing.'],
  ['Regular Updates', 'We keep you informed about the work and campaign performance.'],
]

const industries = ['Real Estate Companies', 'IT & Software Companies', 'Hospitals & Dental Clinics', 'Educational Institutes', 'E-commerce Businesses', 'Restaurants & Hotels', 'Manufacturing Companies', 'Consultants & Professionals', 'Startups & Small Businesses']

const faqs = [
  ['What is included in social media marketing services?', 'Social media marketing services include page management, content creation, post designing, caption writing, regular publishing, audience engagement and paid advertising.'],
  ['Why should I hire a social media marketing company?', 'Managing social media requires regular planning, content creation and monitoring. A professional agency helps you manage these activities while you focus on your business.'],
  ['How much do social media marketing services cost?', 'The cost depends on the number of platforms, posts, reels, designs and other activities required. We offer plans according to your business needs and budget.'],
  ['Which social media platform is best for my business?', 'It depends on your business and target audience. Instagram and Facebook are useful for many consumer-focused businesses, while LinkedIn is suitable for B2B companies and professionals. YouTube is useful for video-based content.'],
  ['How many posts should I publish every month?', 'There is no fixed number for every business. The posting frequency depends on your goals, budget and content requirements. We prepare a monthly content calendar based on your needs.'],
  ['Can social media marketing help generate leads?', 'Yes. You can generate business enquiries through Facebook Ads, Instagram Ads and relevant social media content. Results depend on your audience, campaign strategy, offer and budget.'],
  ['Do you provide Facebook and Instagram Ads management?', 'Yes. We manage Facebook and Instagram advertising campaigns, including campaign setup, audience targeting, creative designing, ad copywriting and performance monitoring.'],
  ['Do you provide social media marketing services in Noida?', 'Yes. Blix Technologies is based in Noida and provides social media marketing services across Noida, Greater Noida, Delhi NCR and other locations.'],
  ['Do you create reels and social media videos?', 'Yes. We create and edit reels, short videos, promotional videos and other social media content according to your requirements.'],
  ['How long does it take to see results?', 'It depends on your industry, content and marketing activities. Paid campaigns can start reaching people soon after launch, while building a strong social media presence and audience takes regular effort.'],
]

export default function SocialMediaPage() {
  return (
    <main id="top" className="digital-marketing-page dm-redesign social-redesign">
      <SEO title="Social Media Marketing Services in Noida | Blix Technologies" description="Manage your social media pages, create engaging content and reach the right audience with Blix Technologies in Noida, Delhi NCR and beyond." keywords="social media marketing Noida, Facebook marketing, Instagram marketing, LinkedIn marketing, YouTube marketing, Blix Technologies" />

      <section className="dm-new-hero"><div className="wrap dm-new-hero-grid">
        <div className="dm-new-hero-copy"><span className="dm-new-eyebrow"><i /> Social Media Marketing Services</span><h1>Make Your Brand Visible. <span>Reach More Customers. Grow Your Business.</span></h1>
          <p>Your customers are on social media. Your business should be there too!</p>
          <p>Social media is a great way to tell people about your business, showcase your products and connect with potential customers. But simply creating an account and posting occasionally is not enough.</p>
          <p>At <strong>Blix Technologies</strong>, we help businesses manage their social media pages, create engaging content and reach the right audience through social media marketing. From Instagram and Facebook to LinkedIn and YouTube, we help you build a professional online presence and promote your business.</p>
          <p>Whether you want more followers, better engagement or new business enquiries, our team can help you plan and manage your social media activities.</p>
          <Link className="dm-pink-link" to="/contact">Get a Free Consultation <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="dm-new-hero-image social-hero-image"><img src="/social-hero.png" alt="Laptop with floating social media icons" fetchPriority="high" /><div className="social-hero-card"><span>CONTENT · COMMUNITY · CAMPAIGNS</span><b>Let’s make your business<br />stand out on social media!</b><i>↗</i></div></div>
      </div></section>

      <section className="dm-new-intro"><div className="wrap dm-new-intro-grid">
        <div className="dm-new-intro-image social-intro-image"><img src="/social-intro.png" alt="Facebook, Instagram, YouTube, LinkedIn, TikTok, and Twitter icons" loading="lazy" /><span>BUILT FOR YOUR AUDIENCE <b>↗</b></span></div>
        <div className="dm-new-copy"><span className="dm-new-eyebrow">Social Media Marketing Company in Noida</span><h2>Show up where your customers connect.</h2>
          <p>Managing social media regularly can be time-consuming, especially when you are busy running your business. You need fresh content, attractive designs, regular posting and the right marketing plan to keep your audience interested.</p>
          <p>At Blix Technologies, we take care of your social media marketing so you can focus on your business. We first understand your products, services and target customers. Then we prepare a content plan that matches your brand and business goals.</p>
          <p>Our team helps businesses across Noida, Greater Noida, Delhi NCR and other locations build and manage their social media presence. Whether you are a startup, local business or established company, we offer social media marketing solutions based on your requirements.</p>
        </div>
      </div></section>

      <section className="social-basics"><div className="wrap">
        <div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Social media, made useful</span><h2>What Is Social Media Marketing?</h2></div><p>Social media marketing means promoting your business through platforms like Facebook, Instagram, LinkedIn and YouTube. It helps you share business updates, showcase products, connect with customers and promote your services.</p></div>
        <div className="social-basics-grid"><article><span>01</span><h3>Share your business</h3><p>A restaurant can use Instagram to share food pictures and videos.</p></article><article><span>02</span><h3>Showcase what you offer</h3><p>A real estate company can showcase properties and generate enquiries through Facebook Ads.</p></article><article><span>03</span><h3>Choose the right approach</h3><p>Every business has different marketing needs. We help you choose the right platforms and create content your audience will find useful.</p></article></div>
      </div></section>

      <section className="dm-new-services social-services" id="social-services"><div className="wrap">
        <div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Our Social Media Marketing Services</span><h2>From the first post<br /><span>to lasting growth.</span></h2></div><p>We offer complete social media marketing services to help you manage your business pages and reach more people online.</p></div>
        <div className="dm-new-service-grid">{services.map(([number, title, text, items]) => <article className="dm-new-service-card" key={number}><div className="dm-new-card-top"><span>{number}</span><i aria-hidden="true">↗</i></div><h3>{title}</h3><p>{text}</p><ul className="dm-service-list">{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </div></section>

      <section className="social-platforms"><div className="wrap">
        <div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Social Media Platforms We Work With</span><h2>Be present where your<br /><span>customers connect.</span></h2></div><p>We help businesses manage their presence across different social media platforms and recommend platforms based on your business and the type of customers you want to reach.</p></div>
        <div className="dm-new-service-grid">{platforms.map(([name, text], index) => <article className="dm-new-service-card" key={name}><div className="dm-new-card-top"><span>0{index + 1}</span><i aria-hidden="true">↗</i></div><h3>{name}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="social-benefits"><div className="wrap">
        <div className="dm-new-section-head"><div><span className="dm-new-eyebrow">How Social Media Marketing Helps</span><h2>More ways to connect<br /><span>with potential customers.</span></h2></div><p>Social media marketing gives your business more opportunities to connect with potential customers.</p></div>
        <div className="dm-new-service-grid">{benefits.map(([title, text], index) => <article className="dm-new-service-card" key={title}><div className="dm-new-card-top"><span>0{index + 1}</span><i aria-hidden="true">↗</i></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="social-process"><div className="wrap">
        <div className="dm-new-section-head"><div><span className="dm-new-eyebrow">How We Manage Your Social Media</span><h2>A simple, considered<br /><span>process.</span></h2></div><p>We follow a simple process to make sure your social media activities are properly planned and managed.</p></div>
        <div className="dm-new-service-grid">{process.map(([number, title, text]) => <article className="dm-new-service-card" key={number}><div className="dm-new-card-top"><span>{number}</span><i aria-hidden="true">↗</i></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="social-why"><div className="wrap social-why-grid">
        <div className="social-why-image"><img src="/social-why.png" alt="Hand placing a how-to social media marketing note on a board" loading="lazy" /><span>BLIX SOCIAL TEAM <b>↗</b></span></div>
        <div className="dm-new-copy"><span className="dm-new-eyebrow">Why Choose Blix Technologies for Social Media Marketing?</span><h2>Social marketing with a wider view.</h2>
          <p>Your social media pages represent your business online. They should look professional and communicate the right message. At Blix Technologies, we understand that every business has different customers and marketing requirements. We take time to understand your brand before planning your social media activities.</p>
          <div className="social-strength-list">{strengths.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          <p>We believe in providing clear communication and consistent support throughout our association.</p>
        </div>
      </div></section>

      <section className="social-industries"><div className="wrap">
        <div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Social Media Marketing for Different Industries</span><h2>A different approach<br /><span>for every industry.</span></h2></div><p>We work with businesses across different industries and understand that each one needs a different marketing approach. We plan content according to your industry, products, services and target customers.</p></div>
        <div className="dm-industries-list">{industries.map((industry) => <span key={industry}>{industry}</span>)}</div>
      </div></section>

      <HomeFaq items={faqs.map(([q, a]) => ({ q, a }))} description="Answers to common questions about social media marketing services, platforms, content and advertising." contactHref="/contact" />

      <section className="dm-new-cta"><div className="wrap dm-new-cta-inner"><div><span className="dm-new-eyebrow">Let’s Grow Your Business on Social Media!</span><h2>Make sure more people get to know what you offer.</h2>
        <p>Your business has something valuable to offer. At <strong>Blix Technologies</strong>, we help businesses manage their social media pages, create attractive content and reach potential customers through the right marketing activities.</p>
        <p>Whether you need Instagram management, Facebook Ads, LinkedIn marketing or complete social media management, we are here to help.</p>
        <p><strong>Share your business requirements with us and let’s plan your social media growth.</strong></p>
        <p><strong>Blix Technologies Pvt. Ltd.</strong><br />Your Digital Growth Partner.</p></div><Link className="dm-new-cta-link" to="/contact">Get a Free Consultation <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  )
}
