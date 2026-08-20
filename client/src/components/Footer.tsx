import { Link } from 'wouter';
import LogoSVG from './LogoSVG';

export default function Footer() {
  return (
    <footer className="bg-onyx text-white py-16 relative overflow-hidden">
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-05 pointer-events-none bg-pattern"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16">
            <div className="mb-10 md:mb-0 md:w-1/3">
              <LogoSVG className="h-12 mb-6" inverted={true} />
              <p className="text-gray-300 mb-6 max-w-xs leading-relaxed">
                Practical AI and automation for teams that need the work to actually work.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/brightops-group" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-pumpkin flex items-center justify-center text-pumpkin hover:bg-pumpkin hover:text-white transition-all transform hover:-translate-y-1" 
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 md:w-2/3">
              <div>
                <h3 className="font-archivo font-semibold text-xl mb-4 text-white">Cool Stuff We Do</h3>
                <ul className="space-y-3">
                  <li><a href="/#services" className="text-gray-300 hover:text-pumpkin transition-colors">AI Planning</a></li>
                  <li><a href="/#services" className="text-gray-300 hover:text-pumpkin transition-colors">Automate Repetitive Work</a></li>
                  <li><a href="/#services" className="text-gray-300 hover:text-pumpkin transition-colors">Internal AI Assistants</a></li>
                  <li><a href="/#services" className="text-gray-300 hover:text-pumpkin transition-colors">Safe AI Setup</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-archivo font-semibold text-xl mb-4 text-white">Links</h3>
                <ul className="space-y-3">
                  <li><a href="/#about" className="text-gray-300 hover:text-pumpkin transition-colors">About Us</a></li>
                  <li><Link href="/tools"><span className="text-gray-300 hover:text-pumpkin transition-colors cursor-pointer">Resources</span></Link></li>
                  <li><a href="/#contact" className="text-gray-300 hover:text-pumpkin transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-archivo font-semibold text-xl mb-4 text-white">Find Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-map-marker-alt text-pumpkin mr-2"></i>
                    South Jordan, UT
                  </li>
                  <li>
                    <a href="mailto:brightopsgroup@gmail.com" className="flex items-center text-gray-300 hover:text-pumpkin transition-colors">
                      <i className="fas fa-envelope text-pumpkin mr-2"></i>
                      brightopsgroup@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BrightOps Group. All rights reserved. Built with coffee and code.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
