// IMPORT ICONS
import htmlLogo from "../assets/icons/html-edit-1.svg";
import cssLogo from "../assets/icons/css-edit-1.svg";
import javaLogo from "../assets/icons/java-edit-1.svg";
import javascriptLogo from "../assets/icons/javascript-edit-1.svg";
import typescriptLogo from "../assets/icons/typescript-edit-1.svg";
import mysqlLogo from "../assets/icons/mysql-edit-1.svg";
import reactLogo from "../assets/icons/react-edit-1.svg";
import tailwindLogo from "../assets/icons/tailwindcss-edit-1.svg";
import bootstrapLogo from "../assets/icons/boostrap-edit-1.svg";
import springBootLogo from "../assets/icons/springboot-edit-1.svg";
import ionicLogo from "../assets/icons/ionic-edit-1.svg";
import gitLogo from "../assets/icons/git-edit-1.svg";
import githubLogo from "../assets/icons/github-edit-1.svg";
import postmanLogo from "../assets/icons/postman.svg";
import trelloLogo from "../assets/icons/trello.svg";
import figmaLogo from "../assets/icons/figma-icon.svg";
import excalidrawLogo from "../assets/icons/excalidraw-edit-1.svg";
import ionicicontwo from "../assets/icons/ionic-icon.svg";
import weblogo from "../assets/icons/weblogo.svg";


// IMPORT IMAGES
import image1ArecoBus from "../assets/images/arecobusimagen1.jpg";
import image2ArecoBus from "../assets/images/arecobusimagen2.jpg";
import image3ArecoBus from "../assets/images/arecobusimagen3.jpg";
import gym1 from "../assets/images/imggym1.webp"
import gym2 from "../assets/images/imggym2.webp"
import registro1 from "../assets/images/imgregistro1.webp"
import registro2 from "../assets/images/imgregistro2.webp"
import registro3 from "../assets/images/imgregistro3.webp"
import transparentImage from "../assets/images/transparentimage.png";


const stackImages = [
  { src: htmlLogo, alt: "HTML", group: "lenguajes" },
  { src: cssLogo, alt: "CSS", group: "lenguajes" },
  { src: javaLogo, alt: "Java", group: "lenguajes" },
  { src: javascriptLogo, alt: "JavaScript", group: "lenguajes" },
  { src: typescriptLogo, alt: "TypeScript", group: "lenguajes" },
  { src: mysqlLogo, alt: "MySQL", group: "lenguajes" },
  { src: reactLogo, alt: "React", group: "frameworks" },
  { src: tailwindLogo, alt: "Tailwind CSS", group: "frameworks" },
  { src: bootstrapLogo, alt: "Bootstrap", group: "frameworks" },
  { src: springBootLogo, alt: "Spring Boot", group: "frameworks" },
  { src: ionicLogo, alt: "Ionic", group: "frameworks" }
];

const imgSupport = transparentImage;

const toolsImages = [
  { src: gitLogo, alt: "Git", group: "tools" },
  { src: githubLogo, alt: "GitHub", group: "tools" },
  { src: postmanLogo, alt: "Postman", group: "tools" },
  { src: trelloLogo, alt: "Trello", group: "tools" },
  { src: figmaLogo, alt: "Figma", group: "tools" },
  { src: excalidrawLogo, alt: "Excalidraw", group: "tools" }
];

const otherLogos = [
  { src: weblogo, alt: "Web", group: "otros" }
]


const totalData = [

  {
    "titleProyect": "ArecoBUS",
    "description": "Proyecto que recopila la informacion de los distintos buses que operan en San Antonio de Areco.",
    "img1": image1ArecoBus,
    "img2": image2ArecoBus,
    "img3": image3ArecoBus,
    "techUses3": tailwindLogo,
    "techUses2": springBootLogo,
    "techUses1": ionicicontwo,
    "techUses4": imgSupport,
    "gitHubLink": "www.google.com",
    "webLink": "www.youtube.com"
  },
  {
    "titleProyect": "Tu mundo Fitness",
    "description": "Proyecto que recopila la informacion de los distintos gimnasios de la ciudad de San Antonio de Areco.",
    "img1": gym1,
    "img2": gym2,
    "img3": gym1,
    "techUses1": reactLogo,
    "techUses2": tailwindLogo,
    "techUses3": bootstrapLogo,
    "techUses4": "",
    "gitHubLink": "www.google.com",
    "webLink": "www.youtube.com"
  },
  {
    "titleProyect": "Sistema de registro",
    "description": "Este sistema permite cargar usuarios universitarios y permite filtrar por sexo y ademas buscar por tipeo",
    "img1": registro1,
    "img2": registro2,
    "img3": registro3,
    "techUses1": reactLogo,
    "techUses2": tailwindLogo,
    "techUses3": bootstrapLogo,
    "techUses4": springBootLogo,
    "gitHubLink": "www.google.com",
    "webLink": "www.youtube.com"
  },
  
]



export default { stackImages, toolsImages, totalData, imgSupport, otherLogos };

