export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s ship your next milestone</h2>
            <p className="mt-3 text-slate-300">Tell us about your goals and timeline. We’ll propose a clear, actionable plan within 48 hours.</p>
          </div>
          <form className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <input required placeholder="Name" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              <input required type="email" placeholder="Email" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <input placeholder="Company" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <textarea required placeholder="What are you building?" rows={4} className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <button type="submit" className="inline-flex justify-center rounded-full bg-white text-slate-950 px-6 py-3 text-sm font-semibold shadow hover:bg-slate-200 transition">Request proposal</button>
          </form>
        </div>
        <p className="mt-6 text-sm text-slate-400">We’ll never share your info. By submitting, you agree to our privacy policy.</p>
      </div>
    </section>
  )
}
