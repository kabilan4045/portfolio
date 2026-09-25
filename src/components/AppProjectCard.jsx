export default function AppProjectCard({
  title,
  category,
  status,
  description,
  stack,
  screenshots,
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="grid gap-8 p-5 md:p-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
              {category}
            </span>
            {status && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                {status}
              </span>
            )}
          </div>

          <h3 className="mt-3 text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
            {description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Scrolls sideways when the phones don't fit */}
        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8 lg:mx-0 lg:px-0">
          {screenshots.map(({ src, alt }) => (
            <li
              key={src}
              className="w-40 shrink-0 snap-start overflow-hidden rounded-[1.75rem] border-4 border-gray-900 bg-gray-900 shadow-md sm:w-44"
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="aspect-[1284/2778] w-full rounded-[1.4rem] bg-gray-100 object-cover object-top"
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
