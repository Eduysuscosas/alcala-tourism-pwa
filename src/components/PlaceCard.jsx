import React from 'react';

const PlaceCard = ({ 
  title, 
  description, 
  image, 
  address,
  schedule,
  category,
  onClick
}) => {
  return (
    <div 
      className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          src={image} 
          alt={title} 
          loading="lazy"
        />
        {category && (
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        
        {address && (
          <div className="flex items-center text-gray-500 text-sm mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{address}</span>
          </div>
        )}
        
        {schedule && (
          <div className="flex items-center text-gray-500 text-sm mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{schedule}</span>
          </div>
        )}
      </div>
      <div className="px-4 pb-4">
        <button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-300 font-medium"
        >
          Más información
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;