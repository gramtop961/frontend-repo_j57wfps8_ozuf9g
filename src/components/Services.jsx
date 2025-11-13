import { Server, Cloud, Shield, Workflow, Cpu, Code } from 'lucide-react'

const services = [
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    desc: 'Design and migration to AWS, Azure, and GCP with reliability and cost efficiency.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Zero-trust, SOC2 readiness, and proactive monitoring baked into every layer.'
  },
  {
    icon: Workflow,
    title: 'DevOps & SRE',
    desc: 'CI/CD, IaC, observability, and incident response with proven playbooks.'
  },
  {
    icon: Cpu,
    title: 'AI Enablement',
    desc: 'Integrate LLMs, vector search, and data pipelines to unlock intelligent workflows.'
  },
  {
    icon: Server,
    title: 'Platform Engineering',
    desc: 'Internal developer platforms, golden paths, and secure self-service tooling.'
  },
  {
    icon: Code,
    title: 'Web & App Development',
    desc: 'Modern, responsive applications using React, FastAPI, and serverless backends.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600">End-to-end capabilities that meet you where you are and scale with you.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 p-6 bg-white shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 grid place-items-center text-cyan-600">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
