import React from 'react';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 60 },
        { name: "HTML", level: 60 },
        { name: "CSS", level: 50 },
        { name: "JavaScript", level: 60 },
        
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "php", level: 90 },
        { name: "xampp", level: 85 },
        
      ]
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Photoshop", level: 50 },

      ]
    },
    {
      title: "DevOps & Outils",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 60 },
       
      ]
    }
  ];

  const achievements = [
    {
      icon: <Globe className="w-8 h-8" />,
      number: "50+",
      label: "Projets réalisés",
      color: "from-blue-500 to-blue-600"
    },
    // {
    //   icon: <Code className="w-8 h-8" />,
    //   number: "1+",
    //   label: "Années d'expérience",
    //   color: "from-purple-500 to-purple-600"
    // },
    {
      icon: <Smartphone className="w-8 h-8" />,
      number: "100%",
      label: "Satisfaction client",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "24/7",
      label: "Support disponible",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="competences" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Mes Compétences
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies et outils que j'utilise pour créer des expériences exceptionnelles
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Achievements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;