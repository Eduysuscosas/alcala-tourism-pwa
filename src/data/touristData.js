// This file contains all the tourism data for Alcalá de Guadaíra
// Including attractions, featured places, gallery images, and map locations

// Featured places on the home page
export const featuredPlaces = [
  {
    name: 'Castillo de Alcalá',
    shortDescription: 'Impresionante fortaleza medieval de origen almohade que domina la ciudad desde lo alto, ofreciendo vistas panorámicas del valle del Guadaíra.',
    image: '/assets/images/alcala-castle.jpg',
    address: 'Calle Alcalá y Orti, s/n',
    category: 'historical'
  },
  {
    name: 'Riberas del Guadaíra',
    shortDescription: 'Parque natural que sigue el curso del río Guadaíra, con senderos, áreas recreativas y antiguos molinos harineros restaurados.',
    image: '/assets/images/guadaira-river.jpg',
    address: 'Parque de Oromana',
    category: 'natural'
  },
  {
    name: 'Puente del Dragón',
    shortDescription: 'Obra emblemática del arquitecto Santiago Calatrava, se ha convertido en un símbolo moderno de la ciudad desde su construcción en 1992.',
    image: '/assets/images/dragon-bridge.jpg',
    address: 'SE-40, Alcalá de Guadaíra',
    category: 'cultural'
  },
  {
    name: 'Molino de Benarosa',
    shortDescription: 'Antiguo molino harinero restaurado que muestra la importancia histórica de la industria panadera en Alcalá de Guadaíra.',
    image: '/assets/images/benarosa-mill.jpg',
    address: 'Parque de San Francisco',
    category: 'historical'
  },
  {
    name: 'Teatro Gutiérrez de Alba',
    shortDescription: 'Principal espacio cultural de Alcalá, acoge numerosas representaciones teatrales, conciertos y eventos culturales a lo largo del año.',
    image: '/assets/images/theater.jpg',
    address: 'Calle General Prim, s/n',
    category: 'cultural'
  },
  {
    name: 'Iglesia de Santiago',
    shortDescription: 'Templo de estilo gótico-mudéjar con elementos barrocos, destaca por su impresionante torre y retablos interiores.',
    image: '/assets/images/santiago-church.jpg',
    address: 'Plaza de la Constitución',
    category: 'religious'
  }
];

