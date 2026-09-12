import type { PortfolioData } from '../types/portfolio';

// The single, centralized showcase URL for Jaishmon's dedicated projects platform
export const PROJECTS_URL: string =
  import.meta.env.VITE_PROJECTS_URL || 'https://projects.jaishmon.dev';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Jaishmon M',
    primaryPosition: 'Software Engineer & Builder',
    secondaryPosition: 'Computer Science • Blockchain • Systems • Cybersecurity',
    role: 'Co-Founder & CTO at Zladinger',
    roleDescription: 'A technology solutions company currently being built.',
    eyebrow: 'SOFTWARE ENGINEER • BUILDER • CTO',
    headline: {
      part1: 'I LEARN.',
      part2: 'I BUILD.',
      part3: 'I BREAK.',
      part4: 'I BUILD BETTER.',
    },
    heroBio:
      "I'm a Computer Science student, software engineer and curious builder exploring the intersection of software, blockchain, cybersecurity and real-world systems.",
    mottos: [
      'Curious enough to explore anything.',
      'Technical enough to understand it.',
      'Crazy enough to build it.',
    ],
    avatarPath: '/assets/profile.jpg',
  },

  projectsUrl: PROJECTS_URL,

  socials: {
    github: 'https://github.com/Jaishmon-codes',
    linkedin: 'https://www.linkedin.com/in/jaishmon-m/',
    hackerrank: 'https://www.hackerrank.com/profile/jaishmonofficial',
    email: 'jaishmonofficial@gmail.com',
  },

  techStrip: [
    'HTML',
    'CSS',
    'React',
    'JavaScript',
    'Java',
    'Python',
    'SQL',
    'AWS',
    'Blockchain',
    'Cybersecurity',
    'Embedded Systems',
    'Data Structures & Algorithms',
  ],

  philosophySteps: [
    {
      number: '01',
      title: 'LEARN',
      tagline: 'Deep dive into first principles',
      description:
        'Deconstruct the problem down to fundamental constraints, protocols, and algorithmic invariants before writing a single line of code.',
    },
    {
      number: '02',
      title: 'APPLY',
      tagline: 'Translate theory to implementation',
      description:
        'Take architectural patterns, data structures, and cryptographic primitives off paper and test them against real environments.',
    },
    {
      number: '03',
      title: 'BUILD',
      tagline: 'Ship working software end-to-end',
      description:
        'Synthesize frontend usability, resilient backend services, and robust data persistence into coherent, functional products.',
    },
    {
      number: '04',
      title: 'BREAK',
      tagline: 'Stress test and find the edges',
      description:
        'Probe the system through edge cases, concurrency spikes, adversarial inputs, and structural bottlenecks to uncover silent failures.',
    },
    {
      number: '05',
      title: 'BUILD BETTER',
      tagline: 'Refactor for resilience & scale',
      description:
        'Re-architect with the insights gained from breakage, turning fragile prototypes into reliable, battle-tested software.',
    },
  ],

  buildingAreas: [
    {
      number: '01',
      title: 'SOFTWARE',
      subtitle: 'Applications & Web Systems',
      description:
        'Building responsive, intuitive interfaces and robust full-stack web platforms engineered for performance, modularity, and clean codebases.',
      tags: ['React', 'TypeScript', 'Web Applications', 'Modern UI/UX', 'Component Architecture'],
    },
    {
      number: '02',
      title: 'SYSTEMS',
      subtitle: 'Backend, Databases & Infrastructure',
      description:
        'Designing structured APIs, relational data models, normalized schemas, and server-side runtimes capable of deterministic data handling.',
      tags: ['Backend Architecture', 'REST APIs', 'SQL Modeling', 'Concurrency', 'System Design'],
    },
    {
      number: '03',
      title: 'BLOCKCHAIN',
      subtitle: 'Decentralized Systems & Web3',
      description:
        'Exploring trustless consensus mechanisms, distributed ledgers, smart contract execution environments, and decentralized protocol engineering.',
      tags: ['Consensus Protocols', 'Smart Contracts', 'Web3 Architecture', 'Distributed State'],
    },
    {
      number: '04',
      title: 'SECURITY',
      subtitle: 'Cybersecurity, CTFs & Resilient Defense',
      description:
        'Analyzing attack vectors, exploring defensive security postures, practicing CTF exploitation techniques, and writing resilient code.',
      tags: ['Adversarial Analysis', 'CTF Practice', 'Network Security', 'Defensive Engineering'],
    },
    {
      number: '05',
      title: 'REAL-WORLD TECHNOLOGY',
      subtitle: 'Embedded Systems & Automation',
      description:
        'Connecting digital logic with hardware controllers, sensors, and micro-controllers to bridge the gap between software and physical devices.',
      tags: ['Embedded Systems', 'Hardware Interfacing', 'Automation', 'Physical-Digital Bridge'],
    },
  ],

  engineeringMindset: [
    {
      label: 'PROBLEM',
      sub: 'Messy Real-World Friction',
      description: 'Isolating operational bottlenecks, user friction, or unorganized information flows.',
    },
    {
      label: 'ALGORITHM',
      sub: 'Computational Rigor',
      description: 'Selecting optimal algorithmic strategies, time-space bounds, and deterministic logic.',
    },
    {
      label: 'SYSTEM',
      sub: 'Architectural Blueprint',
      description: 'Structuring data schemas, communication layers, and failure boundaries.',
    },
    {
      label: 'APPLICATION',
      sub: 'Executable Software',
      description: 'Packaging backend resilience into ergonomic, accessible digital interfaces.',
    },
    {
      label: 'REAL-WORLD IMPACT',
      sub: 'Measurable Value',
      description: 'Transforming theoretical complexity into streamlined software that solves the headache.',
    },
  ],

  skillCategories: [
    {
      name: 'LANGUAGES',
      tier: 'WORKING WITH',
      skills: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      name: 'FRONTEND',
      tier: 'WORKING WITH',
      skills: ['React', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Responsive UI'],
    },
    {
      name: 'BACKEND / SOFTWARE ENGINEERING',
      tier: 'WORKING WITH',
      skills: [
        'REST APIs',
        'Authentication & Authorization',
        'Backend Architecture',
        'Server-side Development',
        'API Design',
        'Error Handling',
        'Testing & Debugging',
        'Caching',
        'Concurrency Basics',
        'Networking Fundamentals',
      ],
    },
    {
      name: 'DATABASES',
      tier: 'WORKING WITH',
      skills: [
        'SQL',
        'Relational Database Design',
        'Schema Normalization',
        'Transactions (ACID)',
        'Indexing Strategies',
        'Query Optimization',
        'NoSQL Fundamentals',
      ],
    },
    {
      name: 'SYSTEMS & CORE CS',
      tier: 'WORKING WITH',
      skills: [
        'Operating Systems',
        'Computer Networks',
        'Data Structures & Algorithms',
        'Object-Oriented Programming (OOP)',
        'System Design Fundamentals',
        'Software Architecture Principles',
      ],
    },
    {
      name: 'CLOUD & INFRASTRUCTURE',
      tier: 'EXPLORING',
      skills: ['AWS (Core Services)', 'Cloud Architecture Basics', 'Server Deployment'],
    },
    {
      name: 'DEVOPS & TOOLING',
      tier: 'WORKING WITH',
      skills: ['Git', 'GitHub', 'Linux / Shell Scripting', 'Docker Basics', 'CI/CD Fundamentals'],
    },
    {
      name: 'SPECIAL INTERESTS',
      tier: 'EXPLORING',
      skills: [
        'Blockchain Architecture',
        'Smart Contract Exploration',
        'Cybersecurity & CTFs',
        'Embedded Systems & Hardware',
      ],
    },
  ],

  experience: [
    {
      role: 'Co-Founder & CTO',
      company: 'Zladinger',
      companySubtitle: 'Technology Solutions Company',
      period: '2026 — Present',
      description:
        'Directing overall product engineering and architectural vision for a technology solutions company currently being constructed from the ground up.',
      focusAreas: [
        'System architecture & tech stack selection',
        'Full-stack engineering & solution design',
        'Technical strategy & scalable product roadmap',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'KCL Limited',
      companySubtitle: 'Engineering Internship',
      period: '20 May — 20 July',
      description:
        'Engaged in software development workflows, contributing to internal software tooling, debugging production issues, and working with production codebase conventions.',
      focusAreas: [
        'Software engineering workflows & code reviews',
        'Feature implementation & bug resolution',
        'Collaborative development with senior engineers',
      ],
    },
    {
      role: 'Independent Builder / Freelance',
      company: 'Self-Directed & Client Engagements',
      companySubtitle: 'Applications, Websites & Prototypes',
      period: 'Continuous',
      description:
        'Building client web platforms, end-to-end applications, and rapid prototypes while tackling novel engineering challenges across diverse stacks.',
      focusAreas: [
        'Custom web applications & responsive layouts',
        'Database integrations & backend endpoints',
        'Exploratory technical experiments',
      ],
    },
    {
      role: 'CTFs & Technical Hackathons',
      company: 'Competitive Problem-Solving',
      companySubtitle: 'Security & Rapid Prototyping',
      period: 'Active Participant',
      description:
        'Actively participating in capture-the-flag competitions, algorithm sprints, and hackathons to test system vulnerabilities and build functional solutions under tight constraints.',
      focusAreas: [
        'Cybersecurity exploitation & web vulnerabilities',
        'Rapid MVP prototyping under time limits',
        'Applied algorithmic problem solving',
      ],
    },
  ],

  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    specialization: 'Specialization in Blockchain Technology',
    institution: 'VIT-AP University',
    expectedGraduation: '2028',
    status: 'Undergraduate Student',
  },

  problemSolving: [
    {
      title: 'Data Structures & Algorithms',
      tagline: 'Computational complexity & efficient solutions',
      description:
        'Active problem-solving across core algorithms including dynamic programming, graph traversals, trees, and hash-based structures to deepen algorithmic intuition.',
      items: ['HackerRank Practice', 'Algorithmic Optimization', 'Complexity Analysis'],
    },
    {
      title: 'Cybersecurity & CTFs',
      tagline: 'Breaking defenses to build resilience',
      description:
        'Participating in capture-the-flag events focusing on web application security, binary analysis basics, reconnaissance, and cryptographic flaws.',
      items: ['Web Exploits', 'Vulnerability Inspection', 'Defensive Hardening'],
    },
    {
      title: 'Technical Experiments',
      tagline: 'Learning by breaking real systems',
      description:
        'Building isolated testbeds to understand concurrency bottlenecks, consensus edge cases, packet inspection, and micro-controller automation.',
      items: ['Experimental Prototypes', 'Benchmarking Limits', 'Architecture Spikes'],
    },
  ],

  projectTeasers: [
    {
      number: 'PROJECT 01',
      tag: 'FEATURED BUILD',
      title: 'Enterprise & System Solutions Platform',
      subtitle: 'Scalable Architecture & Product Engine',
      description:
        'A comprehensive platform designed for business operations, real-time data orchestration, and robust backend reliability built from the ground up.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      featured: true,
    },
    {
      number: 'PROJECT 02',
      tag: 'DECENTRALIZED / WEB3',
      title: 'Blockchain State & Verification Protocol',
      subtitle: 'Trustless Ledger & Smart Logic Exploration',
      description:
        'Experimental decentralized protocol exploring verifiable state transitions, cryptographic proofs, and tamper-resistant transaction pipelines.',
      technologies: ['Solidity', 'Web3.js', 'Distributed State', 'Smart Contracts'],
      featured: false,
    },
    {
      number: 'PROJECT 03',
      tag: 'SYSTEMS / SECURITY',
      title: 'Network Analysis & Resilience Framework',
      subtitle: 'Adversarial Defense & Threat Surface Monitor',
      description:
        'System-level utility designed to inspect connection topologies, flag insecure communication channels, and audit backend configuration endpoints.',
      technologies: ['Python', 'Networking Protocols', 'Security Auditing', 'Linux'],
      featured: false,
    },
  ],

  vision: {
    title: "THIS ISN'T THE ENDGAME.",
    subtitle: 'Building with long-term purpose, from first principles to scale.',
    paragraphs: [
      "I don't want to stop at becoming a better developer. I want to keep building — companies, products and systems that solve problems at scale.",
      'Long term, I want to build technology that improves the quality and resilience of the systems around us, particularly in India.',
      'Blockchain, cybersecurity and software are tools. Building is the bigger goal.',
    ],
    pillars: [
      'BUILD FROM ZERO.',
      'BUILD WITH PURPOSE.',
      'BUILD FOR SCALE.',
    ],
  },

  indiaVision: {
    title: 'BUILDING BETTER SYSTEMS.',
    paragraphs: [
      'I want to explore how blockchain, secure software and well-designed systems can contribute to stronger technology infrastructure in India.',
      'One long-term goal is contributing to systems that are more resilient against cyberattacks and help reduce the impact of cybercrime.',
    ],
  },

  constellation: {
    nodes: [
      {
        id: 'blockchain',
        label: 'Blockchain',
        x: 22,
        y: 28,
        category: 'Decentralized',
        description: 'Consensus mechanics, verifiable state, and trust-minimized protocols.',
      },
      {
        id: 'cybersecurity',
        label: 'Cybersecurity',
        x: 78,
        y: 24,
        category: 'Defense',
        description: 'Vulnerability analysis, threat mitigation, and defensive engineering.',
      },
      {
        id: 'system-design',
        label: 'System Design',
        x: 50,
        y: 48,
        category: 'Core',
        description: 'Scalable service topologies, failure domains, and decoupled architecture.',
      },
      {
        id: 'backend',
        label: 'Backend Engineering',
        x: 32,
        y: 72,
        category: 'Systems',
        description: 'Robust REST endpoints, concurrency handling, and server runtimes.',
      },
      {
        id: 'aws',
        label: 'AWS Cloud',
        x: 82,
        y: 65,
        category: 'Infrastructure',
        description: 'Cloud deployment, managed services, and serverless compute primitives.',
      },
      {
        id: 'databases',
        label: 'Databases',
        x: 18,
        y: 52,
        category: 'Persistence',
        description: 'Relational normalization, ACID transactions, and query optimization.',
      },
      {
        id: 'embedded',
        label: 'Embedded Systems',
        x: 65,
        y: 82,
        category: 'Hardware',
        description: 'Micro-controllers, low-level interfacing, and sensor integrations.',
      },
      {
        id: 'algorithms',
        label: 'Algorithms & DSA',
        x: 48,
        y: 18,
        category: 'Foundations',
        description: 'Computational efficiency, asymptotic bounds, and mathematical rigor.',
      },
    ],
    connections: [
      ['algorithms', 'system-design'],
      ['blockchain', 'system-design'],
      ['cybersecurity', 'system-design'],
      ['databases', 'backend'],
      ['backend', 'system-design'],
      ['aws', 'backend'],
      ['system-design', 'aws'],
      ['blockchain', 'cybersecurity'],
      ['backend', 'embedded'],
      ['algorithms', 'databases'],
    ],
  },
};
