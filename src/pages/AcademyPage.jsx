import { useState } from 'react'
import AppLink from '../components/AppLink.jsx'
import SEO from '../components/SEO.jsx'

const headChips = [
  { label: 'SEO', icon: <><circle cx="10" cy="10" r="6" /><path d="M15 15l6 6" /></> },
  { label: 'Social Media', icon: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M8 10h8M8 14h5" /></> },
  { label: 'PPC', icon: <path d="M6 4l12 5-5 2-2 5z" /> },
  { label: 'Email Marketing', icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></> },
  { label: 'Analytics', icon: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /> },
]

const trends = [
  { title: 'India is the world growth market online', text: 'Exploding mobile usage, vernacular adoption, and video-first behaviour mean brands need skilled marketers more than ever.', icon: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" /> },
  { title: 'Performance promises', text: 'Budgets follow outcomes. If you can plan, run, and scale campaigns, you will never be on the bench.', icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></> },
  { title: 'AI is a copilot, not a replacement', text: 'The pros who pair human insight with AI tools out-ship everyone else.', icon: <><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M12 2v5M12 17v5M2 12h5M17 12h5" /></> },
  { title: 'First-party data & privacy', text: 'Smart tagging, consent, and CRM fluency are now core skills, not nice-to-haves.', icon: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></> },
  { title: 'Creator economy meets commerce', text: 'Social + search + influencers + landing pages = measurable revenue.', icon: <><circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /><path d="M3 4h2l2.6 12h10.8L21 8H6" /></> },
  { title: 'Real skills beat certificates', text: 'Portfolios with live results move resumes to the top of the pile.', icon: <><circle cx="12" cy="9" r="5" /><path d="M9 13.5L7.5 21l4.5-2.5L16.5 21 15 13.5" /></> },
]

const pathways = [
  'Performance Marketing Specialist (Meta/Google)',
  'SEO Strategist / Technical SEO',
  'Social Media & Content Strategist (IG/YouTube/LinkedIn)',
  'Marketing Analyst (GA4, Looker/Data Studio)',
  'Marketing Automation & CRM (HubSpot/Zoho/WhatsApp)',
  'Conversion Rate Optimization (CRO) & Landing Page Specialist',
  'E-commerce Performance Marketer (D2C & Marketplaces)',
  'Media Planner / Digital Strategist',
  'Influencer & Partnerships Manager',
  'AI-for-Marketing Specialist (creative ops, testing, prompts)',
]

const specs = [
  { k: '12 Weeks', v: '2–3 sessions/week · Live + recorded access' },
  { k: 'Tool labs', v: 'Google Ads, Meta Ads, GA4, GTM, Looker Studio, Search Console, ChatGPT & AI tools, HubSpot/Zoho' },
  { k: 'Live briefs', v: 'from the RMW ecosystem (when available)' },
  { k: 'Career sprint', v: 'resume clinic, portfolio reviews, mock interviews' },
  { k: 'Language', v: 'English (with Hinglish comfort where helpful)' },
  { k: 'Batch size', v: 'Small, so you get real feedback' },
]

const whyCards = [
  { title: 'Agency DNA', text: 'Built by Blix Technologies; we practice what we teach.' },
  { title: 'Tool-first, fluff-free', text: 'You will touch the dashboards every week.' },
  { title: 'Portfolio over PowerPoint', text: 'Proof beats theory.' },
  { title: 'Career support', text: 'Mock interviews, referrals when relevant, and access to the Blix hiring network.' },
]

const learn = [
  { title: 'Meta & Google Ads', text: 'Develop and pitch a complete digital marketing strategy. Build a strong portfolio, prepare for interviews, and explore freelancing opportunities.', icon: <><path d="M3 11v3l11 4V7L3 11z" /><path d="M14 10a4 4 0 0 1 0 5M17 8a7 7 0 0 1 0 9" /></> },
  { title: 'Website & Landing Page Fundamentals', text: 'Learn how to build effective websites and landing pages with mobile-first design, UX basics and conversion-focused copy.', icon: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></> },
  { title: 'Search Engine Optimisation (SEO)', text: 'Master on-page, off-page, technical, and local SEO techniques, while leveraging industry tools like Search Console and GA4.', icon: <><circle cx="10" cy="10" r="6" /><path d="M15 15l6 6" /></> },
  { title: 'PPC (Google Ads)', text: 'Plan, run and scale pay-per-click campaigns with smart bidding, ad-copy testing and tight budget control.', icon: <path d="M6 4l12 5-5 2-2 5z" /> },
]

const faqs = [
  { q: 'Do I need prior experience?', a: 'No. Curiosity and basic computer comfort are enough.' },
  { q: 'Placement guaranteed?', a: 'No guarantees, placement assistance with real portfolio building, yes.' },
  { q: 'Will I get a certificate?', a: 'Yes — a completion certificate from Blix Academy, plus a project portfolio that carries more weight in interviews.' },
  { q: 'Live or recorded?', a: 'Both. Live sessions with recorded access, so you never miss a class.' },
  { q: 'Language?', a: 'English, with Hinglish comfort where helpful.' },
  { q: 'Is it only in Delhi-NCR?', a: 'No — sessions run online, so learners from anywhere can join.' },
]

export default function AcademyPage() {
  const [open, setOpen] = useState({ 0: true, 1: true })
  const toggle = (i) => setOpen((s) => ({ ...s, [i]: !s[i] }))

  const acadLd = [
    {
      id: 'course',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Blix Academy — Job-Ready Digital Marketing + AI Program',
        description: '12-week live + recorded digital marketing course by Blix Technologies covering SEO, Meta & Google Ads, social media, GA4, GTM, AI tools, landing pages, and CRO with portfolio & career support.',
        provider: { '@type': 'Organization', name: 'Blix Technologies', sameAs: 'https://blixtechnologies.com' },
        numberOfLessons: 12,
        courseCode: 'BLIX-DM-2026',
        educationalLevel: 'Beginner to Intermediate',
        inLanguage: 'en-IN',
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          instructor: { '@type': 'Organization', name: 'Blix Technologies Certified Mentors' },
          startDate: '2026-10-01',
          duration: 'P12W',
        },
      },
    },
    {
      id: 'faq',
      data: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    },
  ]

  return (
    <main id="top">
      <SEO
        title="Digital Marketing + AI Academy | Blix Noida"
        description="Join Blix Academy — a 12-week job-ready digital marketing + AI certification program in Noida (online). Cover SEO, Meta & Google Ads, social media, GA4, landing pages, and CRO. Live classes + portfolio + career support."
        keywords="digital marketing course Noida, SEO training Delhi NCR, Google Ads course, Meta Ads certification, digital marketing academy India, AI marketing course, Blix Academy"
        jsonLd={acadLd}
      />
      <div className="page-head">
        <div className="wrap">
          <span className="kicker kicker-light reveal-blur">Blix Academy</span>
          <h1 className="reveal">Not Just a Course — A Job-Ready Digital Marketing + AI Program</h1>
          <p className="about-lead reveal">Backed by <b>Blix Technologies</b>, an award-winning agency with a Meta partner and Google-certified team, BLIX turns curious learners into confident digital marketers. We keep it practical, fast, and career-focused. There are no jargon marathons, just the real work.</p>
          <div className="acad-chips reveal-stagger">
            {headChips.map((c) => (
              <span key={c.label} className="acad-chip reveal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                {c.label}
              </span>
            ))}
          </div>
          <div className="hero-cta reveal-zoom">
            <AppLink className="btn btn-pink" to="#contact">Talk to an advisor</AppLink>
          </div>
        </div>
      </div>

      <section className="acad-section">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="kicker">About</span>
            <h2 className="h2 reveal-slide">Why digital marketing, why now</h2>
            <p>Industry trends that make this the right moment to build a marketing career.</p>
          </div>
          <div className="trend-grid reveal-stagger">
            {trends.map((t) => (
              <div key={t.title} className="trend reveal-flip" data-vi="up" data-vi-speed="15">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{t.icon}</svg>
                </div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="acad-section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="kicker">Info</span>
            <h2 className="h2 reveal-slide">Career pathways you can step into</h2>
          </div>
          <div className="path-card reveal-left reveal-stagger">
            <ul>
              {pathways.map((p) => (
                <li key={p} className="reveal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8.5 12l2.5 2.5 4.5-5" /></svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="acad-section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="course-band reveal-zoom" data-vi="zoom">
            <div>
              <span className="kicker kicker-light reveal">The course we offer</span>
              <h3 className="reveal">Digital Marketing Mastery</h3>
              <p className="reveal">A practitioner-led program designed by an agency that ships campaigns daily. Each module ends with a hands-on project; everything rolls into a final Capstone you can show in interviews.</p>
            </div>
            <div className="spec-list reveal-stagger">
              {specs.map((s) => (
                <div key={s.k} className="spec reveal"><b>{s.k} :</b> {s.v}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="acad-section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="kicker">About</span>
            <h2 className="h2 reveal-slide">Why BLIX works</h2>
          </div>
          <div className="why-grid reveal-stagger">
            {whyCards.map((w) => (
              <div key={w.title} className="why-card reveal-zoom" data-vi="up" data-vi-speed="20">
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="acad-section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="kicker">What</span>
            <h2 className="h2 reveal-slide">You'll learn at Blix Technologies</h2>
          </div>
          <div className="learn-grid reveal-stagger">
            {learn.map((l) => (
              <div key={l.title} className="learn reveal-right" data-vi="up" data-vi-speed="15">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{l.icon}</svg>
                </div>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="acad-section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="kicker">FAQ</span>
            <h2 className="h2 reveal-slide">Frequently asked questions</h2>
            <p>Quick answers before you talk to an advisor.</p>
          </div>
          <div className="faq-grid reveal-stagger">
            {faqs.map((f, i) => (
              <div key={f.q} className="faq-item reveal">
                <button className="faq-q" aria-expanded={!!open[i]} onClick={() => toggle(i)}>
                  {f.q}
                  <i style={{ transform: open[i] ? 'rotate(45deg)' : 'none' }}>+</i>
                </button>
                {open[i] && <p className="faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="acad-section" style={{ paddingTop: 0, paddingBottom: 110 }}>
        <div className="wrap">
          <div className="fees reveal-zoom" data-vi="zoom">
            <div>
              <h3 className="reveal">Fees structure &amp; EMIs</h3>
              <p className="reveal">Transparent fees. Early-bird offers and EMI options are available on request.</p>
              <p className="reveal">Ask our team for the current cohort pricing.</p>
              <AppLink className="btn reveal-zoom" to="#contact">Talk to an advisor</AppLink>
            </div>
            <div className="fees-art reveal-right" aria-hidden="true" data-vi="up" data-vi-speed="30">
              <svg viewBox="0 0 400 260">
                <g stroke="#fff" strokeOpacity=".25"><path d="M0 70H400M0 140H400M0 210H400" /></g>
                <polyline points="30,210 100,160 170,180 240,100 310,120 380,50" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="380" cy="50" r="10" fill="#fff" />
                <g fill="#fff" opacity=".85"><rect x="30" y="30" width="80" height="10" rx="5" /><rect x="30" y="50" width="50" height="10" rx="5" opacity=".5" /></g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
