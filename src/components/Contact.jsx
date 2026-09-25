import { FiDownload, FiMail } from 'react-icons/fi'
import { site } from '../data/site'
import SocialLinks from './SocialLinks'

export default function Contact() {
  return (
    <section id="contact" className="bg-[#fafafa] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0b2a4a] px-6 py-14 text-center shadow-lg sm:px-12 md:py-20">
        <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl">
          Let's work together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
          Have a website, store or app in mind, or a frontend role to fill? Let's
          talk.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0b2a4a] shadow-sm transition hover:bg-gray-100"
            >
              <FiMail aria-hidden="true" />
              {site.email}
            </a>
          )}
          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <FiDownload aria-hidden="true" />
              Download Résumé
            </a>
          )}
        </div>

        <SocialLinks
          exclude={['email']}
          className="mt-8 justify-center"
          itemClassName="border border-white/20 text-white hover:bg-white/10"
        />
      </div>
    </section>
  )
}
