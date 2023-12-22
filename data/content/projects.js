import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects = [
  {
    id: 0,
    title: "SkillGate",
    desc: "A system designed to streamline candidate shortlisting for job postings, currently tailored exclusively for applicants seeking a software engineer.",
    img: "https://res.cloudinary.com/dsqosc2ig/image/upload/v1703234873/portfolio/skillagte_qs9xnf.png",
    link: "https://skillgate.github.io/Web/",
    github: "https://github.com/SkillGate",
    tags: ["NextJs", "Node", "TailwindCSS", "CSS", "Firebase", "ML", "NLP", "MongoDB"],
  },
  {
    id: 1,
    title: "Athpotha Digital Carrier Guidance System",
    desc: "A system that guides high school students on how to enhance their academic and career paths.",
    img: "https://res.cloudinary.com/dsqosc2ig/image/upload/v1703232862/portfolio/athpotha_e3j962.jpg",
    // link: "https://buildfaster.co/",
    github: "https://github.com/athpotha",
    tags: ["Spring Boot", "React JS", "Material UI", "JavaScript", "CSS", "MySQL", "Stripe"],
  },
  {
    id: 2,
    title: "Employee Workflow Managment System",
    desc: "A system for task assignment and monitoring, calculating working hours, and managing employee leave.",
    img: "https://res.cloudinary.com/dsqosc2ig/image/upload/v1703232588/portfolio/cowms_nivqki.jpg",
    // link: "https://react-emoji-search.braydentw.vercel.app/",
    github: "https://github.com/CS41-UCSC",
    tags: ["PHP", "HTML", "JavaScript", "CSS", "MySQL"],
  },
  {
    id: 3,
    title: "Boardima",
    desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
    img: "https://res.cloudinary.com/dsqosc2ig/image/upload/v1703235103/portfolio/boardima_vfumj6.png",
    // link: "https://bitcointemp.com",
    github: "https://github.com/Boardima/boardima",
    tags: ["React JS", "Express", "MaterialUI", "MongoDB"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects