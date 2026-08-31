export interface DomainInfo {
  id: string;
  name: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  iconName: string;
  color: string;
  accentGlow: string;
  keyTopics: string[];
  handsOnActivities: string[];
  visualHighlights: string[];
  progressiveMatrix: {
    foundational: string;
    progressive: string;
  };
}

export interface PartnerInfo {
  name: string;
  category: string;
  logo?: string;
  tagline?: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "astronomy" | "rocketry" | "robotics" | "awards" | "classroom";
  categoryLabel: string;
  description: string;
  aspect?: string;
}

export const SITE_CONFIG = {
  name: "Space Origin",
  tagline: "Advanced Space Education & Future Skills",
  slogan: "EXPLORE • DISCOVER • INNOVATE",
  heroQuote: "Inspiring the Next Generation of Scientists, Engineers and Space Explorers.",
  email: "teamspaceorigin@gmail.com",
  ceoEmail: "sarvsrest11@gmail.com",
  phones: ["+91 9258077284", "+91 9992888429"],
  address: "Shiv Nagar, Kashipur, Uttarakhand, India",
  stats: [
    { value: "20+", label: "Workshops Delivered", icon: "Rocket" },
    { value: "1000+", label: "Students Inspired", icon: "Users" },
    { value: "20+", label: "Partner Schools", icon: "Building2" },
    { value: "100%", label: "Hands-on Learning", icon: "Sparkles" },
  ],
};

export const WHY_CHOOSE_US = [
  {
    icon: "Hammer",
    title: "Hands-on Learning",
    description: "Students don't just learn theory—they build rockets, assemble circuits, operate telescopes, and execute real experiments.",
    gradient: "from-cyan-500/20 to-blue-600/20",
    borderGlow: "border-cyan-500/40",
  },
  {
    icon: "GraduationCap",
    title: "Industry Designed Curriculum",
    description: "Curated by certified experts in Astronomy, Space Science, STEM, and Artificial Intelligence aligned with futuristic career paths.",
    gradient: "from-purple-500/20 to-pink-600/20",
    borderGlow: "border-purple-500/40",
  },
  {
    icon: "Telescope",
    title: "Real Telescope Experience",
    description: "Live night-sky observations and safe solar astronomy using professional-grade computerized and Newtonian telescopes.",
    gradient: "from-blue-500/20 to-indigo-600/20",
    borderGlow: "border-blue-500/40",
  },
  {
    icon: "Cpu",
    title: "Future Skills & AI",
    description: "Practical exposure to Generative AI, Robotics, Embedded Systems, Prompt Engineering, and Design Thinking.",
    gradient: "from-emerald-500/20 to-cyan-600/20",
    borderGlow: "border-emerald-500/40",
  },
  {
    icon: "School",
    title: "School Friendly (Grade 3+)",
    description: "Tailored pedagogical modules starting from Grade 3 up to senior secondary, easily integrated into academic calendars.",
    gradient: "from-amber-500/20 to-orange-600/20",
    borderGlow: "border-amber-500/40",
  },
  {
    icon: "Award",
    title: "Official Certification",
    description: "Verified certificates of achievement and participation endorsed by Space Origin for every student.",
    gradient: "from-violet-500/20 to-fuchsia-600/20",
    borderGlow: "border-violet-500/40",
  },
];

export const FOUNDER_INFO = {
  name: "Sarvsrest Belwal",
  role: "Co-Founder & CEO",
  company: "Space Origin",
  image: "/images/About/Sarvsrest_Image.jpg",
  quote: "Space has always inspired humanity to dream beyond limits. At Space Origin, our mission is to transform curiosity into innovation by giving students opportunities to experience science through exploration, experimentation, and creativity. Every workshop is designed to ignite imagination, build confidence, and prepare young minds with the skills required for tomorrow's world. We don't simply teach space science—we inspire future scientists, engineers, innovators, and leaders.",
};

