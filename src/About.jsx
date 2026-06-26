import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-6 py-16 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        
        {/* Header Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-2">
            Discover Our App
          </h2>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">TextUtils</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            A fast, secure, and intuitive utility suite built to format, analyze, and clean up your text dynamically.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/10 backdrop-blur-sm shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xl mb-4">
              Aa
            </div>
            <h3 className="text-lg font-bold text-amber-300 mb-2">Case Formatting</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Instantly toggle your text chunks between UPPERCASE and lowercase values with single-click command controls.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/10 backdrop-blur-sm shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xl mb-4">
              12
            </div>
            <h3 className="text-lg font-bold text-amber-300 mb-2">Real-time Analytics</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Monitor active metrics like word counts and strict boundary limits under a strict 100-character budget layout.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/10 backdrop-blur-sm shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xl mb-4">
              ⌘
            </div>
            <h3 className="text-lg font-bold text-amber-300 mb-2">Clipboard Utility</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Quickly clear staging spaces or instantly securely lock output streams directly right to your system clipboard safely.
            </p>
          </div>

        </div>

        {/* Informational Accordion Banner */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <h3 className="text-xl font-bold text-amber-400 mb-4">Why use TextUtils?</h3>
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              Whether you are an engineer working out markup documentation, a content creator auditing social templates, or an individual tidying layout drafts—having immediate formatting tools speeds up your pipeline.
            </p>
            <p className="text-slate-400">
              This client-side implementation means data handling processes entirely in your browser window context, ensuring zero latency delays and total computational privacy footprint.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;