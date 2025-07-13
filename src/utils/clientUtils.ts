// Utilidades del lado del cliente para manejar datos sin fs

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateEs(date: string) {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Función para obtener datos de posts desde una API o datos estáticos
export async function getPostsData() {
  // En un entorno real, esto haría una llamada a una API
  // Por ahora, retornamos datos estáticos
  return [
    {
      metadata: {
        title: "Building Once UI: A Customizable Design System",
        publishedAt: "2024-01-15",
        summary: "How we built a design system that scales",
        image: "/images/projects/project-01/cover-01.jpg",
        images: ["/images/projects/project-01/cover-01.jpg"],
        tag: "Design System",
        team: [],
        link: "",
      },
      slug: "building-once-ui-a-customizable-design-system",
      content: "",
    },
    {
      metadata: {
        title: "Automate Design Handovers with a Figma-to-Code Pipeline",
        publishedAt: "2024-01-10",
        summary: "Streamlining the design-to-development workflow",
        image: "/images/projects/project-01/cover-02.jpg",
        images: ["/images/projects/project-01/cover-02.jpg"],
        tag: "Automation",
        team: [],
        link: "",
      },
      slug: "automate-design-handovers-with-a-figma-to-code-pipeline",
      content: "",
    },
    {
      metadata: {
        title: "Simple Portfolio Builder",
        publishedAt: "2024-01-05",
        summary: "A minimal portfolio builder for developers",
        image: "/images/projects/project-01/cover-03.jpg",
        images: ["/images/projects/project-01/cover-03.jpg"],
        tag: "Portfolio",
        team: [],
        link: "",
      },
      slug: "simple-portfolio-builder",
      content: "",
    },
  ];
}

export async function getProjectsData() {
  return [
    {
      metadata: {
        title: "Building Once UI: A Customizable Design System",
        publishedAt: "2024-01-15",
        summary: "How we built a design system that scales",
        image: "/images/projects/project-01/cover-01.jpg",
        images: ["/images/projects/project-01/cover-01.jpg"],
        tag: "Design System",
        team: [],
        link: "",
      },
      slug: "building-once-ui-a-customizable-design-system",
      content: "",
    },
    {
      metadata: {
        title: "Automate Design Handovers with a Figma-to-Code Pipeline",
        publishedAt: "2024-01-10",
        summary: "Streamlining the design-to-development workflow",
        image: "/images/projects/project-01/cover-02.jpg",
        images: ["/images/projects/project-01/cover-02.jpg"],
        tag: "Automation",
        team: [],
        link: "",
      },
      slug: "automate-design-handovers-with-a-figma-to-code-pipeline",
      content: "",
    },
    {
      metadata: {
        title: "Simple Portfolio Builder",
        publishedAt: "2024-01-05",
        summary: "A minimal portfolio builder for developers",
        image: "/images/projects/project-01/cover-03.jpg",
        images: ["/images/projects/project-01/cover-03.jpg"],
        tag: "Portfolio",
        team: [],
        link: "",
      },
      slug: "simple-portfolio-builder",
      content: "",
    },
  ];
} 