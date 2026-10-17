import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Clients from '../components/Clients.jsx'
import Services from '../components/Services.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Process from '../components/Process.jsx'
import Why from '../components/Why.jsx'
import Voices from '../components/Voices.jsx'
import LatestBlog from '../components/LatestBlog.jsx'
import Contact from '../components/Contact.jsx'
import FeaturedWith from '../components/FeaturedWith.jsx'
import HomeFaq from '../components/HomeFaq.jsx'
import SEO from '../components/SEO.jsx'

export default function Home() {
  const homeLd = [
    {
      id: 'home-faq',
      data: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What digital marketing services does Blix Technologies offer?',
            acceptedAnswer: { '@type': 'Answer', text: 'We offer digital marketing, SEO, social media marketing, real estate marketing, online reputation management, personal branding, and web, mobile app, and software development.' },
          },
          {
            '@type': 'Question',
            name: 'Can you create a strategy tailored to my business?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. We start by understanding your business, audience, goals, and current marketing, then recommend a plan suited to your needs.' },
          },
          {
            '@type': 'Question',
            name: 'How soon should I expect to see results?',
            acceptedAnswer: { '@type': 'Answer', text: 'Timing depends on the service, competition, budget, and starting point. Paid campaigns can generate early data, while SEO and other longer-term work take time to build. We’ll agree on suitable measures and review progress with you.' },
          },
          {
            '@type': 'Question',
            name: 'Do you work with businesses outside Noida?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. We’re based in Noida and work with businesses across India and in international markets.' },
          },
          {
            '@type': 'Question',
            name: 'How can I get started?',
            acceptedAnswer: { '@type': 'Answer', text: 'Use the contact form below to tell us about your business and what you’re looking to achieve. Our team can discuss the right next steps with you.' },
          },
        ],
      },
    },
    {
      id: 'services-list',
      data: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Blix Technologies Services',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '360 Digital Marketing' },
          { '@type': 'ListItem', position: 2, name: 'SEO Services' },
          { '@type': 'ListItem', position: 3, name: 'Social Media Services' },
          { '@type': 'ListItem', position: 4, name: 'Real Estate Marketing' },
          { '@type': 'ListItem', position: 5, name: 'Online Reputation Management' },
          { '@type': 'ListItem', position: 6, name: 'Personal Branding' },
          { '@type': 'ListItem', position: 7, name: 'Web Development' },
          { '@type': 'ListItem', position: 8, name: 'Mobile App Development' },
          { '@type': 'ListItem', position: 9, name: 'Software Development' },
        ],
      },
    },
  ]

  return (
    <main id="top">
      <SEO
        title="AI Digital Marketing Agency in Noida"
        description="Blix Technologies is a leading AI digital marketing agency in Noida offering SEO, SEM, social media marketing, web design, mobile app development, and 360° growth solutions for brands."
        keywords="digital marketing agency Noida, AI marketing company Noida, SEO services Noida, social media marketing agency, web development Noida, app development, Blix Technologies"
        jsonLd={homeLd}
      />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Why />
      <Voices />
      <LatestBlog />
      <HomeFaq />
      <FeaturedWith />
      <Contact />
    </main>
  )
}
