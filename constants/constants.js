import { AiOutlineSearch } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { calculateExperience } from "../helpers/getExperience";
import { GrMail } from "react-icons/gr";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
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
  mobileHeading: "Sourabh Nerlekar",
  description:
    "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
  workExperience: "Work Experience",
  designation: "Software Engineer",
  company: "Mindtree Private Limited",
  timePeriod: "03/2021 - Present",
  workProjects: [
    {
      title: "DHRE RealConnect (01/02/2022 - Present) :",
      description:
        "Currently, Working on a live project from scratch as a React Js Frontend developer.",
    },
    {
      title: "Informa DNA (01/07/2021 - 31/01/2022) :",
      description:
        "Worked with mentioned technologies : React Js, Redux-saga, Redux-toolkit, Sass, Material Ui, axios, ag-grid-react, formik and yup. Mainly worked on the Logical part of frontend like API integration, Implementation of new features, Reusable components, Bug fixes using React Js, JavaScript and Sass.",
    },
  ],
};

export const sideBarInfo = {
  about:
    "A Detailed oriented and Committed Engineering Professional with a Bachelor of Engineering in Information Technology. Well-versed in writing code to create systems that are reliable and user-friendly.",

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
      href: "https://yo-sourabh.github.io",
      icon: BiLinkAlt,
    },
  ],
};

export const accordionData = [
  {
    question: "What skills does Sourabh have?",
    answer: `Sourabh is well-versed in Javascript, React Js, Redux, CSS 3, HTML 5, Tailwind, Next Js, React Native, Node Js, Express Js, MongoDb.`,
  },
  {
    question: "What services does Sourabh provide?",
    answer: `Sourabh provides fully responsive frontend applications with React Js, Full-stack aplications with MERN and Backend services with Node Js.`,
  },
  {
    question: "Is Sourabh frontend or backend developer?",
    answer: `Sourabh is a full stack web developer, Experienced in developing full stack MERN apllications.`,
  },
  {
    question: "How much experience does Sourabh have?",
    answer: `Sourabh has ${calculateExperience()} of experience in software industry.`,
  },
];

