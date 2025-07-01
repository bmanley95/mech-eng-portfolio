// Multi-language portfolio configuration
import type { Language } from '../utils/i18n'

interface LocalizedContent {
  name: string
  title: string
  location: string
  email: string
  tagline: string
  calendarUrl: string
  social: {
    linkedin: string
  }
  bio: {
    p1: string
    p2: string
  }
  outro: string
  workExperience: Array<{
    title: string
    company: string
    location: string
    duration: string
    description: string
    technologies: string[]
    link?: string
  }>
  projects: Array<{
    title: string
    description: string
    technologies: string[]
    thumbnailImg?: string
    link?: string
  }>
}

// English content is required, French is optional (will fallback to English)
interface PartialLocalizedContent {
  name?: string
  title?: string
  location?: string
  email?: string
  tagline?: string
  calendarUrl?: string
  social?: {
    linkedin?: string
  }
  bio?: {
    p1?: string
    p2?: string
  }
  outro?: string
  workExperience?: Array<{
    title?: string
    company?: string
    location?: string
    duration?: string
    description?: string
    technologies?: string[]
    link?: string
  }>
  projects?: Array<{
    title?: string
    description?: string
    technologies?: string[]
    thumbnailImg?: string
    link?: string
  }>
}

export const localizedContent: Record<'en', LocalizedContent> &
  Record<'fr', PartialLocalizedContent> = {
  en: {
    name: 'Brandon Manley',
    title: 'Mechanical Engineer, EIT',
    location: 'Beautiful British Columbia 🇨🇦',
    email: 'brm2495@gmail.com',
    tagline: 'Thoughtful, thorough, resourceful.',
    calendarUrl:
      'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Qn6VCoz3I8WdYPB-Zu4HUw2bq9wQJUeXDGKx9dJY_z4W8NZp1w73j7OdtOZQai8bcyQhuNy4Q?gv=true',
    social: {
      linkedin: 'https://www.linkedin.com/in/brandon-manley95/',
    },
    bio: {
      p1: 'Recent Mechanical Engineering graduate from the University of Victoria, with a background in composite design and manufacturing. Professional history includes roles at <strong>Ballard Power Systems and CanEV</strong>, where I conducted thermal, structural, and finite element analyses.',
      p2: 'My collective experience has touched on a variety of subjects - from simulation-driven design in automotive and marine engineering, to CAD and FEA in robotics. The common thread I found was my enjoyment in figuring out complex problems and then simplifying the solutions into clear, actionable steps.',
    },
    outro:
      "I am currently open to opportunities anywhere in North America. If you're interested in collaborating, adding a new member to your team, or just want to chat, please do reach out.",
    workExperience: [
      {
        title: 'Aerodynamic • Chassis & Suspension',
        company: 'UVic Formula Hybrid Team',
        location: 'Victoria, BC',
        duration: 'Aug 2024 - Present',
        description:
          'Redesigned and manufactured components for the UVic Formula Hybrid car, helping qualify the team for competition for the first time since 2019.',
        technologies: [
          'SolidWorks',
          'ANSYS',
          'Lean Manufacturing',
          'Project Management',
        ],
        link: 'https://uvicformulahybrid.wordpress.com/',
      },
      {
        title: 'R&D Design Engineer',
        company: 'University of Victoria',
        location: 'Victoria, BC',
        duration: 'Sep 2024 - Dec 2024',
        description:
          'I developed a in matlab to perform thermal analysis Developed a matlab tool to determine the static and transient response for bus-bars in high voltage energy storage system.',
        technologies: ['MATLAB', 'CFD Analysis', 'Patent Applications'],
        link: 'https://www.uvic.ca/ecs/research-and-industry/ecs-research/index.php',
      },
      {
        title: 'Agricultural Engineer',
        company: 'Wiser Marine Technologies',
        location: 'Victoria, BC',
        duration: 'May 2023 - Aug 2023',
        description:
          'Designed and built a prototype for a new agricultural product, with a sustainability focus',
        technologies: ['SolidWorks', 'ANSYS', 'Lean Manufacturing'],
        link: 'https://wisertech.ca/',
      },
      {
        title: 'Mechanical Systems Engineer',
        company: 'Ballard Power Systems',
        location: 'Burnaby, BC',
        duration: 'Sep 2021 - Apr 2022',
        description:
          'Supported senior engineers in product design and development',
        technologies: ['AutoCAD', 'Quality Control', 'Technical Documentation'],
        link: 'https://www.ballard.com/',
      },
    ],
    projects: [
      {
        title: 'Composite Seat',
        description:
          'The initial seat design lacked sufficient head clearance and caused discomfort during extended use. To address these issues and comply with competition regulations, I redesigned the seat emphasizing ergonomics, lateral stability, and manufacturability',
        technologies: [
          'SolidWorks',
          'Finite Element Analysis',
          'ANSYS Workbench',
          'Pre-ACP',
          'CNC Machining',
        ],
        thumbnailImg: 'composite_seat_thumbnail.png',
        link: 'composite_seat.pdf',
      },
      {
        title: 'Side Pods and Floor Guards',
        description:
          'Negative and positive layer geometry were chosen respectively so the outer surface of the pods remained smooth, minimizing aerodynamic drag and supporting accumulator shielding, while the floor guards generated vortices (downforce) due to venturi tunnel sealing with the floor',
        technologies: [
          'ANSYS Workbench',
          'Pre-ACP',
          'SolidWorks',
          'Manufacturing',
          'CNC Machining',
        ],
        thumbnailImg: 'side_pods_thumbnail.png',
        link: 'side_pods.pdf',
      },
      {
        title: 'Rear Wing Elements',
        description:
          'Fabricated rear wing elements to increase downforce and vehicle stability at high speed while maintaining a low drag profile',
        technologies: [
          '3D Printing',
          'ANSYS Workbench',
          'Pre-ACP',
          'SolidWorks',
          'Manufacturing',
          'CNC Machining',
        ],
        thumbnailImg: 'rear_wing_thumbnail.png',
        link: 'rear_wing.pdf',
      },
    ],
  },
  fr: {
    tagline: 'Réfléchi, minutieux, débrouillard.',
    bio: {
      p1: "Diplômé récent en génie mécanique de l'Université de Victoria, avec une expertise en conception et fabrication de composites. Mon expérience professionnelle inclut des rôles chez <strong>Ballard Power Systems et CanEV</strong>, où j'ai mené des analyses thermiques, structurelles et par éléments finis.",
      p2: "Mon expérience collective a touché à une variété de sujets - de la conception basée sur la simulation en ingénierie automobile et marine, à la CAO et l'analyse FEA en robotique. Le fil conducteur que j'ai trouvé était mon plaisir à résoudre des problèmes complexes et à simplifier les solutions en étapes claires et réalisables.",
    },
    outro:
      "Je suis actuellement ouvert aux opportunités partout en Amérique du Nord. Si vous êtes intéressé à collaborer, à ajouter un nouveau membre à votre équipe, ou simplement à discuter, n'hésitez pas à me contacter!",
    workExperience: [
      {
        title: 'Aérodynamique • Châssis et Suspension',
        company: 'Équipe UVic Formula Hybrid',
        location: 'Victoria, C.-B.',
        duration: 'Août 2024 - Présent',
        description:
          "Reconception et fabrication de composants pour la voiture UVic Formula Hybrid, aidant l'équipe à se qualifier pour la compétition pour la première fois depuis 2019.",
        technologies: [
          'SolidWorks',
          'ANSYS',
          'Fabrication lean',
          'Gestion de projet',
        ],
      },
      {
        title: 'Ingénieur Conception R&D',
        company: 'Université de Victoria',
        location: 'Victoria, C.-B.',
        duration: 'Sep 2024 - Déc 2024',
        description:
          "J'ai développé un outil MATLAB pour effectuer des analyses thermiques et déterminé la réponse statique et transitoire des barres omnibus dans les systèmes de stockage d'énergie haute tension.",
        technologies: ['MATLAB', 'Analyse CFD', 'Demandes de brevet'],
      },
      {
        title: 'Ingénieur Agricole',
        location: 'Victoria, C.-B.',
        duration: 'Mai 2023 - Août 2023',
        description:
          "Conception et construction d'un prototype pour un nouveau produit agricole, avec un accent sur la durabilité",
        technologies: ['SolidWorks', 'ANSYS', 'Fabrication lean'],
      },
      {
        title: 'Ingénieur Systèmes Mécaniques',
        location: 'Burnaby, C.-B.',
        duration: 'Sep 2021 - Avr 2022',
        description:
          'Support aux ingénieurs seniors dans la conception et le développement de produits',
        technologies: [
          'AutoCAD',
          'Contrôle qualité',
          'Documentation technique',
        ],
      },
    ],
    projects: [
      {
        title: 'Siège en Composite',
        description:
          "La conception initiale du siège manquait de dégagement suffisant pour la tête et causait de l'inconfort lors d'une utilisation prolongée. Pour résoudre ces problèmes et se conformer aux réglementations de compétition, j'ai reconçu le siège en mettant l'accent sur l'ergonomie, la stabilité latérale et la fabricabilité",
        technologies: [
          'SolidWorks',
          'Analyse par éléments finis',
          'ANSYS Workbench',
          'Pre-ACP',
          'Usinage CNC',
        ],
      },
      {
        title: 'Pontons et Protections de Plancher',
        description:
          "Une géométrie de couches négative et positive a été choisie respectivement pour que la surface extérieure des pontons reste lisse, minimisant la traînée aérodynamique et supportant le blindage de l'accumulateur, tandis que les protections de plancher génèrent des vortex (appui) grâce à l'étanchéité du tunnel venturi avec le plancher",
        technologies: [
          'ANSYS Workbench',
          'Pre-ACP',
          'SolidWorks',
          'Fabrication',
          'Usinage CNC',
        ],
      },
      {
        title: "Éléments d'Aileron Arrière",
        description:
          "Fabrication d'éléments d'aileron arrière pour augmenter l'appui et la stabilité du véhicule à haute vitesse tout en maintenant un profil de faible traînée",
        technologies: [
          'Impression 3D',
          'ANSYS Workbench',
          'Pre-ACP',
          'SolidWorks',
          'Fabrication',
          'Usinage CNC',
        ],
      },
    ],
  },
}

