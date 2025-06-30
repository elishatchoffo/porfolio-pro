import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plateforme e-commerce complète avec panier, paiements Stripe et gestion d'inventaire. Interface moderne et expérience utilisateur optimisée.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Application de gestion de tâches collaborative avec fonctionnalités temps réel, notifications push et tableau de bord analytique.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Brand Identity Design",
      description: "Création d'identité visuelle complète pour une startup tech, incluant logo, charte graphique et supports de communication.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Illustrator", "Photoshop", "Figma", "Branding"],
      category: "design",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard météorologique interactif avec prévisions, cartes interactives et alertes personnalisées. Design responsive et animations fluides.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Vue.js", "Chart.js", "API REST", "PWA"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile App UI/UX",
      description: "Design d'interface pour application mobile de fitness avec parcours utilisateur optimisé et système de gamification.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Figma", "Prototyping", "UI/UX", "Mobile"],
      category: "design",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Analytics",
      description: "Plateforme d'analyse de données avec intelligence artificielle pour prédictions business et visualisations interactives.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filters = [
    { key: 'all', label: 'Tous les projets' },
    { key: 'web', label: 'Développement Web' },
    { key: 'design', label: 'Design & UI/UX' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projets" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Mes Projets
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Découvrez une sélection de mes réalisations qui démontrent mes compétences et ma créativité
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-white/95 text-gray-800 rounded-lg text-sm font-medium hover:bg-white transition-all duration-200 hover:scale-105 shadow-lg"
                      >
                        <Eye size={16} />
                        Voir
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-white/95 text-gray-800 rounded-lg text-sm font-medium hover:bg-white transition-all duration-200 hover:scale-105 shadow-lg"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="group/btn flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex-1 justify-center relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <ExternalLink size={16} />
                        Voir le projet
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-300 hover:scale-105"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <button className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <span className="relative z-10">Voir plus de projets</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;