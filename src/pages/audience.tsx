import { useState, useEffect, CSSProperties, KeyboardEvent, useRef } from "react";
import { qaData } from "../component/data/qaData";

interface QAItem {
  keywords: string[];
  answer: string;
}

declare global {
  interface Window {
    electron: any;
  }
}

const electron = window.electron;

export default function AudienceView() {
  const [input, setInput] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [suggestions, setSuggestions] = useState<QAItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [searchUrl, setSearchUrl] = useState<string | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.background = "transparent";
    
    const handleGlobalKeyDown = (e: any) => {
      if (e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);

    const style = document.createElement("style");
    style.innerHTML = `
      .no-scroll::-webkit-scrollbar { display: none !important; }
      .no-scroll { -ms-overflow-style: none !important; scrollbar-width: none !important; }
    `;
    document.head.appendChild(style);
    inputRef.current?.focus();

    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    if (!searchUrl) inputRef.current?.focus();
  }, [answer, searchUrl]);

  const triggerMatch = (item: QAItem) => {
    setSearchUrl(null);
    setAnswer(item.answer);
    setInput("");
    setSuggestions([]);
    setSelectedIndex(-1);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === "Enter") {
        const target = selectedIndex >= 0 ? suggestions[selectedIndex] : suggestions[0];
        if (target) triggerMatch(target);
      }
    } 
    else if (e.key === "Enter" && input.trim()) {
      // NEW: Automatically builds "what is <key> and simple definition"
      const fullQuery = `what is ${input.trim()} and simple definition`;
      setSearchUrl(`https://www.google.com/search?q=${encodeURIComponent(fullQuery)}&igu=1`);
      
      setAnswer("");
      setInput("");
      setSuggestions([]);
    } else if (answer) {
      const step = 60;
      if (e.key === "ArrowDown") scrollRef.current?.scrollBy({ top: step, behavior: 'smooth' });
      if (e.key === "ArrowUp") scrollRef.current?.scrollBy({ top: -step, behavior: 'smooth' });
    }
  };

  return (
    <div style={containerStyle}>
      <div style={header}>
        <div style={{ flex: 1, WebkitAppRegion: 'drag', height: '100%' } as any}></div>
        <div style={{ WebkitAppRegion: 'no-drag', display: 'flex', gap: '5px', paddingRight: '10px', alignItems: 'center' } as any}>
          {searchUrl && <button onClick={() => setSearchUrl(null)} style={smallBtn}>← Back</button>}
          <button onClick={() => electron.ipcRenderer.send('window-control', 'close')} style={btn}>✕</button>
        </div>
      </div>

      <div style={answerWrapper}>
        {searchUrl ? (
          <iframe 
            src={searchUrl} 
            style={{ width: '100%', height: '100%', border: 'none', background: 'white' }} 
          />
        ) : (
          <div ref={scrollRef} className="no-scroll" style={answerArea}>
            <div style={{ WebkitAppRegion: 'drag' } as any}>
              {answer || <span style={{ opacity: 0.3 }}>Search keywords or type for Google definition...</span>}
            </div>
          </div>
        )}
      </div>

      <div style={bottomSection}>
        {suggestions.length > 0 && (
          <div style={suggestionWrapper}>
            {suggestions.map((item, index) => (
              <div 
                key={index} 
                style={{
                  ...suggestionItem,
                  backgroundColor: index === selectedIndex ? "#2563eb" : "rgba(0,0,0,0.85)",
                }} 
                onClick={() => triggerMatch(item)}
              >
                {/* NEW: Displays all keywords in the object separated by commas or badges */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {item.keywords.map((kw, i) => (
                    <span key={i} style={{ 
                      background: 'rgba(255,255,255,0.1)', 
                      padding: '2px 6px', 
                      borderRadius: '4px',
                      color: kw.toLowerCase().includes(input.toLowerCase()) ? '#ffeb3b' : 'white' 
                    }}>
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        <input
          ref={inputRef}
          style={inputStyle}
          placeholder="Type to search..."
          value={input}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            const val = e.target.value;
            setInput(val);
            const searchVal = val.toLowerCase().trim();
            if (!searchVal) { setSuggestions([]); return; }
            
            const matches = qaData.filter(item =>
              item.keywords.some(k => k.toLowerCase().startsWith(searchVal))
            ).slice(0, 6);
            
            setSuggestions(matches);
            setSelectedIndex(0);
          }}
        />
      </div>
    </div>
  );
}

// --- Styles ---
const containerStyle: CSSProperties = {
  width: "1100px", height: "500px",
  display: "flex", flexDirection: "column",
  backgroundColor: "rgba(237, 160, 160, 0.9)", 
  color: "black", overflow: "hidden", fontFamily: "sans-serif",
  borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
};

const header: CSSProperties = { display: "flex", height: "32px", background: "rgba(0,0,0,0.2)" };
const answerWrapper: CSSProperties = { flex: 1, position: "relative", overflow: "hidden" };
const answerArea: any = { 
  height: "100%", padding: "20px 35px 60px 35px", fontSize: "15px", fontWeight: "500",
  overflowY: "auto", whiteSpace: "pre-wrap", WebkitAppRegion: "no-drag", lineHeight: "1.6"
};
const bottomSection: CSSProperties = { padding: "15px", background: "rgba(0,0,0,0.3)", position: "relative" };
const inputStyle: any = { width: "100%", padding: "12px 18px", backgroundColor: "white", color: "#111", borderRadius: "8px", border: "none", outline: "none", fontSize: "16px", boxSizing: "border-box" };
const btn: any = { border: "none", background: "transparent", color: "white", padding: "0 15px", cursor: "pointer" };
const smallBtn: any = { border: "none", background: "rgba(0,0,0,0.4)", color: "white", padding: "4px 12px", borderRadius: "4px", fontSize: "12px", cursor: "pointer", marginRight: "10px" };
const suggestionWrapper: CSSProperties = { position: "absolute", bottom: "100%", left: "15px", right: "15px", display: "flex", flexDirection: "column", gap: "4px", marginBottom: "8px" };
const suggestionItem: any = { padding: "10px 15px", color: "white", cursor: "pointer", borderRadius: "6px", fontSize: "14px", border: "1px solid rgba(255,255,255,0.1)" };