export const projectVideos = [
  {
    heading: "Mini Laptop Implementation using React Js.",
    platform: `Linkedin.`,
    author: `Sourabh Nerlekar`,
    image: `/assets/laptopdesign.png`,
    date: `1-Mar-2022`,
    link: `https://www.linkedin.com/feed/update/urn:li:ugcPost:6904281486057373696/`,
  },
  {
    heading: "House Design with pure CSS [2022].",
    platform: `Linkedin.`,
    author: `Sourabh Nerlekar`,
    image: `/assets/housedesign.png`,
    date: `10-Jan-2022`,
    link: `https://www.linkedin.com/posts/jayesh-choudhary-72444518b_css-animation-perspective3d-activity-6886298154199773184-C74d`,
  },
  {
    heading: "IPL-2022 Web Application using React Js.",
    platform: `Linkedin.`,
    author: `Sourabh Nerlekar`,
    image: `/assets/ipl2022.png`,
    date: `26-Mar-2022`,
    link: `https://www.linkedin.com/feed/update/urn:li:activity:6913334580070498304/`,
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
      href: "https://yo-sourabh.github.io",
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
      src: "/assets/postman.svg",
      shadowColor: "#FF6C37",
    },
    {
      title: "Netlify",
      href: "https://www.netlify.com/",
      src: "/assets/netlify.svg",
      shadowColor: "#4D9ABF",
    },
    {
      title: "Xano",
      href: "https://www.xano.com/",
      src: "/assets/xano.svg",
      shadowColor: "#0E99E1",
    },
    {
      title: "VS Code",
      href: "https://code.visualstudio.com/",
      src: "/assets/VSCode.svg",
      shadowColor: "#0E99E1",
    },
    {
      title: "Replit",
      href: "https://replit.com/",
      src: "/assets/replit.svg",
      shadowColor: "#000000",
    },
    {
      title: "Vim",
      href: "https://www.vim.org/",
      src: "/assets/vim.svg",
      shadowColor: "#019833",
    },
    {
      title: "RegEx",
      href: "",
      src: "/assets/RegEx.svg",
      shadowColor: "#000000",
    },
    {
      title: "JSON",
      href: "",
      src: "/assets/JSON.svg",
      shadowColor: "#1C1C1C",
    },
    {
      title: "XML",
      href: "",
      src: "/assets/xml.svg",
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
    title: "Laptop with React Js and Tailwind CSS",
    image: "/assets/laptopdesign.png",
    description: [
      "Implemented a laptop with Power on, Sign In with password or finger scanner, Restart, Sleep and Shut down functionality using React and Tailwind CSS.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:6904281486057373696/",
    liveDemo: "https://jayesh2906.github.io/laptop-design/",
    sourceCode: "https://github.com/jayesh2906/laptop-design",
  },
  {
    title: "House Design with CSS",
    image: "/assets/housedesign.png",
    description: [
      "Designed front-view of my house with pure CSS 3, Html 5 and JavaScript(for handling events).",
      "User can open and close Gate, Windows and Slide of a House, User can also rotate a house in 360°.",
    ],
    videoDemo:
      "https://www.linkedin.com/posts/jayesh-choudhary-72444518b_css-animation-perspective3d-activity-6886298154199773184-C74d",
    liveDemo: "https://jayesh2906.github.io/My-house.github.io/house.html",
    sourceCode: "https://github.com/jayesh2906/My-house.github.io",
  },
  {
    title: "IPL-2022 Web Application",
    image: "/assets/ipl2022.png",
    description: [
      "Implemented a WebApp that provides the live scorecard of IPL-2022 fetched from RESTful cricket API.",
      "User can create his/her playing 11 team for each franchise, User can also watch the best of IPL highlights.",
      "Converted to PWA that can be installed and run on mobile as a native app.",
      "Deployed it to Netlify.",
      "Technologies used: JavaScript, React, CSS 3, Material Ui, Local Storage.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6913334580070498304/",
    liveDemo: "https://ipl-2022.netlify.app/",
    sourceCode: "https://github.com/jayesh2906/IPL-2022-App",
  },
  {
    title: "Full E-Commerce Web Application",
    image: "/assets/iconstore.png",
    description: [
      "Implemented a Full E-Commerce WebApp with MERN Stack that can be used by users, sellers, and Admin.",
      "Uses json web token for security, Authorization.",
      "Uses Geo-location for auto-filling shipping address of user.",
      "Uses Twilio message notification to registered mobile number on confirmation of orders.",
      "Uses Paypal payment gateway integration for demo virtual payment of orders.",
      "Technologies used: JavaScript, React, Redux Thunk, Node Js, Expess Js, Html, CSS, Bootstrap 5, MongoDB.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6842941644195672064/",
    liveDemo: "",
    sourceCode: "https://github.com/jayesh2906/Final-Ecommerce-Project",
  },
  {
    title: "Ice Mart Mobile Application",
    image: "/assets/icemart.png",
    description: [
      "Implemented an Ice Mart Mobile App with MERNN Stack that can be used by users, and Admin.",
      "Uses json web token for security, Authorization.",
      "Uses Google-maps for location of user.",
      "Uses Google pay payment gateway integration for demo virtual payment of orders.",
      "Technologies used: JavaScript, React Native, Redux Toolkit, Node Js, Expess Js, MongoDB.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6941967333682737152/",
    liveDemo: "",
    sourceCode: "https://github.com/jayesh2906/Ice-Mart",
  },
  {
    title: "Real-time Online Chat Application",
    image: "/assets/chatapp.png",
    description: [
      "Implemented a Real-time Online Chat Application with react and stream that can be used for online communication.",
      "Server deployed to Heroku and Client deployed to Netlify.",
      "Responsive and converted into PWA(Native app).",
      "Technologies used: JavaScript, React, Stream, Node Js, Expess Js, Html, CSS.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6877141876273762304/",
    liveDemo: "",
    sourceCode: "https://github.com/jayesh2906/Lets-Chat-app",
  },
  {
    title: "Movie Info Application",
    image: "/assets/movieapp.png",
    description: [
      "Implemented a Movie info app with MERN Stack with third-party APIs for fetching movies record, Uses OMDb RESTful web service.",
      "Technologies used: JavaScript, React, Node Js, Expess Js, Html, CSS, Bootstrap 5, MongoDB.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6842939354764201984/",
    liveDemo: "",
    sourceCode: "",
  },
  {
    title: "All Projects Compilation",
    image: "/assets/allProjects.png",
    description: [
      "Check here my all Projects in Video Compilation.",
      "Technologies used: JavaScript, React Js, Redux, React Native, Next Js, Html5, CSS3,Tailwind Css, Material Ui, Bootstrap5, Sass, Styled Component, Node Js, Express Js, Mongo Db, Postman and Jwt-Authentication.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6962305778502254592/",
    liveDemo: "",
    sourceCode: "",
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
