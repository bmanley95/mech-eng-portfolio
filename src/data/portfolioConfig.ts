// Portfolio configuration - Edit this file to customize your portfolio

export const portfolioConfig = {
  // Personal Information
  name: 'Brandon Manley',
  title: 'Mechanical Engineer, EIT',
  location: 'British Columbia, Canada',
  experience: '2+ Years Experience',
  email: 'brm2495@email.com',
  phone: '(555) 123-4567',

  // Bio/About
  bio: {
    intro:
      "I'm a passionate mechanical engineer with over 5 years of experience in product design, manufacturing, and project management. I specialize in CAD design, thermal analysis, and sustainable engineering solutions.",
    experience:
      "My expertise spans across various industries including automotive, aerospace, and renewable energy. I'm particularly interested in developing innovative solutions that combine engineering excellence with environmental sustainability.",
    personal:
      "When I'm not engineering, you can find me hiking, building RC aircraft, or experimenting with 3D printing new designs.",
  },

  // Social Links
  social: {
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
  },

  // Technical Skills
  skills: {
    'CAD & Design': ['SolidWorks', 'AutoCAD', 'Fusion 360', 'Inventor'],
    'Analysis & Simulation': ['ANSYS', 'MATLAB', 'FEA', 'CFD'],
    Manufacturing: [
      'CNC Machining',
      '3D Printing',
      'Injection Molding',
      'Sheet Metal',
    ],
    Programming: ['Python', 'MATLAB', 'C++', 'LabVIEW'],
    'Project Management': [
      'Agile/Scrum',
      'Lean Manufacturing',
      'Six Sigma',
      'Risk Assessment',
    ],
    Certifications: [
      'PE License',
      'Six Sigma Green Belt',
      'PMP Certified',
      'SolidWorks Professional',
    ],
  },

  // Education
  education: [
    {
      degree: 'Master of Science in Mechanical Engineering',
      school: 'Stanford University',
      year: '2016 - 2018',
      specialization: 'Specialization: Thermal Systems & Energy',
      gpa: 'GPA: 3.8/4.0',
    },
    {
      degree: 'Bachelor of Science in Mechanical Engineering',
      school: 'UC Berkeley',
      year: '2012 - 2016',
      specialization: 'Minor: Computer Science',
      gpa: 'Magna Cum Laude',
    },
  ],

  // Work Experience
  workExperience: [
    {
      title: 'Senior Mechanical Engineer',
      company: 'TechCorp Industries',
      location: 'San Francisco, CA',
      duration: '2021 - Present',
      responsibilities: [
        'Led cross-functional teams in developing next-generation manufacturing equipment',
        'Improved production efficiency by 35% through lean manufacturing principles',
        'Managed $2M+ projects from concept to production implementation',
        'Mentored junior engineers and conducted technical design reviews',
      ],
      technologies: [
        'SolidWorks',
        'ANSYS',
        'Lean Manufacturing',
        'Project Management',
      ],
      link: '#',
    },
    {
      title: 'Mechanical Engineer',
      company: 'Innovation Labs Inc.',
      location: 'Palo Alto, CA',
      duration: '2019 - 2021',
      responsibilities: [
        'Designed and prototyped sustainable energy storage systems',
        'Conducted thermal and structural analysis using ANSYS and MATLAB',
        'Collaborated with R&D teams on patent applications (3 patents filed)',
        'Reduced material costs by 20% through design optimization',
      ],
      technologies: ['MATLAB', 'CFD Analysis', 'Patent Applications'],
      link: null,
    },
    {
      title: 'Junior Mechanical Engineer',
      company: 'Precision Manufacturing Co.',
      location: 'San Jose, CA',
      duration: '2018 - 2019',
      responsibilities: [
        'Supported senior engineers in product design and development',
        'Created detailed technical drawings and specifications',
        'Performed quality control testing and documentation',
        'Assisted in manufacturing process improvements',
      ],
      technologies: ['AutoCAD', 'Quality Control', 'Technical Documentation'],
      link: null,
    },
  ],

  // Projects
  projects: [
    {
      title: 'Automated Assembly Line Optimization',
      description:
        'Designed and implemented an automated assembly system that increased production efficiency by 35% while reducing manufacturing defects by 20%.',
      technologies: [
        'SolidWorks',
        'ANSYS',
        'PLC Programming',
        'Lean Manufacturing',
      ],
      link: '#',
      featured: true,
    },
    {
      title: 'Sustainable Energy Storage System',
      description:
        'Developed a novel thermal energy storage solution for renewable energy applications with 40% higher efficiency than existing solutions.',
      technologies: ['MATLAB', 'CFD Analysis', 'Thermodynamics', '3D Printing'],
      link: null,
      featured: true,
    },
  ],

  // Additional Info
  tagline:
    'I design and build innovative mechanical solutions, from concept to production.',
}

export default portfolioConfig
