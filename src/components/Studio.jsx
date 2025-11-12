import { useEffect, useState } from 'react'
import { PlusCircle, Video, UploadCloud, Music, Languages, Wand2, Settings } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Studio() {
  const [token, setToken] = useState(localStorage.getItem('vg_token') || '')
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('vg_user')
    return raw ? JSON.parse(raw) : null
  })
  const [form, setForm] = useState({
    title: '',
    script_text: '',
    language: 'en',
    voice: 'female',
    voice_speed: 1.0,
    style: 'cinematic',
    music: '',
    quality: 'sd'
  })
  const [projects, setProjects] = useState([])
  const [creating, setCreating] = useState(false)

  async function signupDemo() {
    const email = `demo+${Math.floor(Math.random()*10000)}@vidgenie.ai`
    const res = await fetch(`${API}/auth/signup`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password: 'demo12345', name: 'Demo User' }) })
    if (!res.ok) throw new Error('signup failed')
    const data = await res.json()
    setToken(data.token); localStorage.setItem('vg_token', data.token)
    setUser(data.user); localStorage.setItem('vg_user', JSON.stringify(data.user))
  }

  async function fetchProjects() {
    if (!token) return
    const res = await fetch(`${API}/projects`, { headers: { Authorization: `Bearer ${token}` } })
    if (res.ok) setProjects(await res.json())
  }

  useEffect(() => { fetchProjects() }, [token])

  async function createProject(e) {
    e.preventDefault()
    if (!token) await signupDemo()
    setCreating(true)
    try {
      const res = await fetch(`${API}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('vg_token')}` },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setProjects(p => [data, ...p])
      } else {
        alert(data.detail || 'Failed to create')
      }
    } catch (e) {
      console.error(e)
    } finally {
      setCreating(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-28">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Studio</h1>
        <p className="text-gray-600 mt-1">Turn your text into videos in seconds. This demo instantly returns a sample video while saving your project in the cloud.</p>

        <form onSubmit={createProject} className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl bg-white/70 backdrop-blur border p-6">
            <label className="text-sm font-semibold text-gray-700">Title</label>
            <input value={form.title} onChange={e=>setForm({...form, title:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="My Product Trailer" required />

            <label className="mt-4 block text-sm font-semibold text-gray-700">Script</label>
            <textarea value={form.script_text} onChange={e=>setForm({...form, script_text:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2 h-40" placeholder="Paste or write your story..." required />

            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">Style</label>
                <select value={form.style} onChange={e=>setForm({...form, style:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2">
                  <option value="cinematic">Cinematic</option>
                  <option value="cartoon">Cartoon</option>
                  <option value="faceless">Faceless</option>
                  <option value="realistic">Realistic</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Voice</label>
                <select value={form.voice} onChange={e=>setForm({...form, voice:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Language</label>
                <select value={form.language} onChange={e=>setForm({...form, language:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Voice speed</label>
                <input type="number" step="0.1" min="0.5" max="1.5" value={form.voice_speed} onChange={e=>setForm({...form, voice_speed:parseFloat(e.target.value)})} className="mt-1 w-full rounded-lg border px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Background music</label>
                <input value={form.music} onChange={e=>setForm({...form, music:e.target.value})} placeholder="e.g. chill, upbeat" className="mt-1 w-full rounded-lg border px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Quality</label>
                <select value={form.quality} onChange={e=>setForm({...form, quality:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2">
                  <option value="sd">SD</option>
                  <option value="hd">HD (Pro)</option>
                </select>
              </div>
            </div>

            <button disabled={creating} className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold disabled:opacity-60">
              <PlusCircle size={18} /> {creating ? 'Creating...' : 'Create Video'}
            </button>
          </div>
          <div className="md:col-span-1 space-y-4">
            <div className="rounded-2xl bg-white/70 backdrop-blur border p-4">
              <h3 className="font-semibold flex items-center gap-2"><Wand2 size={18}/> Auto Enhancements</h3>
              <p className="text-sm text-gray-600 mt-1">Subtitles, transitions, scene timing and matching visuals are added automatically.</p>
            </div>
            <div className="rounded-2xl bg-white/70 backdrop-blur border p-4">
              <h3 className="font-semibold flex items-center gap-2"><Music size={18}/> Royalty-free music</h3>
              <p className="text-sm text-gray-600 mt-1">Choose the vibe and we add soundtrack for you.</p>
            </div>
            <div className="rounded-2xl bg-white/70 backdrop-blur border p-4">
              <h3 className="font-semibold flex items-center gap-2"><Languages size={18}/> Multilingual</h3>
              <p className="text-sm text-gray-600 mt-1">Natural voices across languages.</p>
            </div>
          </div>
        </form>

        <div className="mt-12">
          <h2 className="text-xl font-bold">Your Projects</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            {projects.map(p => (
              <div key={p.id} className="rounded-2xl overflow-hidden border bg-white">
                <video src={p.video_url} controls className="w-full aspect-video bg-black" />
                <div className="p-4">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-gray-600">Status: {p.status.toUpperCase()}</div>
                </div>
              </div>
            ))}
            {projects.length === 0 && (
              <div className="text-gray-500">No projects yet. Create your first video above.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
