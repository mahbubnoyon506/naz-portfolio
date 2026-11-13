import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
  Sparkles,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const sectionVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

function RevealSection({ children, className = '', ...props }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  )
}

function AnimatedList({ className, children }) {
  return (
    <motion.div
      className={className}
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.div>
  )
}

function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  )
}

function SectionHeading({ label, title, aside, id }) {
  return (
    <div className="section-head">
      <div>
        <Eyebrow>{label}</Eyebrow>
        <h2 id={id}>{title}</h2>
      </div>
      {aside && <div className="head-aside">{aside}</div>}
    </div>
  )
}

function TextLink({ href, children, className = '' }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}

export function HeroSection() {
  return (
    <RevealSection className="hero" id="home">
      <motion.div className="hero-copy" variants={itemVariants}>
        <Eyebrow>Portfolio &amp; Resume</Eyebrow>
        <h1>
          NAZMA
          <br />
          <em>KHATUN</em>
        </h1>
        <div className="role-pill">
          <span className="pulse" />
          Digital Marketing Strategist
          <i />
          <em>Social Media Manager · Meta Ads Specialist</em>
        </div>
        <p className="hero-intro">
          Digital Marketing and Social Media Strategist with 3+ years of
          experience supporting businesses in developing their digital presence
          through social media strategy, content planning, creative direction,
          and paid advertising.
        </p>
        <div className="socials">
          <TextLink href="#work">
            <Sparkles aria-hidden="true" /> Portfolio
          </TextLink>
          <TextLink href="#contact">
            <span className="social-text-icon" aria-hidden="true">
              in
            </span>
            LinkedIn
          </TextLink>
          <TextLink href="mailto:your@email.com">
            <Mail aria-hidden="true" /> Email
          </TextLink>
        </div>
      </motion.div>
      <motion.div className="portrait-wrap" variants={itemVariants}>
        <div className="dot-field" />
        <div className="portrait portrait-placeholder">
          <div className="availability">
            <span />
            Availability status
          </div>
          <div className="portrait-initials">NK</div>
          <span className="portrait-caption">Add your portrait</span>
        </div>
      </motion.div>
    </RevealSection>
  )
}

export function StatsSection() {
  const stats = [
    ['00', 'Completed Projects'],
    ['03', 'Years of Experience'],
    ['00', 'Happy Clients'],
    ['00', 'Awards Received'],
  ]

  return (
    <RevealSection className="numbers section-rule">
      <div className="numbers-intro">
        <Eyebrow>At a glance</Eyebrow>
        <h2>
          A little about my <em>work</em>
          <br />
          and experience.
        </h2>
      </div>
      <AnimatedList className="stats">
        {stats.map(([value, label]) => (
          <motion.div className="stat" variants={itemVariants} key={label}>
            <strong>
              {value}
              <i>+</i>
            </strong>
            <span>{label}</span>
          </motion.div>
        ))}
      </AnimatedList>
    </RevealSection>
  )
}

const experiences = [
  {
    date: 'Year — Present',
    role: 'Your Current Role',
    company: 'Company Name',
    description:
      'Summarize your responsibilities, contributions, and impact in this role.',
    tags: ['Specialty', 'Skill', 'Focus'],
  },
  {
    date: 'Year — Year',
    role: 'Previous Role',
    company: 'Company Name',
    description:
      'Add a concise description of the work you did and the teams or customers you supported.',
    tags: ['Specialty', 'Skill'],
  },
  {
    date: 'Year — Year',
    role: 'Earlier Role',
    company: 'Company Name',
    description:
      'Describe a project, responsibility, or result that represents this experience.',
    tags: ['Specialty', 'Skill'],
  },
]

