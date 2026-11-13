import { MotionConfig } from 'framer-motion'
import { Footer, Header } from '@/components/layout'
import {
  ContactSection,
  EducationSection,
  ExpertiseSection,
  ExperienceSection,
  FAQSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  StatsSection,
} from '@/components/sections'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ExpertiseSection />
        <EducationSection />
        <SkillsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </MotionConfig>
  )
}
