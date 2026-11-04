import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

const services = [
  ['01', 'Custom software', 'Automate routine work, organize information, connect systems, and create tools that fit the way your business operates.'],
  ['02', 'Web applications', 'Responsive, secure applications that help customers and employees access information and complete tasks across devices.'],
  ['03', 'Mobile applications', 'Customer apps, employee applications, service platforms, and internal business tools designed around your needs.'],
  ['04', 'Enterprise software', 'Dependable systems built to support multiple users, teams, locations, and complex workflows.'],
  ['05', 'Software products', 'Take a product idea from concept to MVP with product design, development, testing, launch, and future enhancements.'],
  ['06', 'API development & integration', 'Connect applications, databases, platforms, and third-party services so information flows between systems.'],
  ['07', 'Cloud applications', 'Accessible, scalable cloud software planned around your application, security requirements, and expected usage.'],
  ['08', 'Modernization & support', 'Update legacy applications, improve stability, and keep software secure and useful as needs change.'],
]

const capabilities = ['Application security', 'Frontend development', 'Backend development', 'Full-stack development', 'Mobile app development', 'Cloud computing', 'API development', 'Database development', 'DevOps & CI/CD', 'AI & machine learning', 'Third-party integrations', 'Microservices']

const strengths = [
  ['We understand your requirements', 'We learn your goals, current workflows, users, and the problems your software needs to solve.'],
  ['Built around your business', 'We shape the solution to your processes instead of forcing your team into a generic setup.'],
  ['Focused on long-term growth', 'We consider future users, data, and features as we plan the architecture and development.'],
  ['A clear development process', 'Structured steps and transparent communication take the project from discovery through deployment.'],
  ['Quality and security', 'We consider usability, performance, reliability, and security throughout development.'],
  ['Support after launch', 'We can continue to maintain, support, and improve your application as requirements evolve.'],
]

const process = [
  ['01', 'Understand', 'Discuss your business, users, challenges, objectives, and essential features.'],
  ['02', 'Plan', 'Define the scope, technical approach, architecture, and delivery plan.'],
  ['03', 'Design', 'Plan the application structure and interface around the people who will use it.'],
  ['04', 'Develop', 'Build the application, integrations, and required functionality.'],
  ['05', 'Test', 'Check functionality, usability, performance, and security before launch.'],
  ['06', 'Launch', 'Deploy the software and support the transition to its live environment.'],
  ['07', 'Support', 'Maintain, troubleshoot, update, and extend the software as your business grows.'],
]

const faqs = [
  ['What does a software development company do?', 'A software development company plans, builds, tests, deploys, and maintains software. This can include web and mobile applications, business software, integrations, and enterprise platforms.'],
  ['Why choose custom software development?', 'Custom software can be a good fit when ready-made products do not match your processes, features, integrations, or workflows.'],
  ['How much does custom software development cost?', 'Cost depends on features, complexity, technology, integrations, users, and development time. We can review your requirements before preparing an estimate.'],
  ['How long does software development take?', 'The timeline depends on the project’s size and complexity. A small application generally needs less time than an enterprise platform with multiple roles and integrations.'],
  ['Can you improve our existing software?', 'Yes. We can assess an existing application and recommend improvements, modernization, or redevelopment.'],
  ['Do you provide support after launch?', 'Yes. Ongoing support can include updates, bug fixes, performance improvements, security work, and new features.'],
  ['Can you connect new software to our existing applications?', 'Yes. We can integrate applications with existing software, databases, APIs, CRM and ERP platforms, payment systems, and other services where appropriate.'],
]