export const PARTNERS_LIST: PartnerInfo[] = [
  {
    name: "IAAC",
    category: "Global Competition Partner",
    logo: "/images/About/Partners/IAAC_LOGO.jpg",
    tagline: "International Astronomy and Astrophysics Competition",
  },
  {
    name: "IASC",
    category: "Research Collaboration",
    logo: "/images/About/Partners/IASC_Logo.png",
    tagline: "International Astronomical Search Collaboration (Asteroid Search)",
  },
  {
    name: "Stepping Stones Public School",
    category: "Partner Institution",
    logo: "/images/About/Partners/Stepping_Stone.jpg",
    tagline: "STEM Excellence Partner",
  },
  {
    name: "Shivalik Holy Mount Public School",
    category: "Partner Institution",
    logo: "/images/About/Partners/Shivalik_Holy_Mount_Logo.jpg",
    tagline: "Astronomy Camp Host",
  },
  {
    name: "Jain Global School Rudrapur",
    category: "Partner Institution",
    logo: "/images/About/Partners/Jain_Global_Rudrpur_Logo.png",
    tagline: "Robotics & Space Club",
  },
  {
    name: "St. Joseph School",
    category: "Partner Institution",
    logo: "/images/About/Partners/St_Joseph_Logo.png",
    tagline: "Curriculum Partner",
  },
  {
    name: "Uttarakhand Astro Tour Guide",
    category: "Eco-Astro Tourism",
    logo: "/images/About/Partners/Uttarakhand_Tour_Logo.webp",
    tagline: "Himalayan Dark Sky Partner",
  },
  {
    name: "Blooming Public School",
    category: "Partner Institution",
    tagline: "Science Exploration Camp",
  },
  {
    name: "Vidya Mandir Bhatrojkhan",
    category: "Partner Institution",
    tagline: "Regional Outreach Program",
  },
];

export const ENROLLMENT_STEPS = [
  {
    step: "01",
    title: "Contact Us",
    description: "Reach out via our portal, direct call, or email. Share your institution's grade levels and primary learning objectives.",
    contactDetails: "teamspaceorigin@gmail.com | +91 9258077284",
    icon: "PhoneCall",
  },
  {
    step: "02",
    title: "Schedule a Consultation",
    description: "Discuss curriculum alignment, batch sizes, equipment requirements, and schedule dates with our pedagogical team.",
    contactDetails: "Online or in-person sync",
    icon: "CalendarCheck",
  },
  {
    step: "03",
    title: "Free Demonstration",
    description: "We conduct an interactive demo session with live telescopes, optical tools, or rocketry kits at your campus.",
    contactDetails: "Live engaging experience",
    icon: "Sparkles",
  },
  {
    step: "04",
    title: "Workshop & Kit Planning",
    description: "Customized syllabus tailoring, safety protocols, activity kits delivery, and cohort scheduling.",
    contactDetails: "Tailored to school timetable",
    icon: "Sliders",
  },
  {
    step: "05",
    title: "Launch Your Program",
    description: "Our certified educators arrive with all experimental apparatus to deliver an unforgettable space lab experience.",
    contactDetails: "Campus lift-off & Certification",
    icon: "Rocket",
  },
];