// All attractions for the attractions page
export const attractions = [
  // Historical monuments
  {
    name: 'Castillo de Alcalá',
    shortDescription: 'Fortaleza medieval que domina el paisaje urbano desde su posición estratégica en la colina.',
    longDescription: 'Este castillo de origen almohade (siglos XII-XIII) fue una pieza clave en la defensa de Sevilla durante la época musulmana. Tras la Reconquista, pasó a manos cristianas y sufrió diversas ampliaciones. Actualmente, es posible visitar sus murallas, torres y el recinto interior, donde se realizan actividades culturales durante todo el año. Las vistas desde lo alto de sus torres son espectaculares.',
    image: '/assets/images/alcala-castle.jpg',
    address: 'Calle Alcalá y Orti, s/n',
    schedule: 'Martes a domingo: 10:00 - 14:00 y 16:00 - 19:00',
    category: 'historical',
    categoryName: 'Monumento histórico'
  },
  {
    name: 'Molinos Harineros',
    shortDescription: 'Conjunto de antiguos molinos hidráulicos distribuidos a lo largo del río Guadaíra, testigos de la importante industria panadera.',
    longDescription: 'Alcalá llegó a contar con más de 40 molinos harineros que abastecían de harina a Sevilla, lo que le valió el sobrenombre de "Alcalá de los Panaderos". Hoy en día se conservan unos 20 molinos, algunos de ellos restaurados y visitables como el Molino de la Aceña, el Molino del Realaje o el Molino de Benarosa. Estos molinos forman parte de un bello paisaje natural a lo largo del río.',
    image: '/assets/images/mills.jpg',
    address: 'Riberas del Guadaíra',
    schedule: 'Acceso libre al exterior. Interior según horarios de visitas guiadas',
    category: 'historical',
    categoryName: 'Monumento histórico'
  },
  {
    name: 'Recinto Amurallado',
    shortDescription: 'Restos de la antigua muralla defensiva que rodeaba la ciudad medieval conectando con el castillo.',
    longDescription: 'El recinto amurallado de Alcalá formaba parte del sistema defensivo de la ciudad en época medieval. Aunque gran parte ha desaparecido, aún se conservan importantes tramos como la Puerta de San Miguel y varios lienzos de muralla que permiten hacerse una idea de la magnitud de la fortificación original. Su recorrido ofrece unas vistas privilegiadas del entorno natural.',
    image: '/assets/images/city-walls.jpg',
    address: 'Centro histórico',
    schedule: 'Acceso libre',
    category: 'historical',
    categoryName: 'Monumento histórico'
  },

  // Religious buildings
  {
    name: 'Iglesia de Santiago',
    shortDescription: 'Templo principal de la ciudad de estilo gótico-mudéjar con una impresionante torre campanario.',
    longDescription: 'Esta iglesia, cuya construcción se inició en el siglo XIV sobre una antigua mezquita, es uno de los edificios religiosos más importantes de Alcalá. Destaca su torre campanario, visible desde muchos puntos de la ciudad, y su retablo mayor de estilo barroco. En su interior alberga diversas obras de arte sacro y es sede de importantes hermandades de Semana Santa.',
    image: '/assets/images/santiago-church.jpg',
    address: 'Plaza de la Constitución',
    schedule: 'Lunes a sábado: 10:00 - 13:00 y 18:00 - 20:00. Domingos: horario de culto',
    category: 'religious',
    categoryName: 'Edificio religioso'
  },
  {
    name: 'Iglesia de San Miguel',
    shortDescription: 'Una de las iglesias más antiguas de la ciudad, de estilo gótico-mudéjar con elementos renacentistas.',
    longDescription: 'Construida entre los siglos XIV y XVI, esta iglesia es una joya arquitectónica que combina elementos góticos, mudéjares y renacentistas. Destaca su torre, su retablo mayor obra de Juan de Oviedo, y la capilla sacramental. La iglesia ha sido testigo de importantes acontecimientos históricos de la ciudad y conserva interesantes piezas de orfebrería religiosa.',
    image: '/assets/images/church-st-miguel.jpg',
    address: 'Plaza de San Miguel',
    schedule: 'Martes a sábado: 10:30 - 13:00. Domingos: horario de culto',
    category: 'religious',
    categoryName: 'Edificio religioso'
  },
  {
    name: 'Convento de Santa Clara',
    shortDescription: 'Antiguo convento de monjas clarisas con un singular claustro mudéjar y una iglesia de gran valor artístico.',
    longDescription: 'Fundado en el siglo XVI, este convento ha sido recientemente restaurado y convertido en espacio cultural. Conserva un precioso claustro mudéjar, una iglesia con artesonado y varios elementos arquitectónicos de gran valor histórico y artístico. Actualmente acoge exposiciones temporales y actividades culturales a lo largo del año.',
    image: '/assets/images/santa-clara-convent.jpg',
    address: 'Calle Santa Clara, 2',
    schedule: 'Miércoles a domingo: 11:00 - 14:00 y 17:00 - 20:00',
    category: 'religious',
    categoryName: 'Edificio religioso'
  },

  // Natural spaces
  {
    name: 'Parque de Oromana',
    shortDescription: 'Principal espacio natural de Alcalá, con extensos jardines, áreas recreativas y miradores sobre el río Guadaíra.',
    longDescription: 'Este parque natural es el pulmón verde de Alcalá, con más de 40 hectáreas de extensión. Cuenta con numerosos senderos para hacer senderismo o ciclismo, áreas de picnic, zonas infantiles y magníficos miradores con vistas al río y al castillo. La vegetación es principalmente mediterránea, con pinos, encinas y acebuches, creando un entorno perfecto para el ocio al aire libre.',
    image: '/assets/images/oromana-park.jpg',
    address: 'Carretera de Utrera, km 1',
    schedule: 'Abierto todos los días de 8:00 a 22:00 (horario de verano ampliado)',
    category: 'natural',
    categoryName: 'Espacio natural'
  },
  {
    name: 'Riberas del Guadaíra',
    shortDescription: 'Corredor verde que sigue el curso del río Guadaíra, ideal para pasear, hacer deporte o disfrutar de la naturaleza.',
    longDescription: 'El río Guadaíra, que da nombre a la ciudad, ha sido históricamente su principal recurso natural. Hoy, sus riberas conforman un corredor verde de gran valor ecológico y paisajístico. Los senderos que lo recorren permiten disfrutar de la flora y fauna local, descubrir los antiguos molinos harineros y disfrutar de un entorno natural a escasos metros del centro urbano.',
    image: '/assets/images/guadaira-river.jpg',
    address: 'Varios accesos desde la ciudad',
    schedule: 'Acceso libre',
    category: 'natural',
    categoryName: 'Espacio natural'
  },
  {
    name: 'Parque de San Francisco',
    shortDescription: 'Parque urbano con abundante vegetación, lagos artificiales y espacios para el ocio familiar.',
    longDescription: 'Este céntrico parque es uno de los espacios verdes más queridos por los alcalareños. Cuenta con extensas zonas ajardinadas, un lago artificial con fauna acuática, áreas infantiles y espacios para el descanso. Es sede de numerosos eventos al aire libre, especialmente durante la primavera y el verano, como conciertos, ferias temáticas y actividades infantiles.',
    image: '/assets/images/san-francisco-park.jpg',
    address: 'Avenida de San Francisco, s/n',
    schedule: 'Abierto todos los días de 7:00 a 23:00',
    category: 'natural',
    categoryName: 'Espacio natural'
  },

  // Culture and leisure
  {
    name: 'Teatro Gutiérrez de Alba',
    shortDescription: 'Principal espacio escénico de la ciudad, acoge representaciones teatrales, conciertos, danza y otros eventos culturales.',
    longDescription: 'Inaugurado en 2011, este moderno teatro es el centro neurálgico de la actividad cultural de Alcalá. Con un aforo para 500 espectadores, cuenta con las últimas tecnologías en iluminación y sonido. Su programación es variada e incluye teatro, música, danza y otras artes escénicas, tanto de compañías locales como nacionales e internacionales.',
    image: '/assets/images/theater.jpg',
    address: 'Calle General Prim, s/n',
    schedule: 'Según programación. Taquilla: martes a viernes de 18:00 a 21:00',
    category: 'cultural',
    categoryName: 'Cultura y ocio'
  },
  {
    name: 'Puente del Dragón',
    shortDescription: 'Impresionante obra de ingeniería diseñada por Santiago Calatrava, se ha convertido en un símbolo de la ciudad moderna.',
    longDescription: 'Inaugurado en 1992, este puente diseñado por el famoso arquitecto e ingeniero Santiago Calatrava es una de las obras contemporáneas más emblemáticas de Alcalá. Su estructura, que simula un dragón, combina funcionalidad y estética, y se ha convertido en un hito arquitectónico y punto de referencia en la ciudad. Especialmente impresionante cuando se ilumina por la noche.',
    image: '/assets/images/dragon-bridge.jpg',
    address: 'SE-40, Alcalá de Guadaíra',
    schedule: 'Acceso libre',
    category: 'cultural',
    categoryName: 'Arquitectura moderna'
  },
  {
    name: 'Museo de la Ciudad',
    shortDescription: 'Espacio museístico que recorre la historia y tradiciones de Alcalá de Guadaíra a través de diversas colecciones.',
    longDescription: 'Ubicado en un edificio histórico rehabilitado, este museo ofrece un recorrido por la historia de Alcalá desde la prehistoria hasta la actualidad. Cuenta con salas dedicadas a la arqueología, la tradición panadera, el patrimonio industrial y las artes y tradiciones populares. También acoge exposiciones temporales sobre diversos aspectos de la cultura local y regional.',
    image: '/assets/images/city-museum.jpg',
    address: 'Plaza del Cabildo, 5',
    schedule: 'Martes a sábado: 10:00 - 14:00 y 17:00 - 20:00. Domingo: 10:00 - 14:00',
    category: 'cultural',
    categoryName: 'Museo'
  }
];

