import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import Clients from '../components/Clients.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Process from '../components/Process.jsx'
import Why from '../components/Why.jsx'
import Voices from '../components/Voices.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Contact from '../components/Contact.jsx'
import SEO from '../components/SEO.jsx'

export default function Home() {
  const homeLd = [
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
          { '@type': 'ListItem', position: 4, name: 'Personal Branding' },
          { '@type': 'ListItem', position: 5, name: 'Web Development' },
          { '@type': 'ListItem', position: 6, name: 'Online Reputation Management' },
          { '@type': 'ListItem', position: 7, name: 'App Development' },
          { '@type': 'ListItem', position: 8, name: 'Software Development' },
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
      <Marquee />
      <Clients />
      <About />
      <Services />
      <Process />
      <Why />
      <Voices />
      <CtaBand />
      <Contact />
    </main>
  )
}