// Backward compatibility export - always uses English version
export const portfolioConfig = localizedContent.en

// Helper function to get just the portfolio config for a specific language
export const getPortfolioConfig = (language: Language) => {
  return getLocalizedContent(language)
}

export const getLocalizedContent = (language: Language): LocalizedContent => {
  const englishContent = localizedContent.en

  if (language === 'en') {
    return englishContent
  }

  const frenchContent = localizedContent.fr

  // Deep merge French content with English fallbacks
  return {
    name: frenchContent.name || englishContent.name,
    title: frenchContent.title || englishContent.title,
    location: frenchContent.location || englishContent.location,
    email: frenchContent.email || englishContent.email,
    tagline: frenchContent.tagline || englishContent.tagline,
    calendarUrl: frenchContent.calendarUrl || englishContent.calendarUrl,
    social: {
      linkedin:
        frenchContent.social?.linkedin || englishContent.social.linkedin,
    },
    bio: {
      p1: frenchContent.bio?.p1 || englishContent.bio.p1,
      p2: frenchContent.bio?.p2 || englishContent.bio.p2,
    },
    outro: frenchContent.outro || englishContent.outro,
    workExperience: englishContent.workExperience.map((englishJob, index) => {
      const frenchJob = frenchContent.workExperience?.[index]
      return {
        title: frenchJob?.title || englishJob.title,
        company: frenchJob?.company || englishJob.company,
        location: frenchJob?.location || englishJob.location,
        duration: frenchJob?.duration || englishJob.duration,
        description: frenchJob?.description || englishJob.description,
        technologies: frenchJob?.technologies || englishJob.technologies,
        link: frenchJob?.link || englishJob.link,
      }
    }),
    projects: englishContent.projects.map((englishProject, index) => {
      const frenchProject = frenchContent.projects?.[index]
      return {
        title: frenchProject?.title || englishProject.title,
        description: frenchProject?.description || englishProject.description,
        technologies:
          frenchProject?.technologies || englishProject.technologies,
        thumbnailImg:
          frenchProject?.thumbnailImg || englishProject.thumbnailImg,
        link: frenchProject?.link || englishProject.link,
      }
    }),
  }
}
