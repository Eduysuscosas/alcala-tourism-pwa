import React from 'react';

const History = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 bg-cover bg-center flex items-center justify-center" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/images/history-header.jpg")' 
      }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">Historia</h1>
          <p className="text-xl">Descubre el rico pasado de Alcalá de Guadaíra</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Línea del tiempo</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* Timeline items */}
            <div className="relative z-10">
              {/* Item 1 */}
              <div className="mb-16">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="sm:w-1/2 mb-6 sm:mb-0 sm:pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Época Prehistórica</h3>
                      <p className="text-gray-600">
                        Los primeros asentamientos en la zona datan del Paleolítico. Se han encontrado 
                        numerosos restos arqueológicos que confirman la presencia humana desde tiempos remotos,
                        especialmente en las zonas cercanas al río Guadaíra.
                      </p>
                    </div>
                  </div>
                  <div className="sm:w-1/2 sm:pl-8 flex justify-center sm:justify-start">
                    <img 
                      src="/assets/images/prehistoric-alcala.jpg" 
                      alt="Restos prehistóricos" 
                      className="h-40 w-56 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="mb-16">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="sm:w-1/2 order-2 mb-6 sm:mb-0 sm:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Época Romana (siglo I a.C. - V d.C.)</h3>
                      <p className="text-gray-600">
                        Durante la dominación romana, la zona adquirió gran importancia estratégica. Se estableció un 
                        asentamiento conocido como Hienipa. Se han encontrado restos de calzadas romanas, villae y otros 
                        elementos que muestran la importancia de este enclave.
                      </p>
                    </div>
                  </div>
                  <div className="sm:w-1/2 order-1 sm:pr-8 flex justify-center sm:justify-end">
                    <img 
                      src="/assets/images/roman-alcala.jpg" 
                      alt="Restos romanos" 
                      className="h-40 w-56 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="mb-16">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="sm:w-1/2 mb-6 sm:mb-0 sm:pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Época Islámica (siglo VIII - XIII)</h3>
                      <p className="text-gray-600">
                        Durante la dominación musulmana, Alcalá (cuyo nombre deriva del árabe Al-Qalat, que significa 
                        "el castillo") se convirtió en una importante fortaleza defensiva. El castillo y las murallas 
                        que aún perduran datan de esta época. Fue un enclave estratégico para la defensa de Sevilla.
                      </p>
                    </div>
                  </div>
                  <div className="sm:w-1/2 sm:pl-8 flex justify-center sm:justify-start">
                    <img 
                      src="/assets/images/islamic-alcala.jpg" 
                      alt="Castillo árabe" 
                      className="h-40 w-56 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="mb-16">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="sm:w-1/2 order-2 mb-6 sm:mb-0 sm:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Reconquista Cristiana (1246)</h3>
                      <p className="text-gray-600">
                        En 1246, Fernando III el Santo conquistó Alcalá. Desde entonces, la ciudad pasó a 
                        formar parte de la Corona de Castilla. Se inició un periodo de construcción de iglesias 
                        y edificios cristianos que transformaron la fisonomía de la ciudad.
                      </p>
                    </div>
                  </div>
                  <div className="sm:w-1/2 order-1 sm:pr-8 flex justify-center sm:justify-end">
                    <img 
                      src="/assets/images/reconquest-alcala.jpg" 
                      alt="Reconquista" 
                      className="h-40 w-56 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                </div>
              </div>

              {/* Item 5 */}
              <div>
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="sm:w-1/2 mb-6 sm:mb-0 sm:pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Era Moderna y Contemporánea</h3>
                      <p className="text-gray-600">
                        Durante los siglos XVIII y XIX, Alcalá de Guadaíra se convirtió en un importante centro 
                        productor de pan para Sevilla, ganándose el sobrenombre de "Alcalá de los Panaderos". 
                        La industria harinera y los molinos del Guadaíra fueron el motor económico de la ciudad.
                        En el siglo XX, la ciudad experimentó un gran crecimiento demográfico y económico, pasando a 
                        formar parte del área metropolitana de Sevilla.
                      </p>
                    </div>
                  </div>
                  <div className="sm:w-1/2 sm:pl-8 flex justify-center sm:justify-start">
                    <img 
                      src="/assets/images/modern-alcala.jpg" 
                      alt="Alcalá moderna" 
                      className="h-40 w-56 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Monuments */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Monumentos históricos destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monument 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/assets/images/castle-detail.jpg" 
                alt="Castillo de Alcalá" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Castillo de Alcalá</h3>
                <p className="text-gray-600 mb-4">
                  Fortaleza de origen almohade (siglo XII-XIII) que domina la ciudad desde lo alto. Desde sus torres 
                  se puede contemplar una impresionante vista del valle del Guadaíra y de la campiña sevillana. 
                  Fue declarado Monumento Histórico-Artístico en 1924.
                </p>
              </div>
            </div>

            {/* Monument 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/assets/images/church-st-miguel.jpg" 
                alt="Iglesia de San Miguel" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Iglesia de San Miguel</h3>
                <p className="text-gray-600 mb-4">
                  Templo gótico-mudéjar del siglo XIII-XIV, es una de las construcciones más antiguas de la ciudad. 
                  Destaca su torre campanario y su retablo mayor, obra de Juan de Oviedo. Ha sido testigo de la 
                  historia de la ciudad desde la Reconquista.
                </p>
              </div>
            </div>

            {/* Monument 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/assets/images/mills.jpg" 
                alt="Molinos harineros" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Molinos harineros</h3>
                <p className="text-gray-600 mb-4">
                  Conjunto de molinos hidráulicos que datan de los siglos XV al XIX, situados a lo largo del río 
                  Guadaíra. Fueron fundamentales para la industria panadera que dio fama a la ciudad. Hoy se conservan 
                  unos veinte molinos, algunos restaurados y visitables.
                </p>
              </div>
            </div>

            {/* Monument 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/assets/images/puente-dragon.jpg" 
                alt="Puente del Dragón" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Puente del Dragón</h3>
                <p className="text-gray-600 mb-4">
                  Aunque es una construcción contemporánea (1992), este puente diseñado por Santiago Calatrava 
                  se ha convertido en un símbolo moderno de la ciudad. Representa la conexión de Alcalá con su 
                  pasado y su proyección hacia el futuro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Historical Figures */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Personajes históricos</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Person 1 */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <img 
                  src="/assets/images/murillos-alcala.jpg"
                  alt="Murillo y Alcalá" 
                  className="w-32 h-32 object-cover rounded-full shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Bartolomé Esteban Murillo</h3>
                  <p className="text-gray-600 text-sm mb-2">Pintor (1617-1682)</p>
                  <p className="text-gray-600">
                    Aunque no nació en Alcalá, el famoso pintor barroco sevillano tuvo una estrecha relación con la ciudad, 
                    que representó en varios de sus lienzos. La belleza de sus paisajes fue fuente de inspiración para 
                    muchas de sus obras.
                  </p>
                </div>
              </div>

              {/* Person 2 */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <img 
                  src="/assets/images/historian-alcala.jpg" 
                  alt="Leandro José de Flores" 
                  className="w-32 h-32 object-cover rounded-full shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Leandro José de Flores</h3>
                  <p className="text-gray-600 text-sm mb-2">Historiador (1766-1829)</p>
                  <p className="text-gray-600">
                    Nacido en Alcalá, fue el autor de "Memorias históricas de la villa de Alcalá de Guadaíra", 
                    obra fundamental para conocer la historia de la ciudad. Su labor investigadora permitió preservar 
                    importantes datos históricos para las generaciones futuras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;