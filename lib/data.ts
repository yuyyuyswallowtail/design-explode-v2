export type Tone = "ember" | "aqua" | "crimson" | "butter" | "bone";

export const TONE_HEX: Record<Tone, string> = {
  ember: "#ff6a1f",
  aqua: "#19e3d2",
  crimson: "#e8204f",
  butter: "#ffd84a",
  bone: "#f1ebdd",
};

export const EVENT_DATES = "20—22 NOV 2026";
export const INSPIRATION_URL = "https://www.designbomb.it/";

export const nav = [
  { label: "Program", href: "/program" },
  { label: "Workshops", href: "/workshops" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
] as const;

export const lineup = [
  {
    number: "01",
    name: "VOID STUDIO",
    role: "Creative Technology",
    category: "INTERACTIVE",
    tone: "aqua",
    seed: 3,
  },
  {
    number: "02",
    name: "AFTERIMAGE",
    role: "Art Direction",
    category: "VISUAL",
    tone: "ember",
    seed: 7,
  },
  {
    number: "03",
    name: "NOISE DEPT.",
    role: "Motion & Identity",
    category: "MOTION",
    tone: "crimson",
    seed: 11,
  },
  {
    number: "04",
    name: "COMMON SHAPES",
    role: "Graphic Design",
    category: "TYPE",
    tone: "butter",
    seed: 5,
  },
  {
    number: "05",
    name: "FUTURE FORM",
    role: "Interactive Art",
    category: "3D",
    tone: "aqua",
    seed: 13,
  },
  {
    number: "06",
    name: "MONOCHROME CLUB",
    role: "Digital Culture",
    category: "CULTURE",
    tone: "bone",
    seed: 17,
  },
] as const satisfies readonly {
  number: string;
  name: string;
  role: string;
  category: string;
  tone: Tone;
  seed: number;
}[];

export type EventCategory = "TALK" | "WORKSHOP" | "PARTY" | "EXHIBITION";
export type Day = "FRI" | "SAT" | "SUN";

export const EVENT_TONE: Record<EventCategory, Tone> = {
  TALK: "butter",
  WORKSHOP: "aqua",
  PARTY: "crimson",
  EXHIBITION: "ember",
};

export const events: {
  id: string;
  day: Day;
  date: string;
  time: string;
  title: string;
  location: string;
  category: EventCategory;
  host: string;
  blurb: string;
}[] = [
  {
    id: "e1",
    day: "FRI",
    date: "FRIDAY 20",
    time: "18:30 — 21:00",
    title: "Opening Signal",
    location: "Main Hall",
    category: "TALK",
    host: "with Void Studio",
    blurb: "Doors open on a loud idea: why interfaces should have a pulse.",
  },
  {
    id: "e2",
    day: "FRI",
    date: "FRIDAY 20",
    time: "21:00 — 23:30",
    title: "After Hours",
    location: "Noise Room",
    category: "PARTY",
    host: "with Noise Dept.",
    blurb: "Live visuals, low light, one very large speaker stack.",
  },
  {
    id: "e3",
    day: "SAT",
    date: "SATURDAY 21",
    time: "10:00 — 12:00",
    title: "Visual Systems",
    location: "Studio A",
    category: "WORKSHOP",
    host: "with Common Shapes",
    blurb: "Build a flexible identity grid in two hours, on paper first.",
  },
  {
    id: "e4",
    day: "SAT",
    date: "SATURDAY 21",
    time: "12:30 — 18:00",
    title: "Afterimage Room",
    location: "Gallery 01",
    category: "EXHIBITION",
    host: "with Afterimage",
    blurb:
      "A walk-in show about how images linger after they leave the screen.",
  },
  {
    id: "e5",
    day: "SAT",
    date: "SATURDAY 21",
    time: "14:00 — 16:00",
    title: "Creative Coding",
    location: "Lab 02",
    category: "WORKSHOP",
    host: "with Future Form",
    blurb: "Shaders, particles and a bit of controlled chaos.",
  },
  {
    id: "e6",
    day: "SUN",
    date: "SUNDAY 22",
    time: "16:00 — 18:00",
    title: "Future Interfaces",
    location: "Main Hall",
    category: "TALK",
    host: "with Monochrome Club",
    blurb: "Closing panel on motion, sound and what comes after the screen.",
  },
];

export const projects = [
  {
    n: "01",
    title: "SIGNAL",
    kind: "BRAND IDENTITY",
    year: "2026",
    caption: "A voice-first identity that grows louder with every touchpoint.",
    tone: "ember",
    seed: 21,
  },
  {
    n: "02",
    title: "NIGHT SHIFT",
    kind: "DIGITAL EXPERIENCE",
    year: "2025",
    caption: "A scroll-driven night tour of an imaginary city.",
    tone: "aqua",
    seed: 4,
  },
  {
    n: "03",
    title: "FORM",
    kind: "INTERACTIVE INSTALLATION",
    year: "2025",
    caption: "Light, mirrors and a floor that remembers your steps.",
    tone: "butter",
    seed: 9,
  },
  {
    n: "04",
    title: "NOISE",
    kind: "MOTION SYSTEM",
    year: "2024",
    caption: "A motion grammar for a broadcast that never sits still.",
    tone: "crimson",
    seed: 15,
  },
  {
    n: "05",
    title: "ORBIT",
    kind: "DIGITAL ART",
    year: "2024",
    caption: "Generative objects orbiting a single black sun.",
    tone: "bone",
    seed: 2,
  },
] as const satisfies readonly {
  n: string;
  title: string;
  kind: string;
  year: string;
  caption: string;
  tone: Tone;
  seed: number;
}[];

export const workshops = [
  {
    title: "Creative Coding",
    blurb: "Sketch with shaders, noise and tiny physics engines.",
    duration: "3 h",
    level: "Intermediate",
    mentor: "Future Form",
    tone: "aqua",
    seed: 6,
  },
  {
    title: "Typography Systems",
    blurb: "Scales, rhythm and breaking rules on purpose.",
    duration: "2 h",
    level: "All levels",
    mentor: "Common Shapes",
    tone: "butter",
    seed: 8,
  },
  {
    title: "Motion Identity",
    blurb: "Give a logo a personality using only easing and timing.",
    duration: "3 h",
    level: "Intermediate",
    mentor: "Noise Dept.",
    tone: "crimson",
    seed: 12,
  },
  {
    title: "Experimental 3D",
    blurb: "Sculpt strange objects and light them like posters.",
    duration: "4 h",
    level: "Advanced",
    mentor: "Void Studio",
    tone: "ember",
    seed: 1,
  },
  {
    title: "Digital Collage",
    blurb: "Cut, layer and distort until it feels like a zine.",
    duration: "2 h",
    level: "Beginner",
    mentor: "Afterimage",
    tone: "bone",
    seed: 10,
  },
] as const satisfies readonly {
  title: string;
  blurb: string;
  duration: string;
  level: string;
  mentor: string;
  tone: Tone;
  seed: number;
}[];

export const gallery = [
  {
    caption: "01 — Night Study",
    note: "Poster research / after dark",
    ratio: "aspect-[3/4]",
    span: "md:col-span-5",
    tone: "ember",
    seed: 31,
  },
  {
    caption: "02 — Loud Letters",
    note: "Experimental typography",
    ratio: "aspect-[4/3]",
    span: "md:col-span-7",
    tone: "butter",
    seed: 32,
  },
  {
    caption: "03 — Soft Machine",
    note: "Creative workspace",
    ratio: "aspect-square",
    span: "md:col-span-4",
    tone: "aqua",
    seed: 33,
  },
  {
    caption: "04 — Heat Map",
    note: "Exhibition view",
    ratio: "aspect-[3/4]",
    span: "md:col-span-4",
    tone: "crimson",
    seed: 34,
  },
  {
    caption: "05 — Paper Storm",
    note: "Collage table",
    ratio: "aspect-[4/5]",
    span: "md:col-span-4",
    tone: "bone",
    seed: 35,
  },
  {
    caption: "06 — Wide Angle",
    note: "Main Hall, soundcheck",
    ratio: "aspect-[16/7]",
    span: "md:col-span-12",
    tone: "ember",
    seed: 36,
  },
  {
    caption: "07 — Orbit",
    note: "Digital art wall",
    ratio: "aspect-[3/4]",
    span: "md:col-span-3",
    tone: "aqua",
    seed: 37,
  },
  {
    caption: "08 — Static",
    note: "Visual research",
    ratio: "aspect-[4/3]",
    span: "md:col-span-5",
    tone: "butter",
    seed: 38,
  },
  {
    caption: "09 — Afterglow",
    note: "Night one",
    ratio: "aspect-[3/4]",
    span: "md:col-span-4",
    tone: "crimson",
    seed: 39,
  },
] as const satisfies readonly {
  caption: string;
  note: string;
  ratio: string;
  span: string;
  tone: Tone;
  seed: number;
}[];

export const shopItems = [
  { name: "EXPLODE TEE", price: "€28", tone: "ember", seed: 41 },
  { name: "STICKER PACK", price: "€8", tone: "butter", seed: 42 },
  { name: "POSTER 01", price: "€18", tone: "aqua", seed: 43 },
  { name: "CAP", price: "€24", tone: "crimson", seed: 44 },
  { name: "DIGITAL ZINE", price: "€6", tone: "bone", seed: 45 },
] as const satisfies readonly {
  name: string;
  price: string;
  tone: Tone;
  seed: number;
}[];

export const cultureRows = [
  {
    words: ["ART", "MOTION", "TYPE", "3D", "INTERACTION"],
    dir: "left",
    speed: 38,
  },
  {
    words: ["AI", "BRANDING", "CODE", "IMAGE", "SOUND"],
    dir: "right",
    speed: 46,
  },
  { words: ["TYPE", "MOTION", "IMAGE", "CODE", "ART"], dir: "left", speed: 54 },
] as const;

export const pillTones: readonly { bg: Tone; fg: Tone | "ink" }[] = [
  { bg: "ember", fg: "ink" },
  { bg: "aqua", fg: "ink" },
  { bg: "crimson", fg: "bone" },
  { bg: "butter", fg: "ink" },
  { bg: "bone", fg: "crimson" },
];

export const team = [
  { name: "MARA QUELL", role: "Creative Director" },
  { name: "TOBIAS REEF", role: "Head of Motion" },
  { name: "IVA NOIR", role: "Type & Identity" },
  { name: "KENJI BLOOM", role: "Creative Technology" },
] as const;

export const values = [
  {
    title: "BE LOUD",
    text: "Ideas that whisper get lost. We turn the volume up and then edit.",
  },
  {
    title: "STAY CURIOUS",
    text: "Every tool is a toy until it breaks. Then it becomes a method.",
  },
  {
    title: "SHARE THE SPARK",
    text: "A festival is a conversation. Everyone brings a match.",
  },
] as const;

export const disciplines = [
  "ART DIRECTION",
  "TYPE",
  "MOTION",
  "3D",
  "INTERACTION",
  "SOUND",
  "BRANDING",
  "CODE",
] as const;
