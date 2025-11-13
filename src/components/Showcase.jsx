import { motion } from 'framer-motion'

const logos = ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Datadog']

export default function Showcase() {
  return (
    <section id="solutions" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built for scale</h2>
            <p className="mt-3 text-slate-600">Our solutions power millions of requests daily with resilient, observable architectures.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Multi-cloud deployments and failover strategies</li>
              <li>• GitOps workflows with policy as code</li>
              <li>• Observability dashboards and SLO-driven operations</li>
            </ul>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-black/10 p-6 bg-white shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {logos.map((l) => (
                <div key={l} className="rounded-xl border border-black/10 p-4 text-center text-slate-700 bg-slate-50">{l}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
