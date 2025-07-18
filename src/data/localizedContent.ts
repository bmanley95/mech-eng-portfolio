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
    p3: string
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
    p3?: string
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
    location: 'Victoria, British Columbia 🇨🇦',
    email: 'work.brandon.manley@gmail.com',
    tagline: 'Resourceful, Adaptable, Meticulous',
    calendarUrl:
      'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2UsH1ZA-unoHvKtoIIMU_nZkTpzDf2XSMJ76dPDECSe2fq3nT59wmYX4-o_0pttfIhIoNaDvPT?gv=true',
    social: {
      linkedin: 'https://www.linkedin.com/in/brandon-manley95/',
    },
    bio: {
      p1: 'Recent Mechanical Engineering graduate from the University of Victoria, with a background in composite design and manufacturing. Professional history includes roles at <strong>Ballard Power Systems</strong> and <strong>CanEV</strong>, where I conducted thermal, structural, and finite element analyses.',
      p2: 'My experience ranges from simulation-driven design of automotive components, to redline drawings for the <strong>FCmove® HD+ 100kW module</strong>, to autonomous robotics at the <strong>Western Engineering Competition (WEC)</strong>. The consistent theme throughout has been my ability to solve complex problems with strong fundamentals.',
      p3: 'Please enjoy a selection of projects and experience below.',
    },
    outro:
      "I am open to opportunities anywhere in North America, especially those in the automotive or marine sector. If you're interested in collaborating, adding a new member to your team, or just want to chat, please do reach out.",
    workExperience: [
      {
        title: 'Aerodynamic • Chassis & Suspension',
        company: 'UVic Formula Hybrid Team',
        location: 'Victoria, BC',
        duration: 'Aug 2024 - Present',
        description:
          'Redesigned and manufactured components for the UVic Formula Hybrid car, helping the team pass all inspections for 2025 competition, the first time since 2019.',
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
        company: 'University of Victoria | CanEV',
        location: 'Victoria, BC',
        duration: 'Sep 2024 - Dec 2024',
        description:
          'Project integration, high voltage bus-bar cross-section optimization, developing high accurate 3D scan renders, and decommissioning of a GM partnered electric vehicle.',
        technologies: ['MATLAB', 'CFD Analysis', 'FEA Analysis'],
        link: 'https://www.uvic.ca/ecs/research-and-industry/ecs-research/index.php',
      },
      {
        title: 'Agricultural Engineer',
        company: 'Wiser Marine Technologies',
        location: 'Victoria, BC',
        duration: 'May 2023 - Aug 2023',
        description:
          'Development of a 20ft ocean research dock. Diagnosis, troubleshooting and maintenance of FarmBot (OC irrigation robot), technical documentation write up for a multidisciplinary team.',
        technologies: ['SolidWorks', 'FarmBot', 'Technical Documentation'],
        // Wiser doesn't have a https website only an insecure http one so leaving out the link
        link: '',
      },
      {
        title: 'Mechanical Systems Engineer',
        company: 'Ballard Power Systems',
        location: 'Burnaby, BC',
        duration: 'Sep 2021 - Apr 2022',
        description:
          'Generated technical documentation, redline drawings, executed change orders, bench tested subsystems on the HD+ 100kW module, devised analytical solutions to identify pressure drop zones.',
        technologies: [
          'Creo',
          'SolidWorks',
          'Agile',
          'Quality Control',
          'Technical Documentation',
        ],
        link: 'https://www.ballard.com/',
      },
    ],
    projects: [
      {
        title: 'Composite Seat',
        description:
          'The initial seat design lacked sufficient head clearance and caused discomfort during extended use. To address these issues and comply with competition regulations, we redesigned the seat emphasizing ergonomics, lateral stability, and manufacturability',
        technologies: [
          'SolidWorks',
          'Finite Element Analysis',
          'ANSYS Workbench',
          'Pre-ACP',
          'CNC Machining',
        ],
        thumbnailImg: 'composite_seat_thumbnail.png',
        link: 'Composite_Seat.pdf',
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
        link: 'Sidepods_Floor_Guards.pdf',
      },
      {
        title: 'Rear Wing Elements',
        description:
          'Utilized resin infusion methods to fabricate multi-element rear wings elements to improve downforce and stability at high speeds.',
        technologies: [
          '3D Printing',
          'ANSYS Workbench',
          'Pre-ACP',
          'SolidWorks',
          'Manufacturing',
          'CNC Machining',
        ],
        thumbnailImg: 'rear_wing_thumbnail.png',
        link: 'Rear_Wing.pdf',
      },
    ],
  },
  fr: {
    tagline: 'Débrouillard, méthodique, minutieux.',
    bio: {
      p1: "Diplômé récent en génie mécanique de l'Université de Victoria, avec une expertise en conception et fabrication de composites. Mon expérience professionnelle inclut des rôles chez <strong>Ballard Power Systems</strong> et <strong>CanEV</strong>, où j'ai mené des analyses thermiques, structurelles et par éléments finis.",
      p2: "Mon expérience s'étend de la conception basée sur la simulation de composants automobiles, aux dessins de révision pour le <strong>module FCmove® HD+ 100kW</strong>, jusqu'à la robotique autonome au <strong>Western Engineering Competition (WEC)</strong>. Le thème constant dans tout cela a été ma capacité à résoudre des problèmes complexes avec des bases solides.",
      p3: 'Veuillez découvrir une sélection de projets et expériences ci-dessous.',
    },
    outro:
      "Je suis ouvert aux opportunités partout en Amérique du Nord, particulièrement dans les secteurs automobile ou maritime. Si vous êtes intéressé à collaborer, à ajouter un nouveau membre à votre équipe, ou simplement à discuter, n'hésitez pas à me contacter.",
    workExperience: [
      {
        title: 'Aérodynamique • Châssis et Suspension',
        company: 'Équipe UVic Formula Hybrid',
        location: 'Victoria, C.-B.',
        duration: 'Août 2024 - Présent',
        description:
          "Reconception et fabrication de composants pour la voiture UVic Formula Hybrid, aidant l'équipe à passer toutes les inspections pour la compétition 2025, pour la première fois depuis 2019.",
        technologies: [
          'SolidWorks',
          'ANSYS',
          'Fabrication lean',
          'Gestion de projet',
        ],
        link: 'https://uvicformulahybrid.wordpress.com/',
      },
      {
        title: 'Ingénieur Conception R&D',
        company: 'Université de Victoria | CanEV',
        location: 'Victoria, C.-B.',
        duration: 'Sep 2024 - Déc 2024',
        description:
          "Intégration de projets, optimisation de la section transversale des barres omnibus haute tension, développement de rendus 3D de haute précision, et décommissionnement d'un véhicule électrique partenaire de GM.",
        technologies: ['MATLAB', 'Analyse CFD', 'Analyse FEA'],
        link: 'https://www.uvic.ca/ecs/research-and-industry/ecs-research/index.php',
      },
      {
        title: 'Ingénieur Agricole',
        company: 'Wiser Marine Technologies',
        location: 'Victoria, C.-B.',
        duration: 'Mai 2023 - Août 2023',
        description:
          "Développement d'un quai de recherche océanique de 20 pieds. Diagnostic, dépannage et maintenance du FarmBot (robot d'irrigation OC), rédaction de documentation technique pour une équipe multidisciplinaire.",
        technologies: ['SolidWorks', 'FarmBot', 'Documentation technique'],
        // Wiser doesn't have a https website only an insecure http one so leaving out the link
        link: '',
      },
      {
        title: 'Ingénieur Systèmes Mécaniques',
        company: 'Ballard Power Systems',
        location: 'Burnaby, C.-B.',
        duration: 'Sep 2021 - Avr 2022',
        description:
          "Génération de documentation technique, dessins de révision, exécution d'ordres de modification, tests en laboratoire des sous-systèmes du module HD+ 100kW, conception de solutions analytiques pour identifier les zones de chute de pression.",
        technologies: [
          'Creo',
          'SolidWorks',
          'Agile',
          'Contrôle qualité',
          'Documentation technique',
        ],
        link: 'https://www.ballard.com/',
      },
    ],
    projects: [
      {
        title: 'Siège en Composite',
        description:
          "La conception initiale du siège manquait de dégagement suffisant pour la tête et causait de l'inconfort lors d'une utilisation prolongée. Pour résoudre ces problèmes et se conformer aux réglementations de compétition, j'ai reconçu le siège en mettant l'accent sur l'ergonomie, la stabilité latérale et la fabricabilité.",
        technologies: [
          'SolidWorks',
          'Analyse par éléments finis',
          'ANSYS Workbench',
          'Pre-ACP',
          'Usinage CNC',
        ],
        thumbnailImg: 'composite_seat_thumbnail.png',
        link: 'Composite_Seat.pdf',
      },
      {
        title: 'Pontons et Protections de Plancher',
        description:
          "Une géométrie de couches négative et positive a été choisie respectivement pour que la surface extérieure des pontons reste lisse, minimisant la traînée aérodynamique et supportant le blindage de l'accumulateur, tandis que les protections de plancher génèrent des vortex (appui) grâce à l'étanchéité du tunnel venturi avec le plancher.",
        technologies: [
          'ANSYS Workbench',
          'Pre-ACP',
          'SolidWorks',
          'Fabrication',
          'Usinage CNC',
        ],
        thumbnailImg: 'side_pods_thumbnail.png',
        link: 'Sidepods_Floor_Guards.pdf',
      },
      {
        title: "Éléments d'Aileron Arrière",
        description:
          "Utilisation de méthodes d'infusion de résine pour fabriquer des éléments d'aileron arrière multi-éléments afin d'améliorer l'appui et la stabilité à haute vitesse.",
        technologies: [
          'Impression 3D',
          'ANSYS Workbench',
          'Pre-ACP',
          'SolidWorks',
          'Fabrication',
          'Usinage CNC',
        ],
        thumbnailImg: 'rear_wing_thumbnail.png',
        link: 'Rear_Wing.pdf',
      },
    ],
  },
}

export const getPortfolioConfig = (language: Language) => {
  return getLocalizedContent(language)
}

export const getLocalizedContent = (language: Language): LocalizedContent => {
  const englishContent = localizedContent.en

  if (language === 'en') {
    return englishContent
  }

  const frenchContent = localizedContent.fr

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
      p3: frenchContent.bio?.p3 || englishContent.bio.p3,
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
