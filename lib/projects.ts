export type Category = "Illustration" | "Product design" | "Branding";

export type Project = {
  slug: string;
  title: string;
  description: string;
  categories: Category[];
  bgColor: string;
  textLight?: boolean;
  credit?: string;
  link?: { label: string; url: string };
  secondaryTags?: string[];
  folder?: string; // actual folder name in public/projects/ if different from slug
  coverImage?: string; // filename for card thumbnail
  images?: string[]; // stacked full-width images on project page
  spotImages?: string[]; // side-by-side responsive images on project page
};

export const projects: Project[] = [
  {
    slug: "lady-chief",
    title: "Lady Chief",
    description: "Branding and illustration for Lady Chief.",
    categories: ["Branding"],
    bgColor: "#C9A055",
    folder: "Lady Chief",
    coverImage: "Lady-chief-Cover.png",
  },
  {
    slug: "the-lounge",
    title: "The Lounge",
    description:
      "Illustrations for Girls' Night In's, The Lounge, community website.",
    categories: ["Illustration"],
    bgColor: "#F5D4AE",
    folder: "The Lounge",
    coverImage: "The-Lounge-cover.png",
    images: [
      "The-Lounge-1.png",
      "The-Lounge-2.png",
      "The-Lounge-3.png",
      "The-Lounge-4.png",
      "The-Lounge-5.png",
      "The-Lounge-6.png",
    ],
    spotImages: [
      "The-Lounge-spot1.png",
      "The-Lounge-spot2.png",
      "The-Lounge-spot3.png",
      "The-Lounge-spot4.png",
    ],
  },
  {
    slug: "preservation-architects",
    title: "Preservation Architects",
    description:
      "Portfolio website redesign for Elise Johnson–Schmidt & Associates.\nBuilt on Webflow by Nathan Igdaloff.",
    categories: ["Product design"],
    bgColor: "#8EC5B0",
    link: {
      label: "www.preservationarchitects.com",
      url: "https://www.preservationarchitects.com",
    },
    secondaryTags: [
      "Visual design",
      "UI",
      "Responsive design",
      "Design system",
      "Brand evolvement",
    ],
    folder: "Preservation Architects",
    coverImage: "ejs-cover.png",
    images: ["ejs-1-L.png", "ejs-2-S.png", "ejs-3-L.png"],
  },
  {
    slug: "stay-home-take-care",
    title: "Stay Home Take Care",
    description: "Illustrations for Girls' Night In's project website",
    categories: ["Illustration"],
    bgColor: "#F0EBC8",
    folder: "Stay Home Take Care",
    coverImage: "shtc-cover.png",
    images: ["shtc-1-M.png", "shtc-2-M.png", "shtc-3-m.png"],
  },
  {
    slug: "girls-night-in",
    title: "Girls' Night In",
    description: "Illustrations for the Girls' Night In holiday newsletter",
    categories: ["Illustration"],
    bgColor: "#F985A5",
  },
  {
    slug: "ruky",
    title: "Ruky",
    description: "Branding and identity for Ruky.",
    categories: ["Branding"],
    bgColor: "#C4A43A",
  },
  {
    slug: "one-knit-crochet-too",
    title: "One Knit Crochet Too",
    description: "Illustrations for One Knit Crochet Too.",
    categories: ["Illustration"],
    bgColor: "#E8D8C8",
  },
  {
    slug: "adobe-fresco",
    title: "Adobe Fresco",
    description: "Illustrations to user-test the Adobe Fresco app.",
    categories: ["Illustration"],
    bgColor: "#595940",
    textLight: true,
  },
  {
    slug: "nyc-ink-drawings",
    title: "NYC Ink Drawings",
    description: "Ink drawings of New York City.",
    categories: ["Illustration"],
    bgColor: "#E8E4D8",
  },
  {
    slug: "one-knit-crochet-too-v2",
    title: "One Knit Crochet Too",
    description: "Additional illustrations for One Knit Crochet Too.",
    categories: ["Illustration"],
    bgColor: "#D4E8C8",
  },
  {
    slug: "netflix",
    title: "Netflix",
    description: "Product design work at Netflix.",
    categories: ["Product design"],
    bgColor: "#1C1C1C",
    textLight: true,
  },
  {
    slug: "netflix-whistle",
    title: "Whistle",
    description: "Product design for Whistle.",
    categories: ["Product design"],
    bgColor: "#1A3A38",
    textLight: true,
  },
  {
    slug: "netflix-puppyspot",
    title: "Puppyspot",
    description:
      "Product design and illustration for Puppyspot.",
    categories: ["Product design", "Illustration"],
    bgColor: "#5BB8D0",
  },
  {
    slug: "entertainment-weekly",
    title: "Entertainment Weekly",
    description:
      "Product design and illustration for Entertainment Weekly.",
    categories: ["Product design", "Illustration"],
    bgColor: "#2A2A2A",
    textLight: true,
  },
  {
    slug: "great-big-story",
    title: "Great Big Story",
    description: "Product design for Great Big Story.",
    categories: ["Product design"],
    bgColor: "#E84327",
    textLight: true,
  },
  {
    slug: "weknow",
    title: "WeKnow",
    description: "Product design and branding for WeKnow.",
    categories: ["Product design", "Branding"],
    bgColor: "#F0EBF8",
  },
  {
    slug: "esquire-jacket",
    title: "Esquire Jacket",
    description: "Hand-painted leather jacket with eye illustration design.",
    categories: ["Illustration"],
    bgColor: "#85C8D8",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
