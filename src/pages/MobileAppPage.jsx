import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

const appServices = [
  ['01', 'Android app development', 'Reach Android users with an app built around your business requirements, useful features, simple navigation, and a user-friendly design.'],
  ['02', 'iOS app development', 'Reach iPhone and iPad users with a mobile application planned around your project needs and a smooth user experience.'],
  ['03', 'Cross-platform app development', 'Build for Android and iOS with a shared codebase when it fits your product, timeline, and budget.'],
  ['04', 'Custom mobile app development', 'Plan an app around your business model, target users, and feature requirements—from booking and customer apps to new digital services.'],
  ['05', 'Mobile app UI/UX design', 'Design clear screens, layouts, and navigation that help people understand the app and find what they need.'],
  ['06', 'Business and enterprise apps', 'Support internal operations and customer services with tools for communication, data management, order tracking, and daily tasks.'],
  ['07', 'App maintenance and support', 'Keep your application working well with bug fixes, feature updates, performance improvements, and ongoing technical support.'],
]

const industries = [
  ['E-commerce', 'Shopping, product discovery, and order management.'],
  ['Healthcare', 'Appointment booking and patient services.'],
  ['Education', 'Online learning, courses, and student management.'],
  ['Real estate', 'Property listings, enquiries, and customer communication.'],
  ['Travel and hospitality', 'Bookings, reservations, and customer support.'],
  ['Logistics', 'Delivery tracking and operational tools.'],
  ['Finance', 'Access to financial services and customer features.'],
  ['Startups', 'Mobile products for new ideas, services, and business models.'],
]

const process = [
  ['Understand your requirements', 'Discuss your business, app idea, target users, and the features you need.'],
  ['Plan the app', 'Define the project scope, feature set, platform, and expected timeline.'],
  ['Design the experience', 'Plan app screens, layouts, and navigation to make the product easy to use.'],
  ['Develop the application', 'Build the app against the agreed requirements and approved design.'],
  ['Test the app', 'Review features, performance, and usability, then address identified issues before launch.'],
  ['Prepare for launch', 'After testing and your approval, prepare the application for release on the relevant app store.'],
  ['Maintain and improve', 'Continue with updates, bug fixes, and improvements after launch as your needs evolve.'],
]

const strengths = [
  ['Business-focused approach', 'We plan the app around your business needs and target users.'],
  ['Custom solutions', 'The scope and features are shaped around your requirements.'],
  ['Simple user experience', 'We focus on clear screens and easy-to-follow navigation.'],
  ['Clear communication', 'We keep you informed about project decisions and progress.'],
  ['Testing and support', 'We review the app before launch and can help with future updates.'],
  ['For different business sizes', 'We work with startups, small businesses, and established companies.'],
]

const faqs = [
  ['How much does mobile app development cost?', 'Cost depends on the type of app, the number of features, design requirements, and development time. Share your requirements with us to discuss an estimate.'],
  ['How long does it take to develop a mobile app?', 'The timeline depends on the app’s features and complexity. We can provide an estimate after understanding your project scope.'],
  ['Can you develop apps for Android and iOS?', 'Yes. We can plan native Android, native iOS, or cross-platform development according to your requirements.'],
  ['Can you build a custom app for my business?', 'Yes. We can plan a custom application around your business model, target audience, and required features.'],
  ['Do you provide maintenance after launch?', 'Yes. We can assist with updates, bug fixes, performance improvements, and technical support.'],
  ['Do you work with startups?', 'Yes. We work with startups and businesses developing an app for a new idea, product, or service.'],
]

