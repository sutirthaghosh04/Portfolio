export const projects = [
  {
    id: 1,
    title: 'AI-Based Photonic Power Divider Design',
    subtitle: 'DCGAN + FDTD Simulation',
    description:
      'AI-driven inverse design framework for silicon-air photonic crystal power dividers. Combined DCGAN with FDTD electromagnetic simulations to produce fabrication-ready 200×200 photonic layouts with optimized optical transmission efficiency.',
    tech: ['Python', 'DCGAN', 'PyTorch', 'AI', 'FDTD'],
    category: 'ai',
    image: '/assets/project-photonic.svg',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Amazon E-commerce Analytics Dashboard',
    subtitle: 'End-to-end Analytics',
    description:
      'End-to-end analytics dashboard using Python, MySQL, and Power BI. Performed data cleaning and exploratory analysis with interactive visualizations for revenue, ratings, discounts, and profitability, generating business insights via SQL and Power BI.',
    tech: ['Python', 'SQL', 'Power BI', 'Pandas', 'Matplotlib'],
    category: 'data',
    image: '/assets/project-analytics.svg',
    github: '#',
    demo: '#',
  },
];

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'data', label: 'Data Analytics' },
];
