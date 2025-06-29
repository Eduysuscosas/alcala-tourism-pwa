import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 bg-cover bg-center flex items-center justify-center" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/about-header.jpg")' 
      }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">Acerca de</h1>
          <p className="text-xl">Información sobre Alcalá de Guadaíra y esta aplicación</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* About the City */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre Alcalá de Guadaíra</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Alcalá de Guadaíra es una ciudad española situada en la provincia de Sevilla, 
                en la comunidad autónoma de Andalucía. Con una población de más de 75.000 habitantes, 
                es una de las principales ciudades del área metropolitana de Sevilla.
              </p>
              <p className="text-gray-600 mb-4">
                Conocida históricamente como "Alcalá de los Panaderos" por su tradición en la 
                elaboración del pan que abastecía a Sevilla, la ciudad posee un rico patrimonio 
                histórico y natural, destacando su impresionante castillo medieval, el río Guadaíra y sus riberas.
              </p>
              <p className="text-gray-600">
                Su ubicación estratégica, a solo 16 kilómetros de Sevilla, la convierte en un 
                destino ideal tanto para turistas como para visitantes de día que desean explorar la 
                cultura, gastronomía y belleza natural andaluza fuera del circuito turístico más masificado.
              </p>
            </div>
            <div>
              <img 
                src="/assets/images/alcala-aerial.jpg" 
                alt="Vista panorámica de Alcalá de Guadaíra" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Datos de interés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Ubicación</h3>
              <p className="text-gray-600 text-sm">
                16 km de Sevilla<br />
                Andalucía, España
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Población</h3>
              <p className="text-gray-600 text-sm">
                Más de 75.000<br />
                habitantes
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Extensión</h3>
              <p className="text-gray-600 text-sm">
                285 km²<br />
                de superficie
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Festividad local</h3>
              <p className="text-gray-600 text-sm">
                20 de septiembre<br />
                San Mateo
              </p>
            </div>
          </div>
        </section>

        {/* Events Calendar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Calendario de eventos</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Mes</th>
                    <th className="py-3 px-4 text-left">Evento</th>
                    <th className="py-3 px-4 text-left">Descripción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 font-medium">Enero</td>
                    <td className="py-3 px-4">Cabalgata de Reyes</td>
                    <td className="py-3 px-4 text-gray-600">Tradicional desfile de los Reyes Magos por las calles de la ciudad.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 font-medium">Febrero/Marzo</td>
                    <td className="py-3 px-4">Carnaval de Alcalá</td>
                    <td className="py-3 px-4 text-gray-600">Concursos de chirigotas, comparsas y cabalgata carnavalesca.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Abril</td>
                    <td className="py-3 px-4">Semana Santa</td>
                    <td className="py-3 px-4 text-gray-600">Procesiones y actos religiosos de gran tradición.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 font-medium">Mayo</td>
                    <td className="py-3 px-4">Romería de San Mateo</td>
                    <td className="py-3 px-4 text-gray-600">Peregrinación al santuario del patrón de la ciudad.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Junio</td>
                    <td className="py-3 px-4">Corpus Christi</td>
                    <td className="py-3 px-4 text-gray-600">Procesión y calles decoradas con altares.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 font-medium">Julio/Agosto</td>
                    <td className="py-3 px-4">Festival del Castillo</td>
                    <td className="py-3 px-4 text-gray-600">Conciertos, teatro y espectáculos en el recinto del castillo.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Septiembre</td>
                    <td className="py-3 px-4">Feria de San Mateo</td>
                    <td className="py-3 px-4 text-gray-600">Feria principal con casetas, atracciones y eventos taurinos.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 font-medium">Diciembre</td>
                    <td className="py-3 px-4">Mercado Navideño</td>
                    <td className="py-3 px-4 text-gray-600">Puestos artesanales y actividades festivas en la Plaza del Duque.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* About the App */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre esta aplicación</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">¿Qué es una PWA?</h3>
              <p className="text-gray-600">
                Esta aplicación es una Progressive Web App (PWA), lo que significa que combina lo mejor 
                de la web y de las aplicaciones móviles. Puedes instalarla en tu dispositivo desde el 
                navegador y usarla incluso sin conexión a internet.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Características</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Diseño responsivo que se adapta a dispositivos móviles y de escritorio</li>
                <li>Funciona offline para que puedas consultar información sin conexión</li>
                <li>Instalable en tu dispositivo como una aplicación nativa</li>
                <li>Mapa interactivo con puntos de interés</li>
                <li>Galería de imágenes de los lugares más emblemáticos</li>
                <li>Información actualizada sobre eventos y actividades</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Cómo instalarla</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">En Android</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1">
                    <li>Abre la app en Chrome</li>
                    <li>Pulsa el botón "Añadir a pantalla de inicio"</li>
                    <li>Sigue las instrucciones en pantalla</li>
                  </ol>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">En iOS</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1">
                    <li>Abre la app en Safari</li>
                    <li>Pulsa el icono de compartir</li>
                    <li>Selecciona "Añadir a la pantalla de inicio"</li>
                  </ol>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">En PC/Mac</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1">
                    <li>Abre la app en Chrome/Edge</li>
                    <li>Haz clic en el icono de instalación en la barra de direcciones</li>
                    <li>Confirma la instalación</li>
                  </ol>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Contacto y sugerencias</h3>
              <p className="text-gray-600 mb-4">
                Esta aplicación ha sido desarrollada para mejorar la experiencia turística de los 
                visitantes de Alcalá de Guadaíra. Si tienes sugerencias, comentarios o has detectado 
                algún error, nos encantaría conocer tu opinión.
              </p>
              <a 
                href="mailto:app@turismo-alcaladeguadaira.com"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enviar comentarios
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;