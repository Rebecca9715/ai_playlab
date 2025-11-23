import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Experiments from './pages/Experiments';
import Requests from './pages/Requests';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-tech-900 text-gray-200 font-sans selection:bg-neon-cyan selection:text-tech-900 bg-grid-pattern bg-[size:24px_24px]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/lab" element={<Experiments />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<About />} /> {/* Reusing About for blog demo */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;