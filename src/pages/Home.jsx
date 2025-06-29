import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlaceCard from '../components/PlaceCard';
import { featuredPlaces } from '../data/touristData';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/images/alcala-castle.jpg")' 
      }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Descubre Alcalá de Guadaíra</h1>
          <p className="text-xl md:text-2xl mb-8">Historia, naturaleza y gastronomía en un mismo lugar</p>
          <Link 
            to="/atracciones" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 inline-block"
          >
            Explorar Atracciones
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Bienvenido a Alcalá de Guadaíra</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Situada en la provincia de Sevilla, Alcalá de Guadaíra es una ciudad rica en historia, cultura y belleza natural.
            Conocida como "Alcalá de los Panaderos" por su tradición en la elaboración del pan, nuestra ciudad ofrece
            a los visitantes una mezcla fascinante de patrimonio histórico, paisajes naturales y gastronomía tradicional.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Patrimonio Histórico</h3>
            <p className="text-gray-600">
              Descubre el impresionante castillo medieval, las iglesias históricas y los antiguos molinos harineros.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Naturaleza</h3>
            <p className="text-gray-600">
              Explora el Parque de Oromana, el río Guadaíra y los pintorescos senderos naturales de la zona.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Gastronomía</h3>
            <p className="text-gray-600">
              Deleita tu paladar con el famoso pan de Alcalá, los dulces tradicionales y la auténtica cocina andaluza.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Places Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Lugares destacados</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Estos son algunos de los lugares imprescindibles que deberías visitar durante tu estancia en Alcalá de Guadaíra.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPlaces.slice(0, 6).map((place, index) => (
                <PlaceCard 
                  key={index}
                  title={place.name}
                  description={place.shortDescription}
                  image={place.image}
                  address={place.address}
                  category={place.category}
                  onClick={() => {/* Handle click */}}
                />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link 
              to="/atracciones" 
              className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 font-semibold py-2 px-6 rounded-full transition-colors duration-300 inline-block"
            >
              Ver todas las atracciones
            </Link>
          </div>
        </div>
      </section>

      {/* Events Banner */}
      <section className="py-12 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Próximos eventos</h2>
          <p className="text-xl mb-8">
            No te pierdas nuestras festividades, ferias y eventos culturales
          </p>
          <Link 
            to="/acerca" 
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-full transition-colors duration-300 inline-block"
          >
            Ver calendario
          </Link>
        </div>
      </section>

      {/* Tourism Resources */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Planifica tu visita</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Te ofrecemos toda la información necesaria para que tu visita a Alcalá de Guadaíra sea perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Información práctica</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Oficina de Turismo en Plaza del Duque</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Horario: Lunes a Viernes de 9:00 a 14:00 y 16:00 a 19:00</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Transporte público desde Sevilla</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Alojamientos recomendados</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Restaurantes y bares locales</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Descargas útiles</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <svg className="h-8 w-8 text-blue-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Mapa turístico de Alcalá</h4>
                      <p className="text-sm text-gray-600">PDF - 2.5 MB</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <svg className="h-8 w-8 text-blue-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Guía de rutas de senderismo</h4>
                      <p className="text-sm text-gray-600">PDF - 3.1 MB</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <svg className="h-8 w-8 text-blue-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Calendario de eventos 2023</h4>
                      <p className="text-sm text-gray-600">PDF - 1.8 MB</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;