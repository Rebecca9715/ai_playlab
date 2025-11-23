import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Rocket, Star } from 'lucide-react';
import RandomIdeaGen from '../components/RandomIdeaGen';
import { TOOLS } from '../constants';

const Home: React.FC = () => {
  const featuredTools = TOOLS.slice(0, 3);

  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neon-green mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            Open for Collaboration
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Turning small sparks <br />
            <span className="neon-text-gradient">into real tools.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-2">
            Welcome to AI Playlab — where creativity meets utility.
          </p>
          <p className="text-base text-gray-500 mb-10 font-mono">
            探索生活中的小问题，用 AI 做成小工具，让灵感真正落地。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/tools" 
              className="px-8 py-3 bg-neon-cyan text-tech-900 font-bold rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-2"
            >
              Explore Tools <ArrowRight size={18} />
            </Link>
            <Link 
              to="/requests" 
              className="px-8 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Rocket size={18} /> Submit Idea
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tools & Idea Generator */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Featured List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Star className="text-neon-purple fill-neon-purple" /> Featured Builds
              </h2>
              <Link to="/tools" className="text-neon-cyan text-sm flex items-center hover:underline">
                View All <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredTools.map((tool) => (
                <Link to={`/tools`} key={tool.id} className="glass-card rounded-xl overflow-hidden hover:scale-[1.02] transition-transform block">
                  <div className="h-40 bg-gray-800 relative">
                     <img src={tool.imageUrl} alt={tool.title} className="w-full h-full object-cover opacity-80" />
                     {tool.isNew && (
                       <span className="absolute top-2 right-2 px-2 py-1 bg-neon-green text-tech-900 text-xs font-bold rounded">NEW</span>
                     )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white">{tool.title}</h3>
                    <p className="text-xs text-gray-500 mb-2 font-mono">{tool.titleZh}</p>
                    <p className="text-sm text-gray-300 line-clamp-2">{tool.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar / Generator */}
          <div className="space-y-6">
            <div className="sticky top-24">
              <RandomIdeaGen />
              
              <div className="mt-6 p-6 border border-white/10 rounded-xl bg-gradient-to-br from-gray-900 to-tech-900">
                <h4 className="text-white font-bold mb-2">Join the Newsletter</h4>
                <p className="text-xs text-gray-400 mb-4">Get notified when a new experiment drops.</p>
                <input type="email" placeholder="email@example.com" className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-sm mb-2 text-white focus:outline-none focus:border-neon-cyan" />
                <button className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2 rounded">SUBSCRIBE</button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;