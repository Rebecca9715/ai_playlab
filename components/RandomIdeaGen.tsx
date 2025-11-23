import React, { useState } from 'react';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { generateRandomIdea } from '../services/geminiService';

const RandomIdeaGen: React.FC = () => {
  const [idea, setIdea] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const newIdea = await generateRandomIdea();
    setIdea(newIdea);
    setLoading(false);
  };

  return (
    <div className="glass-card rounded-xl p-6 relative overflow-hidden group hover:border-neon-purple/50 transition-colors">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles size={60} className="text-neon-purple" />
      </div>

      <h3 className="text-lg font-mono font-bold text-white mb-2 flex items-center gap-2">
        <Sparkles size={18} className="text-neon-purple" />
        Random Idea Generator
      </h3>
      <p className="text-xs text-gray-400 mb-4">Stuck? Let AI spark a new tool idea.</p>

      <div className="min-h-[80px] flex items-center justify-center bg-black/30 rounded-lg p-4 mb-4 border border-white/5">
        {loading ? (
          <Loader2 className="animate-spin text-neon-cyan" />
        ) : (
          <p className="text-center text-sm text-gray-200 font-medium">
            {idea ? `"${idea}"` : "Click below to generate a spark..."}
          </p>
        )}
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full py-2 bg-white/5 hover:bg-neon-purple/20 border border-neon-purple/30 text-neon-purple text-sm font-bold rounded flex items-center justify-center gap-2 transition-all"
      >
        {loading ? 'Thinking...' : <><RefreshCw size={14} /> Generate Spark</>}
      </button>
    </div>
  );
};

export default RandomIdeaGen;