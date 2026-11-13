import { MotionConfig } from 'framer-motion'
import { Footer, Header } from '@/components/layout'
import {
  ContactSection,
  EducationSection,
  ExperienceSection,
  FAQSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  StatsSection,
  TestimonialsSection,
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
        <EducationSection />
        <SkillsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </MotionConfig>
  )
}
