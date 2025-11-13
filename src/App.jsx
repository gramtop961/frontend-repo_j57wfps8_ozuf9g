import Navbar from './Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <CTA />
      </main>
      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600">
          <p>© {new Date().getFullYear()} Nebula IT. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
