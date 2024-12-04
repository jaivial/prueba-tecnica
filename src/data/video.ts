// Definimos los tipos de nuestra base de datos
export type VideoType = {
    id: number;
    titulo: string;
    url: string;
    likes: number;
    subtitulo: string;
    views: number;
    descripcion: string;
    coverPhoto: string;
};


// Creamos nuestra base de datos de tipo DbType
export const video: VideoType[] = [
    {
        id: 1,
        titulo: "El nuevo amigo de Garfield",
        subtitulo: "Garfield conoce un nuevo compañero de aventuras.",
        descripcion: "En este enternecedor video, conoce a Garfield, un adorable gatito naranja, mientras se encuentra con su nuevo e inesperado amigo: ¡un pequeño pollito amarillo! Observa cómo la curiosidad se convierte en un vínculo juguetón y cómo estos dos compañeros tan diferentes forman una amistad única e inolvidable. Desde los cautelosos olfateos de Garfield hasta los valientes piídos del pollito, su aventura está llena de momentos tiernos y una sobrecarga de ternura. Perfecto para amantes de los animales de todas las edades, este video nos recuerda que la amistad puede surgir de los lugares más inesperados. 🐱💛🐥 ¡No olvides darle like, comentar y compartir esta adorable historia de Garfield y su nuevo amigo!",
        coverPhoto: "/photo1.webp",
        url: "/video1.mp4",
        likes: 0,
        views: 0,
    },
    {
        id: 2,
        titulo: "Cómo centrar un <div>",
        subtitulo: "Aprende las técnicas esenciales para centrar un <div> en tu diseño web.",
        descripcion: "En este práctico tutorial, descubrirás cómo centrar un <div> de forma rápida y eficiente usando HTML y CSS. Exploraremos diferentes métodos, desde el uso de flexbox hasta grid, para que puedas aplicar la solución perfecta según tu proyecto. Perfecto para principiantes y desarrolladores que quieren mejorar sus habilidades de diseño web. ¡Transforma tus diseños con este conocimiento esencial y lleva tu código al siguiente nivel!",
        coverPhoto: "/photo2.webp",
        url: "/video2.mp4",
        likes: 0,
        views: 0,
    },
    {
        id: 3,
        titulo: "Nala y su aventura",
        subtitulo: "Acompaña a Nala, una traviesa perrita, en su jornada al aire libre.",
        descripcion: "Sumérgete en la naturaleza con Nala, una alegre perrita que nos lleva a explorar un bosque encantador y un hermoso campo de cebada. Entre juegos, saltos y mucha diversión, este video está lleno de momentos adorables que te recordarán la belleza de disfrutar la naturaleza en compañía de nuestros amigos de cuatro patas. ¡No te pierdas esta aventura llena de energía y amor perruno! 🐶🌾",
        coverPhoto: "/photo3.webp",
        url: "/video3.mp4",
        likes: 0,
        views: 0,
    },
    {
        id: 4,
        titulo: "Costa Rica HD 4K",
        subtitulo: "Explora la impresionante biodiversidad y las vistas naturales de Costa Rica.",
        descripcion: "Embárcate en un viaje visual a Costa Rica, donde descubrirás su increíble diversidad de animales exóticos y paisajes naturales de ensueño. Desde tucanes y monos hasta selvas tropicales y cataratas impresionantes, este video es una oda a la naturaleza en su estado más puro. Perfecto para los amantes de la fauna, flora y los viajes. Déjate maravillar por la riqueza natural de este paraíso tropical. 🌿🦥🦜",
        coverPhoto: "/photo4.webp",
        url: "/video4.mp4",
        likes: 0,
        views: 0,
    },
];
