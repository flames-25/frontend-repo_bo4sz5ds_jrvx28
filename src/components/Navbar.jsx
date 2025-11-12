import { Link, NavLink } from 'react-router-dom'
import { Menu, LogIn, User } from 'lucide-react'

export default function Navbar({ onOpenAuth }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex h-14 items-center justify-between rounded-full border border-white/60 bg-white/70 backdrop-blur shadow-sm">
          <Link to="/" className="px-4 text-xl font-bold tracking-tight">
            <span className="text-gray-900">Vid</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Genie</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <NavLink to="/pricing" className={({isActive}) => isActive ? 'text-purple-600 font-semibold' : 'hover:text-gray-900'}>Pricing</NavLink>
            <NavLink to="/app" className={({isActive}) => isActive ? 'text-purple-600 font-semibold' : 'hover:text-gray-900'}>Studio</NavLink>
            <NavLink to="/test" className={({isActive}) => isActive ? 'text-purple-600 font-semibold' : 'hover:text-gray-900'}>Status</NavLink>
          </nav>
          <div className="flex items-center gap-2 pr-3">
            <button onClick={onOpenAuth} className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-black">
              <LogIn size={16} /> Sign In
            </button>
            <button className="md:hidden p-2">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
