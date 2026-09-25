import { useState } from 'react'
import { FiLock } from 'react-icons/fi'

const hostOf = (url) => new URL(url).hostname.replace(/^www\./, '')

const screenshotOf = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`

function Preview({ url, image, title }) {
  // 'loading' | 'loaded' | 'error'
  const [status, setStatus] = useState('loading')

  return (
    <div className="relative aspect-video overflow-hidden border-b border-gray-200 bg-gray-100">
      {status === 'loading' && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" aria-hidden="true" />
      )}

      {status === 'error' ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
          <span className="text-sm font-medium text-gray-500">{hostOf(url)}</span>
        </div>
      ) : (
        <img
          src={image ?? screenshotOf(url)}
          alt={`Screenshot of the ${title} website`}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`h-full w-full rounded-t-2xl object-cover object-top transition-opacity duration-500 ${status === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  )
}

export default function ProjectCard({
  title,
  url,
  image,
  category,
  stack,
  private: isPrivate = false,
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Preview url={url} image={image} title={title} />

      <div className="flex flex-1 flex-col p-5">
        <span className="self-start rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
          {category}
        </span>

        <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>

        <ul className="mt-3 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700"
            >
              {tech}
            </li>
          ))}
        </ul>

        {isPrivate ? (
          <p className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-gray-500">
            <FiLock aria-hidden="true" />
            Admin access only
          </p>
        ) : (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto self-start pt-5 text-sm font-medium text-gray-900 hover:underline"
          >
            View Live Site →<span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  )
}
