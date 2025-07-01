// Portfolio configuration - edit this file to customize your portfolio

// To change text simple edit the strings in this file

// To change images, add or replace images in the `public` folder and update the paths in this file

// To change your resume, replace the `brandon_manley_resume.pdf` file in the `public` folder with your own PDF file of the same name

export const portfolioConfig = {
  name: 'Brandon Manley',
  title: 'Mechanical Engineer, EIT',
  location: 'Beautiful British Columbia 🇨🇦',
  email: 'brm2495@gmail.com',
  tagline: 'Thorough, resourceful, pragmatic.',

  // Google Calendar booking URL - replace with your own Google Calendar appointment schedule link
  calendarUrl:
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Qn6VCoz3I8WdYPB-Zu4HUw2bq9wQJUeXDGKx9dJY_z4W8NZp1w73j7OdtOZQai8bcyQhuNy4Q?gv=true',
  bio: {
    intro:
      "I'm a recent Mechanical Engineering graduate from the University of Victoria. My experience  with hands-on experience in composite design and manufacturing through the UVic Formula Hybrid team, and  at Ballard Power Systems and CanEV. My roles includes, but not limited to, thermal and structural analysis, FEA and engineering design. I am passionate about tackling complex problems and thrive in multidisciplinary, fast-paced environments.",
    experience:
      "in automotive and marine engineering, simulation-driven design, and robotics. I have a solid foundation in CAD, finite element analysis, and project management, and I'm always open to new opportunities that allow me to explore, grow, and take on new challenges in my next role.",
    // change below
    personal: '',
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/brandon-manley95/',
  },

  workExperience: [
    {
      title: 'Aerodynamic \u2022 Chassis & Suspension',
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
      description: 'I developed a in matlab to perform thermal analysis Developed a matlab tool to determine the static and transient response for bus-bars in high voltage energy storage system.',
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
      // add a file with the below name to the public folder
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
      // add a file with the below name to the public folder
      link: 'rear_wing.pdf',
    },
  ],

  outro: `I am currently open to opportunities anywhere in North America. If you're interested in collaborating, adding a new member to your team, or just want to chat, please do reach out.`,
}

export default portfolioConfig
