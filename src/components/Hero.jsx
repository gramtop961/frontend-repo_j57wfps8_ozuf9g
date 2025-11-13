import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-slate-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600" />
            Futuristic IT Solutions
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-slate-900">
            Build the infrastructure of tomorrow, today.
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            We design, deploy, and scale secure cloud systems, AI integrations, and modern web platforms for ambitious teams.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow hover:bg-slate-800 transition">
              Get a quote
            </a>
            <a href="#services" className="inline-flex justify-center rounded-full bg-white/70 backdrop-blur px-6 py-3 text-sm font-semibold shadow border border-black/10 hover:bg-white transition">
              Explore services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
