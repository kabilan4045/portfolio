import { FiBriefcase, FiMapPin, FiTarget } from 'react-icons/fi'
import { site } from '../data/site'

const highlights = [
  { Icon: FiMapPin, label: 'Based in', value: site.location },
  { Icon: FiBriefcase, label: 'Working since', value: '2022' },
  { Icon: FiTarget, label: 'Open to', value: 'Frontend roles & freelance projects' },
]

export default function About() {
  return (
    <section id="about" className="bg-[#fafafa] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <div>
          <h2 className="text-4xl font-medium tracking-tight text-[#0b2a4a] md:text-6xl">
            About me
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-500">
            <p>
              I'm {site.name}, a {site.title.toLowerCase()} from Bangalore. I started in
              2022 at NP Digital in client relations, working between SEO teams and
              clients. That taught me how to turn what a client asks for into something
              a team can build.
            </p>
            <p>
              From there I moved into development: building WordPress sites for US
              clients at BrandingBeez, where I went from intern to full-time in three
              months, then frontend work on the AeroLeads website. For the last two
              years I've freelanced, shipping headless WooCommerce stores, Shopify
              storefronts, Next.js apps and a React Native mobile app.
            </p>
            <p>
              I'm looking for frontend developer roles and freelance projects where I can
              build fast, polished products with React and Next.js.
            </p>
          </div>
        </div>

        <ul className="grid content-start gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {highlights.map(({ Icon, label, value }) => (
            <li
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b2a4a]/5 text-[#0b2a4a]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="font-medium text-gray-900">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
