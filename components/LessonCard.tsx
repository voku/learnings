import React, { useState, useEffect } from 'react';
import { Lesson, Category } from '../types';
import { ChevronDown, ChevronUp, Quote, ExternalLink, Terminal, Layers, Coffee } from 'lucide-react';
import CodeBlock from './CodeBlock';

interface LessonCardProps {
  lesson: Lesson;
  globalExpanded?: boolean;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, globalExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // LOGIC: A card is "expandable" (interactive) ONLY if:
  // 1. It has extra content (quote, code snippets, links)
  // 2. OR the text content is long enough to warrant truncation (> 160 chars)
  const hasExtras = !!lesson.quote || (lesson.codeSnippets && lesson.codeSnippets.length > 0) || (lesson.links && lesson.links.length > 0);
  const isLongContent = lesson.content.length > 160; 
  const isExpandable = hasExtras || isLongContent;

  useEffect(() => {
    // Only apply global expansion to cards that are actually expandable
    if (typeof globalExpanded === 'boolean' && isExpandable) {
      setIsExpanded(globalExpanded);
    }
  }, [globalExpanded, isExpandable]);

  const handleToggle = () => {
      if (isExpandable) {
          setIsExpanded(!isExpanded);
      }
  };

  // Visual Configuration for Categories
  const categoryConfig = {
    [Category.SYS_ADMIN]: {
      accent: "bg-indigo-500",
      badgeClass: "text-indigo-700 bg-indigo-50 border-indigo-100 dark:text-indigo-300 dark:bg-indigo-900/30 dark:border-indigo-700/50",
      icon: Terminal
    },
    [Category.APP_DEV]: {
      accent: "bg-emerald-500",
      badgeClass: "text-emerald-700 bg-emerald-50 border-emerald-100 dark:text-emerald-300 dark:bg-emerald-900/30 dark:border-emerald-700/50",
      icon: Layers
    },
    [Category.GENERAL]: {
      accent: "bg-amber-500",
      badgeClass: "text-amber-700 bg-amber-50 border-amber-100 dark:text-amber-300 dark:bg-amber-900/30 dark:border-amber-700/50",
      icon: Coffee
    },
  };

  const config = categoryConfig[lesson.category];
  const CategoryIcon = config.icon;

  return (
    <div 
      className={`
        bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 
        overflow-hidden flex flex-col relative group h-full
        ${isExpandable ? 'hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200' : ''}
      `}
    >
      {/* Colorful Top Accent */}
      <div className={`h-1.5 w-full ${config.accent}`}></div>

      <div 
        className={`p-6 flex-1 flex flex-col ${isExpandable ? 'cursor-pointer' : ''}`}
        onClick={handleToggle}
      >
        <div className="flex justify-between items-start gap-3 mb-4">
           {/* Distinct Category Badge */}
           <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${config.badgeClass}`}>
              <CategoryIcon size={12} className="mr-1.5" strokeWidth={2.5} />
              {lesson.category}
            </span>

          {/* Toggle Button - Only shown if content warrants it */}
          {isExpandable && (
            <button 
              className="text-slate-300 hover:text-slate-500 dark:text-slate-600 dark:hover:text-slate-400 transition-colors"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug mb-3 tracking-tight">
          {lesson.title}
        </h3>

        {/* Content Section - Display fully if not expandable */}
        <div className={`text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed ${(!isExpanded && isExpandable) ? 'line-clamp-3' : ''}`}>
          {lesson.content}
        </div>

        {/* Tags Section Logic */}
        {/* Case 1: Expandable but Collapsed -> Show small preview of tags at the bottom */}
        {isExpandable && !isExpanded && (
           <div className="mt-auto pt-4 flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
            {lesson.tags.slice(0, 3).map(tag => (
                <span key={tag} className="text-xs text-slate-400 dark:text-slate-500 font-medium flex items-center">
                   #{tag}
                </span>
            ))}
            {lesson.tags.length > 3 && (
               <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                 +{lesson.tags.length - 3}
               </span>
            )}
           </div>
        )}

        {/* Case 2: Not Expandable -> Show all tags fully immediately */}
        {!isExpandable && (
             <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-50 dark:border-slate-700/50 mt-auto">
                 {lesson.tags.map(tag => (
                     <span key={tag} className="px-2 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 text-xs font-medium rounded-md">
                         #{tag}
                     </span>
                 ))}
             </div>
         )}
      </div>

      {/* Expanded Extras Section (Quotes, Code, Links, Full Tags) */}
      {isExpandable && isExpanded && (
        <div className="px-6 pb-6 animate-fadeIn bg-slate-50/80 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700">
          
          {/* Quote */}
          {lesson.quote && (
            <div className="my-5 relative pl-5 py-2 border-l-4 border-slate-300 dark:border-slate-600">
               <p className="font-serif text-lg italic text-slate-700 dark:text-slate-300 leading-relaxed">"{lesson.quote.text}"</p>
               <div className="mt-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">— {lesson.quote.author}</div>
            </div>
          )}

          {/* Code Snippets */}
          {lesson.codeSnippets?.map((snippet, idx) => (
            <CodeBlock 
              key={idx}
              code={snippet.code}
              language={snippet.language}
              label={snippet.description}
              isBad={snippet.isBadExample}
            />
          ))}

          {/* External Links */}
          {lesson.links && lesson.links.length > 0 && (
            <div className="mt-5 p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-800/30">
              <h4 className="text-[10px] font-bold text-blue-400 dark:text-blue-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                <BookOpenIcon size={12} /> Further Reading
              </h4>
              <ul className="space-y-2">
                {lesson.links.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline flex items-center gap-1 group/link"
                    >
                      {link.text} 
                      <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity ml-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

           {/* Full Tags List for Expanded View */}
           <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
            {lesson.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-600 shadow-sm">
                    #{tag}
                </span>
            ))}
           </div>
        </div>
      )}
    </div>
  );
};

// Small helper icon
const BookOpenIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

export default LessonCard;