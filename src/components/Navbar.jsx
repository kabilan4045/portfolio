import { FiDownload } from 'react-icons/fi'
import { site } from '../data/site'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <a href="#projects" className="flex items-center gap-2.5 font-medium text-[#0b2a4a]">
          <img src="/favicon.svg" alt="" width="32" height="32" className="h-8 w-8" />
          {site.name}
        </a>

        <div className="flex items-center gap-2">
          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#0b2a4a] transition hover:border-gray-300"
            >
              <FiDownload aria-hidden="true" />
              Résumé
            </a>
          )}
          <a
            href="#contact"
            className="inline-flex rounded-full bg-[#0b2a4a] px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#123a63]"
          >
            Hire me
          </a>
        </div>
      </nav>
    </header>
  )
}
