import React, { useState } from 'react';
import { Filter, Download, ExternalLink, Star } from 'lucide-react';
import { TOOLS } from '../constants';
import { ToolCategory } from '../types';

const Tools: React.FC = () => {
  const [filter, setFilter] = useState<ToolCategory | 'All'>('All');

  const filteredTools = filter === 'All' 
    ? TOOLS 
    : TOOLS.filter(t => t.category === filter);

  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 pb-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Tools Marketplace</h1>
        <p className="text-gray-400 text-lg">
          Useful, creative AI tools — built from real needs. <br />
          <span className="text-gray-500 text-sm">这些是我真正做过、能帮到你的AI小工具。</span>
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          onClick={() => setFilter('All')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === 'All' ? 'bg-neon-cyan text-tech-900' : 'bg-white/5 text-gray-400 hover:text-white'}`}
        >
          All
        </button>
        {Object.values(ToolCategory).map((cat) => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-neon-cyan text-tech-900' : 'bg-white/5 text-gray-400 hover:text-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTools.map((tool) => (
          <div key={tool.id} className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-neon-purple/10 transition-all group">
            <div className="h-48 bg-gray-800 relative overflow-hidden">
               <img src={tool.imageUrl} alt={tool.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
               <div className="absolute top-3 left-3 bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded border border-white/10">
                 {tool.category}
               </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                   <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                   <p className="text-xs text-neon-cyan mb-1">{tool.titleZh}</p>
                </div>
                <div className="flex items-center bg-yellow-500/10 px-2 py-1 rounded text-yellow-500 text-xs font-bold">
                   <Star size={12} className="fill-yellow-500 mr-1" /> {tool.rating}
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4 min-h-[40px]">
                {tool.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-white font-mono font-bold">{tool.price}</span>
                <div className="flex gap-2">
                  <button className="p-2 rounded bg-white/5 hover:bg-white/10 text-gray-300">
                    <ExternalLink size={18} />
                  </button>
                   <button className="px-4 py-2 rounded bg-neon-purple/80 hover:bg-neon-purple text-white text-sm font-bold flex items-center gap-2">
                    <Download size={16} /> Get it
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;