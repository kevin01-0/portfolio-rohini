/** Portfolio content adapted from Rohini Dhanapal's public portfolio website. */
export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Rohini Dhanapal',
  displayName: 'Rohini Dhanapal',
  firstName: 'ROHINI',
  seriesTag: 'UI/UX DESIGNER',
  originalLabel: 'ROHINI DESIGN STUDIO',
  role: 'UI/UX Designer',
  tagline: ['UI/UX Design', 'Creative Thinker', 'Web Design'],
  intro: 'I design experiences that simplify life and feel intuitive. For me, good design feels effortless, clean, and connects deeply.',
  location: 'Available for projects',
  email: 'rohinidhanapl2005@gmail.com',
  phone: '+91 97867 82133',
  links: {
    linkedin: 'https://www.linkedin.com/in/rohini-d-84a40a293/',
    behance: 'https://www.behance.net/rohinid3',
    github: '',
  },
  resumePdf: '',
  // User-provided portrait image.
  portrait: { src: '/images/rohini-portrait.png', srcSet: '', alt: 'Rohini Dhanapal portrait' },
  interests: ['Photo Editing', 'Logo Design', 'Branding', 'Product Design', 'Photography', 'App Design'],
};

export const education: { school: string; place: string; degree: string; period: string; score: string }[] = [];
export const experience: { company: string; role: string; place: string; period: string; points: string[] }[] = [];

export type Metric = { value: string; label: string };
export type Project = {
  id: string; title: string; year: string; genre: string; logline: string; stack: string[];
  build: string[]; features: string[]; metrics: Metric[]; github?: string; palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'zenvy', title: 'Zenvy – AI Lifestyle & Wellness', year: 'Case Study', genre: 'Case Study',
    logline: 'A simple app to manage daily tasks. Helps you stay organized, save time, and make daily life more productive.',
    stack: ['Figma', 'Prototyping', 'User Research'],
    build: ['Designed a lifestyle and wellness app concept focused on helping people manage daily tasks and stay organized.'],
    features: ['Daily task management', 'Lifestyle and wellness focus', 'User research', 'Interactive prototyping'], metrics: [],
    github: 'https://www.behance.net/gallery/248032171/Zenvy-AI-Wellness-Lifestyle-App',
    palette: { from: '#1b0929', via: '#4b1b68', to: '#09070d', accent: '#c69aff' }, motif: 'shield',
  },
  {
    id: 'auto-ride', title: 'AUTO RIDE', year: 'Website Design', genre: 'Website Design',
    logline: 'A clean and structured website UI created in Photoshop, focused on layout, alignment, typography, and visual hierarchy.',
    stack: ['Photoshop', 'UI Design'],
    build: ['Created a website design concept with attention to layout, alignment, typography, and visual hierarchy.'],
    features: ['Structured page layout', 'Typography hierarchy', 'Alignment and spacing', 'Visual consistency'], metrics: [],
    github: 'https://www.behance.net/gallery/234460885/AUTO-RIDE',
    palette: { from: '#101b2a', via: '#31526b', to: '#08090d', accent: '#8cc7e8' }, motif: 'flow',
  },
  {
    id: 'ableton', title: 'Ableton', year: 'Website Recreated', genre: 'Website Recreated',
    logline: 'Recreated the Ableton website using HTML and CSS, focusing on layout, responsiveness, and matching the visual style.',
    stack: ['HTML', 'CSS'],
    build: ['Recreated the website structure and visual styling using HTML and CSS.'],
    features: ['HTML and CSS implementation', 'Responsive layout focus', 'Visual style recreation'], metrics: [],
    github: 'https://rohinidhanapal2005-oss.github.io/portfolio/ableton.html',
    palette: { from: '#171717', via: '#4a4a4a', to: '#080808', accent: '#e7e7e7' }, motif: 'tenants',
  },
  {
    id: 'monogram', title: 'Monogram', year: 'Website Recreated', genre: 'Website Recreated',
    logline: 'Recreated the Monogram website in HTML, CSS, and Bootstrap, focusing on layout, responsiveness, and clean code.',
    stack: ['HTML', 'CSS', 'Bootstrap'],
    build: ['Recreated the website layout with responsive styling and Bootstrap.'],
    features: ['HTML and CSS', 'Bootstrap', 'Responsive layout', 'Clean page structure'], metrics: [],
    github: 'https://rohinidhanapal2005-oss.github.io/portfolio/monogram.html',
    palette: { from: '#161616', via: '#5b493d', to: '#080808', accent: '#e2c4aa' }, motif: 'flow',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  { id: 'photo-editing', title: 'Photo Editing', org: 'Passion & Craft', detail: 'Creative photo editing and visual composition.', laurel: 'Creative Work' },
  { id: 'logo-design', title: 'Logo Design', org: 'Passion & Craft', detail: 'Creating memorable visual identities.', laurel: 'Visual Identity' },
  { id: 'branding', title: 'Branding', org: 'Passion & Craft', detail: 'Building a consistent look and feel for brands.', laurel: 'Brand Design' },
  { id: 'product-design', title: 'Product Design', org: 'Passion & Craft', detail: 'Designing clear, useful product experiences.', laurel: 'Product Design' },
  { id: 'photography', title: 'Photography', org: 'Passion & Craft', detail: 'Capturing details, moments, and perspectives.', laurel: 'Photography' },
  { id: 'app-design', title: 'App Design', org: 'Passion & Craft', detail: 'Designing app interfaces and user flows.', laurel: 'App Design' },
];

