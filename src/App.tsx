import React from 'react';
import { BookOpen, Phone, Mail, MapPin, GraduationCap, Users, Heart, Star, Trophy, Calendar, CheckCircle, Globe2, BrainCircuit, Sparkles, Notebook as Robot } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/212784647778"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.4 3.6C18.2 1.4 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.4-6.2-3.6-8.4zM12 22c-1.8 0-3.5-.5-5.1-1.4l-.4-.2-3.9 1 1-3.8-.2-.4C2.5 15.5 2 13.8 2 12 2 6.5 6.5 2 12 2c2.6 0 5.1 1 6.9 2.9C20.9 6.9 22 9.3 22 12c0 5.5-4.5 10-10 10zm5.5-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.2-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.9-2.8-1.6-4-3.6-.3-.5.3-.5.9-1.7.1-.2 0-.4-.1-.6-.1-.2-.7-1.6-1-2.2-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.2-.2-.3-.5-.4z"/>
        </svg>
      </a>

     
{/* Hero Section */}
<div
  className="relative h-[700px] bg-cover bg-center"
  style={{
    backgroundImage: 'url("/IMG_9589.jpg")',
    backgroundPosition: 'center bottom' //
  }}
>


  {/* Color Overlay + Content */}
  <div className="absolute inset-0 bg-navy-900 bg-opacity-60">
    <div className="container mx-auto px-4 h-full flex items-center justify-center text-center">
      <div className="text-white max-w-4xl relative flex flex-col items-center">

      {/* White Circle with Larger Logo, Slightly Lowered */}
      <div className="bg-white rounded-full h-40 w-40 overflow-hidden shadow-lg flex items-center justify-center mb-6">
          <img
            src="/logos.jpg"
            alt="Logo"
            className="h-50 w-50 object-contain translate-y-6"
          />
        </div>

        {/* Hero Text */}
        <h1 className="text-6xl font-bold mb-6 animate-pulse shadow-neon">Groupe Scolaire Badry</h1>
        <p className="text-2xl mb-6">Excellence académique à Casablanca depuis plus de 20 ans</p>
        <p className="text-xl mb-8 opacity-90">Programme trilingue • Excellence académique • Développement personnel</p>
        <div className="space-x-4">
          <button className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
            Inscriptions Ouvertes 2025-2026
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-navy-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
            Découvrir Notre École
          </button>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* Programme Trilingue Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-navy-900">Programme Trilingue d'Excellence</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Une formation complète pour un avenir international</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <Globe2 className="w-16 h-16 mx-auto mb-6 text-navy-600" />
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">Arabe</h3>
              <p className="text-gray-600">Maîtrise parfaite de la langue maternelle et de la culture nationale</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <BrainCircuit className="w-16 h-16 mx-auto mb-6 text-navy-600" />
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">Français</h3>
              <p className="text-gray-600">Programme français renforcé avec des enseignants natifs</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <Sparkles className="w-16 h-16 mx-auto mb-6 text-navy-600" />
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">Anglais</h3>
              <p className="text-gray-600">Enseignement approfondi de l'anglais dès le plus jeune âge</p>
            </div>
          </div>
        </div>
      </div>

      {/* Nos Niveaux Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy-900">Nos Niveaux</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-purple-100">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">MATERNELLE</h3>
              <p className="text-gray-700">Éveil et développement des compétences fondamentales</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-blue-100">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">PRIMAIRE</h3>
              <p className="text-gray-700 mb-6">Formation académique solide et épanouissement personnel</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">MATHS ET SVT EN FRANÇAIS</p>
                  <img src="https://flagcdn.com/w20/fr.png" alt="Drapeau français" className="h-4" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">MATHS ET SVT EN ANGLAIS</p>
                  <img src="https://flagcdn.com/w20/gb.png" alt="Drapeau britannique" className="h-4" />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-indigo-100">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">COLLÈGE</h3>
              <p className="text-gray-700 mb-6">Excellence académique et préparation pour le lycée</p>
              <div className="font-semibold text-navy-900">FILIÈRE BAC INTERNATIONAL</div>
            </div>
          </div>
        </div>
      </div>

      {/* Nos Atouts Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-navy-900">Nos Atouts</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Une éducation d'excellence pour votre enfant</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Élèves en classe" 
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Trophy className="w-8 h-8 text-navy-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Corps enseignant de haut niveau</h3>
                  <p className="text-gray-600">Professeurs expérimentés et qualifiés</p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="w-8 h-8 text-navy-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Environnement convivial</h3>
                  <p className="text-gray-600">Cadre d'apprentissage stimulant et bienveillant</p>
                </div>
              </div>
              <div className="flex items-start">
                <Star className="w-8 h-8 text-navy-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Activités parascolaires</h3>
                  <p className="text-gray-600">Large choix d'activités pour un développement complet</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-8 h-8 text-navy-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Suivi individualisé</h3>
                  <p className="text-gray-600">Accompagnement personnalisé pour chaque élève</p>
                </div>
              </div>
              <div className="flex items-start">
                <Robot className="w-8 h-8 text-navy-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cours d'IA et Robotique</h3>
                  <p className="text-gray-600">Initiation aux technologies du futur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* Contact Section */}
