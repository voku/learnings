import React from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  label?: string;
  isBad?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, label, isBad }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const borderColor = isBad ? 'border-red-400' : 'border-slate-700';
  const bgColor = isBad ? 'background-red-900/10' : 'bg-slate-900';

  return (
    <div className={`relative rounded-lg overflow-hidden border ${borderColor} my-4 shadow-sm group`}>
      {(label || language) && (
        <div className={`flex justify-between items-center px-4 py-2 ${isBad ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' : 'bg-slate-800 text-slate-300'} text-xs font-mono uppercase tracking-wider`}>
          <span>{label || language}</span>
          {isBad && <span className="font-bold">Avoid</span>}
        </div>
      )}
      <div className={`p-4 overflow-x-auto ${isBad ? 'bg-red-50 dark:bg-red-900/10' : 'bg-slate-900'}`}>
        <pre className={`font-mono text-sm ${isBad ? 'text-red-800 dark:text-red-200' : 'text-slate-100'}`}>
          <code>{code}</code>
        </pre>
      </div>
      
      {!isBad && (
        <button
          onClick={handleCopy}
          className="absolute top-10 right-2 p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      )}
    </div>
  );
};

export default CodeBlock;