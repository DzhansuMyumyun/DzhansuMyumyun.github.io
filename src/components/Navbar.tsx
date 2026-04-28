import React from 'react';
import GithubIcon from '../assets/github.png';
import LinkedinIcon from '../assets/linkedin.png';
const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-6 z-50 flex justify-center w-full mb-12">
      <div className="flex items-center justify-between w-full bg-white/40 backdrop-blur-md border border-white/40 px-6 py-3 rounded-2xl shadow-sm">
        
        {/* Logo / Name */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Dzhansu
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1"></div>
        </div>

        <div className="hidden md:flex items-center gap-x-12 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-emerald-600 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-emerald-600 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-emerald-600 transition-colors">Skills</a>
        </div>

        <div className="flex items-center gap-5 border-l border-slate-200 pl-5">

          <a href="https://github.com/DzhansuMyumyun" className="p-2" target="_blank" >
            <img 
              src={GithubIcon} 
              alt="GitHub" 
              className="w-5 h-5 hover:scale-110 transition-transform" 
            />
          </a>

          <a href="https://www.linkedin.com/in/dzhansumyumyun/" className="p-2" target="_blank" >
            <img 
              src={LinkedinIcon} 
              alt="Linkedin" 
              className="w-5 h-5 hover:scale-110 transition-transform" 
            />
          </a>
        

        </div>
      </div>
    </nav>
  );
};

export default Navbar;