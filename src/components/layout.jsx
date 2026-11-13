import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  ['Home', '#home'],
  ['Experience', '#experience'],
  ['Work', '#work'],
  ['Expertise', '#expertise'],
  ['Skills', '#skills'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <a className="wordmark" href="#home" onClick={() => setMenuOpen(false)}>
        NAZMA KHATUN
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav
        id="main-navigation"
        className={cn('nav-links', menuOpen && 'open')}
        aria-label="Main navigation"
      >
        {navigation.map(([label, href], index) => (
          <a
            className={index === 0 ? 'active' : ''}
            href={href}
            key={href}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <a
        className={cn(buttonVariants({ size: 'sm' }), 'button nav-download')}
        href="/resume/NAZMA_KHATUN_DMM_Resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        View resume <ArrowUpRight aria-hidden="true" size={14} />
      </a>
    </header>
  )
}

export function Footer() {
  return (
    <footer>
      <span>© Nazma Khatun · All rights reserved</span>
      <a className="made" href="#home">
        Back to top ↑
      </a>
    </footer>
  )
}
