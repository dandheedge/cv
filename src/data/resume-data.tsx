import { BiznetLogo, CartesiLogo, KaryakarsaLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dandhi Damarrama",
  initials: "Dandhee",
  location: "Jakarta, Indonesia, GMT + 7",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  about:
    "Experienced Front-end Developer with over 8 years of expertise in creating and overseeing high-quality websites.",
  summary:
    "I keep learning about new ideas and technologies in the web industry and strive to keep up with the latest tools used. But I do know when to stick to what is tested and reliable. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL.",
  avatarUrl: "https://avatars.githubusercontent.com/u/13269955?v=4",
  personalWebsiteUrl: "https://damarrama.com",
  contact: {
    email: "dandhee.damarrama@gmail.com",
    tel: "+628564064078",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/damarrama",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/damarrama//",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/dandheedge",
        icon: XIcon,
      },
    ],
  },
  work: [
    {
      company: "Cartesi",
      link: "https://cartesi.io/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: CartesiLogo,
      start: "2023",
      end: "Present",
      description:
        "Working with subgraph and graphql to create a query to bridge between blockchain and frontend, enabling seamless integration of blockchain data into web applications. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Biznet Gio Nusantara",
      link: "https://www.biznetgio.com/",
      badges: ["Fulltime"],
      title: "Front End Developer",
      logo: BiznetLogo,
      start: "2017",
      end: "2022",
      description:
        "Developed a user-friendly portal that enables data center customers to effortlessly manage their resources and schedule visits without complications. Technologies: VueJS, Laravel, TypeScript, GraphQL",
    },
    {
      company: "MCCANN Worldgroup",
      link: "https://www.mccannworldgroup.com/",
      badges: ["Fulltime"],
      title: "Front End Developer",
      logo: BiznetLogo,
      start: "2015",
      end: "2017",
      description:
        "I'm using my skills as a web developer to help improve digital campaigns. My work includes building new microsites and keeping our current websites running smoothly.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Vuejs/Nuxt/Quasar",
    "Node.js",
    "GraphQL",
    "SwiftUI",
  ],
  projects: [
    {
      title: "Karya Karsa",
      techStack: ["NuxtJs", "Quasar", "Jenkins"],
      description:
        "KaryaKarsa is a platform designed to support creators by allowing them to monetize their digital works directly to their fans. It offers a space where various creators, including writers, illustrators, photographers, and streamers, can freely share their work.",
      logo: KaryakarsaLogo,
      link: {
        label: "Karya Karsa",
        href: "https://karyakarsa.com/feed",
      },
    },
    {
      title: "Kelas.work",
      techStack: ["Javascript"],
      description:
        "Teaching basic javascript for beginner. The syllabus that I teach including Datastructure, OOP, Functional Paradigm on Javascript and DOM",
      logo: undefined,
      link: {
        label: "Kelas.work",
        href: "https://kelas.work/classes/basic-javascript-untuk-frontend-developer",
      },
    },
  ],
} as const;
