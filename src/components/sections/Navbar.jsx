import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Users, Mail, Briefcase } from "lucide-react"; // Icons

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10 shadow-lg transition-all duration-500 ease-in-out"
      style={{ backgroundColor: 'var(--color-gray-900)' }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="font-mono text-xl font-bold text-white transition-transform duration-300 hover:scale-105"
          >
            LANESRA<span className="text-red-500">.TEAM</span>
          </Link>

          {/* Hamburger */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                <Home size={18} /> Home
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                <Users size={18} /> About Us
              </Link>
              <Link
                to="/projects"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                <Briefcase size={18} /> Projects
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                <Mail size={18} /> Contact
              </Link>
            </div>

                    </div>
                  </div>
                </nav>
              );
            };
