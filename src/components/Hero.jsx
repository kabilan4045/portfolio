import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi'
import { experience } from '../data/experience'
import { projects } from '../data/projects'
import { site } from '../data/site'

const stats = [
  { value: '2+', label: 'Years building' },
  { value: `${projects.length}+`, label: 'Sites & apps built' },
  { value: `${experience.length}`, label: 'Roles & internships' },
]

export default function Hero() {
  return (
    <section id="home" className="bg-[#fafafa] px-4 pb-10 pt-16 sm:px-6 md:pt-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        {/* Photo */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-3 -z-0 rounded-[2.25rem] bg-gradient-to-br from-[#0b2a4a]/15 via-blue-200/30 to-transparent blur-2xl" aria-hidden="true" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 shadow-lg">
            <img
              src="/Kabilan_DP.jpg"
              alt={`Portrait of ${site.name}`}
              width="1024"
              height="1024"
              fetchPriority="high"
              className="h-full w-full object-cover object-[50%_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a4a]/85 via-[#0b2a4a]/10 to-transparent" aria-hidden="true" />

            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </span>

            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-2xl font-medium">{site.name}</p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-white/80">
                <FiMapPin aria-hidden="true" />
                {site.location}
              </p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div>
          <p className="text-base font-medium text-gray-500">Hi, I'm {site.name} 👋</p>
          <h1 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight text-[#0b2a4a] sm:text-5xl lg:text-6xl">
            I build fast websites, online stores &amp; mobile apps.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500">
            {site.title} working with React, Next.js, React Native and
            WordPress. I turn ideas into clean, responsive products, from
            headless e-commerce to cross-platform apps.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0b2a4a] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#123a63] hover:shadow-md"
            >
              View my work
              <FiArrowRight className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-[#0b2a4a] shadow-sm transition hover:border-gray-300 hover:shadow-md"
            >
              Contact me
            </a>
            {site.resumeUrl && (
              <a
                href={site.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-[#0b2a4a] shadow-sm transition hover:border-gray-300 hover:shadow-md"
              >
                <FiDownload aria-hidden="true" />
                Résumé
              </a>
            )}
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-gray-200 pt-6">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-2xl font-medium text-[#0b2a4a] sm:text-3xl">{value}</dd>
                <dd className="mt-1 text-xs text-gray-500 sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
