function CompanyLogo({ company, logo, logoDark, logoText, icon: Icon }) {
  return (
    <div
      className={`inline-flex h-14 items-center gap-2 rounded-xl border px-4 ${logoDark ? 'border-transparent bg-[#0b2a4a]' : 'border-gray-200 bg-white'}`}
    >
      {logo ? (
        <img src={logo} alt={`${company} logo`} className="h-10 w-auto max-w-[200px] object-contain" />
      ) : (
        <>
          {Icon && <Icon className="h-5 w-5 text-[#0b2a4a]" aria-hidden="true" />}
          <span className="text-lg font-semibold tracking-tight text-[#0b2a4a]">
            {logoText ?? company}
          </span>
        </>
      )}
    </div>
  )
}

export default function ExperienceCard({
  role,
  company,
  logo,
  logoDark,
  logoText,
  icon,
  type,
  period,
  description,
  points = [],
}) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md md:p-8">
      <div className="flex items-center justify-between gap-4">
        <CompanyLogo
          company={company}
          logo={logo}
          logoDark={logoDark}
          logoText={logoText}
          icon={icon}
        />
        {period && (
          <span className="shrink-0 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700 md:text-sm">
            {period}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-lg font-medium text-gray-900 md:text-xl">{role}</h3>
      <p className="mt-1 text-base text-gray-700">
        {company}
        {type && <span className="text-gray-400"> · {type}</span>}
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-gray-500 md:text-base">
        {description}
      </p>
      {points.length > 0 && (
        <ul className="mt-4 space-y-2.5">
          {points.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-[15px] leading-relaxed text-gray-500 md:text-base"
            >
              <span
                className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0b2a4a]/40"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