export const DOMAINS: DomainInfo[] = [
  {
    id: "astronomy",
    name: "Astronomy",
    tagline: "Explore the Universe",
    shortDesc: "Introduce students to the wonders of the night sky, celestial objects, constellations, planets, and observational astronomy with real telescopes.",
    longDesc: "Transform students from casual night-sky gazers into curious observational scientists. From understanding lunar craters and Saturn's rings to tracking sunspots through specialized solar filters, students master the physics of optical instruments and the celestial coordinate system.",
    image: "/images/Workshops/Astronomy.png",
    iconName: "Telescope",
    color: "cyan",
    accentGlow: "rgba(6, 182, 212, 0.4)",
    keyTopics: [
      "Telescope Optics & Alignment (Reflector & Refractor)",
      "Safe Solar Observation & Sunspot Mapping",
      "Constellation Mapping & Sky Navigation",
      "Planetary Science & Lunar Topography",
      "Deep Sky Objects (Nebulae, Galaxies & Star Clusters)",
    ],
    handsOnActivities: [
      "Operating 6-inch & 8-inch motorized telescopes",
      "Identifying major asterisms using planispheres & star charts",
      "Solar projection & eclipse simulation",
      "Citizen science asteroid discovery tracking (IASC)",
    ],
    visualHighlights: ["Night sky stargazing", "Planetary observations", "Optical lenses", "Constellation charts"],
    progressiveMatrix: {
      foundational: "Hands-on stargazing and introductory telescope alignment workshop (1-3 sessions).",
      progressive: "Class 6: Sky Coordinates → Class 7: Astrophotography Basics → Class 8: Deep Space Optics → Class 9+: Real Astrometry & Asteroid Hunting.",
    },
  },
  {
    id: "robotics",
    name: "Robotics",
    tagline: "Build. Engineer. Innovate.",
    shortDesc: "Introduces students to engineering, machines, automation, microcontrollers, and sensory feedback systems through hands-on fabrication.",
    longDesc: "Students learn how ideas are transformed into working mechatronic systems by designing, building, wiring, programming, and testing robotic systems. Fosters engineering intuition and problem-solving.",
    image: "/images/Workshops/Robotics.png",
    iconName: "Cpu",
    color: "purple",
    accentGlow: "rgba(168, 85, 247, 0.4)",
    keyTopics: [
      "Microcontrollers & Circuit Prototyping (Arduino / ESP32)",
      "Sensors & Actuators (Ultrasonic, IR, Gyro, Servo)",
      "Autonomous Rovers & Line Followers",
      "Robotic Arms & Kinematics",
      "Planetary Rover Exploration Challenge",
    ],
    handsOnActivities: [
      "Assembling multi-terrain planetary rovers",
      "Wiring obstacle-avoidance logic circuits",
      "Programming sensor loops for autonomous navigation",
      "Inter-school robotics maze navigation competitions",
    ],
    visualHighlights: ["Student rovers", "Circuit boards", "Robotics kits", "Sensors in action"],
    progressiveMatrix: {
      foundational: "Chassis assembly and basic sensor wiring for a Mars rover model.",
      progressive: "Class 6: Circuit Basics → Class 7: Microcontroller Logic → Class 8: Wireless Rover Telemetry → Class 9+: Autonomous AI Navigation.",
    },
  },
  {
    id: "space-science",
    name: "Space Science",
    tagline: "Understand Space Beyond the Stars",
    shortDesc: "Connect theoretical scientific concepts with real-world space missions, rocket propulsion, satellite orbits, and planetary exploration.",
    longDesc: "Space Science takes students deep into aerodynamic physics, propulsion mechanics, satellite telemetry, and planetary exploration missions. Students build pneumatic and hydro-rockets, calculate ballistic trajectories, and explore orbital mechanics.",
    image: "/images/Workshops/Space_Science.png",
    iconName: "Rocket",
    color: "blue",
    accentGlow: "rgba(59, 130, 246, 0.4)",
    keyTopics: [
      "Rocket Propulsion & Newton's Third Law",
      "CanSat & CubeSat Satellite Subsystems",
      "Orbital Mechanics & Escape Velocity",
      "Space Missions: Chandrayaan, Artemis & Voyager",
      "Life Support Systems & Space Habitats",
    ],
    handsOnActivities: [
      "Building and launching dual-stage pressurized water rockets",
      "Aerodynamic fin design & center-of-mass balancing",
      "Assembling functional sensor payloads (CanSat)",
      "Simulating gravitational slingshot trajectories",
    ],
    visualHighlights: ["Rocket launches", "Satellite models", "Atmospheric payloads", "Trajectory tests"],
    progressiveMatrix: {
      foundational: "Rocket aerodynamic fabrication and live launch pad session.",
      progressive: "Class 6: Hydro-Rocketry → Class 7: CanSat Telemetry → Class 8: Orbital Dynamics & Propulsion → Class 9+: High-Altitude Balloon Payloads.",
    },
  },
  {
    id: "ai-coding",
    name: "AI & Coding",
    tagline: "Create With Technology",
    shortDesc: "Empower students to solve real-world problems using computational thinking, Python algorithms, AI tools, and prompt engineering.",
    longDesc: "AI & Coding equips young innovators with the tools shaping tomorrow's universe. From writing algorithms that classify space telescope imagery to applying prompt engineering and building generative applications, students become digital creators rather than passive consumers.",
    image: "/images/Workshops/AI_and_Coding.png",
    iconName: "Code2",
    color: "emerald",
    accentGlow: "rgba(16, 185, 129, 0.4)",
    keyTopics: [
      "Computational Thinking & Algorithmic Logic",
      "Python for Science & Data Analysis",
      "Generative AI & Prompt Engineering Fundamentals",
      "Computer Vision for Space Imagery Analysis",
      "Building Interactive Web & AI Assistants",
    ],
    handsOnActivities: [
      "Writing Python scripts to identify craters in lunar images",
      "Engineering custom prompts for AI-driven research assistants",
      "Building interactive web dashboards for space mission tracking",
      "Creating mini machine-learning classifiers for star spectra",
    ],
    visualHighlights: ["Coding screens", "AI model playgrounds", "Data plots", "Student hackathons"],
    progressiveMatrix: {
      foundational: "Block-based or introductory Python space game & prompt engineering workshop.",
      progressive: "Class 6: Computational Logic → Class 7: Python Fundamentals → Class 8: Data & Computer Vision → Class 9+: Deep Learning & LLM Apps.",
    },
  },
  {
    id: "personality-development",
    name: "Personality Development",
    tagline: "Build Confidence. Think Bigger.",
    shortDesc: "Develop critical soft skills: public speaking, scientific communication, team leadership, creative problem-solving, and growth mindset.",
    longDesc: "True scientific breakthroughs require visionary communicators and collaborative leaders. Our Personality Development program equips students with the confidence to pitch scientific ideas, speak publicly, debate complex ethics of space exploration, and lead diverse teams under pressure.",
    image: "/images/Workshops/Personality_Development.png",
    iconName: "Users",
    color: "pink",
    accentGlow: "rgba(236, 72, 153, 0.4)",
    keyTopics: [
      "Public Speaking & Scientific Presentation",
      "Collaborative Problem Solving Under Constraints",
      "Debating Space Policy & Technological Ethics",
      "Design Thinking & Innovation Mindset",
      "Leadership & Crisis Management Simulations",
    ],
    handsOnActivities: [
      "Simulated Mission Control crisis communication drill",
      "Youth Space TED-style mini keynote presentations",
      "Hackathon pitching & peer design critiques",
      "Collaborative space colony resource allocation games",
    ],
    visualHighlights: ["Team presentations", "Stage speeches", "Group brainstorming", "Leadership awards"],
    progressiveMatrix: {
      foundational: "Interactive pitch deck and science communication presentation session.",
      progressive: "Class 6: Expressive Communication → Class 7: Team Collaboration → Class 8: Debate & Critical Thinking → Class 9+: Executive Leadership & Pitching.",
    },
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, src: "/images/Gallery/1.JPG", title: "Astronomy Camp Telescope Session", category: "astronomy", categoryLabel: "Astronomy & Sky", description: "Students peering through computerized telescope during night camp." },
  { id: 2, src: "/images/Gallery/2.JPG", title: "Rocketry Dynamics & Build", category: "rocketry", categoryLabel: "Rocketry & Space", description: "Young rocketeers assembling aerodynamic fin assemblies." },
  { id: 3, src: "/images/Gallery/3.JPG", title: "Solar Filter Sun Observation", category: "astronomy", categoryLabel: "Astronomy & Sky", description: "Safe direct sunspot observation using certified solar filter lenses." },
  { id: 4, src: "/images/Gallery/4.png", title: "Space Science Theory Lab", category: "classroom", categoryLabel: "Classroom Labs", description: "Engaging multimedia classroom lecture on the Solar System." },
  { id: 5, src: "/images/Gallery/5.jpeg", title: "Robotics Chassis Assembly", category: "robotics", categoryLabel: "Robotics & AI", description: "Students wiring obstacle-detection sensors on custom chassis." },
  { id: 6, src: "/images/Gallery/6.JPG", title: "Outdoor Stargazing Experience", category: "astronomy", categoryLabel: "Astronomy & Sky", description: "Himalayan clear-sky astronomy camp with student cohorts." },
  { id: 7, src: "/images/Gallery/7.JPG", title: "Hydro Rocket Pressurization", category: "rocketry", categoryLabel: "Rocketry & Space", description: "Excited team preparing pressure chamber for launch sequence." },
  { id: 8, src: "/images/Gallery/8.jpeg", title: "Certificate Distribution Ceremony", category: "awards", categoryLabel: "Awards & Joy", description: "Proud students receiving official Space Origin participation awards." },
  { id: 9, src: "/images/Gallery/9.JPG", title: "Telescope Alignment Demonstration", category: "astronomy", categoryLabel: "Astronomy & Sky", description: "Instructor demonstrating polar alignment on equatorial mount." },
  { id: 10, src: "/images/Gallery/10.JPG", title: "High-Altitude Rocket Launch", category: "rocketry", categoryLabel: "Rocketry & Space", description: "Split-second liftoff of student-engineered water rocket." },
  { id: 11, src: "/images/Gallery/11.JPG", title: "Young Astronomers Stargazing", category: "astronomy", categoryLabel: "Astronomy & Sky", description: "Hands-on telescope handling by junior school students." },
  { id: 12, src: "/images/Gallery/12.jpeg", title: "Collaborative Engineering Workshop", category: "classroom", categoryLabel: "Classroom Labs", description: "Students brainstorming solutions during engineering design challenge." },
  { id: 13, src: "/images/Gallery/13.jpeg", title: "Coding & AI Playground", category: "robotics", categoryLabel: "Robotics & AI", description: "Interactive session on algorithms and creative computing." },
  { id: 14, src: "/images/Gallery/14.JPG", title: "Solar Observation Lineup", category: "astronomy", categoryLabel: "Astronomy & Sky", description: "Entire school cohort queued for daylight solar prominence view." },
  { id: 15, src: "/images/Gallery/15.JPG", title: "Rocket Recovery & Inspection", category: "rocketry", categoryLabel: "Rocketry & Space", description: "Students analyzing trajectory and parachute deployment." },
  { id: 16, src: "/images/Gallery/16.JPG", title: "Hands-on Hardware Lab", category: "robotics", categoryLabel: "Robotics & AI", description: "Deep dive into breadboards, microcontrollers, and LEDs." },
  { id: 17, src: "/images/Gallery/17.jpeg", title: "Special Recognition Award", category: "awards", categoryLabel: "Awards & Joy", description: "Awarding outstanding project innovators at school auditorium." },
  { id: 18, src: "/images/Gallery/18.JPG", title: "Telescope Optical Collimation", category: "astronomy", categoryLabel: "Astronomy & Sky", description: "Explaining mirror alignment and focal lengths to students." },
  { id: 19, src: "/images/Gallery/19.jpeg", title: "Interactive Space Quiz & Debate", category: "classroom", categoryLabel: "Classroom Labs", description: "Vibrant debate on space exploration vs terrestrial technology." },
  { id: 20, src: "/images/Gallery/20.jpeg", title: "Teamwork & Mission Control", category: "classroom", categoryLabel: "Classroom Labs", description: "Students collaborating on mission simulation roles." },
  { id: 21, src: "/images/Gallery/21.JPG", title: "Evening Astronomy Gathering", category: "astronomy", categoryLabel: "Astronomy & Sky", description: "Dusk setup for planet tracking and lunar exploration." },
  { id: 22, src: "/images/Gallery/22.JPG", title: "Mastering the Launchpad", category: "rocketry", categoryLabel: "Rocketry & Space", description: "Field trial calibration for maximum ballistic distance." },
  { id: 23, src: "/images/Gallery/23.JPG", title: "Grand Space Origin Cohort", category: "awards", categoryLabel: "Awards & Joy", description: "Full school batch celebrating successful workshop completion." },
];

