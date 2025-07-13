import { Logo } from "@once-ui-system/core";

// Datos base para evitar referencias circulares
const personData = {
  firstName: "Donald",
  lastName: "Jacamo",
  role: "Backend Developer",
  avatar: "/images/avatar.jpg",
  email: "jacamodonaldmiguel@gmail.com",
  location: "America/Costa_Rica",
  languages: ["English", "Español"],
};

const personDataEs = {
  firstName: "Donald",
  lastName: "Jacamo",
  role: "Desarrollador Backend",
  avatar: "/images/avatar.jpg",
  email: "jacamodonaldmiguel@gmail.com",
  location: "America/Costa_Rica",
  languages: ["Inglés", "Español"],
};

const languages = {
  en: {
    person: {
      ...personData,
      get name() {
        return `${this.firstName} ${this.lastName}`;
      },
    },
    newsletter: {
      display: true,
      title: <>Subscribe to {personData.firstName}'s Newsletter</>,
      description: (
        <>
          I occasionally share thoughts on backend development, AI applications, and software engineering.
        </>
      ),
    },
    home: {
      path: "/",
      image: "/images/og/home.jpg",
      label: "Home",
      title: `${personData.firstName} ${personData.lastName}'s Portfolio`,
      description: `Portfolio website showcasing my work as a ${personData.role}`,
      headline: <>Building smart APIs and intelligent systems</>,
      featured: {
        display: true,
        title: <>Recent project: <strong className="ml-4">TraderPal Connect</strong></>,
        href: "/work/traderpal-connect",
      },
      subline: (
        <>
          I'm Donald, a backend developer passionate about clean architecture, AI-powered systems, and
          intuitive data solutions.
        </>
      ),
    },
    about: {
      path: "/about",
      label: "About",
      title: `About – ${personData.firstName} ${personData.lastName}`,
      description: `Meet ${personData.firstName} ${personData.lastName}, ${personData.role} from ${personData.location}`,
      tableOfContent: {
        display: true,
        subItems: false,
      },
      avatar: {
        display: true,
      },
      calendar: {
        display: true,
        link: "https://cal.com",
      },
      intro: {
        display: true,
        title: "Introduction",
        description: (
          <>
            Donald is a backend engineer based in Costa Rica, with a strong focus on building scalable APIs,
            integrating artificial intelligence in finance, and leading technical documentation practices.
          </>
        ),
      },
      work: {
        display: true,
        title: "Work Experience",
        experiences: [
          {
            company: "TraderPal.LLC",
            timeframe: "01/2024 – Present",
            role: "Backend Developer",
            achievements: [
              <>Designed and developed TraderPal Connect B2B API using C# and OpenAPI.</>,
              <>Built AI solutions for stock recognition in images, boosting insight generation speed.</>,
              <>Created Power BI dashboards connected to live data sources.</>,
              <>Trained ML models for financial forecasting and strategic insights.</>,
            ],
            images: [
              {
                src: "/images/projects/project-01/cover-01.jpg",
                alt: "TraderPal Connect Project",
                width: 16,
                height: 9,
              },
            ],
          },
          {
            company: "Freelance",
            timeframe: "01/2023 – Present",
            role: "Backend Developer & Consultant",
            achievements: [
              <>Built web solutions for agencies and SMEs using Node.js, Python, and C#.</>,
              <>Integrated payment gateways and optimized database performance.</>,
              <>Automated financial reports, reducing manual work by 40%.</>,
            ],
            images: [],
          },
        ],
      },
      studies: {
        display: true,
        title: "Education",
        institutions: [
          {
            name: "UNAN León",
            description: <>Bachelor in IT Engineering – Web Dev & Digital Marketing emphasis.</>,
          },
          {
            name: "MITx – MicroMasters",
            description: <>Currently enrolled in MicroMasters Program in Statistics and Data Science.</>,
          },
        ],
      },
      technical: {
        display: true,
        title: "Technical Skills",
        skills: [
          {
            title: "C# & ASP.NET",
            description: <>Strong experience building APIs and backend logic in .NET environments.</>,
            images: [
              {
                src: "/images/projects/project-01/cover-02.jpg",
                alt: "Project image",
                width: 16,
                height: 9,
              },
              {
                src: "/images/projects/project-01/cover-03.jpg",
                alt: "Project image",
                width: 16,
                height: 9,
              },
            ],
          },
          {
            title: "Python & ML",
            description: <>Data science, ML, and AI with TensorFlow, PyTorch, and scikit-learn.</>,
            images: [
              {
                src: "/images/projects/project-01/cover-04.jpg",
                alt: "Project image",
                width: 16,
                height: 9,
              },
            ],
          },
          {
            title: "Data Visualization",
            description: <>Power BI dashboards and storytelling with data.</>,
            images: [],
          },
          {
            title: "DevOps & Cloud",
            description: <>Docker, Git, Azure, and PostgreSQL/MongoDB.</>,
            images: [],
          },
        ],
      },
    },
    blog: {
      path: "/blog",
      label: "Blog",
      title: "Thoughts on backend, AI, and technology",
      description: `Read the latest from ${personData.firstName} ${personData.lastName}`,
    },
    work: {
      path: "/work",
      label: "Work",
      title: `Projects – ${personData.firstName} ${personData.lastName}`,
      description: `Showcase of software and AI projects`,
    },
    gallery: {
      path: "/gallery",
      label: "Gallery",
      title: `Photo gallery – ${personData.firstName} ${personData.lastName}`,
      description: `Images and moments from the journey`,
      images: [
        {
          src: "/images/gallery/horizontal-1.jpg",
          alt: "image",
          orientation: "horizontal",
        },
        {
          src: "/images/gallery/horizontal-2.jpg",
          alt: "image",
          orientation: "horizontal",
        },
        {
          src: "/images/gallery/horizontal-3.jpg",
          alt: "image",
          orientation: "horizontal",
        },
        {
          src: "/images/gallery/horizontal-4.jpg",
          alt: "image",
          orientation: "horizontal",
        },
        {
          src: "/images/gallery/vertical-1.jpg",
          alt: "image",
          orientation: "vertical",
        },
        {
          src: "/images/gallery/vertical-2.jpg",
          alt: "image",
          orientation: "vertical",
        },
        {
          src: "/images/gallery/vertical-3.jpg",
          alt: "image",
          orientation: "vertical",
        },
        {
          src: "/images/gallery/vertical-4.jpg",
          alt: "image",
          orientation: "vertical",
        },
      ],
    },
  },
  es: {
    person: {
      ...personDataEs,
      get name() {
        return `${this.firstName} ${this.lastName}`;
      },
    },
    newsletter: {
      display: true,
      title: <>Suscríbete al boletín de {personDataEs.firstName}</>,
      description: (
        <>
          Ocasionalmente comparto ideas sobre desarrollo backend, IA aplicada y tecnología.
        </>
      ),
    },
    home: {
      path: "/",
      image: "/images/og/home.jpg",
      label: "Inicio",
      title: `Portfolio de ${personDataEs.firstName} ${personDataEs.lastName}`,
      description: `Sitio web de portfolio que muestra mi trabajo como ${personDataEs.role}`,
      headline: <>Construyendo APIs inteligentes y sistemas eficientes</>,
      featured: {
        display: true,
        title: <>Proyecto reciente: <strong className="ml-4">TraderPal Connect</strong></>,
        href: "/work/traderpal-connect",
      },
      subline: (
        <>
          Soy Donald, un desarrollador backend apasionado por la arquitectura limpia y la inteligencia artificial aplicada a las finanzas.
        </>
      ),
    },
    about: {
      path: "/about",
      label: "Acerca de",
      title: `Acerca de – ${personDataEs.firstName} ${personDataEs.lastName}`,
      description: `Conoce a ${personDataEs.firstName} ${personDataEs.lastName}, ${personDataEs.role} en ${personDataEs.location}`,
      tableOfContent: {
        display: true,
        subItems: false,
      },
      avatar: {
        display: true,
      },
      calendar: {
        display: true,
        link: "https://cal.com",
      },
      intro: {
        display: true,
        title: "Introducción",
        description: (
          <>
            Donald es un desarrollador backend radicado en Costa Rica, especializado en construir APIs escalables, soluciones de inteligencia artificial y automatización de reportes.
          </>
        ),
      },
      work: {
        display: true,
        title: "Experiencia Laboral",
        experiences: [
          {
            company: "TraderPal.LLC",
            timeframe: "01/2024 – Actualidad",
            role: "Desarrollador Backend",
            achievements: [
              <>Diseño e implementación de API B2B en C# con OpenAPI.</>,
              <>Desarrollo de soluciones de IA para reconocimiento de acciones en imágenes.</>,
              <>Dashboards en Power BI conectados a datos en vivo.</>,
              <>Modelos de ML para análisis financiero predictivo.</>,
            ],
            images: [
              {
                src: "/images/projects/project-01/cover-01.jpg",
                alt: "Proyecto TraderPal Connect",
                width: 16,
                height: 9,
              },
            ],
          },
          {
            company: "Freelance",
            timeframe: "01/2023 – Actualidad",
            role: "Desarrollador Backend y Consultor",
            achievements: [
              <>Desarrollo de soluciones web con Node.js, Python y C#.</>,
              <>Integración de pasarelas de pago y optimización de consultas.</>,
              <>Automatización de reportes financieros reduciendo 40% de tiempo.</>,
            ],
            images: [],
          },
        ],
      },
      studies: {
        display: true,
        title: "Educación",
        institutions: [
          {
            name: "UNAN León",
            description: <>Ingeniería en TI – Énfasis en desarrollo web y marketing digital.</>,
          },
          {
            name: "MITx – MicroMasters",
            description: <>Inscrito actualmente en MicroMasters en Estadística y Ciencia de Datos.</>,
          },
        ],
      },
      technical: {
        display: true,
        title: "Habilidades Técnicas",
        skills: [
          {
            title: "C# y ASP.NET",
            description: <>Desarrollo de APIs y lógica de backend robusta en .NET.</>,
            images: [
              {
                src: "/images/projects/project-01/cover-02.jpg",
                alt: "Imagen del proyecto",
                width: 16,
                height: 9,
              },
              {
                src: "/images/projects/project-01/cover-03.jpg",
                alt: "Imagen del proyecto",
                width: 16,
                height: 9,
              },
            ],
          },
          {
            title: "Python y ML",
            description: <>Ciencia de datos, aprendizaje automático e IA.</>,
            images: [
              {
                src: "/images/projects/project-01/cover-04.jpg",
                alt: "Imagen del proyecto",
                width: 16,
                height: 9,
              },
            ],
          },
          {
            title: "Visualización de Datos",
            description: <>Dashboards y análisis en Power BI.</>,
            images: [],
          },
          {
            title: "DevOps y Cloud",
            description: <>Docker, Git, Azure, PostgreSQL y MongoDB.</>,
            images: [],
          },
        ],
      },
    },
    blog: {
      path: "/blog",
      label: "Blog",
      title: "Ideas sobre backend, IA y tecnología",
      description: `Lee lo último de ${personDataEs.firstName} ${personDataEs.lastName}`,
    },
    work: {
      path: "/work",
      label: "Proyectos",
      title: `Proyectos – ${personDataEs.firstName} ${personDataEs.lastName}`,
      description: `Portafolio de proyectos de software y datos`,
    },
    gallery: {
      path: "/gallery",
      label: "Galería",
      title: `Galería de fotos – ${personDataEs.firstName} ${personDataEs.lastName}`,
      description: `Imágenes del camino recorrido`,
      images: [
        {
          src: "/images/gallery/horizontal-1.jpg",
          alt: "imagen",
          orientation: "horizontal",
        },
        {
          src: "/images/gallery/horizontal-2.jpg",
          alt: "imagen",
          orientation: "horizontal",
        },
        {
          src: "/images/gallery/horizontal-3.jpg",
          alt: "imagen",
          orientation: "horizontal",
        },
        {
          src: "/images/gallery/horizontal-4.jpg",
          alt: "imagen",
          orientation: "horizontal",
        },
        {
          src: "/images/gallery/vertical-1.jpg",
          alt: "imagen",
          orientation: "vertical",
        },
        {
          src: "/images/gallery/vertical-2.jpg",
          alt: "imagen",
          orientation: "vertical",
        },
        {
          src: "/images/gallery/vertical-3.jpg",
          alt: "imagen",
          orientation: "vertical",
        },
        {
          src: "/images/gallery/vertical-4.jpg",
          alt: "imagen",
          orientation: "vertical",
        },
      ],
    },
  },
};

// Función para obtener el idioma actual basado en parámetros de URL
export function getCurrentLanguage(searchParams) {
  const lang = searchParams?.get('lang');
  return lang === 'es' ? 'es' : 'en';
}

// Función para obtener el contenido en el idioma actual
export function getContent(searchParams) {
  const currentLang = getCurrentLanguage(searchParams);
  return languages[currentLang];
}

// Exportar contenido por defecto (inglés) para compatibilidad
const person = languages.en.person;
const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/donaldjacamo",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/donaldjacamo/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];
const newsletter = languages.en.newsletter;
const home = languages.en.home;
const about = languages.en.about;
const blog = languages.en.blog;
const work = languages.en.work;
const gallery = languages.en.gallery;

export { person, social, newsletter, home, about, blog, work, gallery, languages };
