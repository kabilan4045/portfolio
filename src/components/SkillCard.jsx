function Tags({ tags }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-medium text-gray-600"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default function SkillCard({
  icons = [],
  title,
  description,
  tags = [],
  inline = false,
  compact = false,
}) {
  const hasIcons = icons.length > 0
  const hasTags = tags.length > 0

  return (
    <article
      className={`h-full rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:border-gray-300 hover:shadow-md ${compact ? 'p-5' : 'p-6'}`}
    >
      {(hasIcons || hasTags) && (
        <div
          className={`mb-6 flex gap-3 ${inline ? 'flex-wrap items-center' : 'flex-col'}`}
        >
          {hasIcons && (
            <ul className="flex flex-wrap gap-3">
              {icons.map(({ Icon, label, color, size = 28 }) => (
                <li
                  key={label}
                  title={label}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-100 bg-gray-50"
                >
                  <Icon size={size} style={{ color }} aria-hidden="true" />
                  <span className="sr-only">{label}</span>
                </li>
              ))}
            </ul>
          )}
          {hasTags && <Tags tags={tags} />}
        </div>
      )}

      <h3
        className={`font-medium text-[#0b2a4a] ${compact ? 'text-lg leading-snug' : 'text-xl'}`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 leading-relaxed text-gray-500 ${compact ? 'text-sm' : 'text-[15px]'}`}
      >
        {description}
      </p>
    </article>
  )
}
