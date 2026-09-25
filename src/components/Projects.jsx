import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { appProjects, moreProjectsUrl, projects, projectTabs } from '../data/projects'
import { site } from '../data/site'
import AppProjectCard from './AppProjectCard'
import ProjectCard from './ProjectCard'

const inTab = (tab) => (project) => project.tab === tab
const countOf = (tab) =>
  projects.filter(inTab(tab)).length + appProjects.filter(inTab(tab)).length

const tabs = projectTabs.filter((tab) => countOf(tab) > 0)
const tabId = (tab) => `tab-${tab.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

export default function Projects() {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const apps = appProjects.filter(inTab(activeTab))
  const sites = projects.filter(inTab(activeTab))

  // Arrow keys, Home and End move between tabs (WAI-ARIA tabs pattern).
  const onTabKeyDown = (event) => {
    const i = tabs.indexOf(activeTab)
    const next = {
      ArrowRight: (i + 1) % tabs.length,
      ArrowLeft: (i - 1 + tabs.length) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    }[event.key]
    if (next === undefined) return
    event.preventDefault()
    setActiveTab(tabs[next])
    document.getElementById(tabId(tabs[next]))?.focus()
  }

  return (
    <section id="projects" className="bg-[#fafafa] px-4 pb-20 pt-12 sm:px-6 md:pt-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-2xl">
          <p className="text-base font-medium text-gray-500">
            {site.name} · {site.location}
          </p>
          <h1 className="mt-3 text-4xl font-medium tracking-tight text-[#0b2a4a] md:text-6xl">
            Selected projects
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Mobile apps, e-commerce stores and websites I've built for clients.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Project categories"
          onKeyDown={onTabKeyDown}
          className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {tabs.map((tab) => {
            const selected = tab === activeTab
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                id={tabId(tab)}
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                aria-controls="projects-panel"
                onClick={() => setActiveTab(tab)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  selected
                    ? 'bg-[#0b2a4a] text-white shadow-sm'
                    : 'border border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:text-gray-900'
                }`}
              >
                {tab}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    selected ? 'bg-white/15 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {countOf(tab)}
                </span>
              </button>
            )
          })}
        </div>

        <div id="projects-panel" role="tabpanel" aria-labelledby={tabId(activeTab)}>
          {apps.length > 0 && (
            <div className="mb-6 flex flex-col gap-6">
              {apps.map((project) => (
                <AppProjectCard key={project.title} {...project} />
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sites.map((project) => (
              <ProjectCard key={project.url} {...project} />
            ))}
          </div>
        </div>

        {moreProjectsUrl && (
          <div className="mt-12 flex justify-center">
            <a
              href={moreProjectsUrl}
              className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-[#0b2a4a] shadow-sm transition duration-300 hover:border-gray-300 hover:shadow-md"
            >
              View More Projects
              <FiArrowRight
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
