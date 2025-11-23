import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 max-w-5xl mx-auto px-4 pb-20">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-12">
          
          {/* Bio */}
          <section>
            <h1 className="text-4xl font-bold text-white mb-6">Creative Technologist + <br/> Indie AI Toolmaker</h1>
            <div className="prose prose-invert prose-lg text-gray-400">
               <p>
                 Hi, I'm the human behind the machine. I spend my days exploring the intersection of design, code, and artificial intelligence.
               </p>
               <p>
                 My philosophy is simple: <strong>Build to learn, ship to serve.</strong> (以构建来学习，以交付来服务).
               </p>
               <p>
                 I believe that AI isn't just about massive models; it's about the small, delightful utilities that make our daily digital lives 1% better.
               </p>
            </div>
          </section>

          {/* Timeline (Simplified) */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Timeline</h2>
            <div className="border-l border-white/10 pl-8 space-y-8 relative">
              <div className="relative">
                <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-neon-cyan border-4 border-tech-900"></span>
                <h3 className="text-white font-bold">Launched AI Playlab</h3>
                <span className="text-xs text-gray-500 font-mono">2023 - Present</span>
                <p className="text-gray-400 text-sm mt-2">Started shipping independent tools.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-gray-700 border-4 border-tech-900"></span>
                <h3 className="text-white font-bold">Product Engineer @ Tech Corp</h3>
                <span className="text-xs text-gray-500 font-mono">2020 - 2023</span>
                <p className="text-gray-400 text-sm mt-2">Building high-scale SaaS products.</p>
              </div>
            </div>
          </section>

          {/* Blog Snippet */}
          <section>
             <h2 className="text-2xl font-bold text-white mb-6">Recent Notes</h2>
             <div className="space-y-6">
               {BLOG_POSTS.map(post => (
                 <div key={post.id} className="group cursor-pointer">
                   <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-medium text-gray-200 group-hover:text-neon-cyan transition-colors">{post.title}</h3>
                      <span className="text-xs text-gray-600 font-mono">{post.date}</span>
                   </div>
                   <div className="flex gap-2">
                     <span className="text-xs text-gray-500 bg-white/5 px-2 rounded">{post.tag}</span>
                     <span className="text-xs text-gray-600">{post.readTime}</span>
                   </div>
                 </div>
               ))}
             </div>
          </section>

        </div>

        {/* Sidebar */}
        <div className="md:col-span-1 space-y-8">
           <div className="glass-card p-6 rounded-xl">
             <h3 className="text-white font-bold mb-4">Let's Connect</h3>
             <ul className="space-y-3">
               <li><a href="#" className="flex items-center justify-between text-gray-400 hover:text-white text-sm">Twitter / X <ArrowUpRight size={14}/></a></li>
               <li><a href="#" className="flex items-center justify-between text-gray-400 hover:text-white text-sm">LinkedIn <ArrowUpRight size={14}/></a></li>
               <li><a href="#" className="flex items-center justify-between text-gray-400 hover:text-white text-sm">GitHub <ArrowUpRight size={14}/></a></li>
             </ul>
           </div>

           <div className="bg-gradient-to-br from-neon-purple/20 to-tech-900 p-6 rounded-xl border border-neon-purple/20">
             <h3 className="text-white font-bold mb-2">Collaboration</h3>
             <p className="text-sm text-gray-400 mb-4">Available for contract work on AI prototypes and MVPs.</p>
             <button className="w-full bg-neon-purple text-white text-sm font-bold py-2 rounded hover:bg-violet-600 transition-colors">
               Contact Me
             </button>
           </div>
        </div>
      </div>

    </div>
  );
};

export default About;