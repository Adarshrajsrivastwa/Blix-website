import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

// These are the client and brand names already present in the website. Add
// project-specific screenshots and details here as they are supplied.
const projects = [
  { name: 'Blix Technologies', kind: 'Brand experience', code: 'BLIX / 01', visual: 'blix', note: 'Our own digital home: the brand, services, and ideas brought together in one place.' },
  { name: 'Banaras Caterers', kind: 'Client spotlight', code: 'BC / 02', visual: 'banaras', note: 'A brand from the Blix client portfolio, featured among our selected work.' },
  { name: 'Property Nexus', kind: 'Client spotlight', code: 'PN / 03', visual: 'nexus', note: 'A brand from the Blix client portfolio, featured among our selected work.' },
]

export default function PortfolioPage() {
  return (
    <main className="portfolio-page" id="top">
      <SEO
        title="Portfolio | Selected Projects"
        description="Explore selected digital work and client projects from Blix Technologies."
        keywords="Blix Technologies portfolio, digital projects, web development, marketing projects"
      />
      <section className="portfolio-intro">
        <div className="wrap">
          <div className="portfolio-intro-copy reveal">
            <span className="kicker">PORTFOLIO / SELECTED WORK</span>
            <h1>Good work.<br /><span>Made to move.</span></h1>
            <p>A closer look at Blix Technologies and the brands in our client portfolio. A growing collection of work, all in one place.</p>
            <a href="#selected-projects" className="portfolio-jump">Explore selected work <span aria-hidden="true">↓</span></a>
          </div>
          <div className="portfolio-orbit" aria-hidden="true">
            <div className="portfolio-orbit-ring ring-one" />
            <div className="portfolio-orbit-ring ring-two" />
            <div className="portfolio-orbit-core">B<span>.</span></div>
            <i className="orbit-dot dot-one" /><i className="orbit-dot dot-two" /><i className="orbit-dot dot-three" />
          </div>
          <div className="portfolio-intro-foot"><span>BLIX TECHNOLOGIES</span><span>WORK / 2026</span></div>
        </div>
      </section>

      <section className="portfolio-work" id="selected-projects" aria-labelledby="portfolio-work-title">
        <div className="wrap">
          <div className="portfolio-work-head reveal">
            <div><span className="kicker">THE PROJECTS</span><h2 id="portfolio-work-title">Selected work<span className="pink-dot">.</span></h2></div>
            <p>Our own digital experience and selected client brands.</p>
          </div>
          <div className="portfolio-project-grid">
            {projects.map((project, i) => (
              <article className={`portfolio-project-card portfolio-${project.visual} portfolio-card reveal-flip`} key={project.name}>
                <div className={`portfolio-project-visual visual-${project.visual}`} aria-hidden="true">
                  <span className="portfolio-project-code">{project.code}</span>
                  <div className="project-visual-mark">{project.visual === 'blix' ? <><b>BLIX</b><span>TECHNOLOGIES</span></> : <b>{project.visual === 'banaras' ? 'BC' : 'PN'}</b>}</div>
                  <span className="project-visual-label">{project.visual === 'blix' ? 'DIGITAL / STUDIO' : 'CLIENT / SHOWCASE'}</span>
                  <span className="project-visual-orb" />
                </div>
                <div className="portfolio-project-copy">
                  <div className="portfolio-project-meta"><span>{project.kind}</span><span>0{i + 1}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.note}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="portfolio-bottom-cta reveal"><div><span className="kicker">HAVE A PROJECT IN MIND?</span><h2>Let’s make something<br />worth showing.</h2></div><Link to="/#contact" className="btn">Start a conversation <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </main>
  )
}
