import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mapPoints, setMapPoints] = useState([]);
  
  // Fix for default marker icon in Leaflet with React
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
    
    // Simulate loading data
    import('../data/touristData').then(({ mapLocations }) => {
      setMapPoints(mapLocations);
      setIsLoading(false);
    });
  }, []);
  
  // Filter map points by category
  const filteredPoints = selectedCategory === 'all' 
    ? mapPoints 
    : mapPoints.filter(point => point.category === selectedCategory);
  
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'historical', name: 'Monumentos históricos' },
    { id: 'natural', name: 'Espacios naturales' },
    { id: 'cultural', name: 'Cultura y ocio' },
    { id: 'services', name: 'Servicios turísticos' }
  ];

  // Alcalá de Guadaíra coordinates
  const position = [37.3382, -5.8449];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 bg-cover bg-center flex items-center justify-center" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/map-header.jpg")' 
      }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">Mapa turístico</h1>
          <p className="text-xl">Localiza los puntos de interés en Alcalá de Guadaíra</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category filters */}
        <div className="mb-6">
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
        
        {/* Map Container */}
        {isLoading ? (
          <div className="flex justify-center items-center h-[70vh] bg-white rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[70vh]">
              <MapContainer 
                center={position} 
                zoom={14} 
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredPoints.map((point, index) => (
                  <Marker key={index} position={[point.lat, point.lng]}>
                    <Popup>
                      <div className="max-w-xs">
                        <h3 className="font-bold text-lg">{point.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{point.description}</p>
                        {point.address && (
                          <p className="text-xs text-gray-500 mt-2">{point.address}</p>
                        )}
                        {point.image && (
                          <img 
                            src={point.image} 
                            alt={point.name}
                            className="mt-2 rounded w-full h-24 object-cover" 
                          />
                        )}
                        {point.website && (
                          <a 
                            href={point.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 block text-sm text-blue-600 hover:underline"
                          >
                            Más información
                          </a>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        )}
      </div>

      {/* Map Legend */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Información útil</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Transporte público</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Autobuses M-122, M-123 desde Sevilla</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Estación de autobuses en Plaza del Duque</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Servicios de taxi locales: 954 100 000</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Servicios turísticos</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Oficina de Turismo: Plaza del Duque</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Alquiler de bicicletas en Parque de Oromana</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Visitas guiadas: Reservas 955 621 677</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Emergencias</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Emergencias: 112</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Centro de salud: Calle Santander, 1</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Policía local: 954 979 000</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <a 
              href="/assets/documents/mapa_turistico_alcala.pdf"
              download
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar mapa turístico en PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;