import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'
import { site } from '../data/site'

const items = [
  { key: 'email', label: 'Email', Icon: FiMail, href: site.email && `mailto:${site.email}` },
  { key: 'phone', label: 'Phone', Icon: FiPhone, href: site.phone && `tel:${site.phone.replace(/\s+/g, '')}` },
  { key: 'linkedin', label: 'LinkedIn', Icon: FiLinkedin, href: site.links.linkedin },
  { key: 'github', label: 'GitHub', Icon: FiGithub, href: site.links.github },
  { key: 'upwork', label: 'Upwork', Icon: SiUpwork, href: site.links.upwork },
].filter((item) => item.href)

export default function SocialLinks({ className = '', itemClassName = '', exclude = [] }) {
  const shown = items.filter((item) => !exclude.includes(item.key))
  if (shown.length === 0) return null

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {shown.map(({ key, label, Icon, href }) => {
        const external = href.startsWith('http')
        return (
          <li key={key}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition ${itemClassName}`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
