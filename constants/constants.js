import { AiOutlineSearch } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { BsFillPhoneFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";

export const accountDetails = {
  account: "Google Account",
  name: "Sourabh Nerlekar",
  gmail: "sourabhnerlekar22@gmail.com",
};

export const navBar = [
  {
    name: "About",
    path: "/",
    icon: AiOutlineSearch,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: BiPencil,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: AiOutlineFundProjectionScreen,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: BiPhoneCall,
  },
  {
    name: "Map",
    path: "/map",
    icon: MdOutlineLocationOn,
  },
];

export const info = {
  heading: "Sourabh Nerlekar: Front-End Engineer",
  mobileHeading: "Sourabh Nerlekar: Front-End Engineer",
  description:
    "Front-end engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
  title: "Recent Projects",
  projects: [
    {
      title: "Google Portfolio (Nov 2022 - present) :",
      description:
        "Technologies used: Next.js, Styled-components, Javascript, Lottie Animations, SVG, Babel, ESlint, HTML, CSS",
    },
    {
      title: "FreeCodeCamp UI Clone (Oct 2022) :",
      description:
        "Worked with mentioned technologies : React JS, JavaScript, HTML and CSS",
    },
  ],
};

export const sideBarInfo = {
  about:
    "Detail and design oriented engineering professional. He likes to develop creative and innovative projects using programs and design.",

  contactDetails: [
    {
      title: "sourabhnerlekar22@gmail.com",
      href: "mailto:sourabhnerlekar22@gmail.com",
      icon: GrMail,
    },
    {
      title: "+91 00000 00000",
      href: "tel:+91 00000 00000",
      icon: BsFillPhoneFill,
    },
    {
      title: "Linkedin Profile",
      href: "https://www.linkedin.com/in/sourabhnerlekar/",
      icon: FaLinkedin,
    },
    {
      title: "Github Profile",
      href: "https://github.com/GitSourabh7",
      icon: AiFillGithub,
    },
    {
      title: "Portfolio link",
      href: "https://sourabhnerlekar.netlify.app/",
      icon: BiLinkAlt,
    },
  ],
};

export const accordionData = [
  {
    question: "What skills does Sourabh have?",
    answer: `Sourabh is well-versed in Javascript, React JS, CSS 3, HTML 5, MongoDB, Git etc.`,
  },
  {
    question: "What services does Sourabh provide?",
    answer: `Sourabh provides fully responsive websites and frontend applications with ReactJS, Bootstrap, Bulma etc.`,
  },
  {
    question: "Is Sourabh frontend or backend developer?",
    answer: `Sourabh is a frontend web developer.`,
  },
  {
    question: "Do Sourabh have any cerfication?",
    answer: `Yes. Sourabh have certification in Full-stack Development, provided by KnowledgeHut.`,
  },
];

export const projectVideos = [
  {
    heading: "Google Porfolio",
    platform: `YouTube`,
    author: `Sourabh Nerlekar`,
    image: `/assets/thumbs/GooglePortfolio.png`,
    date: `15-Nov-2022`,
    link: ``,
  },
  {
    heading: "RoboFriends",
    platform: `YouTube`,
    author: `Sourabh Nerlekar`,
    image: `/assets/thumbs/RoboFriends.png`,
    date: `30-Aug-2022`,
    link: ``,
  },
  {
    heading: "UI_Navbar",
    platform: `YouTube`,
    author: `Sourabh Nerlekar`,
    image: `/assets/thumbs/UI_Navbar.png`,
    date: `16-Apr-2022`,
    link: ``,
  },
];

export const relatedsearch = [
  {
    text: "Sourabh's Skills",
    href: "/skills",
  },
  {
    text: "Sourabh's Projects",
    href: "/projects",
  },
  {
    text: "Contact Sourabh",
    href: "/contact",
  },
  {
    text: "Sourabh's Location",
    href: "/map",
  },
];

export const footerData = {
  name: "SourabhNerlekar",
  year: new Date().getFullYear(),
  darkTheme: "Dark theme: ",
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/sourabhnerlekar/",
      icon: FaLinkedin,
    },
    {
      href: "https://sourabhnerlekar.netlify.app/",
      icon: BiLinkAlt,
    },
    {
      href: "https://github.com/GitSourabh7",
      icon: FaGithub,
    },
  ],
};

