import { experience } from '../data/experience'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  return (
    <section id="experience" className="bg-[#fafafa] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-medium tracking-tight text-[#0b2a4a] md:text-5xl">
          Work Experience
        </h2>

        <div className="flex flex-col gap-6">
          {experience.map((job) => (
            <ExperienceCard key={`${job.company}-${job.period}`} {...job} />
          ))}
        </div>
      </div>
    </section>
  )
}