export const COMPARISON_DATA = [
  {
    feature: "Pedagogical Approach",
    foundational: "Selected premium modular workshops customized to immediate school priorities.",
    progressive: "Continuous year-long structured curriculum embedded into weekly school timetable.",
  },
  {
    feature: "Program Duration",
    foundational: "Flexible workshop blocks (5, 10, or 15 high-impact sessions).",
    progressive: "Full academic year continuous learning progression (Grade 6 through Grade 9+).",
  },
  {
    feature: "Curricular Structure",
    foundational: "Standalone thematic deep-dives with immediate experimental deliverables.",
    progressive: "Hierarchical build-up: Concepts evolve from Discover to Build, Advance, and Master.",
  },
  {
    feature: "Workshop Selection",
    foundational: "Custom mix tailored to annual activity plans, science weeks, or club events.",
    progressive: "Standardized multi-year learning pathways with cumulative project portfolios.",
  },
  {
    feature: "Skill Advancement",
    foundational: "Rapid immersion, spark of curiosity, and key conceptual understanding.",
    progressive: "Long-term mastery, competitive portfolio creation, and Olympiad readiness.",
  },
  {
    feature: "Ideal For",
    foundational: "Schools seeking flexible interventions, annual enrichment, or intro camps.",
    progressive: "Schools aiming to establish a benchmark Space & STEM Center of Excellence.",
  },
];
