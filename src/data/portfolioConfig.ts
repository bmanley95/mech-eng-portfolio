// Portfolio configuration - edit this file to customize your portfolio

// To change text simple edit the strings in this file

// To change images, add or replace images in the `public` folder and update the paths in this file

// To change your resume, replace the `brandon_manley_resume.pdf` file in the `public` folder with your own PDF file of the same name

export const portfolioConfig = {
  name: 'Brandon Manley',
  title: 'Mechanical Engineer, EIT',
  location: 'British Columbia, Canada',
  email: 'brm2495@email.com',
  tagline: 'Thorough, resourceful, gritty and with a dash of humor',

  // Google Calendar booking URL - replace with your own Google Calendar appointment schedule link
  calendarUrl:
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Qn6VCoz3I8WdYPB-Zu4HUw2bq9wQJUeXDGKx9dJY_z4W8NZp1w73j7OdtOZQai8bcyQhuNy4Q?gv=true',
  bio: {
    intro:
      'A recent UVic mechanical engineering graduate with quality co-op experience at organizations like <strong>Ballard Power Systems</strong> and <strong>Wiser Marine Technologies</strong>, I ramp up quickly in new environments and know which details need close attention.',
    experience:
      "I'm particularly interested in roles that involve <strong>composite manufacturing, automotive engineering, or simulation-driven development;</strong> postings involving any of those areas excite me greatly. I have a solid foundation in CAD design, thermal analysis, and project management, but I'm looking forward to a wider breadth of experience and deeper specialization in my next role.",
    // change below
    personal: '',
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/brandon-manley95/',
  },

  workExperience: [
    {
      title: 'Aerodynamic | Chassis & Suspension Member',
      company: 'UVic Formula Hybrid Team',
      location: 'Victoria, BC',
      duration: 'Aug 2024 - Present',
      description:
        'Redesigned and manufactured improved components for the UVic Formula Hybrid car, helping qualify the team for competition for the first time in years',
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
      description: 'Designed and prototyped...',
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

  outro: {
    p1: `Ofcourse hearing from recruiters and engineers is great, but I also love to connect with students, recent grads, and anyone else with a shared interest for building cool stuff - let's watch eachother grow!`,
    p2: `If you're interested in collaborating, adding a new member to your team, or just want to chat, feel free to reach out.`,
  },
}

export default portfolioConfig
