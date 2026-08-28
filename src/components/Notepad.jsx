import { useState, useEffect, useRef, useId } from 'react';
import {
  FileDown,
  Download,
  Copy,
  Check,
  Trash2,
  Type,
  Clock,
  CheckCircle2,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { exportToPdf } from '../utils/pdfExport';

const STORAGE_KEY = 'online_notepad_content';
const STORAGE_FONT_KEY = 'online_notepad_font_mode';
const STORAGE_SIZE_KEY = 'online_notepad_font_size';

/**
 * Notepad Component
 * Fully responsive, distraction-free, ultra-minimal client-side notepad with localStorage auto-save,
 * live stats, one-click PDF export, and full-screen focus mode.
 */
export default function Notepad({ dict = {}, lang = 'en' }) {
  const [content, setContent] = useState('');
  const [saveStatus, setSaveStatus] = useState('empty'); // 'empty' | 'saving' | 'saved'
  const [isExporting, setIsExporting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [fontMode, setFontMode] = useState('sans'); // 'sans' | 'mono'
  const [fontSize, setFontSize] = useState('base'); // 'sm' | 'base' | 'lg'
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef(null);
  const textareaRef = useRef(null);
  const saveTimeoutRef = useRef(null);
  const titleInputId = useId();

  // Load content and preferences from localStorage on mount
  useEffect(() => {
    try {
      const savedContent = localStorage.getItem(STORAGE_KEY);
      if (savedContent !== null) {
        setContent(savedContent);
        setSaveStatus(savedContent.trim().length > 0 ? 'saved' : 'empty');
      }

      const savedFont = localStorage.getItem(STORAGE_FONT_KEY);
      if (savedFont === 'mono' || savedFont === 'sans') {
        setFontMode(savedFont);
      }

      const savedSize = localStorage.getItem(STORAGE_SIZE_KEY);
      if (savedSize === 'sm' || savedSize === 'base' || savedSize === 'lg') {
        setFontSize(savedSize);
      }
    } catch (e) {
      console.warn('Could not access localStorage:', e);
    }
  }, []);

  // Listen to browser fullscreen changes & Escape key
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    const handleGlobalKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('keydown', handleGlobalKeyDown);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [isFullscreen]);

  // Toggle Full Screen Mode
  const toggleFullscreen = () => {
    const nextState = !isFullscreen;
    setIsFullscreen(nextState);

    if (nextState) {
      if (containerRef.current && !document.fullscreenElement) {
        try {
          containerRef.current.requestFullscreen?.().catch(() => {});
        } catch {
          // Fallback to CSS overlay fullscreen
        }
      }
    } else {
      if (document.fullscreenElement) {
        try {
          document.exitFullscreen?.().catch(() => {});
        } catch {
          // Ignore
        }
      }
    }

    // Keep textarea focused
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 100);
  };

  // Auto-save to localStorage on content change
  const handleContentChange = (e) => {
    const newText = e.target.value;
    setContent(newText);
    setSaveStatus('saving');

    try {
      localStorage.setItem(STORAGE_KEY, newText);
    } catch (err) {
      console.error('Failed to save to localStorage:', err);
    }

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      setSaveStatus(newText.trim().length > 0 ? 'saved' : 'empty');
    }, 400);
  };

  // Keyboard navigation: Handle Tab key indentation
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const spaces = '  '; // 2 spaces for clean indentation

      const updated = content.substring(0, start) + spaces + content.substring(end);
      setContent(updated);
      setSaveStatus('saving');

      try {
        localStorage.setItem(STORAGE_KEY, updated);
      } catch (err) {
        console.error('Storage error:', err);
      }

      // Re-position cursor right after the inserted spaces
      requestAnimationFrame(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = start + spaces.length;
          textareaRef.current.selectionEnd = start + spaces.length;
        }
        setSaveStatus(updated.trim().length > 0 ? 'saved' : 'empty');
      });
    }
  };

  // Export to formatted PDF
  const handleExportPdf = async () => {
    if (!content.trim() || isExporting) return;
    setIsExporting(true);

    try {
      // Extract first line as note title if present
      const firstLine = content.trim().split('\n')[0].slice(0, 40);
      const title = firstLine || dict['site.name'] || 'Online Note';
      await exportToPdf(content, title, lang);
    } catch (err) {
      console.error('PDF export failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  // Download raw TXT file
  const handleDownloadTxt = () => {
    if (!content.trim()) return;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    const firstLine = content.trim().split('\n')[0].replace(/[^\w\s-]/g, '').trim().slice(0, 30);
    const fileName = firstLine ? `${firstLine.replace(/\s+/g, '_')}.txt` : `note_${new Date().toISOString().slice(0, 10)}.txt`;

    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Copy to clipboard
  const handleCopy = async () => {
    if (!content.trim()) return;
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Clipboard copy failed:', err);
    }
  };

  // Clear note
  const handleClearConfirm = () => {
    setContent('');
    setSaveStatus('empty');
    setShowClearConfirm(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error('Storage clear error:', err);
    }
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  // Font toggle
  const toggleFont = () => {
    const nextMode = fontMode === 'sans' ? 'mono' : 'sans';
    setFontMode(nextMode);
    try {
      localStorage.setItem(STORAGE_FONT_KEY, nextMode);
    } catch (e) {
      console.warn(e);
    }
  };

  // Font size toggle
  const cycleFontSize = () => {
    const sizes = ['sm', 'base', 'lg'];
    const currentIndex = sizes.indexOf(fontSize);
    const nextSize = sizes[(currentIndex + 1) % sizes.length];
    setFontSize(nextSize);
    try {
      localStorage.setItem(STORAGE_SIZE_KEY, nextSize);
    } catch (e) {
      console.warn(e);
    }
  };

  // Stats calculation
  const trimmed = content.trim();
  const wordCount = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
  const charCount = content.length;
  const lineCount = content ? content.split(/\r?\n/).length : 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const fontSizeClasses = {
    sm: 'text-sm sm:text-base leading-relaxed',
    base: 'text-base sm:text-lg leading-relaxed',
    lg: 'text-lg sm:text-xl leading-relaxed',
  };

  const fontFamilyClasses = fontMode === 'mono' ? 'font-mono' : 'font-sans';

  return (
    <div
      ref={containerRef}
      className={`transition-all duration-300 w-full ${
        isFullscreen
          ? 'fixed inset-0 z-50 p-2 sm:p-4 md:p-6 lg:p-8 bg-slate-100/95 dark:bg-slate-950/95 backdrop-blur-xl h-screen w-screen max-w-none m-0 flex flex-col'
          : 'flex flex-col flex-grow max-w-5xl mx-auto my-1 sm:my-3 md:my-4'
      }`}
    >
      {/* Top Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2 sm:px-3 sm:py-2.5 mb-2.5 sm:mb-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors">
        {/* Left: Save Status & Font Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-wrap">
          {/* Save Status Badge */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium px-2 sm:px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all">
            {saveStatus === 'saving' && (
              <>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-ping" />
                <span>{dict['editor.status.saving'] || 'Saving...'}</span>
              </>
            )}
            {saveStatus === 'saved' && (
              <>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500" />
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                  {dict['editor.status.saved'] || 'Saved'}
                </span>
              </>
            )}
            {saveStatus === 'empty' && (
              <>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-400 dark:bg-slate-500" />
                <span>{dict['editor.status.empty'] || 'Ready'}</span>
              </>
            )}
          </div>

          {/* Font Toggle */}
          <button
            type="button"
            onClick={toggleFont}
            title={fontMode === 'mono' ? dict['actions.fontSans'] || 'Sans-Serif' : dict['actions.fontMono'] || 'Monospace'}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Type className="w-3.5 h-3.5" />
            <span className="hidden md:inline">
              {fontMode === 'mono' ? 'Monospace' : 'Sans-Serif'}
            </span>
          </button>

          {/* Font Size Toggle */}
          <button
            type="button"
            onClick={cycleFontSize}
            title={dict['actions.fontSize'] || 'Font Size'}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="font-bold uppercase text-[10px]">Size: {fontSize}</span>
          </button>
        </div>

        {/* Right: Fullscreen, Copy, TXT, PDF & Clear Actions */}
        <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
          {/* Full Screen Toggle Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            title={isFullscreen ? dict['actions.exitFullscreen'] || 'Exit Full Screen (Esc)' : dict['actions.fullscreen'] || 'Full Screen'}
            className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 text-xs font-medium rounded-xl border transition-all ${
              isFullscreen
                ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 shadow-xs'
                : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="hidden sm:inline">{dict['actions.exitFullscreen'] || 'Exit'}</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{dict['actions.fullscreen'] || 'Fullscreen'}</span>
              </>
            )}
          </button>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            disabled={!content.trim()}
            title={dict['actions.copy'] || 'Copy Text'}
            className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-xl border transition-all ${
              isCopied
                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed'
            }`}
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="hidden xs:inline">{dict['actions.copied'] || 'Copied!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">{dict['actions.copy'] || 'Copy'}</span>
              </>
            )}
          </button>

          {/* Download TXT Button */}
          <button
            type="button"
            onClick={handleDownloadTxt}
            disabled={!content.trim()}
            title={dict['actions.downloadTxt'] || 'Download TXT'}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">TXT</span>
          </button>

          {/* Export PDF Button */}
          <button
            type="button"
            onClick={handleExportPdf}
            disabled={!content.trim() || isExporting}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl shadow-xs hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all transform active:scale-98"
          >
            {isExporting ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                <span className="hidden xs:inline">{dict['actions.exportingPdf'] || 'Exporting...'}</span>
              </>
            ) : (
              <>
                <FileDown className="w-3.5 h-3.5" />
                <span>{dict['actions.exportPdf'] || 'PDF'}</span>
              </>
            )}
          </button>

          {/* Clear Note Button */}
          <button
            type="button"
            onClick={() => setShowClearConfirm(true)}
            disabled={!content.trim()}
            title={dict['actions.clear'] || 'Clear Note'}
            aria-label={dict['actions.clear'] || 'Clear Note'}
            className="p-1.5 text-slate-400 hover:text-rose-600 dark:text-slate-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Clear Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-sm p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {dict['actions.clear'] || 'Clear Note'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                  {dict['actions.clearConfirm'] ||
                    'Are you sure you want to clear your note? This action cannot be undone.'}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowClearConfirm(false)}
                className="px-3.5 py-1.5 text-xs font-medium rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleClearConfirm}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-xl text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-xs"
              >
                {dict['actions.clear'] || 'Clear Note'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Massive Distraction-Free Textarea Container */}
      <div className={`relative flex-grow flex flex-col rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-black/40 overflow-hidden transition-all focus-within:ring-2 focus-within:ring-blue-500/40 focus-within:border-blue-500/50 ${
        isFullscreen ? 'min-h-0 h-full' : 'min-h-[380px] sm:min-h-[500px] md:min-h-[600px]'
      }`}>
        <label htmlFor={titleInputId} className="sr-only">
          {dict['site.title'] || 'Online Notepad'}
        </label>
        <textarea
          id={titleInputId}
          ref={textareaRef}
          value={content}
          onChange={handleContentChange}
          onKeyDown={handleKeyDown}
          placeholder={dict['editor.placeholder'] || 'Start typing your notes here...'}
          spellCheck={true}
          autoFocus={true}
          className={`flex-grow w-full h-full p-4 sm:p-6 md:p-8 lg:p-10 resize-none outline-none bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 ${fontFamilyClasses} ${fontSizeClasses[fontSize]} selection:bg-blue-500/20`}
        />

        {/* Live Counters Footer Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-50/70 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800/80 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 backdrop-blur-xs select-none">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1">
              <strong className="font-semibold text-slate-700 dark:text-slate-300">
                {wordCount.toLocaleString()}
              </strong>{' '}
              {wordCount === 1 ? dict['stats.word'] || 'word' : dict['stats.words'] || 'words'}
            </span>

            <span className="flex items-center gap-1">
              <strong className="font-semibold text-slate-700 dark:text-slate-300">
                {charCount.toLocaleString()}
              </strong>{' '}
              {charCount === 1
                ? dict['stats.character'] || 'char'
                : dict['stats.characters'] || 'chars'}
            </span>

            <span className="hidden sm:inline-flex items-center gap-1">
              <strong className="font-semibold text-slate-700 dark:text-slate-300">
                {lineCount.toLocaleString()}
              </strong>{' '}
              {lineCount === 1 ? dict['stats.line'] || 'line' : dict['stats.lines'] || 'lines'}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden sm:flex items-center gap-1 text-slate-400 dark:text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              <span>
                {readingTime} {dict['stats.readingTime'] || 'min read'}
              </span>
            </span>

            <span className="text-[10px] sm:text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">100% Client-Side</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
