import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import img3 from '../assets/img3.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      Icon: Github,
      href: 'https://github.com/elishatchoffo',
      color: 'hover:text-gray-800 dark:hover:text-white',
    },
    {
      Icon: Linkedin,
      href: 'https://www.linkedin.com/in/elisha-matoh-b84b1b342',
      color: 'hover:text-blue-600',
    },
    {
      Icon: Mail,
      href: 'mailto:elishamatoh@gmail.com',
      color: 'hover:text-red-500',
    },
  ];

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#f3f4f6] via-[#e0e7ff] to-[#c7d2fe] dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[6px] border-blue-500 dark:border-blue-400 transition-transform duration-500 hover:scale-105">
            <img src={img3} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right - Info */}
        <div className="text-center md:text-left space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Bonjour, je suis <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MATOH ELISHA
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-blue-700 dark:text-blue-400 font-semibold">
            Développeur Front-end
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Passionné par la création d'expériences numériques innovantes, j’élabore des solutions élégantes
            qui transforment les idées en réalité.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {/* <button
              onClick={() => scrollToSection('#projets')}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Voir mes projets
            </button> */}

            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-full font-semibold hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105"
            >
              Me contacter
            </button>

            <a
              href="/doc2.pdf"
              download
              className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} /> CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 pt-4">
            {socialLinks.map(({ Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 dark:text-gray-400 ${color} transition-colors duration-300 hover:scale-110`}
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
