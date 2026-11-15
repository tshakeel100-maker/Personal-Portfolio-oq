export const profile = {
  name: 'Tooba Shakeel',
  headline: 'Computer Science Student | Aspiring Software Engineer | Technology Enthusiast',
  university: 'University of North Texas',
  degree: 'B.S. Computer Science',
  graduation: 'May 2029',
  location: 'Texas, USA',
  gpa: '4.0',
  email: 'tshakeel100@gmail.com',
  github: 'https://github.com/tshakeel100-maker',
  linkedin: 'https://www.linkedin.com/in/tooba-shakeel-',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
] as const

export const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C++', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
    ],
  },
  {
    title: 'Computer Science Fundamentals',
    skills: [
      { name: 'Object-Oriented Programming' },
      { name: 'Data Structures and Algorithms' },
      { name: 'Graph Algorithms' },
      { name: 'Computer Architecture' },
      { name: 'Algorithmic Problem-Solving' },
    ],
  },
  {
    title: 'Development and Tools',
    skills: [{ name: 'Linux' }, { name: 'System Development' }, { name: 'Microsoft Office' }],
  },
] as { title: string; skills: { name: string; level?: string }[] }[]

export type ProjectLink = {
  label: string
  href: string
  kind: 'github' | 'demo' | 'external'
}

export type Project = {
  slug: string
  name: string
  tagline?: string
  date?: string
  technologies: string[]
  description: string
  features: string[]
  skills: string[]
  links: ProjectLink[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'package-delivery-route-search',
    name: 'Package Delivery Route Search',
    date: 'November 2026',
    technologies: ['C++'],
    description:
      'Developed a C++ graph-based system using adjacency lists to represent distribution centers and delivery routes.',
    features: [
      'Implemented Breadth-First Search to find shortest paths and minimize the number of connections between centers.',
      'Designed algorithms to identify optimal delivery routes, complete round trips, and determine the most efficient transfer centers.',
    ],
    skills: ['C++', 'Graph Theory', 'Adjacency Lists', 'Breadth-First Search', 'Algorithms', 'Data Structures'],
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/tshakeel100-maker/Package-Delivery-Route-Search',
        kind: 'github',
      },
    ],
  },
  {
    slug: 'odd-one-out',
    name: 'Odd One Out',
    tagline: 'Real-Time Multiplayer Party Game',
    date: 'October 2026',
    technologies: ['JavaScript', 'Netlify Functions', 'Netlify Blobs'],
    description:
      'Developed a mobile-friendly multiplayer party game supporting 2–8 players, featuring secret prompts, answer comparisons, and player voting.',
    features: [
      'Implemented room codes and game logic to manage multiplayer sessions.',
      'Developed winner-determination functionality using AI.',
      'Used Netlify Functions and Netlify Blobs to support server-side game operations and live session state.',
    ],
    skills: [
      'JavaScript',
      'Multiplayer Game Development',
      'Server-Side Functions',
      'Netlify',
      'Session Management',
      'AI Integration',
    ],
    links: [
      { label: 'Play Live Demo', href: 'https://steady-frangipane-40deae.netlify.app/', kind: 'demo' },
      { label: 'View on GitHub', href: 'https://github.com/tshakeel100-maker/Odd-One-Out', kind: 'github' },
    ],
    featured: true,
  },
  {
    slug: 'gpa-optimizer',
    name: 'GPA Optimizer',
    tagline: 'Interactive GPA & Academic Performance Simulator',
    date: 'September 2026',
    technologies: ['Web Development', 'Programming Logic', 'GPA Calculations'],
    description:
      'Developed an interactive GPA simulator that models how midterm scores, final exam performance, and coursework averages affect final course grades and cumulative GPA.',
    features: [
      'Implemented weighted grade calculations.',
      'Developed credit-hour-based GPA projections.',
      'Enabled students to evaluate different academic performance scenarios.',
    ],
    skills: [
      'Mathematical Modeling',
      'Weighted Calculations',
      'GPA Algorithms',
      'Interactive Application Development',
    ],
    links: [{ label: 'View Project', href: 'https://gemini.google.com/share/6b0a9fb016b6', kind: 'external' }],
  },
  {
    slug: 'student-grade-management-system',
    name: 'Student Grade Management System',
    technologies: ['C++'],
    description:
      'Developed a C++ application to record student records, test scores, and calculated averages using structures and dynamic arrays.',
    features: [
      'Developed functionality to manage student records and test scores.',
      'Utilized structures and dynamic arrays to organize and process student information.',
      'Implemented file input/output (I/O) to store and retrieve student data.',
      'Enabled exporting calculated grade results for persistent record keeping.',
    ],
    skills: ['C++', 'Structures', 'Dynamic Arrays', 'File I/O', 'Data Management', 'Programming Logic'],
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/tshakeel100-maker/Student-Grade-Management-System-',
        kind: 'github',
      },
    ],
  },
  {
    slug: 'library-loan-management-system',
    name: 'Library Loan Management System',
    date: 'August 2026',
    technologies: ['C++'],
    description:
      'Designed and developed a C++ library management system across eight classes to manage books, patrons, and loans using object-oriented programming principles.',
    features: [
      'Applied object-oriented programming principles.',
      'Used modular programming and data structures to efficiently organize and process transactions.',
      'Structured the application across eight classes.',
    ],
    skills: ['C++', 'Object-Oriented Programming', 'Classes', 'Data Structures', 'Modular Programming'],
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/tshakeel100-maker/Library-Loan-Management-System',
        kind: 'github',
      },
    ],
  },
]

export const experience = [
  {
    role: 'UNT Eagle Ambassador',
    organization: 'University of North Texas',
    responsibilities: [
      'Represent the university at campus events and official activities.',
      'Conduct campus tours and presentations.',
      'Communicate with prospective students and visitors.',
      'Support university engagement and outreach activities.',
      'Participate in VIP events and interact with university leadership.',
    ],
  },
]

export const honors = [
  { title: "UNT President's List", term: 'Fall 2025' },
  { title: "UNT President's List", term: 'Spring 2026' },
]

export const certifications = [
  {
    title: 'Apply AI at Work Pathway Completion',
    organization: 'OpenAI',
    issued: 'October 2026',
    expires: 'April 2027',
    credentialId: '196202724',
    url: 'https://oaiacademy.credential.net/7b01176c-1e62-42f6-b20b-03c8359749c4',
  },
  {
    title: 'Agents and Workflows',
    organization: 'OpenAI',
    issued: 'October 2026',
    expires: 'April 2027',
    credentialId: '196202246',
    url: 'https://oaiacademy.credential.net/65d5de3a-4893-433a-a8f6-e4e6d746e85d',
  },
  {
    title: 'Applied AI Foundations',
    organization: 'OpenAI',
    issued: 'October 2026',
    expires: 'April 2027',
    credentialId: '196201405',
    url: 'https://oaiacademy.credential.net/d59f268a-aabf-4115-9a43-95de46b27b13',
  },
  {
    title: 'AI Foundations',
    organization: 'OpenAI',
    issued: 'October 2026',
    expires: 'April 2027',
    credentialId: '196202705',
    url: 'https://oaiacademy.credential.net/7ca7bc1b-a399-430c-bbfb-5751f3850787#acc.OPrqynGK',
  },
]
