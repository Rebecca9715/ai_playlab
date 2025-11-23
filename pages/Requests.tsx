import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Plus } from 'lucide-react';
import { REQUESTS } from '../constants';

const Requests: React.FC = () => {
  const [requests, setRequests] = useState(REQUESTS);

  const handleVote = (id: string) => {
    setRequests(prev => prev.map(req => 
      req.id === id ? { ...req, votes: req.votes + 1 } : req
    ));
  };

  return (
    <div className="pt-24 max-w-4xl mx-auto px-4 pb-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Requests & Collaboration</h1>
        <p className="text-gray-400 text-lg">
          Got a problem worth solving? <br/>
          <span className="text-gray-500 text-sm">你生活里有什么小烦恼？说不定一周后它就变成一个工具。</span>
        </p>
      </div>

      <div className="glass-card rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-neon-cyan">
        <div>
          <h3 className="text-xl font-bold text-white">Have an idea?</h3>
          <p className="text-gray-400 text-sm">Submit your pain point. If others vote for it, I might build it.</p>
        </div>
        <button className="px-6 py-3 bg-neon-cyan text-tech-900 font-bold rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-2 whitespace-nowrap">
          <Plus size={20} /> Submit Request
        </button>
      </div>

      <div className="space-y-4">
        {requests.map((item) => (
          <div key={item.id} className="bg-white/5 border border-white/5 rounded-lg p-6 flex items-start gap-4 hover:bg-white/[0.07] transition-colors">
            <div className="flex flex-col items-center gap-1 min-w-[60px]">
              <button 
                onClick={() => handleVote(item.id)}
                className="p-2 rounded hover:bg-white/10 text-gray-400 hover:text-neon-cyan transition-colors"
              >
                <ThumbsUp size={20} />
              </button>
              <span className="font-mono font-bold text-white">{item.votes}</span>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide
                  ${item.status === 'Completed' ? 'bg-neon-green/20 text-neon-green' : 
                    item.status === 'In Progress' ? 'bg-neon-purple/20 text-neon-purple' : 
                    'bg-gray-700 text-gray-300'}`}>
                  {item.status}
                </span>
                <span className="text-xs text-gray-500">by @{item.author}</span>
              </div>
              <p className="text-gray-200 leading-relaxed text-lg">
                {item.content}
              </p>
            </div>
            
            <div className="hidden sm:block">
              <button className="flex items-center gap-1 text-gray-500 hover:text-white text-sm">
                <MessageSquare size={16} /> Discuss
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;