// Gallery images
export const galleryImages = [
  {
    title: 'Castillo de Alcalá al atardecer',
    src: '/assets/images/gallery/castle-sunset.jpg',
    description: 'Vista panorámica del castillo de Alcalá de Guadaíra con el sol poniéndose en el horizonte, creando un espectáculo de luces y sombras.',
    category: 'monuments'
  },
  {
    title: 'Detalle de la muralla',
    src: '/assets/images/gallery/wall-detail.jpg',
    description: 'Detalle arquitectónico de la muralla medieval que rodeaba la antigua ciudad, mostrando la técnica constructiva de la época.',
    category: 'monuments'
  },
  {
    title: 'Interior del castillo',
    src: '/assets/images/gallery/castle-interior.jpg',
    description: 'Patio de armas del castillo donde actualmente se realizan diversas actividades culturales al aire libre.',
    category: 'monuments'
  },
  {
    title: 'Torre del homenaje',
    src: '/assets/images/gallery/castle-tower.jpg',
    description: 'La imponente torre del homenaje, la estructura más alta del conjunto fortificado, desde donde se controlaba el territorio circundante.',
    category: 'monuments'
  },
  {
    title: 'Iglesia de Santiago',
    src: '/assets/images/gallery/santiago-church-facade.jpg',
    description: 'Fachada principal de la Iglesia de Santiago, con su característica torre campanario que se divisa desde muchos puntos de la ciudad.',
    category: 'monuments'
  },
  {
    title: 'Retablo de San Miguel',
    src: '/assets/images/gallery/altar-san-miguel.jpg',
    description: 'Magnífico retablo mayor de la Iglesia de San Miguel, obra renacentista de gran valor artístico.',
    category: 'monuments'
  },
  {
    title: 'Puente del Dragón iluminado',
    src: '/assets/images/gallery/dragon-bridge-night.jpg',
    description: 'Espectacular vista nocturna del Puente del Dragón con su iluminación artística que resalta sus líneas arquitectónicas.',
    category: 'monuments'
  },
  {
    title: 'Molino restaurado',
    src: '/assets/images/gallery/restored-mill.jpg',
    description: 'Uno de los molinos harineros restaurados a orillas del río Guadaíra, muestra del patrimonio industrial de la ciudad.',
    category: 'monuments'
  },
  {
    title: 'Cascada del río Guadaíra',
    src: '/assets/images/gallery/river-waterfall.jpg',
    description: 'Pequeña cascada en el curso del río Guadaíra, formando uno de los paisajes más pintorescos de las riberas.',
    category: 'nature'
  },
  {
    title: 'Sendero entre molinos',
    src: '/assets/images/gallery/mills-path.jpg',
    description: 'Pintoresco sendero que discurre entre los antiguos molinos, ideal para caminatas en plena naturaleza.',
    category: 'nature'
  },
  {
    title: 'Lago de Oromana',
    src: '/assets/images/gallery/oromana-lake.jpg',
    description: 'El tranquilo lago del Parque de Oromana, hogar de diversas especies de aves acuáticas.',
    category: 'nature'
  },
  {
    title: 'Mirador del río',
    src: '/assets/images/gallery/river-viewpoint.jpg',
    description: 'Uno de los muchos miradores desde donde se puede contemplar el curso del río Guadaíra y el paisaje circundante.',
    category: 'nature'
  },
  {
    title: 'Flora autóctona',
    src: '/assets/images/gallery/local-flora.jpg',
    description: 'Ejemplo de la vegetación mediterránea que puebla los espacios naturales de Alcalá, con encinas, acebuches y lentiscos.',
    category: 'nature'
  },
  {
    title: 'Puesta de sol en el parque',
    src: '/assets/images/gallery/park-sunset.jpg',
    description: 'Espectacular puesta de sol en el Parque de San Francisco, uno de los momentos más fotogénicos del día.',
    category: 'nature'
  },
  {
    title: 'Procesión de Semana Santa',
    src: '/assets/images/gallery/holy-week.jpg',
    description: 'Las procesiones de Semana Santa son uno de los eventos religiosos y culturales más importantes de Alcalá.',
    category: 'events'
  },
  {
    title: 'Feria de San Mateo',
    src: '/assets/images/gallery/fair.jpg',
    description: 'La Feria de San Mateo, en septiembre, es la fiesta grande de la ciudad, con casetas, atracciones y eventos taurinos.',
    category: 'events'
  },
  {
    title: 'Romería tradicional',
    src: '/assets/images/gallery/pilgrimage.jpg',
    description: 'La romería en honor al patrón San Mateo reúne a miles de alcalareños en una jornada festiva en el campo.',
    category: 'events'
  },
  {
    title: 'Concierto en el castillo',
    src: '/assets/images/gallery/castle-concert.jpg',
    description: 'Durante el verano, el castillo se convierte en escenario para conciertos y espectáculos al aire libre.',
    category: 'events'
  },
  {
    title: 'Carnaval de Alcalá',
    src: '/assets/images/gallery/carnival.jpg',
    description: 'Las comparsas y chirigotas son protagonistas del colorido carnaval alcalareño.',
    category: 'events'
  },
  {
    title: 'Mercado medieval',
    src: '/assets/images/gallery/medieval-market.jpg',
    description: 'El mercado medieval recrea cada año el ambiente de la Alcalá de antaño, con puestos de artesanía y representaciones.',
    category: 'events'
  },
  {
    title: 'Pan tradicional',
    src: '/assets/images/gallery/traditional-bread.jpg',
    description: 'El pan de Alcalá, famoso por su calidad, sigue elaborándose de manera tradicional en algunas panaderías locales.',
    category: 'gastronomy'
  },
  {
    title: 'Aceitunas aliñadas',
    src: '/assets/images/gallery/olives.jpg',
    description: 'Las aceitunas aliñadas son un aperitivo típico de la gastronomía local, con recetas que se transmiten de generación en generación.',
    category: 'gastronomy'
  },
  {
    title: 'Guiso alcalareño',
    src: '/assets/images/gallery/local-stew.jpg',
    description: 'Los guisos tradicionales forman parte esencial de la cocina de Alcalá, con recetas que aprovechan los productos de la tierra.',
    category: 'gastronomy'
  },
  {
    title: 'Dulces conventuales',
    src: '/assets/images/gallery/convent-sweets.jpg',
    description: 'Los conventos de Alcalá han mantenido viva la tradición de la repostería conventual, con dulces de gran calidad.',
    category: 'gastronomy'
  }
];