export const skillsData = {
  info: " I like to develop innovative web apps using new technologies. I enjoy developing small sites to web apps.",
  skills: [
    {
      title: "Frontend Skills",
      description: "ReactJS, Javascript, HTML, CSS3, Bootstrap, Bulma",
    },
    {
      title: "Backend Skills",
      description: "MongoDB, Postman, Xano (no-code api platform)",
    },
  ],

  skillsIcons: [
    {
      title: "React JS",
      href: "https://reactjs.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "Javascript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      shadowColor: "#F0DB4F",
    },
    {
      title: "CSS 3",
      href: "https://www.w3schools.com/css/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      shadowColor: "#3b82f6",
    },
    {
      title: "HTML 5",
      href: "https://www.w3.org/html/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      shadowColor: "#f97316",
    },
    {
      title: "Bootstrap 5",
      href: "https://getbootstrap.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      shadowColor: "#7C12F8",
    },
    {
      title: "Bulma",
      href: "https://bulma.io/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg",
      shadowColor: "#00D1B2",
    },
    {
      title: "MongoDB",
      href: "https://www.mongodb.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      shadowColor: "#75BB69",
    },
    {
      title: "Git",
      href: "https://git-scm.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      shadowColor: "#F34F29",
    },
    {
      title: "GitHub",
      href: "https://github.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      shadowColor: "#181616",
    },
    {
      title: "Markdown",
      href: "https://www.markdownguide.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
      shadowColor: "#181616",
    },
    {
      title: "npm",
      href: "https://www.npmjs.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      shadowColor: "#CB3837",
    },
    {
      title: "Postman",
      href: "https://www.postman.com/",
      src: "/assets/skill-icons/postman.svg",
      shadowColor: "#FF6C37",
    },
    {
      title: "Netlify",
      href: "https://www.netlify.com/",
      src: "/assets/skill-icons/netlify.svg",
      shadowColor: "#4D9ABF",
    },
    {
      title: "Xano",
      href: "https://www.xano.com/",
      src: "/assets/skill-icons/xano.svg",
      shadowColor: "#0E99E1",
    },
    {
      title: "VS Code",
      href: "https://code.visualstudio.com/",
      src: "/assets/skill-icons/VSCode.svg",
      shadowColor: "#0E99E1",
    },
    {
      title: "Replit",
      href: "https://replit.com/",
      src: "/assets/skill-icons/replit.svg",
      shadowColor: "#000000",
    },
    {
      title: "LottieFiles",
      href: "https://lottiefiles.com/",
      src: "/assets/skill-icons/lottiefiles.svg",
      shadowColor: "#A259FF",
    },
    {
      title: "Vim",
      href: "https://www.vim.org/",
      src: "/assets/skill-icons/vim.svg",
      shadowColor: "#019833",
    },
    {
      title: "RegEx",
      href: "",
      src: "/assets/skill-icons/RegEx.svg",
      shadowColor: "#000000",
    },
    {
      title: "JSON",
      href: "",
      src: "/assets/skill-icons/JSON.svg",
      shadowColor: "#1C1C1C",
    },
    {
      title: "XML",
      href: "",
      src: "/assets/skill-icons/xml.svg",
      shadowColor: "#F29C1F",
    },
    {
      title: "Chrome",
      href: "https://developer.chrome.com/en/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
      shadowColor: "#5693C4",
    },
    {
      title: "Ubuntu",
      href: "https://ubuntu.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
      shadowColor: "#DD4814",
    },
  ],
};

export const otherSkillsData = {
  info: "Also worked with",

  otherSkillsIcons: [
    {
      title: "C",
      href: "https://www.learn-c.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg",
      shadowColor: "#03599C",
    },
    {
      title: "C++",
      href: "https://isocpp.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg",
      shadowColor: "#9C033A",
    },
    {
      title: "Tailwind CSS",
      href: "https://tailwindcss.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      shadowColor: "#38B2AC",
    },
    {
      title: "Photoshop",
      href: "",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      shadowColor: "#80B5E2",
    },
    {
      title: "Wordpress",
      href: "https://wordpress.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      shadowColor: "#494949",
    },
    {
      title: "Figma",
      href: "https://www.figma.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      shadowColor: "#A259FF",
    },
  ],
};

