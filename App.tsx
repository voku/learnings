import React, { useState, useMemo } from 'react';
import { LESSONS, AUTHOR_NAME } from './constants';
import { Category, Lesson } from './types';
import LessonCard from './components/LessonCard';
import { Search, Terminal, Coffee, Layers, BrainCircuit, GraduationCap, X, BookOpen, ExternalLink, Github, BookText } from 'lucide-react';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [globalExpanded, setGlobalExpanded] = useState<boolean>(false);

  // Group lessons by category for the "Syllabus" view
  const groupedLessons = useMemo(() => {
    // First filter
    const filtered = LESSONS.filter(lesson => {
      const matchesSearch = 
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });

    // Then group
    const groups: Partial<Record<Category, typeof LESSONS>> = {};
    
    // Define explicit order for categories to appear
    const order = [Category.SYS_ADMIN, Category.APP_DEV, Category.GENERAL];

    order.forEach(cat => {
      const lessonsInCat = filtered.filter(l => l.category === cat);
      if (lessonsInCat.length > 0) {
        groups[cat] = lessonsInCat;
      }
    });

    return groups;
  }, [searchQuery]);

  const totalVisible = Object.values(groupedLessons).reduce((acc, curr) => acc + ((curr as Lesson[]).length || 0), 0);

  const CategoryIcons = {
    [Category.SYS_ADMIN]: Terminal,
    [Category.APP_DEV]: Layers,
    [Category.GENERAL]: Coffee,
  };

  const CategoryColors = {
    [Category.SYS_ADMIN]: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800",
    [Category.APP_DEV]: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800",
    [Category.GENERAL]: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-800",
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 selection:bg-indigo-100 dark:selection:bg-indigo-900/50">
      
      {/* Background Pattern - Technical/Notebook feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Solid Sticky Header - No transparency to prevent clash */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                <BrainCircuit size={18} />
             </div>
             <span className="font-bold text-lg tracking-tight hidden sm:block text-slate-900 dark:text-white">Dev Wisdom</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
              <input
                type="text"
                placeholder="Find a lesson..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-slate-100 dark:bg-slate-800 border-transparent border-2 focus:border-indigo-500 rounded-full text-sm outline-none transition-all placeholder-slate-400 dark:text-slate-200"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
             <button 
                onClick={() => setGlobalExpanded(!globalExpanded)}
                className="text-xs font-semibold px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors whitespace-nowrap hidden sm:block"
             >
               {globalExpanded ? 'Collapse All' : 'Expand All'}
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">
              <GraduationCap size={16} />
              Field Notes
           </div>
           <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
             What I've Learned <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">So Far.</span>
           </h1>
           <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium mb-6">
             A curated interactive collection of professional insights from <span className="text-slate-900 dark:text-slate-200">{AUTHOR_NAME}</span>.
           </p>
           <a 
               href="https://dev.to/suckup_de/what-have-i-learned-so-far-in-my-job-3o8f" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
           >
               <BookText size={16} />
               Originally published on DEV Community
               <ExternalLink size={14} />
           </a>
        </div>

        {/* Results Info */}
        {searchQuery && (
          <div className="mb-8 text-center">
             <span className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                Found {totalVisible} lessons for "{searchQuery}"
             </span>
          </div>
        )}

        {/* Categories / Syllabus Layout */}
        <div className="space-y-16">
          {(Object.keys(groupedLessons) as Category[]).map((category) => {
            const lessons = groupedLessons[category]!;
            const Icon = CategoryIcons[category];
            const colorClass = CategoryColors[category];

            return (
              <section key={category} className="scroll-mt-20">
                <div className="flex items-center gap-4 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div className={`p-3 rounded-xl border ${colorClass}`}>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{category}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {lessons.length} {lessons.length === 1 ? 'Lesson' : 'Lessons'}
                    </p>
                  </div>
                </div>

                {/* CSS Grid for Human Readable Order (Left to Right, Top to Bottom) */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {lessons.map((lesson) => (
                    <LessonCard 
                      key={lesson.id} 
                      lesson={lesson} 
                      globalExpanded={globalExpanded}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {totalVisible === 0 && (
          <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-400 mb-6">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No lessons found</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto mb-6">
              We couldn't find any lessons matching your search.
            </p>
            <button 
               onClick={() => setSearchQuery('')}
               className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-sm shadow-indigo-500/30"
            >
              Clear Search
            </button>
          </div>
        )}
      </main>

      <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
                <div className="flex justify-center items-center gap-2 mb-4 text-slate-900 dark:text-white font-bold text-lg">
                    <BrainCircuit size={20} className="text-indigo-600" />
                    Dev Wisdom
                </div>
                <p className="text-slate-500 text-sm mb-6">
                    Based on the blog post by {AUTHOR_NAME}.<br/>Built with React & Tailwind.
                </p>
                
                {/* Links Section */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a 
                        href="https://dev.to/suckup_de/what-have-i-learned-so-far-in-my-job-3o8f" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium rounded-lg transition-all hover:shadow-md hover:scale-105 transform"
                    >
                        <BookText size={18} />
                        Read Original Blog Post
                        <ExternalLink size={16} />
                    </a>
                    <a 
                        href="https://github.com/voku/learnings" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg transition-all hover:shadow-md hover:scale-105 transform"
                    >
                        <Github size={18} />
                        Contribute on GitHub
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;