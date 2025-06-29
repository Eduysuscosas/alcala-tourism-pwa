import React, { useState, useEffect } from 'react';
import PlaceCard from '../components/PlaceCard';
import { attractions } from '../data/touristData';

const Attractions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredAttractions, setFilteredAttractions] = useState([]);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'historical', name: 'Monumentos históricos' },
    { id: 'natural', name: 'Espacios naturales' },
    { id: 'cultural', name: 'Cultura y ocio' },
    { id: 'religious', name: 'Edificios religiosos' }
  ];

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredAttractions(attractions);
    } else {
      setFilteredAttractions(attractions.filter(attraction => attraction.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative h-64 bg-cover bg-center flex items-center justify-center" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/attractions-header.jpg")' 
      }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">Atracciones turísticas</h1>
          <p className="text-xl">Descubre los lugares más emblemáticos de Alcalá de Guadaíra</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category filters */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Filtrar por categoría</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Attractions Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div>
            <p className="mb-4 text-gray-600">{filteredAttractions.length} lugares encontrados</p>
            
            {filteredAttractions.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <p className="text-gray-600">No se encontraron atracciones en esta categoría.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAttractions.map((attraction, index) => (
                  <PlaceCard
                    key={index}
                    title={attraction.name}
                    description={attraction.shortDescription}
                    image={attraction.image}
                    address={attraction.address}
                    category={attraction.categoryName}
                    schedule={attraction.schedule}
                    onClick={() => {/* Handle click */}}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Info Section */}
      <section className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Visitas guiadas</h2>
              <p className="text-gray-600 mb-6">
                Descubre Alcalá de Guadaíra de la mano de guías locales expertos. Ofrecemos diferentes rutas temáticas para que puedas conocer en profundidad nuestra ciudad y su patrimonio.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Horarios y reservas</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Martes a domingo: 10:00, 12:00 y 17:00</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Reservas: 955 621 677</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <span>visitas@turismo-alcaladeguadaira.com</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Precio: 5€ por persona (niños menores de 12 años gratis)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/assets/images/guided-tour.jpg" 
                alt="Visita guiada por Alcalá de Guadaíra" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attractions;