export default function MobileAppPage() {
  return (
    <main id="top" className="digital-marketing-page dm-redesign mobile-app-redesign">
      <SEO
        title="Mobile App Development Services in Noida"
        description="Build a mobile app for your business with Blix Technologies. We develop custom Android, iOS, and cross-platform apps for businesses in Noida and beyond."
        keywords="mobile app development services, mobile app development company Noida, Android app development, iOS app development, cross-platform apps"
      />

      <section className="dm-new-hero">
        <div className="wrap dm-new-hero-grid">
          <div className="dm-new-hero-copy">
            <span className="dm-new-eyebrow"><i /> Mobile app development · Noida, India</span>
            <h1>Build a mobile app <span>for your business.</span></h1>
            <p>A mobile app can make it easier for customers to connect with your business, access your services, and complete everyday tasks.</p>
            <p>Blix Technologies works with startups, small businesses, and established companies to plan apps around their goals, budget, and audience.</p>
            <Link className="dm-pink-link" to="/#contact">Discuss your app idea <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="dm-new-hero-image mobile-app-hero-image"><img src="/mobile-app-hero.png" alt="Hand holding a phone showing a mobile app dashboard" fetchPriority="high" /><div className="mobile-app-hero-card"><span>IDEA · DESIGN · DEVELOPMENT</span><b>One tap closer<br />to what’s next.</b></div></div>
        </div>
      </section>

      <section className="dm-new-intro"><div className="wrap dm-new-intro-grid">
        <div className="dm-new-intro-image mobile-app-intro-image"><img src="/mobile-app-intro.png" alt="Designer reviewing mobile app wireframes and a phone layout" loading="lazy" /><span>DESIGNED AROUND YOUR USERS <b>↗</b></span></div>
        <div className="dm-new-copy"><span className="dm-new-eyebrow">Mobile app development company in Noida</span><h2>From your first idea to a working application.</h2><p>We help businesses turn app ideas into working mobile applications. From planning and design to development and testing, our team manages the process around your project requirements.</p><p>We focus on apps that are easy to use, work smoothly, and support your business needs. We can also help with maintenance after launch.</p></div>
      </div></section>

      <section className="dm-new-services mobile-app-services"><div className="wrap">
        <div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Our mobile app development services</span><h2>Choose the right build<br /><span>for your business.</span></h2></div><p>From design and engineering through testing, launch, and ongoing support, we shape the work around your app requirements.</p></div>
        <div className="dm-new-service-grid">{appServices.map(([number, title, text]) => <article className="dm-new-service-card" key={number}><div className="dm-new-card-top"><span>{number}</span><i aria-hidden="true">↗</i></div><h3>{title}</h3><p>{text}</p><Link className="dm-pink-link" to="/#contact">Discuss this service <span aria-hidden="true">→</span></Link></article>)}</div>
      </div></section>

      <section className="mobile-app-industries"><div className="wrap"><div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Mobile apps for different industries</span><h2>Solutions shaped<br /><span>around your users.</span></h2></div><p>We work with businesses across industries and plan mobile app solutions according to their customers and day-to-day needs.</p></div><div className="mobile-app-industry-grid mobile-app-industry-detail-grid">{industries.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><b aria-hidden="true">↗</b></article>)}</div></div></section>

      <section className="software-process mobile-app-process"><div className="wrap"><div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Our mobile app development process</span><h2>A clear path from<br /><span>idea to app launch.</span></h2></div><p>We follow a step-by-step process to keep the project organized and make sure the app meets your requirements.</p></div><div className="software-process-grid mobile-app-process-grid">{process.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="mobile-app-why"><div className="wrap mobile-app-why-grid">
        <div className="mobile-app-why-heading"><span className="dm-new-eyebrow">Why choose Blix Technologies?</span><h2>A development partner who listens first.</h2><p>Choosing the right development partner matters. We understand your requirements before work begins and keep the project focused on your business and users.</p></div>
        <div className="mobile-app-strengths">{strengths.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </div></section>

      <section className="software-faq mobile-app-faq"><div className="wrap software-faq-inner"><div><span className="dm-new-eyebrow">Frequently asked questions</span><h2>Mobile app development, clearly explained.</h2><p>Have an app idea? Here are answers to common project questions.</p></div><div className="software-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="dm-new-cta"><div className="wrap dm-new-cta-inner"><div><span className="dm-new-eyebrow">Let’s discuss your mobile app idea</span><h2>Start with the business need. We’ll help plan the app.</h2><p>Share your requirements with Blix Technologies. We’ll understand your goals and help you plan a mobile app solution that fits.</p></div><Link className="dm-new-cta-link" to="/#contact">Contact Blix Technologies <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  )
}
