const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adrian Nicarel | Portfolio",
  description:
    "Passionate Web Development practitioner who thrives to make a mark going for cunning Programming challenges on a tenacious quest for solutions",
  og: {
    title: "Adrian Nicarel",
    type: "website",
    url: "https://nicarel.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Hola !",
  sub: "Adrian Nicarel",
  logo_name: "Adrian Nicarel",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/adinicarel/",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/adrian-nicarel-529814/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, JS / ReactJS",
        "⚡ Creating application backend in PHP",
        "⚡ Deploying using Netlify, GitHub Pages",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#2965f1",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos:php",
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "ion:logo-github",
          /* style: {
            color: "#181717",
          }, */
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Webpage design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interfaces for mobile and web applications",
        "⚡ Programming custom widgets and plugins for WordPress webs",
        "⚡ Applying latest Design principles ",
      ],
      softwareSkills: [
        {
          skillName: "WordPress",
          fontAwesomeClassname: "ion:logo-wordpress",
          /* style: {
            color: "#21759b",
            backgroundColor:"#ffffff",
            border:"1px solid rgba(0,0,0,1)",
            borderRadius: "50%"
          }, */
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#2fa3f7",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "In my projects I try to use the benefits of latest technology tools while keeping an eye on nice catchy visuals. My focus is on designing scalable apps and friendly user experience using clean code principles",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      id: 1,
      title: "movy.es frontend",
      img_path: "movy-es-frontend.png",
      description:
        "A fully responsive landing page designed with WordPress Elementor and custom JS widget using fetch API to render content",
      tags: [
        {
          lang: "JavaScript",
          color: "#004782",
        },
        {
          lang: "CSS",
          color: "#820032",
        },
        {
          lang: "WordPress",
          color: "#3c0095",
        },
      ],
      code: "",
      linkcolor: "white",
    },

    {
      id: 2,
      title: "movy.es CRUD backend",
      img_path: "movy-es-backend.png",
      description:
        "A simple to use admin page in WordPress, custom plugin designed to read and edit data from newly created SQL database",
      tags: [
        {
          lang: "JavaScript",
          color: "red",
        },
        {
          lang: "CSS",
          color: "#004782",
        },
        {
          lang: "PHP",
          color: "#00a100",
        },
        {
          lang: "MySQL",
          color: "#ff4b4b",
        },
        {
          lang: "WordPress",
          color: "#3c0095",
        },
      ],
      code: "",
      linkcolor: "white",
    },
    {
      id: 3,
      title: "Robofriends",
      img_path: "robofriends.png",
      description:
        "Enter whatever name in the search box and get a unique cat friend logo design",
      tags: [
        {
          lang: "ReactJS",
          color: "#004782",
        },
        {
          lang: "CSS",
          color: "#820032",
        },
        {
          lang: "Tachyons CSS",
          color: "#00a100",
        },
        {
          lang: "Async API",
          color: "#ff4b4b",
        },
      ],
      code: "https://github.com/adinicarel/robofriends",
      linkcolor: "white",
    },
    {
      id: 4,
      title: "Forkify",
      img_path: "forkify.png",
      description:
        "Search and retrieve your favorite recipe interactively from API, Favorites button as well as shopping list and cart integrated",
      tags: [
        {
          lang: "JavaScript",
          color: "#004782",
        },
        {
          lang: "AJAX / async",
          color: "#3c0095",
        },
        {
          lang: "CSS",
          color: "#c47206",
        },
        {
          lang: "SASS",
          color: "#ff4b4b",
        },
      ],
      code: "https://github.com/adinicarel/forkify",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Web developer",
        subtitle: "self-employed",
        date: "September 2019 - present",
        content: [
          "Designed a WordPress landing page, using custom plugin built on native WP functions and widget builder - client movy.es - local phone shop",
          "Built a CRUD application using JavaScript, PHP, MySql, CSS - client movy.es - local phone shop",
          "Designed React apps with hooks - supervised by London Telegraph senior web developer",
          "Collaborated on WordPress custom widgets using CSS and JavaScript - collaboration with designers at Cubrain Bucharest - digital agency",
          "Hot figure: 9 different coding languages hands-on experience",
        ],
      },
      {
        title: "Marketing manager",
        subtitle: "For Guard Professional - 120 employees",
        date: "November 2012 - June 2019",
        content: [
          "Design marketing strategy, implement it online and offline.",
          "Tutoring in the field of security",
          "Direct sales to strategic business partners in the harbour area",
          "Managed the services offer for all media and supports",
          "Hot figure: 6 multinational partners I kept permanent contact with, 2 of each I directly gained as long-term clients",
          "Accomplishments: 4 x net income boost while cutting half of management expenses over 5 years in management position",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Web App developer",
          subtitle: "CIPFP, Mislata, Valencia, Spain",
          date: "2020 - 2021",
          content: [
            "Grade: 9/10",
            "Field: HTML, CSS, JS, PHP, MySQL, WordPress",
          ],
        },
        {
          title: "Communication and advertising specialist",
          subtitle: "SNSPA, Bucharest, Romania",
          date: "1999 - 2004",
          content: ["Grade: 8.3/10", "Field: advertising, marketing"],
        },
      ],
    },
    {
      title: ["Latest Work"],
      data: [
        {
          title: "Portfolio Website",
          subtitle: "adinicarel.netlify.app",
          content: [
            "This portfolio website with ReactJS, CSS - deployed on Netlify",
          ],
        },
        {
          title: "Academic projects",
          subtitle: "Udemy",
          content: [
            "Robofriends App using React, JavaScript, various CSS libraries: SASS, Tachyons",
            "Forkify project - recipe search tool from API based data, using JavaScript, CSS, Webpack",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "The Complete Web Developer: Zero to Mastery",
      subtitle: "Udemy",
      logo_path: "udemy-logo.png",
      certificate_link:
        "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/",
      alt_name: "Udemy-logo",
      color_code: "#000000",
    },
    {
      title: "The Complete JavaScript Course 2021: From Zero to Expert",
      subtitle: "Udemy",
      logo_path: "udemy-logo.png",
      certificate_link:
        "https://www.udemy.com/course/the-complete-javascript-course/",
      alt_name: "Udemy-logo",
      color_code: "#000000",
    },
    {
      title: "Developing Cloud Applications with Node.js and React",
      subtitle: "Stanford - IBM",
      logo_path: "edx-logo.png",
      certificate_link:
        "https://www.edx.org/es/course/developing-cloud-applications-with-nodejs-and-react",
      alt_name: "Stanford-IDX-logo",
      color_code: "#000000",
    },
    {
      title:
        "Introduction to Cloud Development with HTML5, CSS3, and JavaScript",
      subtitle: "Stanford - IBM",
      logo_path: "edx-logo.png",
      certificate_link:
        "https://www.edx.org/es/course/introduction-to-cloud-development-with-html5-css3-and-javascript",
      alt_name: "Stanford-IDX-logo",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "I am available to work remotely or office-based. You can message me, I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "46900 Torrent, Valencia, Spain",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+34 643432299",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/adinicarel/",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#971515", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adrian-nicarel-529814/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/34643432299",
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/whatsapp?s=brands
    backgroundColor: "#25d366", // Reference https://simpleicons.org/?q=whatsapp
  },
  {
    name: "Gmail",
    link: "mailto:adrian.nicarel@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
