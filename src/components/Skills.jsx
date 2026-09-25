import { skillColumns } from '../data/skills'
import SkillCard from './SkillCard'

function SkillItem({ skill }) {
  if (!skill.pair) return <SkillCard {...skill} />

  return (
    <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2">
      {skill.pair.map((s) => (
        <SkillCard key={s.title} {...s} compact />
      ))}
    </div>
  )
}

const keyOf = (skill) => skill.title ?? skill.pair.map((s) => s.title).join('+')

export default function Skills() {
  return (
    <section id="skills" className="bg-[#fafafa] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-medium tracking-tight text-[#0b2a4a] md:text-6xl">
            Skills that fuel my work
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The languages, frameworks and tools I use to take ideas from
            design to production.
          </p>
        </header>

        {/* Desktop: three hand-arranged columns */}
        <div className="hidden grid-cols-3 items-start gap-4 lg:grid">
          {skillColumns.map((column, i) => (
            <div key={i} className="flex flex-col gap-4">
              {column.map((skill) => (
                <SkillItem key={keyOf(skill)} skill={skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Mobile & tablet: the same cards, flowing into 1–2 columns */}
        <div className="columns-1 gap-4 md:columns-2 lg:hidden">
          {skillColumns.flat().map((skill) => (
            <div key={keyOf(skill)} className="mb-4 break-inside-avoid">
              <SkillItem skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