export const projectsData = [
  {
    title: "Google Portfolio using NextJS",
    image: "/assets/thumbs/GooglePortfolio.png",
    description: [
      "Build a beautiful and responsive google portfolio using SSR.",
      "SVGs are used for reducing size of project.",
      "This portfolio supports dark-mode",
      "Netlify is used for hosting this project and videos are hosted on YouTube",
      "Tech used: NextJS, Netlify, styled-components, SVG, ESLint, Babel, CSS, Lottie Animation",
    ],
    videoDemo: "https://youtu.be/-GAsNEy3PEU",
    liveDemo: "https://sourabhnerlekar.netlify.app/",
    sourceCode: "https://github.com/GitSourabh7/Portfolio",
  },
  {
    title: "RoboFriends using ReactJS",
    image: "/assets/thumbs/RoboFriends.png",
    description: [
      "Responsive and reusable components are used to build",
      "Implemented quick search by just typing in searchbox",
      "Tech used: Javascript, HTML, CSS, fake-api-service",
    ],
    videoDemo: "https://youtu.be/JFxEPx5un80",
    liveDemo: "",
    sourceCode: "https://github.com/GitSourabh7/robofriends",
  },
  {
    title: "UI Navbar",
    image: "/assets/thumbs/UI_Navbar.png",
    description: [
      "Glassmorphism effect is used for background and used beautiful onHover animation effects",
      "Tech Used: HTML, CSS and Javascript",
    ],
    videoDemo: "https://youtube.com/shorts/045ixgN1xZE",
    liveDemo: "",
    sourceCode: "https://github.com/GitSourabh7/UI_Navbar",
  },
  {
    title: "FreeCodeCamp UI Clone ",
    image: "/assets/thumbs/FreeCodeCamp.png",
    description: [
      "Responsive clone UI site of Freecodecamp build using React",
      "Technologies used: React, Bootstrap, Javascript, HTML, CSS",
    ],
    videoDemo: "https://youtu.be/379KAYaSV5I",
    liveDemo: "",
    sourceCode: "https://github.com/GitSourabh7/FreeCodeCamp",
  },
  {
    title: "Moshify: The Cloud-Hosting Site ",
    image: "/assets/thumbs/Moshify.png",
    description: [
      "The idea of this project got from the 'Mosh Hamedani's' YouTube video",
      "This is fully responsive website",
      "Technologies used: Javascript, HTML, CSS",
    ],
    videoDemo: "https://youtu.be/4CE0wWdw5io",
    liveDemo: "",
    sourceCode: "https://github.com/GitSourabh7/FreeCodeCamp",
  },
  {
    title: "Vidly: The Movie Renting Service",
    image: "/assets/thumbs/Vidly.png",
    description: [
      "This is a movie renting service build using React",
      "Most part of the project is build in javascript",
      "API design, development in Xano and testing is done using Postman",
      "Tech used: React, Xano (No-code API platform), Postman, Bootstrap, Joi",
    ],
    videoDemo: "https://youtu.be/i02qs0Kq0R0",
    liveDemo: "",
    sourceCode: "https://github.com/GitSourabh7/vidly",
  },
];

export const contactDetails = [
  {
    icon: MdCall,
    type: "Mobile",
    value: "+91 00000 00000",
    href: "tel:+91 00000 00000",
  },
  {
    icon: GrMail,
    type: "Email",
    value: "sourabhnerlekar22@gmail.com",
    href: "mailto:sourabhnerlekar22@gmail.com",
  },
  {
    icon: MdLocationOn,
    type: "Address",
    value: "Maharashtra, India",
    href: "",
  },
  {
    icon: FaLinkedin,
    type: "Linkedin",
    value: "Contact through Linkedin",
    href: "https://www.linkedin.com/in/sourabhnerlekar/",
  },
];

export const contactData = {
  nameLabel: "Name *",
  emailLabel: "Email *",
  subjectLabel: "Subject *",
  messageLabel: "Message *",
  sendButton: "Send Message",
  errorMessage:
    "Your message could not be sent, Kindly contact directly over Email or Phone!",
  successMessage:
    "Your message has been sent successfully, I will contact you soon!",
};
