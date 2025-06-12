import { BookOpen } from "lucide-react"

export function LibraryHeader() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-slate-800" />
            <span className="text-xl font-semibold text-slate-800">BYU-Idaho McKay Library</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Home
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Databases
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Research Guides
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Hours & Locations
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Help
            </a>
          </nav>
          <div className="md:hidden">
            <button className="text-slate-600 hover:text-slate-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