function ResumeCards({ entries }) {
  return (
    <AnimatedList className="resume-list">
      {entries.map((entry) => (
        <motion.article className="resume-card" variants={itemVariants} key={entry.role}>
          <div className="resume-date">{entry.date}</div>
          <div className="resume-role">
            {entry.role}
            <em>{entry.company}</em>
          </div>
          <div className="resume-detail">
            <p>{entry.description}</p>
            <div className="tags">
              {entry.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </AnimatedList>
  )
}

export function ExperienceSection() {
  return (
    <RevealSection className="section-rule" id="experience">
      <SectionHeading
        label="Experience"
        title={
          <>
            Experience that shapes
            <br />
            <em>how I work.</em>
          </>
        }
        aside={
          <>
            <i>Add role count</i>
            <br />
            Add a short summary
            <br />
            of your career.
          </>
        }
      />
      <ResumeCards entries={experiences} />
    </RevealSection>
  )
}

const projects = [
  {
    number: '01',
    title: 'Project One',
    category: 'Project category',
    description:
      'Describe the challenge, your approach, and the outcome of this project.',
    artwork: '',
    linkLabel: 'Project one details',
  },
  {
    number: '02',
    title: 'Project Two',
    category: 'Project category',
    description: 'Share a short overview of what you created and why it mattered.',
    artwork: 'art-coherence',
    linkLabel: 'Project two details',
  },
  {
    number: '03',
    title: 'Project Three',
    category: 'Project category',
    description:
      'Add a concise case study summary or replace this card with another project.',
    artwork: 'art-anron',
    linkLabel: 'Project three details',
  },
]

function ProjectPreview() {
  return (
    <div className="mock-window">
      <div className="mock-top">
        <b>●</b>
        <span>◌</span>
        <span>↗</span>
      </div>
      <strong>
        Project
        <br />
        Preview
      </strong>
      <div className="mock-lines">
        <i />
        <i />
        <i />
      </div>
      <div className="mock-chip">Add a link</div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <RevealSection className="section-rule" id="work">
      <SectionHeading
        label="Selected work"
        title={
          <>
            Projects from concept
            <br />
            <em>to completion.</em>
          </>
        }
        aside={
          <>
            <i>Add project count</i>
            <br />A selection of your
            <br />
            recent work.
          </>
        }
      />
      <AnimatedList className="project-list">
        {projects.map((project) => (
          <motion.article
            className="project-card"
            variants={itemVariants}
            key={project.number}
          >
            <span className="project-num">{project.number}</span>
            <div className="project-copy">
              <h3>
                {project.title}
                <em>{project.category}</em>
              </h3>
              <p>{project.description}</p>
              <div className="project-meta">
                YEAR <i /> ROLE <i /> INDUSTRY
              </div>
            </div>
            <div className={`project-art ${project.artwork}`}>
              <ProjectPreview />
            </div>
            <a className="project-link" href="#contact" aria-label={project.linkLabel}>
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </motion.article>
        ))}
      </AnimatedList>
    </RevealSection>
  )
}

const education = [
  {
    date: 'Year — Year',
    role: 'School or Institution',
    company: 'Degree or Program',
    description: 'Add a relevant focus, achievement, or detail about your studies.',
    tags: ['Subject', 'Achievement'],
  },
  {
    date: 'Year',
    role: 'Course or Certificate',
    company: 'Provider',
    description: 'Include professional training, certifications, or fellowships here.',
    tags: ['Topic', 'Skill'],
  },
]

export function EducationSection() {
  return (
    <RevealSection className="section-rule">
      <SectionHeading
        label="Education"
        title={
          <>
            What I’ve learned
            <br />
            <em>along the way.</em>
          </>
        }
        aside={
          <>
            <i>Add education</i>
            <br />
            Degrees, courses, and
            <br />
            other learning.
          </>
        }
      />
      <ResumeCards entries={education} />
    </RevealSection>
  )
}

const skillGroups = [
  {
    label: 'Design',
    caption: '01 · TOOLS',
    skills: [
      ['✳', 'Tool One'],
      ['◆', 'Tool Two'],
      ['◈', 'Tool Three'],
      ['✦', 'Tool Four'],
      ['◉', 'Tool Five'],
    ],
  },
  {
    label: 'Workflow',
    caption: '02 · PROCESS',
    skills: [
      ['◌', 'Tool One'],
      ['↗', 'Tool Two'],
      ['✧', 'Tool Three'],
      ['▦', 'Tool Four'],
      ['◎', 'Tool Five'],
    ],
  },
]

export function SkillsSection() {
  return (
    <RevealSection className="section-rule" id="skills">
      <SectionHeading
        label="Skills & Tools"
        title={
          <>
            The tools I use <em>every day.</em>
          </>
        }
        aside={
          <>
            <i>Add your skills</i>
            <br />
            Group tools by craft,
            <br />
            workflow, or specialty.
          </>
        }
      />
      <AnimatedList className="skill-groups">
        {skillGroups.map((group) => (
          <motion.div className="skill-row" variants={itemVariants} key={group.label}>
            <div className="skill-label">
              {group.label}
              <small>{group.caption}</small>
            </div>
            <div className="skill-grid">
              {group.skills.map(([mark, name]) => (
                <div className="skill-card" key={name}>
                  <span className="skill-mark">{mark}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </AnimatedList>
    </RevealSection>
  )
}

const testimonials = [
  'Add a short testimonial here. Keep the wording approved by the person quoted.',
  'Add another testimonial that speaks to your collaboration or the work delivered.',
  'Use this space for a third approved quote or remove this card if you prefer.',
]

export function TestimonialsSection() {
  return (
    <RevealSection className="section-rule" id="reviews">
      <SectionHeading
        label="Kind words"
        title={
          <>
            What collaborators
            <br />
            <em>have said.</em>
          </>
        }
        aside={
          <>
            <i>Testimonials</i>
            <br />
            Replace these cards with
            <br />
            approved client feedback.
          </>
        }
      />
      <AnimatedList className="quotes specialty-cards">
        {testimonials.map((quote, index) => (
          <motion.article className="quote-card" variants={itemVariants} key={quote}>
            <p>{quote}</p>
            <div className="quote-person">
              <div className="avatar-placeholder">NK</div>
              <div>
                <b>Client Name {index + 1}</b>
                <span>Role, Organization</span>
              </div>
            </div>
          </motion.article>
        ))}
      </AnimatedList>
    </RevealSection>
  )
}

const questions = [
  {
    question: 'What kind of projects do you take on?',
    answer:
      'Add your answer here. Include the type of work you enjoy and the clients you support.',
  },
  {
    question: 'How do you structure an engagement?',
    answer:
      'Describe your usual process, milestones, and how you work with clients or teams.',
  },
  {
    question: 'When are you available?',
    answer: 'Add your availability or invite visitors to contact you to discuss timing.',
  },
  {
    question: 'How can I get in touch?',
    answer: 'Share your preferred contact method in the contact section below.',
  },
]

export function FAQSection() {
  return (
    <RevealSection className="section-rule faq-section" id="faq">
      <div className="faq-intro">
        <Eyebrow>FAQ</Eyebrow>
        <h2>
          Questions people <em>often ask.</em>
        </h2>
        <p>
          Use this space for answers to common questions about your process,
          services, or availability.
        </p>
        <a className="button" href="#contact">
          Ask a question <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </div>
      <Accordion className="faq-list" type="multiple" defaultValue={['faq-0', 'faq-1', 'faq-2', 'faq-3']}>
        {questions.map(({ question, answer }, index) => (
          <AccordionItem value={`faq-${index}`} key={question}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </RevealSection>
  )
}

export function ContactSection() {
  return (
    <RevealSection className="section-rule contact-section" id="contact">
      <div className="contact-copy">
        <Eyebrow>Get in touch</Eyebrow>
        <h2>
          Let’s make something <em>together.</em>
        </h2>
        <p>
          Write a short invitation to prospective clients or collaborators. Add
          your contact information and location below.
        </p>
        <a className="button" href="mailto:your@email.com">
          your@email.com <ArrowUpRight aria-hidden="true" size={15} />
        </a>
        <div className="contact-meta">
          <div>
            <small>Availability</small>
            <span>
              <i className="green-dot" />
              Add availability
            </span>
          </div>
          <div>
            <small>Based in</small>
            <span>Your City</span>
          </div>
          <div>
            <small>Response</small>
            <span>Typical response time</span>
          </div>
        </div>
      </div>
      <div className="contact-side">
        <div className="contact-form">
          <h3>Contact details</h3>
          <label>
            Name
            <input placeholder="Your Name" disabled />
          </label>
          <label>
            Email
            <input placeholder="you@company.com" disabled />
          </label>
          <label>
            Message
            <textarea
              placeholder="Add a contact form service when ready."
              rows="3"
              disabled
            />
          </label>
          <button className="button submit-button" type="button" disabled>
            Contact form placeholder
          </button>
        </div>
        <div className="direct-links">
          <small>Or reach me directly</small>
          <div>
            <a href="mailto:your@email.com">
              <Mail aria-hidden="true" /> Email
            </a>
            <a href="#contact">
              <span className="social-text-icon" aria-hidden="true">
                in
              </span>
              LinkedIn
            </a>
            <a href="#work">
              <Sparkles aria-hidden="true" /> Social profile
            </a>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
