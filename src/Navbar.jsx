import { useState } from 'react'
import { Menu, X, Cpu, ChevronRight } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-white/40 dark:bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 grid place-items-center text-white shadow-lg">
              <Cpu size={18} />
            </div>
            <span className="font-semibold tracking-tight text-slate-800">Nebula IT</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-1 rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 transition">
              Start a project <ChevronRight size={16} />
            </a>
          </nav>

          <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden p-2 rounded-lg hover:bg-black/5">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white border-b border-black/10 shadow-xl">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-black/5">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md bg-slate-900 text-white text-center">
                Start a project
              </a>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 px-3 py-2">
                <X size={18} /> Close
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
