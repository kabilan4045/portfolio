import { FiMapPin } from 'react-icons/fi'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-[15px] text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. {site.title}.
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li className="inline-flex items-center gap-1.5">
            <FiMapPin aria-hidden="true" />
            {site.location}
          </li>
        </ul>
      </div>
    </footer>
  )
}
