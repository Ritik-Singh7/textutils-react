import React from "react";
import { useState } from "react";

function Contant() {
  const [text, settext] = useState("");
  const [mono, setMono] = useState(false);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  
  const upper = () => {
    settext(text.toUpperCase());
  };

  const lower = () => {
    settext(text.toLowerCase());
  };

  const handleCopy = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      alert("Text copied to clipboard!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-900 p-4">
      <div className="w-full max-w-2xl bg-amber-950/40 border border-amber-500/20 rounded-3xl p-6 shadow-2xl backdrop-blur-sm">
        
        {/* Title */}
        <div className="mb-6 text-center sm:text-left">
          <h1 className="text-3xl font-black tracking-wider text-amber-400">
            TEXT ANALYSER
          </h1>
          <p className="text-amber-200/60 text-sm mt-1">
            Modify, count, and format your text instantly.
          </p>
        </div>

        {/* Text Area */}
        <div className="relative mb-4">
          <textarea
            placeholder="Type or paste your text here..."
            className="w-full h-40 p-4 bg-slate-950/80 border border-amber-800/50 rounded-2xl text-amber-100 placeholder-amber-700/60 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all shadow-inner resize-none"
            style={{ fontFamily: mono ? "monospace" : "sans-serif" }}
            maxLength={100}
            name="inputText"
            id="inputText"
            value={text}
            onChange={(e) => settext(e.target.value)}
          ></textarea>
          
          {/* Character Counter Badge */}
          <span className="absolute bottom-3 right-3 text-xs bg-amber-900/60 text-amber-300 px-2.5 py-1 rounded-full border border-amber-700/30">
            {text.length} / 100
          </span>
        </div>

        {/* Stats Row */}
        <div className="flex justify-between items-center bg-amber-950/60 border border-amber-900/50 rounded-xl px-4 py-2.5 mb-6">
          <p className="text-amber-200 font-medium text-sm">
            Words count: <span className="text-amber-400 font-bold text-base">{wordCount}</span>
          </p>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <button 
            className="px-4 py-2.5 font-semibold text-sm rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 shadow-md active:scale-95 transition-all duration-150" 
            onClick={upper}
          >
            Uppercase
          </button>

          <button 
            className="px-4 py-2.5 font-semibold text-sm rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 shadow-md active:scale-95 transition-all duration-150" 
            onClick={lower}
          >
            Lowercase
          </button>

          <button 
            className={`px-4 py-2.5 font-semibold text-sm rounded-xl border transition-all duration-150 active:scale-95 shadow-md ${
              mono 
                ? "bg-amber-400 text-amber-950 border-amber-400 font-mono font-bold" 
                : "bg-transparent text-amber-400 border-amber-500/30 hover:bg-amber-500/10"
            }`}
            onClick={() => setMono(!mono)}
          >
            Mono Font
          </button>

          <button 
            className="px-4 py-2.5 font-semibold text-sm rounded-xl bg-amber-900/40 text-amber-400 border border-amber-700/30 hover:bg-amber-900/60 active:scale-95 transition-all duration-150" 
            onClick={() => settext("")}
          >
            Clear
          </button>

          {/* Copy Button (Fixed functionality) */}
          <button 
            className="col-span-2 sm:col-span-1 px-4 py-2.5 font-semibold text-sm rounded-xl bg-emerald-600 hover:bg-emerald-500 text-emerald-50 shadow-md active:scale-95 transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none" 
            disabled={!text}
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>

      </div>
    </div>
  );
}

export default Contant;