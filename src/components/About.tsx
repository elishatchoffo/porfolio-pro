import React from 'react';
import { Code, Coffee, Lightbulb, Users, Award, Clock, Heart } from 'lucide-react';
import img3 from '../assets/img3.jpg';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Développement",
      description: "Code propre et bonnes pratiques",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Nouvelles technologies et créativité",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Travail d'équipe efficace",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Solutions de qualité exceptionnelle",
      color: "from-red-500 to-pink-500"
    }
  ];

  const tools = [
    "React", "HTML", "CSS", "JavaScript", "php", "Bootstrap", 
  ];

  return (
    <section id="apropos" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              À propos de moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Column - Enhanced Image */}
            <div className="text-center lg:text-left animate-fade-in-left">
              <div className="inline-block p-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105">
                <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                  <img 
                    src={img3}
                    alt="About me" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Content */}
            <div className="animate-fade-in-right">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Développeur Front-end créatif
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                je me spécialise dans la création d'applications modernes et performantes. Mon approche combine 
                expertise technique et créativité pour donner vie à des idées innovantes.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                J'aime relever des défis complexes et apprendre constamment de nouvelles 
                technologies. Mon objectif est de créer des expériences utilisateur 
                exceptionnelles tout en maintenant un code de haute qualité.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projets</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
                </div>
              </div>

              {/* Download CV Button */}
              <a
                href="/doc2.pdf"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 relative overflow-hidden"
              >
                <span className="relative z-10">Télécharger mon CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>
          </div>

          {/* Enhanced Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-lg">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="text-center animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Mes outils favoris
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;