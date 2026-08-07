import Link from 'next/link'
import { footer } from '@/content/site'
import Logo from './Logo'

interface FooterProps {
  variant: 'home' | 'engineering'
}

export default function Footer({ variant }: FooterProps) {
  const content = variant === 'engineering' ? footer.engineering : footer.home

  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between md:px-12">
        <div className="flex flex-col gap-2">
          <Logo variant="light" className="h-8 w-auto" />
          <a
            href={`mailto:${content.email}`}
            className="mt-2 text-ink underline underline-offset-[3px] hover:text-ink-mut"
          >
            {content.email}
          </a>
          <span className="text-ink-mut">{content.location}</span>
        </div>
        <nav className="flex flex-col gap-2 md:items-end">
          {content.links.map((link) => (
            <Link key={link.href} href={link.href} className="text-ink-mut hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-[1180px] px-6 pb-8 text-sm text-ink-mut md:px-12">
        {footer.copyright}
      </div>
    </footer>
  )
}
