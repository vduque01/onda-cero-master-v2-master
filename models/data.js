export const podcasts= 
  [
    {
      nombre: "Estirando el chicle",
      id:0,
      url: "estirando-el-chicle",
      src: '/podcasts/0.jpg',
      autor: ["Carolina Iglesias", "Victoria Martín"],
      categoria: "Humor",
      descripcion: "Esta es la descripción de Estirando el Chicle",
      episodios: [
        {
          id: 0,
          programa: "Estirando el chicle",
          idPrograma: 0,
          nombre: "E01 MONETIZAR LAS LÁGRIMAS con ELVIRA SASTRE",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E01",
        },
        {
          id: 1,
          programa: "Estirando el chicle",
          idPrograma: 0,
          nombre: "E02 EL ÉXITO CON PAULA USERO Y CAROL ROVIRA",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E02",
        },
        {
          id: 2,
          programa: "Estirando el chicle",
          idPrograma: 0,
          nombre: "E03 CAGARSE DE MIEDO",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E03",
        },
      ],
    },
    {
      nombre: "La Pija y la Quinqui",
      id:1,
      url: "la-pija-y-la-quinqui",
      src: '/podcasts/1.jpg',
      autor: ["Carlos Peguer", "Mariang"],
      categoria: "Humor",
      descripcion: "Esta es la descripción de La Pija y la Quinqui",
      episodios: [
        {
          id: 0,
          programa: "La pija y la quinqui",
          idPrograma: 1,
          nombre: "E01 TÓMATELO CON HUMOR",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E01",
        },
        {
          id: 1,
          programa: "La pija y la quinqui",
          idPrograma: 1,
          nombre: "E02 HAZLO POR LA ANÉCDOTA",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E02",
        },
        {
          id: 2,
          programa: "La pija y la quinqui",
          idPrograma: 1,
          nombre: "E03 NO SOMOS TAN BUENAS",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E03",
        },
      ],
    },
    {
      nombre: "El sentido de la birra",
      id:2,
      autor: ["Ricardo Moya"],
      url: "el-sentido-de-la-birra",
      src: '/podcasts/2.jpg',
      categoria: "Entrevistas",
      descripcion: "Esta es la descripción de El Sentido de la Birra",
      episodios: [
        {
          id: 0,
          programa: "El sentido de la birra",
          idPrograma: 2,
          nombre: "E01 SARA RUBAYO",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E01",
        },
        {
          id: 1,
          programa: "El sentido de la birra",
          idPrograma: 2,
          nombre: "E02 JORGE DREXLER",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E02",
        },
        {
          id: 2,
          programa: "El sentido de la birra",
          idPrograma: 2,
          nombre: "E03 BELINDA WASHINGTON",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E03",
        },
      ],
    },
    {
      nombre: "No te lo habías preguntado",
      id:3,
      url: "no-te-lo-habias-preguntado",
      src: '/podcasts/3.jpg',
      autor: ["Judith Tiral"],
      categoria: "Cultura",
      descripcion: "Esta es la descripción de No te lo Habías Preguntado",
      episodios: [
        {
          id: 0,
          programa: "No te lo habías preguntado",
          idPrograma: 3,
          nombre: "E01 ¿CÓMO ERA EL DÍA A DÍA DE UN CABALLERO MEDIEVAL?",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E01",
        },
        {
          id: 1,
          programa: "No te lo habías preguntado",
          idPrograma: 3,
          nombre: "E02 ¿QUIÉN SE LLEVA LOS ROYALTIES DEL LIBRO DE HITLER?",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E02",
        },
        {
          id: 2,
          programa: "No te lo habías preguntado",
          idPrograma: 3,
          nombre: "E03 ¿CÓMO ERA UN MAL BARRIO DE LA ANTIGUA ROMA?",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E03",
        },
      ],
    },
    {
      nombre: "Todo me pasa a mí",
      id:4,
      url: "todo-me-pasa-a-mi",
      src: '/podcasts/4.jpg',
      autor: ["Azul místico"],
      categoria: "Humor",
      descripcion: "Esta es la descripción de Todo me pasa a mí",
      episodios: [
        {
          id: 0,
          programa: "Todo me pasa a mí",
          idPrograma: 4,
          nombre: "E01 EL ROCE DE LA LEY DE PORTILLO",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E01",
        },
        {
          id: 1,
          idPrograma: 4,
          programa: "Todo me pasa a mí",
          nombre: "E02 EL MALENTENDIDO DE ENRIQUE ALEX",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E02",
        },
        {
          id: 2,
          programa: "Todo me pasa a mí",
          idPrograma: 4,
          nombre: "E03 LA PEOR NOCHE DE JUDITH TIRAL",
          duracion: "1h 10min",
          descripcion: "Esta es la descripción del E03",
        },
      ],
    },
  ]
;

export const playlists = [
  {
    nombre: "HUMOR",
    id:0,
    src:"/playlists/1.png",
    autor: "Usuario 1",
    duracion: "9h 56min",
    descripcion: "Esta es la descripción de la lista",
    podcastsLista: podcasts.filter((podcast) => {
      return podcast.categoria == "Humor";
    })
  },
  {
    nombre: "DEPORTES",
    id:1,
    src:"/playlists/1.png",
    autor: "Usuario 2",
    duracion: "6h 56min",
    descripcion: "Esta es la descripción de la lista",
    podcastsLista: podcasts.filter((podcast) => {
      return podcast.categoria == "Deportes";
    })
  },
  {
    nombre: "INNOVACIÓN",
    id:2,
    src:"/playlists/1.png",
    autor: "Usuario 3",
    duracion: "8h 56min",
    descripcion: "Esta es la descripción de la lista",
    podcastsLista: podcasts.filter((podcast) => {
      return podcast.categoria == "Innovación";
    })
  },
  {
    nombre: "ECONOMÍA",
    id:3,
    src:"/playlists/1.png",
    autor: "Usuario 4",
    duracion: "2h 56min",
    descripcion: "Esta es la descripción de la lista",
    podcastsLista: podcasts.filter((podcast) => {
      return podcast.categoria == "Economía";
    })
  },
  {
    nombre: "SOCIEDAD",
    id:4,
    src:"/playlists/1.png",
    autor: "Usuario 5",
    duracion: "3h 56min",
    descripcion: "Esta es la descripción de la lista",
    podcastsLista: podcasts.filter((podcast) => {
      return podcast.categoria == "Sociedad";
    })
  },
]


export const users = [
  {
    usuario: "vduque",
    contraseña: "contraseña"
  }
]