// Map locations
export const mapLocations = [
  // Historical monuments
  {
    name: 'Castillo de Alcalá',
    description: 'Fortaleza medieval de origen almohade (siglos XII-XIII) que domina la ciudad desde lo alto.',
    category: 'historical',
    lat: 37.3399,
    lng: -5.8441,
    address: 'Calle Alcalá y Orti, s/n',
    image: '/assets/images/castle-marker.jpg',
    website: 'https://www.alcaladeguadaira.es/turismo/castillo'
  },
  {
    name: 'Molino de la Aceña',
    description: 'Antiguo molino harinero restaurado que muestra la importancia de la industria panadera en la historia de Alcalá.',
    category: 'historical',
    lat: 37.3372,
    lng: -5.8462,
    address: 'Riberas del Guadaíra',
    image: '/assets/images/mill-marker.jpg'
  },
  {
    name: 'Recinto Amurallado',
    description: 'Restos de la antigua muralla medieval que rodeaba y protegía la ciudad.',
    category: 'historical',
    lat: 37.3389,
    lng: -5.8452,
    address: 'Centro histórico'
  },
  {
    name: 'Puerta de San Miguel',
    description: 'Una de las antiguas puertas de acceso a la ciudad amurallada.',
    category: 'historical',
    lat: 37.3387,
    lng: -5.8448,
    address: 'Plaza de San Miguel'
  },

  // Religious buildings
  {
    name: 'Iglesia de Santiago',
    description: 'Templo principal de la ciudad de estilo gótico-mudéjar con elementos barrocos.',
    category: 'religious',
    lat: 37.3383,
    lng: -5.8434,
    address: 'Plaza de la Constitución',
    image: '/assets/images/santiago-marker.jpg'
  },
  {
    name: 'Iglesia de San Miguel',
    description: 'Una de las iglesias más antiguas de la ciudad, de estilo gótico-mudéjar.',
    category: 'religious',
    lat: 37.3387,
    lng: -5.8446,
    address: 'Plaza de San Miguel',
    image: '/assets/images/sanmiguel-marker.jpg'
  },
  {
    name: 'Convento de Santa Clara',
    description: 'Antiguo convento con un singular claustro mudéjar, hoy reconvertido en espacio cultural.',
    category: 'religious',
    lat: 37.3378,
    lng: -5.8438,
    address: 'Calle Santa Clara, 2'
  },

  // Natural spaces
  {
    name: 'Parque de Oromana',
    description: 'Principal espacio natural de Alcalá, con extensas zonas verdes, senderos y vistas panorámicas.',
    category: 'natural',
    lat: 37.3345,
    lng: -5.8465,
    address: 'Carretera de Utrera, km 1',
    image: '/assets/images/oromana-marker.jpg'
  },
  {
    name: 'Riberas del Guadaíra',
    description: 'Corredor verde que sigue el curso del río, ideal para pasear y disfrutar de la naturaleza.',
    category: 'natural',
    lat: 37.3362,
    lng: -5.8476,
    address: 'Varios accesos desde la ciudad',
    image: '/assets/images/river-marker.jpg'
  },
  {
    name: 'Parque de San Francisco',
    description: 'Céntrico parque urbano con lagos artificiales y amplias zonas ajardinadas.',
    category: 'natural',
    lat: 37.3403,
    lng: -5.8425,
    address: 'Avenida de San Francisco, s/n'
  },

  // Culture and leisure
  {
    name: 'Teatro Gutiérrez de Alba',
    description: 'Principal espacio escénico de la ciudad, con una variada programación cultural.',
    category: 'cultural',
    lat: 37.3415,
    lng: -5.8418,
    address: 'Calle General Prim, s/n',
    image: '/assets/images/theater-marker.jpg',
    website: 'https://www.alcaladeguadaira.es/teatro'
  },
  {
    name: 'Puente del Dragón',
    description: 'Impresionante obra de ingeniería diseñada por Santiago Calatrava en 1992.',
    category: 'cultural',
    lat: 37.3425,
    lng: -5.8395,
    address: 'SE-40, Alcalá de Guadaíra',
    image: '/assets/images/bridge-marker.jpg'
  },
  {
    name: 'Museo de la Ciudad',
    description: 'Espacio museístico que recorre la historia y tradiciones de Alcalá.',
    category: 'cultural',
    lat: 37.3380,
    lng: -5.8429,
    address: 'Plaza del Cabildo, 5',
    website: 'https://www.alcaladeguadaira.es/museo'
  },

  // Tourist services
  {
    name: 'Oficina de Turismo',
    description: 'Punto de información turística con mapas, folletos y asesoramiento personalizado.',
    category: 'services',
    lat: 37.3381,
    lng: -5.8433,
    address: 'Plaza del Duque, s/n',
    phone: '955 621 677',
    schedule: 'Lunes a viernes: 9:00-14:00, 16:00-19:00. Sábados: 10:00-14:00'
  },
  {
    name: 'Alquiler de bicicletas',
    description: 'Servicio de alquiler de bicicletas para recorrer los senderos naturales.',
    category: 'services',
    lat: 37.3344,
    lng: -5.8463,
    address: 'Parque de Oromana',
    schedule: 'Todos los días: 10:00-20:00'
  },
  {
    name: 'Centro de Interpretación del Río',
    description: 'Centro informativo sobre el ecosistema fluvial y la importancia histórica del río Guadaíra.',
    category: 'services',
    lat: 37.3366,
    lng: -5.8464,
    address: 'Riberas del Guadaíra, junto al Molino del Realaje',
    schedule: 'Martes a domingo: 10:00-14:00'
  },
  {
    name: 'Plaza de España',
    description: 'Plaza principal de la ciudad, punto de encuentro y centro de la vida social.',
    category: 'services',
    lat: 37.3382,
    lng: -5.8432,
    address: 'Plaza de España'
  }
];