// Portfolio configuration - Edit this file to customize your portfolio

// To change text simple edit the strings in this file

// To change images, add or replace images in the `public` folder and update the paths in this file

// To change your resume, replace the `brandon_manley_resume.pdf` file in the `public` folder with your own PDF file of the same name

export const portfolioConfig = {
  name: 'Brandon Manley',
  title: 'Mechanical Engineer, EIT',
  location: 'British Columbia, Canada',
  email: 'brm2495@email.com',
  tagline: 'Thorough, resourceful. With grit and a dash of humor.',

  bio: {
    intro:
      'A recent UVic mechanical engineering graduate with quality co-op experience at organizations like <strong>Ballard Power Systems</strong> and Wiser Marine Technologies, I ramp up quickly and know which details to pay close attention to.',
    experience:
      "I'm particularly interested in roles that involve <strong>composite manufacturing, automotive engineering, or simulation-driven development;</strong> postings involving any of those areas excite me greatly. I have a solid foundation in CAD design, thermal analysis, and project management, but I'm looking forward to a wider breadth of experience and deeper specialization in my next role.",
    personal:
      "When I'm not engineering, you can find me working on my Acura RSX, rewatching Vinland Saga, or spending quality time with friends or my many siblings (ask me how many I have)",
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/brandon-manley95/',
  },

  workExperience: [
    {
      title: 'Chassis and Suspension Lead',
      company: 'UVic Formula Hybrid Team',
      location: 'Victoria, BC',
      duration: 'Aug 2024 - Present',
      description:
        'Redesigned and manufactured improved components for the UVic Formula Hybrid car, helping qualify the team for competition for the first time in years',
      // edit below
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
      description: 'Designed and prototyped [BLAH BLAH BLAH]',
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
      // edit below
      technologies: ['SolidWorks', 'ANSYS', 'Lean Manufacturing'],
      link: 'http://wisertech.ca/',
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
      title: 'Composite Seat for Formula Hybrid',
      description:
        'Designed, tested, and manufactured an ergonomic composite seat for the UVic Formula Hybrid car, reducing weight by 15% while improving driver comfort and safety.',
      // edit below
      technologies: [
        'SolidWorks',
        'ANSYS',
        'PLC Programming',
        'Lean Manufacturing',
      ],
      // the thumbnails are the ones we wanted drawings for
      // change below to `composite_seat_thumbnail.png` add a file with the below name to the public folder
      thumbnailImg: 'project_placeholder.png',
      // add a file with the below name to the public folder
      link: 'composite_seat.pdf',
    },
    {
      title: 'Side Pods for Formula Hybrid',
      description:
        'Designed, tested, and manufactured aerodynamic side pods for the UVic Formula Hybrid racecar, optimizing airflow and reducing drag.',
      technologies: ['MATLAB', 'CFD Analysis', 'Thermodynamics', '3D Printing'],
      // change below to `side_pods_thumbnail.png` add a file with the below name to the public folder
      thumbnailImg: 'project_placeholder.png',
      // add a file with the below name to the public folder
      link: 'side_pods.pdf',
    },
    {
      title: 'Rear Wing for Formula Hybrid',
      description:
        'Designed, tested, and manufactured a high-performance rear wing for the UVic Formula Hybrid racecar, improving downforce and stability at high speeds.',
      technologies: ['MATLAB', 'CFD Analysis', 'Thermodynamics', '3D Printing'],
      // change below to `rear_wing_thumbnail.png` add a file with the below name to the public folder
      thumbnailImg: 'project_placeholder.png',
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
