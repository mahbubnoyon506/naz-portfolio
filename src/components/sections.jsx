import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
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
          <TextLink href="mailto:naz.alinab@gmail.com">
            <Mail aria-hidden="true" /> Email
          </TextLink>
          <TextLink href="tel:+8801650234138">
            <Phone aria-hidden="true" /> Call
          </TextLink>
          <span className="hero-location">
            <MapPin aria-hidden="true" /> Dhaka, Bangladesh
          </span>
        </div>
      </motion.div>
      <motion.div className="portrait-wrap" variants={itemVariants}>
        <div className="dot-field" />
        <div className="portrait portrait-placeholder">
          {/* <div className="availability">
            <MapPin aria-hidden="true" size={13} />
            Mirpur-12, Dhaka
          </div>
          <div className="portrait-initials">NK</div>
          <span className="portrait-caption">Nazma Khatun</span> */}
          <img className='object-contain' src="/images/me.jpg" alt="" />
        </div>
      </motion.div>
    </RevealSection>
  )
}

export function StatsSection() {
  const stats = [
    ['03', 'Years of Experience', true],
    ['04', 'Client & Employer Names'],
    ['02', 'Qualifications'],
    ['03', 'Certifications'],
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
        {stats.map(([value, label, plus]) => (
          <motion.div className="stat" variants={itemVariants} key={label}>
            <strong>
              {value}
              {plus && <i>+</i>}
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
    date: 'Dec 2024 — Present',
    role: 'Digital Marketing & Social Media Strategist',
    company: 'Kiwi Flats · New Zealand',
    description:
      'Develop strategies aligned with business goals and audiences; plan Facebook and Instagram content calendars; create content strategies, creative concepts, captions, and campaign messaging; research competitors and audience behavior; plan and optimize Meta Ads; develop design- and AI-assisted advertising creatives; and collaborate with clients to strengthen their digital presence.',
    tags: ['Social Strategy', 'Meta Ads', 'Creative Direction', 'Client Collaboration'],
  },
  {
    date: 'Jan 2025 — Present',
    role: 'Freelance Marketing Project',
    company: 'Click Care BD · Korean Skincare',
    description:
      'Develop product marketing concepts, promotional creatives, and social advertising focused on product benefits and audience communication.',
    tags: ['Product Marketing', 'Promotional Campaigns', 'Social Ads'],
  },
  {
    date: 'Sep 2025 · Remote',
    role: 'Social Media Strategist',
    company: 'Cloud In Depth · Cloud Technology & Training',
    description:
      'Created social content strategy and awareness-focused Facebook and Instagram content about cloud computing, AWS, Azure, DevOps, and cybersecurity.',
    tags: ['Cloud Technology', 'Content Strategy', 'Awareness'],
  },
  {
    date: 'Jul 2023 · Remote',
    role: 'Social Media Strategist',
    company: 'Finy Technologies · Electronics Retail',
    description:
      'Developed promotional content and creative marketing concepts for CCTV, electronics, and security products, with a focus on product communication and local engagement.',
    tags: ['Electronics', 'CCTV & Security', 'Social Content'],
  },
]

function ResumeCards({ entries }) {
  return (
    <AnimatedList className="resume-list">
      {entries.map((entry) => (
        <motion.article
          className="resume-card"
          variants={itemVariants}
          key={`${entry.role}-${entry.company}`}
        >
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
            Strategy built around
            <br />
            <em>real businesses.</em>
          </>
        }
        aside={
          <>
            3+ years across
            <br />
            strategy, content, and
            <br />
            paid campaigns.
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
    title: 'Kiwi Flats',
    category: 'New Zealand',
    description:
      'Social media strategy, Facebook and Instagram content planning, creative concepts, audience research, and Meta Ads management.',
    artwork: '',
    meta: ['DEC 2024 — PRESENT', 'STRATEGY & ADS', 'NEW ZEALAND'],
    initials: 'KF',
    focus: 'Digital Marketing · Social Media',
    linkLabel: 'Contact Nazma about Kiwi Flats experience',
  },
  {
    number: '02',
    title: 'Click Care BD',
    category: 'Korean Skincare · Freelance',
    description:
      'Product marketing concepts, promotional creative, and social advertising centered on product benefits and audience communication.',
    artwork: 'art-coherence',
    meta: ['JAN 2025 — PRESENT', 'FREELANCE', 'SKINCARE'],
    initials: 'CC',
    focus: 'Product Marketing · Promotional Campaigns',
    linkLabel: 'Contact Nazma about Click Care BD experience',
  },
  {
    number: '03',
    title: 'Cloud In Depth',
    category: 'Cloud Technology & Training',
    description:
      'Awareness-focused Facebook and Instagram content strategy for cloud computing, AWS, Azure, DevOps, and cybersecurity education.',
    artwork: 'art-anron',
    meta: ['SEP 2025', 'REMOTE', 'CLOUD EDUCATION'],
    initials: 'CD',
    focus: 'Cloud Computing · Technology Education',
    linkLabel: 'Contact Nazma about Cloud In Depth experience',
  },
  {
    number: '04',
    title: 'Finy Technologies',
    category: 'Electronics Retail · Remote',
    description:
      'Promotional content and creative marketing concepts for CCTV, electronics, and security products, focused on product communication and local audience engagement.',
    artwork: 'art-setapp',
    meta: ['JUL 2023', 'REMOTE', 'ELECTRONICS & SECURITY'],
    initials: 'FT',
    focus: 'CCTV · Electronics · Security',
    linkLabel: 'Contact Nazma about Finy Technologies experience',
  },
]

function ClientPreview({ initials, focus }) {
  return (
    <div className="mock-window">
      <div className="mock-top">
        <b>{initials}</b>
        <span>CLIENT EXPERIENCE</span>
      </div>
      <strong>{focus}</strong>
      <div className="mock-lines">
        <i />
        <i />
        <i />
      </div>
      <div className="mock-chip">Strategy · Content · Growth</div>
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
            Selected client
            <br />
            <em>experience.</em>
          </>
        }
        aside={
          <>
            Four client and employer names across
            <br />
            cloud technology, retail, and
            <br />
            skincare.
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
                {project.meta.map((item, index) => (
                  <span className="project-meta-item" key={item}>
                    {index > 0 && <i />}
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className={`project-art ${project.artwork}`}>
              <ClientPreview initials={project.initials} focus={project.focus} />
            </div>
            <a
              className="project-link"
              href="mailto:naz.alinab@gmail.com"
              aria-label={project.linkLabel}
            >
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
    date: '2016 · GPA 3.56',
    role: 'Bachelor of Science',
    company: 'Computer Science & Engineering · The People’s University of Bangladesh',
    description: 'Bachelor of Science in Computer Science & Engineering.',
    tags: ['Computer Science', 'Engineering'],
  },
  {
    date: '2010 · CGPA 3.66',
    role: 'Diploma',
    company: 'Computer Science & Engineering · Government Khulna Mohila Polytechnic Institute',
    description: 'Diploma in Computer Science & Engineering.',
    tags: ['Computer Science', 'Engineering'],
  },
]

const certifications = [
  {
    date: '5 months · Coursera',
    role: 'Meta Social Media Marketing',
    company: 'Professional Certificate',
    description: 'Meta Social Media Marketing Professional Certificate.',
    tags: ['Social Media Marketing', 'Meta'],
  },
  {
    date: '6 months · Coursera',
    role: 'Google Digital Marketing & E-commerce',
    company: 'Professional Certificate',
    description: 'Google Digital Marketing & E-commerce Professional Certificate.',
    tags: ['Digital Marketing', 'E-commerce'],
  },
  {
    date: 'Self-paced · 90-minute exam',
    role: 'Meta Certified Digital Marketing Associate',
    company: 'Meta Blueprint',
    description:
      'Meta Certified Digital Marketing Associate; self-paced preparation with a 90-minute exam.',
    tags: ['Digital Marketing', 'Meta Blueprint'],
  },
]

export function EducationSection() {
  return (
    <RevealSection className="section-rule">
      <SectionHeading
        label="Education & certifications"
        title={
          <>
            A foundation in tech,
            <br />
            <em>marketing, and media.</em>
          </>
        }
        aside="Computer science education with professional marketing certifications."
      />
      <ResumeCards entries={education} />
      <h3 className="resume-subheading">Professional certifications</h3>
      <ResumeCards entries={certifications} />
    </RevealSection>
  )
}

const skillGroups = [
  {
    label: 'Social media management & scheduling',
    caption: 'PUBLISHING',
    skills: [
      'Meta Business Suite',
      'Buffer',
      'Hootsuite',
      'Later',
      'Sprout Social',
    ],
  },
  {
    label: 'Paid advertising & campaign management',
    caption: 'PAID MEDIA',
    skills: [
      'Meta Ads Manager',
      'Meta Business Manager',
      'Meta Events Manager',
      'TikTok Ads Manager',
      'LinkedIn Campaign Manager',
    ],
  },
  {
    label: 'Analytics, tracking & reporting',
    caption: 'ANALYTICS',
    skills: [
      'Google Analytics 4 (GA4)',
      'Google Tag Manager (GTM)',
      'Google Looker Studio',
      'Meta Pixel',
      'Meta Pixel Helper',
      'Microsoft Clarity',
    ],
  },
  {
    label: 'SEO, keyword & competitor research',
    caption: 'RESEARCH',
    skills: [
      'Semrush',
      'Ahrefs',
      'Google Search Console',
      'Google Trends',
      'Ubersuggest',
      'Similarweb',
    ],
  },
  {
    label: 'Email marketing & automation',
    caption: 'AUTOMATION',
    skills: ['Mailchimp', 'HubSpot', 'Brevo', 'ManyChat', 'Zapier'],
  },
  {
    label: 'AI & content creation',
    caption: 'AI TOOLS',
    skills: ['ChatGPT', 'Claude', 'Gemini', 'Grok', 'Google Flow', 'ElevenLabs'],
  },
  {
    label: 'Languages',
    caption: 'LANGUAGES',
    skills: ['Bengali · Native', 'English · Fluent'],
  },
  {
    label: 'Content & campaign strategy',
    caption: 'STRATEGY',
    skills: [
      'Social media content planning',
      'Facebook & Instagram advertising',
      'Competitor research',
      'Creative strategy',
      'Campaign development',
      'Content calendars',
    ],
  },
  {
    label: 'Additional expertise',
    caption: 'SPECIALTIES',
    skills: [
      'Video editing & creative content production',
      'Facebook & Instagram business page management',
      'Social media management & growth',
      'Organic growth & audience engagement',
      'Community management & brand positioning',
      'Ad copywriting & CTA optimization',
      'Promotional campaign development',
      'Video & static ad concepts',
      'Landing page & user experience optimization',
    ],
  },
]

const competencies = [
  {
    number: '01',
    title: 'Meta Ads Strategy & Management',
    details:
      'Facebook and Instagram campaign strategy, setup, and management; objectives, budget planning, campaign budget optimization, scaling, and lead and sales optimization.',
    tags: ['Awareness', 'Traffic', 'Leads', 'Sales'],
  },
  {
    number: '02',
    title: 'Audience & Market Research',
    details:
      'Audience research and segmentation, custom and lookalike audience creation, interest-based and behavioral targeting, retargeting and remarketing, competitor and market analysis.',
    tags: ['Audience Research', 'Behavioral Targeting', 'Remarketing'],
  },
  {
    number: '03',
    title: 'Conversion Tracking & Analytics',
    details:
      'Meta Pixel setup and configuration, Conversions API integration, standard and custom event tracking, GA4 and ecommerce conversion tracking, campaign performance analysis.',
    tags: ['Meta Pixel', 'CAPI', 'GA4', 'Ecommerce Tracking'],
  },
  {
    number: '04',
    title: 'Testing & Performance Optimization',
    details:
      'A/B and creative testing, conversion-rate optimization, and analysis of CTR, CPC, CPM, CPA, and ROAS.',
    tags: ['CTR', 'CPC', 'CPM', 'CPA', 'ROAS'],
  },
]

export function ExpertiseSection() {
  return (
    <RevealSection className="section-rule" id="expertise">
      <SectionHeading
        label="Core competencies"
        title={
          <>
            From campaign setup
            <br />
            <em>to performance insights.</em>
          </>
        }
        aside="Advertising, audience research, conversion tracking, and creative strategy."
      />
      <AnimatedList className="expertise-grid">
        {competencies.map((item) => (
          <motion.article className="expertise-card" variants={itemVariants} key={item.number}>
            <span className="expertise-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.details}</p>
            <div className="tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </AnimatedList>
      <div className="additional-specialties">
        <h3>Social media, content & creative</h3>
        <div className="tags">
          {[
            'Social media strategy',
            'Monthly content calendars',
            'Organic growth',
            'Community management',
            'Brand positioning',
            'Ad creative strategy',
            'Ad copywriting & CTA optimization',
            'Promotional campaigns',
            'Video & static ad concepts',
            'Video editing & creative production',
            'Landing page & UX optimization',
            'AI-powered marketing creatives',
          ].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}

export function SkillsSection() {
  return (
    <RevealSection className="section-rule" id="skills">
      <SectionHeading
        label="Skills & Tools"
        title={<>Tools and skills for <em>the full campaign.</em></>}
        aside="Platforms, analytics, research, automation, creative, and languages."
      />
      <AnimatedList className="skill-groups">
        {skillGroups.map((group) => (
          <motion.div className="skill-row" variants={itemVariants} key={group.label}>
            <div className="skill-label">
              {group.label}
              <small>{group.caption}</small>
            </div>
            <div className="skill-grid skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tool" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </AnimatedList>
    </RevealSection>
  )
}

const questions = [
  {
    question: 'Which campaign objectives do you work with?',
    answer:
      'Meta campaigns for awareness, traffic, leads, and sales, including campaign setup, audience targeting, budget planning, optimization, and scaling.',
  },
  {
    question: 'How do you measure campaign performance?',
    answer:
      'Performance analysis includes CTR, CPC, CPM, CPA, and ROAS, with A/B and creative testing, conversion tracking, and conversion-rate optimization.',
  },
  {
    question: 'What industries have you worked with?',
    answer:
      'Experience includes cloud technology and training, electronics and security products, and Korean skincare, as well as work with Kiwi Flats in New Zealand.',
  },
  {
    question: 'What social media and marketing work do you do?',
    answer:
      'Social media strategy and content planning, Facebook and Instagram page management, content calendars, creative direction, ad copywriting, promotional campaigns, and paid advertising.',
  },
]

export function FAQSection() {
  return (
    <RevealSection className="section-rule faq-section" id="faq">
      <div className="faq-intro">
        <Eyebrow>FAQ</Eyebrow>
        <h2>
          Campaigns, platforms,
          <br />
          <em>and performance.</em>
        </h2>
        <p>
          A few details about my campaign experience, marketing approach, and
          areas of focus.
        </p>
        <a className="button" href="mailto:naz.alinab@gmail.com">
          Ask Nazma <ArrowUpRight aria-hidden="true" size={15} />
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
          Let’s grow your
          <br />
          <em>digital presence.</em>
        </h2>
        <p>
          For social media strategy, content planning, creative direction, or
          Meta advertising, get in touch by email or phone.
        </p>
        <a className="button" href="mailto:naz.alinab@gmail.com">
          naz.alinab@gmail.com <ArrowUpRight aria-hidden="true" size={15} />
        </a>
        <div className="contact-meta">
          <div>
            <small>Location</small>
            <span>Dhaka, Bangladesh</span>
          </div>
          <div>
            <small>Languages</small>
            <span>Bengali · English</span>
          </div>
          <div>
            <small>Experience</small>
            <span>3+ years</span>
          </div>
        </div>
      </div>
      <div className="contact-side">
        <div className="contact-form">
          <h3>Contact Nazma</h3>
          <a className="contact-detail" href="mailto:naz.alinab@gmail.com">
            <Mail aria-hidden="true" />
            <span>
              <small>Email</small>
              naz.alinab@gmail.com
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="contact-detail" href="tel:+8801650234138">
            <Phone aria-hidden="true" />
            <span>
              <small>Phone</small>
              +880 1650-234138
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-detail">
            <MapPin aria-hidden="true" />
            <span>
              <small>Based in</small>
              Mirpur-12, Dhaka, Bangladesh
            </span>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
