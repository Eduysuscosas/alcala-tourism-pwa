import React, { useState } from 'react';
import { galleryImages } from '../data/touristData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'monuments', name: 'Monumentos' },
    { id: 'nature', name: 'Naturaleza' },
    { id: 'events', name: 'Eventos' },
    { id: 'gastronomy', name: 'Gastronomía' }
  ];
  
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);
    
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Section */}
      <section className="relative h-64 bg-cover bg-center flex items-center justify-center" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/gallery-header.jpg")' 
      }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">Galería fotográfica</h1>
          <p className="text-xl">Alcalá de Guadaíra en imágenes</p>
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
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(image)}
            >
              <div className="relative pb-[75%]"> {/* 4:3 aspect ratio */}
                <img 
                  src={image.src}
                  alt={image.title}
                  className="absolute h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <h3 className="text-white text-sm font-medium">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No hay imágenes en esta categoría</p>
          </div>
        )}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-h-[80vh] max-w-full object-contain"
            />
            <div className="bg-black/70 p-4 text-white">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{selectedImage.description}</p>
            </div>
            <button 
              className="absolute top-2 right-2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Photo submission prompt */}
      <section className="py-12 px-4 bg-blue-600 text-white mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Tienes fotos de Alcalá?</h2>
          <p className="text-xl mb-8">
            Comparte tus mejores fotografías de nuestra ciudad con nosotros y podrían aparecer en esta galería
          </p>
          <a 
            href="mailto:fotos@turismo-alcaladeguadaira.com" 
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-full transition-colors duration-300 inline-block"
          >
            Enviar fotos
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;