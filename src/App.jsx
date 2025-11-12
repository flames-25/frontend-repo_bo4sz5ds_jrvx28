import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Studio from './components/Studio'
import Footer from './components/Footer'

function HomePage(){
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navbar onOpenAuth={() => navigate('/app')} />
      <Hero />
      <div className="max-w-6xl mx-auto px-6">
        <section className="py-16 grid md:grid-cols-3 gap-6">
          {[
            {title:'Text → Video', desc:'Paste your script and get a scene-by-scene video with voice, visuals, subtitles and music.'},
            {title:'Visual Styles', desc:'Cartoon, faceless, cinematic or realistic. Pick the vibe that matches your story.'},
            {title:'Editor', desc:'Drag-and-drop timeline with text overlays and music selector (coming soon).'},
          ].map((c,i)=>(
            <div key={i} className="rounded-2xl bg-white/70 backdrop-blur border p-6">
              <div className="text-lg font-semibold">{c.title}</div>
              <p className="text-gray-600 mt-1">{c.desc}</p>
            </div>
          ))}
        </section>
        <Pricing />
      </div>
      <Footer />
    </div>
  )
}

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50"><Navbar /><div className="pt-28 max-w-6xl mx-auto px-6"><Pricing /></div><Footer /></div>} />
      <Route path="/app" element={<Studio />} />
      <Route path="/test" element={<div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50"><div className="pt-20"></div></div>} />
    </Routes>
  )
}
