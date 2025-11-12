import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  const gradient = useMemo(() => (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(99,102,241,0.25),rgba(236,72,153,0.15)_50%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />
    </div>
  ), [])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {gradient}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          VidGenie
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-amber-400">AI Text → Video Studio</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-gray-700"
        >
          Turn scripts into studio-quality videos with voices, visuals, music and subtitles—automatically.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link to="/app" className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:opacity-90 transition">Launch Studio</Link>
          <Link to="/pricing" className="px-6 py-3 rounded-lg bg-white/80 backdrop-blur border border-white/60 text-gray-800 font-semibold shadow">See Pricing</Link>
        </motion.div>
      </div>
    </section>
  )
}
