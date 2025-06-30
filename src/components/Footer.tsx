import React from 'react';
import { Heart, ArrowUp, Code, Coffee } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                MATOH TCHOFFO ELISHA
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Développeur Front-end passionné par la création d'expériences numériques exceptionnelles. 
                Toujours prêt à relever de nouveaux défis et à apprendre de nouvelles technologies.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <Code size={16} />
                <span>Fait avec</span>
                <Heart size={16} className="text-red-500" fill="currentColor" />
                <span>et beaucoup de</span>
                <Coffee size={16} />
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-bold mb-6">Navigation rapide</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium hover:translate-x-2 transform transition-transform"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <strong className="text-white">Email:</strong>
                  <br />
                  <a href="mailto:elishamatoh@gmail.com" className="hover:text-blue-400 transition-colors">
                   elishamatoh@gmail.com
                  </a>
                </div>
                <div>
                  <strong className="text-white">Téléphone:</strong>
                  <br />
                  <a href="tel:+671402602" className="hover:text-blue-400 transition-colors">
                    +237 6 71 40 26 02
                  </a>
                </div>
                <div>
                  <strong className="text-white">Localisation:</strong>
                  <br />
                  Cameroun, Dschang
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="text-gray-400 mb-4 md:mb-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <span>© {currentYear} MATOH TCHOFFO ELISHA. Tous droits réservés.</span>
              </div>

              {/* Tech Stack */}
              <div className="text-gray-400 text-sm mb-4 md:mb-0 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                Développé avec React, TypeScript & Tailwind CSS
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 animate-fade-in-up"
                style={{ animationDelay: '800ms' }}
              >
                <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
                Retour en haut
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;