<section id="contact" className="bg-navy-900 py-16 px-4">
  <div className="container mx-auto max-w-3xl text-white">
    <h2 className="text-4xl font-bold mb-10 text-center">Formulaire d'inscription</h2>
    <form action="https://formspree.io/f/xzzryzob" method="POST" className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="prenom" className="block mb-2 text-lg">Prénom du parent ou tuteur légal</label>
          <input type="text" id="prenom" name="prenom" required className="w-full p-3 rounded-lg text-navy-900" />
        </div>
        <div>
          <label htmlFor="nom" className="block mb-2 text-lg">Nom du parent ou tuteur légal</label>
          <input type="text" id="nom" name="nom" required className="w-full p-3 rounded-lg text-navy-900" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-lg">Adresse e-mail (facultatif)</label>
        <input type="email" id="email" name="email" className="w-full p-3 rounded-lg text-navy-900" />
      </div>

      <div>
        <label htmlFor="telephone" className="block mb-2 text-lg">Numéro de téléphone du parent ou tuteur</label>
        <input type="tel" id="telephone" name="telephone" required className="w-full p-3 rounded-lg text-navy-900" />
      </div>

      <div>
        <label htmlFor="nombre_enfants" className="block mb-2 text-lg">Nombre d'enfants à inscrire</label>
        <input type="number" id="nombre_enfants" name="nombre_enfants" min="1" required className="w-full p-3 rounded-lg text-navy-900" />
      </div>

      <div>
        <label htmlFor="niveau" className="block mb-2 text-lg">Niveau souhaité</label>
        <select id="niveau" name="niveau" required className="w-full p-3 rounded-lg text-navy-900">
          <option value="">-- Choisissez un niveau --</option>
          <option value="Cp">Cp</option>
          <option value="Ce1">Ce1</option>
          <option value="Ce2">Ce2</option>
          <option value="Cm1">Cm1</option>
          <option value="Cm2">Cm2</option>
          <option value="1AC">1AC</option>
          <option value="2AC">2AC</option>
          <option value="3AC">3AC</option>
        </select>
      </div>

      <div>
        <label htmlFor="info" className="block mb-2 text-lg">Informations supplémentaires (facultatif)</label>
        <textarea id="info" name="info" rows="4" className="w-full p-3 rounded-lg text-navy-900" placeholder="Ajoutez des détails si nécessaire..."></textarea>
      </div>

      <div className="text-center">
        <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all">
          Envoyer la demande
        </button>
      </div>

    </form>
  </div>
</section>



      {/* Map Section */}
<section id="map" className="relative bg-white py-12">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6 text-navy-900">Notre Emplacement</h2>
    <p className="mb-6 text-lg text-gray-600">132, Nassim Islane, Casablanca, Maroc</p>
    <div className="w-full h-[450px] border-4 border-navy-600 rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Groupe Scolaire Badry Map"
        src="https://www.google.com/maps?q=G88J%2BHX%20Casablanca&output=embed"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>


      {/* Photos Gallery */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy-900">Notre École en Images</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img 
              src="IMG_9422.jpg" 
              alt="Activités scolaires" 
              className="rounded-lg shadow-lg hover:shadow-xl transition-all"
            />
            <img 
              src="IMG_9585.jpg" 
              alt="Apprentissage actif" 
              className="rounded-lg shadow-lg hover:shadow-xl transition-all"
            />
            <img 
              src="IMG_9588.jpg" 
              alt="Sports et loisirs" 
              className="rounded-lg shadow-lg hover:shadow-xl transition-all"
            />
          </div>
          <p className="text-3xl font-serif text-center mt-16 text-navy-900 italic">"Chaque avenir commence par une base solide"</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-800 p-6 rounded-lg flex items-center">
              <MapPin className="w-8 h-8 mr-4 text-navy-300" />
              <div>
                <h3 className="font-semibold text-navy-300">Adresse</h3>
                <p>132, Nassim Islane<br />Casablanca, Maroc</p>
              </div>
            </div>
            <div className="bg-navy-800 p-6 rounded-lg flex items-center">
              <Phone className="w-8 h-8 mr-4 text-navy-300" />
              <div>
                <h3 className="font-semibold text-navy-300">Téléphone</h3>
                <p>05 22 90 45 95</p>
              </div>
            </div>
            <div className="bg-navy-800 p-6 rounded-lg flex items-center">
              <Mail className="w-8 h-8 mr-4 text-navy-300" />
              <div>
                <h3 className="font-semibold text-navy-300">Email</h3>
                <p>contact@groupescolairebadry.ma</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">À Propos</h3>
              <p className="text-gray-300">Groupe Scolaire Badry, votre partenaire de confiance pour l'éducation de vos enfants à Casablanca.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Niveaux</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Maternelle</li>
                <li>Primaire</li>
                <li>Collège</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Rapide</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Tél: 05 22 90 45 95</li>
                <li>WhatsApp: +212 784 647 778</li>
                <li>132, Nassim Islane</li>
                <li>Casablanca, Maroc</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-navy-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Groupe Scolaire Badry. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;