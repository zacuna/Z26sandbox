interface SidebarProps {
  activePage: 'home' | 'gallery' | 'case-intro';
  onNavigate: (page: 'home' | 'gallery' | 'case-intro') => void;
}

export function Sidebar({ activePage, onNavigate }: SidebarProps) {
  const navItems = [
    { name: 'Home Hero', id: 'home' as const },
    { name: 'Gallery', id: 'gallery' as const },
    { name: 'Case Intro', id: 'case-intro' as const },
  ];

  return (
    <aside className="w-64 h-screen bg-zinc-950 border-r border-zinc-800 p-8 fixed left-0 top-0">
      <div className="mb-12">
        <h1 className="text-sm tracking-wider text-zinc-500">PORTFOLIO</h1>
      </div>
      
      <nav>
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => onNavigate(item.id)}
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
  );
}