export default function SoftwareDevelopmentPage() {
  return (
    <main id="top" className="digital-marketing-page dm-redesign software-redesign">
      <SEO title="Software Development Services | Blix Technologies" description="Custom software, web and mobile applications, integrations, cloud solutions, and ongoing support built around your business." keywords="software development company, custom software, web applications, mobile applications, API integration, Blix Technologies" />

      <section className="dm-new-hero">
        <div className="wrap dm-new-hero-grid">
          <div className="dm-new-hero-copy"><span className="dm-new-eyebrow"><i /> Software development · Blix Technologies</span><h1>Software that fits <span>the way you work.</span></h1><p>Every business has different processes, customers, and challenges. We build software around how your business actually operates.</p><Link className="dm-pink-link" to="#contact">Talk about your software project <span aria-hidden="true">↗</span></Link></div>
          <div className="dm-new-hero-image software-hero-image"><img src="/software-hero.png" alt="Code on dual monitors with a phone standing on the desk" fetchPriority="high" /><div className="software-hero-card"><span>PLAN · BUILD · SUPPORT</span><b>Made for your<br />business reality.</b></div></div>
        </div>
      </section>

      <section className="dm-new-intro"><div className="wrap dm-new-intro-grid">
        <div className="dm-new-intro-image software-intro-image"><img src="/software-intro.png" alt="Desktop, tablet, and phone showing a website and its code" loading="lazy" /><span>START WITH THE PROBLEM <b>↗</b></span></div>
        <div className="dm-new-copy"><span className="dm-new-eyebrow">A development partner from idea to launch</span><h2>Practical solutions for complex work.</h2><p>Whether you need a new business application, a customer platform, a mobile app, or an existing system upgraded, we can help plan, build, and maintain the right solution.</p><p>Our software development services cover requirements, UI/UX design, development, testing, deployment, and ongoing support. We choose the technology to suit the product, its users, and where you want it to go.</p></div>
      </div></section>

      <section className="dm-new-services software-services"><div className="wrap"><div className="dm-new-section-head"><div><span className="dm-new-eyebrow">Our software development services</span><h2>Software shaped<br /><span>around your needs.</span></h2></div><p>From automating a specific process to launching a new product, we deliver software services across the full development lifecycle.</p></div><div className="dm-new-service-grid">{services.map(([number, title, text]) => <article className="dm-new-service-card" key={number}><div className="dm-new-card-top"><span>{number}</span><i aria-hidden="true">↗</i></div><h3>{title}</h3><p>{text}</p><Link className="dm-pink-link" to="#contact">Discuss this service <span aria-hidden="true">→</span></Link></article>)}</div></div></section>

      <section className="software-capabilities"><div className="wrap software-capabilities-inner"><div><span className="dm-new-eyebrow">Technology, chosen with purpose</span><h2>The right stack for the product.</h2><p>There isn’t one technology stack for every project. The right choice depends on what you’re building, who will use it, how it needs to perform, and how it may grow. We select technologies based on your actual requirements.</p></div><div className="software-capability-list">{capabilities.map((item, index) => <span key={item}><i>0{index + 1}</i>{item}</span>)}</div></div></section>

      <section className="software-why"><div className="wrap software-why-inner"><div className="dm-new-copy"><span className="dm-new-eyebrow">Why choose Blix Technologies?</span><h2>A development partner, not just a software vendor.</h2><p>Good software development begins with understanding the business problem. We keep the process collaborative and transparent, with attention to your users, operations, and future plans.</p></div><div className="software-strength-grid">{strengths.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section className="software-process"><div className="wrap"><div className="dm-new-section-head"><div><span className="dm-new-eyebrow">How we develop software</span><h2>A clear path from<br /><span>idea to ongoing support.</span></h2></div><p>Each stage keeps the work focused, visible, and connected to what your business needs.</p></div><div className="software-process-grid">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="software-faq"><div className="wrap software-faq-inner"><div><span className="dm-new-eyebrow">Frequently asked questions</span><h2>Software development, clearly explained.</h2><p>Have a project in mind? We can help you understand what it will take to make it real.</p></div><div className="software-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="dm-new-cta"><div className="wrap dm-new-cta-inner"><div><span className="dm-new-eyebrow">Smart software. Built around your business.</span><h2>Let’s work out the right way to build it.</h2><p>Tell us what you’re trying to build, replace, or improve. Our team will help you explore the technology and development approach that fits.</p></div><Link className="dm-new-cta-link" to="#contact">Talk to Blix Technologies <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  )
}
