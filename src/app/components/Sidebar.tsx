import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  activePage: 'home' | 'gallery' | 'case-intro';
  onNavigate: (page: 'home' | 'gallery' | 'case-intro') => void;
}

export function Sidebar({ activePage, onNavigate }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home Hero', id: 'home' as const },
    { name: 'Gallery', id: 'gallery' as const },
    { name: 'Case Intro', id: 'case-intro' as const },
  ];

  const handleNavigate = (page: typeof navItems[number]['id']) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 p-3 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          w-64 h-screen bg-zinc-950 border-r border-zinc-800 p-8 fixed left-0 top-0 z-40 transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="mb-12">
          <h1 className="text-sm tracking-wider text-zinc-500">PORTFOLIO</h1>
        </div>
        
        <nav>
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigate(item.id)}
                  className={`text-sm transition-colors ${
                    activePage === item.id
                      ? 'text-white'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}