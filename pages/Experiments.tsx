import React from 'react';
import { FlaskConical, Code2, Play } from 'lucide-react';
import { EXPERIMENTS } from '../constants';

const Experiments: React.FC = () => {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 pb-20">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center">
             <FlaskConical className="text-neon-green" size={24} />
          </div>
          <h1 className="text-4xl font-bold text-white">Experiments Lab</h1>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl">
          A playground for raw ideas. Unpolished, experimental, but full of "what if...".
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPERIMENTS.map((exp) => (
          <div key={exp.id} className="border border-dashed border-white/20 rounded-xl p-6 hover:border-neon-green/50 hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
            {/* Background pattern for lab feel */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <span className="text-xs font-mono px-2 py-1 border border-neon-green/30 text-neon-green rounded">
                {exp.status}
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 relative z-10 h-12">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              {exp.techStack.map(tech => (
                <span key={tech} className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 relative z-10">
               <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded flex items-center justify-center gap-2">
                 <Play size={14} /> Try Demo
               </button>
               <button className="flex-1 py-2 border border-white/10 hover:border-white/30 text-gray-300 text-sm font-medium rounded flex items-center justify-center gap-2">
                 <Code2 size={14} /> View Code
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiments;