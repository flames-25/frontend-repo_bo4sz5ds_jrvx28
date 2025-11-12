export default function Footer(){
  return (
    <footer className="mt-24 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-600 flex items-center justify-between">
        <p>© {new Date().getFullYear()} VidGenie. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/pricing" className="hover:text-gray-900">Pricing</a>
          <a href="/test" className="hover:text-gray-900">Status</a>
        </div>
      </div>
    </footer>
  )
}
