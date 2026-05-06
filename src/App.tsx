import { useState } from 'react'
import './App.css'

type Page = 'home' | 'about' | 'contact'

const navItems: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const services = [
  'Structural concrete',
  'Commercial interiors',
  'Steel coordination',
  'Site restoration',
]

const projects = [
  {
    name: 'Foundry Row1',
    type: 'Mixed-use shell',
    detail: '142,000 sq ft delivered in three weather-tight phases.',
  },
  {
    name: 'Northline Labs',
    type: 'Adaptive reuse',
    detail: 'Seismic upgrades, clean rooms, and occupied campus logistics.',
  },
  {
    name: 'Cedar Works',
    type: 'Civic renovation',
    detail: 'Historic facade retained while the structure was rebuilt within.',
  },
]

function App() {
  const [page, setPage] = useState<Page>('home')

  return (
    <div className="site-shell">
      <Header page={page} setPage={setPage} />
      <main>
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
      </main>
    </div>
  )
}

function Header({
  page,
  setPage,
}: {
  page: Page
  setPage: (page: Page) => void
}) {
  return (
    <header className="topbar">
      <button className="brand" type="button" onClick={() => setPage('home')}>
        <span className="brand-mark">AG</span>
        <span>
          <strong>AG Construction</strong>
          <small>Build with certainty</small>
        </span>
      </button>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            className={page === item.id ? 'active' : ''}
            key={item.id}
            type="button"
            onClick={() => setPage(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

function Home({ setPage }: { setPage: (page: Page) => void }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Commercial and residential builders</span>
          <h1>We turn rough ground into places that hold up.</h1>
          <p>
            AG Construction plans, manages, and builds durable spaces with the
            kind of field discipline that keeps budgets calm and crews moving.
          </p>
          <div className="hero-actions">
            <button className="primary-action" type="button" onClick={() => setPage('contact')}>
              Start a build
            </button>
            <button className="secondary-action" type="button" onClick={() => setPage('about')}>
              Meet the crew
            </button>
          </div>
        </div>
        <div className="site-visual" aria-label="Construction site illustration">
          <div className="crane"></div>
          <div className="building">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="beam beam-one"></div>
          <div className="beam beam-two"></div>
          <div className="ground-line"></div>
        </div>
      </section>

      <section className="stats-band" aria-label="Company results">
        <article>
          <strong>18+</strong>
          <span>Years building</span>
        </article>
        <article>
          <strong>240</strong>
          <span>Projects completed</span>
        </article>
        <article>
          <strong>96%</strong>
          <span>Repeat clients</span>
        </article>
      </section>

      <section className="content-section split-section">
        <div>
          <span className="eyebrow">What we handle</span>
          <h2>From first survey to final punch list.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service}>
              <span></span>
              <h3>{service}</h3>
              <p>
                Tight schedules, clean documentation, and field decisions made
                before they become expensive.
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function About() {
  return (
    <>
      <PageIntro
        eyebrow="About AG"
        title="A builder's eye with a manager's discipline."
        text="We are a hands-on construction team built around practical planning, clear communication, and resilient craft."
      />
      <section className="content-section story-layout">
        <div className="blueprint-panel">
          <span>01</span>
          <h2>We build the job twice.</h2>
          <p>
            First in planning, where we sequence trades, flag material risks,
            and pressure-test drawings. Then in the field, where each detail is
            checked against the plan before it disappears behind concrete,
            steel, or drywall.
          </p>
        </div>
        <div className="values-list">
          <article>
            <h3>Transparent estimating</h3>
            <p>No vague allowances hiding in the corners.</p>
          </article>
          <article>
            <h3>Clean job sites</h3>
            <p>Organized work areas make safer crews and faster inspections.</p>
          </article>
          <article>
            <h3>Owner-first updates</h3>
            <p>Progress, cost, and schedule are visible before decisions are due.</p>
          </article>
        </div>
      </section>

      <section className="content-section project-strip">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <span>{project.type}</span>
            <h3>{project.name}</h3>
            <p>{project.detail}</p>
          </article>
        ))}
      </section>
    </>
  )
}

function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Bring the plans, sketches, or just the problem."
        text="Tell us what you are building and we will help shape the next practical step."
      />
      <section className="content-section contact-layout">
        <form className="contact-form">
          <label>
            Name
            <input placeholder="Your name" type="text" />
          </label>
          <label>
            Email
            <input placeholder="you@example.com" type="email" />
          </label>
          <label>
            Project type
            <select defaultValue="">
              <option disabled value="">
                Select one
              </option>
              <option>New construction</option>
              <option>Renovation</option>
              <option>Commercial fit-out</option>
              <option>Repair or restoration</option>
            </select>
          </label>
          <label>
            Message
            <textarea placeholder="Tell us about timeline, site, and goals" rows={5}></textarea>
          </label>
          <button className="primary-action" type="button">
            Request estimate
          </button>
        </form>
        <aside className="contact-card">
          <h2>Site office</h2>
          <p>42 Builder Avenue, Suite 8</p>
          <p>Monday to Friday, 7:00 AM - 5:30 PM</p>
          <a href="tel:+15550148220">+1 555 014 8220</a>
          <a href="mailto:hello@agconstruction.com">hello@agconstruction.com</a>
          <div className="response-note">
            <strong>24 hr</strong>
            <span>Typical response time for new project inquiries.</span>
          </div>
        </aside>
      </section>
    </>
  )
}

function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string
  title: string
  text: string
}) {
  return (
    <section className="page-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  )
}

export default App