export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [];
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  { id: 'design', title: 'Design Tools', subtitle: 'Visual design and prototyping', skills: [
    { name: 'Figma', mono: 'Fi' }, { name: 'Photoshop', mono: 'Ps' }, { name: 'Illustrator', mono: 'Ai' }, { name: 'Canva', mono: 'Ca' },
  ] },
  { id: 'web', title: 'Web Skills', subtitle: 'Frontend foundations', skills: [
    { name: 'HTML', mono: 'Ht' }, { name: 'CSS', mono: 'Cs' }, { name: 'Bootstrap', mono: 'Bs' }, { name: 'JavaScript', mono: 'Js' },
  ] },
];
export const skillEvidence: Record<string, string[]> = {
  Figma: ['Zenvy – AI Lifestyle & Wellness'], Photoshop: ['AUTO RIDE'], Illustrator: ['Logo Design'], Canva: ['Branding and visual design'],
  HTML: ['Ableton', 'Monogram'], CSS: ['Ableton', 'Monogram'], Bootstrap: ['Monogram'], JavaScript: ['Listed in portfolio skills'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
export const seasons: Season[] = [
  { number: 1, title: 'UI/UX Design', period: 'Portfolio', synopsis: 'A collection of interface and product design work.', episodes: [
    { code: 'P01', title: 'Zenvy', description: projects[0].logline, tags: projects[0].stack, runtime: 'Case Study', palette: violet },
    { code: 'P02', title: 'AUTO RIDE', description: projects[1].logline, tags: projects[1].stack, runtime: 'Website Design', palette: ocean },
  ] },
  { number: 2, title: 'Web Design', period: 'Portfolio', synopsis: 'Website recreations built to practice layout, responsiveness, and styling.', episodes: [
    { code: 'P03', title: 'Ableton', description: projects[2].logline, tags: projects[2].stack, runtime: 'Website Recreated', palette: crimson },
    { code: 'P04', title: 'Monogram', description: projects[3].logline, tags: projects[3].stack, runtime: 'Website Recreated', palette: amber },
  ] },
  { number: 3, title: 'Passion & Craft', period: 'Creative Work', synopsis: 'Creative areas featured in the portfolio.', episodes: [
    { code: 'C01', title: 'Branding & Logo Design', description: 'Visual identity, branding, and logo design.', tags: ['Branding', 'Logo Design'], runtime: 'Creative Practice', palette: jade },
    { code: 'C02', title: 'Photo & App Design', description: 'Photo editing, photography, and app design.', tags: ['Photo Editing', 'Photography', 'App Design'], runtime: 'Creative Practice', palette: violet },
  ] },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Case Study', title: 'Zenvy', detail: 'AI Lifestyle & Wellness', palette: violet },
  { label: 'Website Design', title: 'AUTO RIDE', detail: 'Photoshop UI design', palette: ocean },
  { label: 'Website Recreated', title: 'Ableton', detail: 'HTML & CSS', palette: crimson },
  { label: 'Website Recreated', title: 'Monogram', detail: 'HTML, CSS & Bootstrap', palette: amber },
  { label: 'Design Tool', title: 'Figma', detail: 'Prototyping and user research', palette: violet },
  { label: 'Design Tool', title: 'Photoshop', detail: 'Website UI and photo editing', palette: ocean },
  { label: 'Creative Work', title: 'Branding', detail: 'Visual identity and consistency', palette: crimson },
  { label: 'Creative Work', title: 'Product Design', detail: 'Clear, intuitive experiences', palette: jade },
  { label: 'Creative Work', title: 'Photography', detail: 'Capturing visual moments', palette: amber },
  { label: 'Creative Work', title: 'App Design', detail: 'Interfaces and user flows', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Hello', title: "I'm Rohini", lines: ['UI/UX Designer', 'I design experiences that simplify life and feel intuitive.'], chips: ['Creative Thinker', 'UI/UX'] },
  { kicker: 'Featured Project', title: 'Zenvy', lines: [projects[0].logline], chips: projects[0].stack },
  { kicker: 'Website Design', title: 'AUTO RIDE', lines: [projects[1].logline], chips: projects[1].stack },
  { kicker: 'Website Recreation', title: 'Ableton & Monogram', lines: [projects[2].logline, projects[3].logline], chips: ['HTML', 'CSS', 'Bootstrap'] },
  { kicker: 'Passion & Craft', title: 'Things I Love Doing', lines: profile.interests, chips: ['Design', 'Photography', 'Branding'] },
  { kicker: 'Contact', title: "Let's Connect", lines: [profile.email, 'LinkedIn and Behance'], chips: ['Available for projects'] },
];

export type ProfileId = 'rohini' | 'recruiter' | 'designer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'rohini', name: 'Rohini', blurb: 'Explore the complete portfolio', color: '#ff3d5a', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Projects and skills first', color: '#4cc9ff', order: ['story', 'skills', 'originals', 'about', 'journey', 'picks', 'moments'] },
  { id: 'designer', name: 'Designer', blurb: 'UI/UX and creative work first', color: '#b98bff', order: ['originals', 'picks', 'skills', 'moments', 'about', 'journey', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'Passion and visual work first', color: '#ffb547', order: ['moments', 'picks', 'originals', 'about', 'skills', 'journey', 'story'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Design approach & contact', palette: violet },
  journey: { nav: 'Journey', card: 'Creative Journey', meta: `${seasons.length} collections`, palette: amber },
  originals: { nav: 'Projects', card: 'Featured Projects', meta: `${projects.length} projects`, palette: crimson },
  picks: { nav: 'Gallery', card: 'Creative Highlights', meta: 'Design and creative work', palette: jade },
  skills: { nav: 'Skills', card: 'Design & Web Skills', meta: `${skillCategories.length} categories`, palette: ocean },
  moments: { nav: 'Passion', card: 'Things I Love Doing', meta: `${achievements.length} creative interests`, palette: crimson },
  story: { nav: 'Portfolio', card: 'Portfolio Snapshot', meta: 'Projects, skills & contact', palette: violet },
};
