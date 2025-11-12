import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const Feature = ({ children }) => (
  <li className="flex items-start gap-2"><Check className="text-green-600 mt-1" size={18} /> <span>{children}</span></li>
)

export default function Pricing() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">Simple pricing</h2>
          <p className="mt-4 text-gray-600">Start free. Upgrade when you need HD exports and premium voices.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-8 bg-white/70 backdrop-blur">
            <h3 className="text-xl font-semibold">Free</h3>
            <p className="text-gray-600 mt-1">Create videos with watermark in SD.</p>
            <p className="text-4xl font-extrabold mt-6">$0<span className="text-base font-medium text-gray-500">/mo</span></p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <Feature>SD export with watermark</Feature>
              <Feature>Basic voices and styles</Feature>
              <Feature>Auto subtitles and music</Feature>
              <Feature>Cloud save</Feature>
            </ul>
            <Link to="/app" className="mt-8 inline-block px-5 py-3 rounded-lg bg-gray-900 text-white font-semibold">Get started</Link>
          </div>
          <div className="rounded-2xl border p-8 bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-600 text-white">Most Popular</div>
            <h3 className="text-xl font-semibold mt-3">Pro</h3>
            <p className="text-gray-600 mt-1">HD export without watermark + premium everything.</p>
            <p className="text-4xl font-extrabold mt-6">$19<span className="text-base font-medium text-gray-500">/mo</span></p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <Feature>HD export without watermark</Feature>
              <Feature>Premium voices and styles</Feature>
              <Feature>Advanced editor</Feature>
              <Feature>Priority rendering</Feature>
            </ul>
            <Link to="/app" className="mt-8 inline-block px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold">Upgrade to Pro</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
