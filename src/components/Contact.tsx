import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "elishamatoh@gmail.com",
      link: "mailto:elishamatoh@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "+237 6 71 40 26 02",
      link: "tel:+237671402602",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      value: "Cameroun, Dschang",
      link: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com/elishatchoffo", 
      label: "GitHub",
      color: "hover:bg-gray-800 dark:hover:bg-gray-600"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://www.linkedin.com/in/elisha-matoh-b84b1b342", 
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    // { 
    //   icon: <Twitter className="w-5 h-5" />, 
    //   href: "https://www.linkedin.com/in/elisha-matoh-b84b1b342/", 
    //   label: "Twitter",
    //   color: "hover:bg-blue-400"
    // },
    // { 
    //   icon: <MessageCircle className="w-5 h-5" />, 
    //   href: "#", 
    //   label: "Discord",
    //   color: "hover:bg-indigo-600"
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Contactez-moi
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Vous avez un projet en tête ? Discutons de la façon dont nous pouvons collaborer !
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                Restons en contact
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="group flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${info.color} text-white rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 dark:text-white text-lg">{info.title}</div>
                      <div className="text-gray-600 dark:text-gray-300">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-white mb-6 text-xl">Suivez-moi</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`group flex items-center justify-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-105 text-gray-600 dark:text-gray-300 hover:text-white border border-gray-200 dark:border-gray-600 ${social.color}`}
                      title={social.label}
                    >
                      {social.icon}
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="animate-fade-in-right">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Envoyez-moi un message
                </h3>
                
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl text-green-800 dark:text-green-300 animate-fade-in-up">
                    ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Décrivez votre projet ou votre demande..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer le message
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;