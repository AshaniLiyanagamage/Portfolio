import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { LiaHackerrank } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";

export const routes = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Designs",
    path: "/designs",
  },
];


export const footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Designs",
          link: "/designs",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/AshaniLiyanagamage",
          icon: <FiGithub/>,
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/ashani-liyanagamage-309a541a4/",
          icon: <FiLinkedin />,
          leavesWebsite: true,
        },
        {
          name: "HackerRank",
          link: "https://indiehackers.com/braydentw",
          icon: <LiaHackerrank />,
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:contact@braydentw.io",
          icon: <MdOutlineEmail />,
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "braydenw",
    paypal: "braydentw",
    message: "I appreciate your support very much! 💙",
  },
};
