import React from 'react';
import { Github, Twitter, Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tech-900 border-t border-white/5 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-mono mb-4 text-white">AI Playlab</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Turning small sparks into real tools with AI.
              <br />
              <span className="text-gray-500">有趣，更要有价值。</span>
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#/tools" className="hover:text-neon-cyan">Tools Marketplace</a></li>
              <li><a href="#/lab" className="hover:text-neon-cyan">Experiments Lab</a></li>
              <li><a href="#/requests" className="hover:text-neon-cyan">Requests</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
              <a href="mailto:hello@aiplaylab.com" className="text-gray-400 hover:text-white"><Mail size={20} /></a>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              &copy; {new Date().getFullYear()} AI Playlab. Indie Made.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;