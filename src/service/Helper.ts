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
import springBootLogo from "../assets/icons/springboot-edit-1.svg"
import ionicLogo from "../assets/icons/ionic-edit-1.svg";
import gitLogo from "../assets/icons/git-edit-1.svg";
import githubLogo from "../assets/icons/github-edit-1.svg";
import postmanLogo from "../assets/icons/postman.svg";
import trelloLogo from "../assets/icons/trello.svg";
import figmaLogo from "../assets/icons/figma-icon.svg";
import excalidrawLogo from "../assets/icons/excalidraw-edit-1.svg";
import ionicicontwo from "../assets/icons/ionic-icon.svg";
import weblogo from "../assets/icons/weblogo.svg";
import argentineFlag from "..//assets/icons/argentina-flag.svg";
import englishFlag from "..//assets/icons/english-flag.svg";


// IMPORT IMAGES
import image1ArecoBus from "../assets/images/arecobusimagen1.webp";
import image2ArecoBus from "../assets/images/arecobusimagen2.webp";
import image3ArecoBus from "../assets/images/arecobusimagen3.webp";
import registro1 from "../assets/images/imgregistro1.webp"
import registro2 from "../assets/images/imgregistro2.webp"
import registro3 from "../assets/images/imgregistro3.webp"
import klendar1 from "..//assets/images/klendar1.webp";
import klendar2 from "..//assets/images/klendar2.webp";
import klendar3 from "..//assets/images/klendar3.webp";
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
const argImagen = argentineFlag;
const englishImagen = englishFlag;

const toolsImages = [
  { src: gitLogo, alt: "Git", group: "tools" },
  { src: githubLogo, alt: "GitHub", group: "tools" },
  { src: postmanLogo, alt: "Postman", group: "tools" },
  { src: trelloLogo, alt: "Trello", group: "tools" },
  { src: figmaLogo, alt: "Figma", group: "tools" },
  { src: excalidrawLogo, alt: "Excalidraw", group: "tools" }
];

const otherLogos = [
  { src: weblogo, alt: "Web", group: "otros" },
  { src: argentineFlag, alt: "Argentina" },
  { src: englishFlag, alt: "English" }

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
    "gitHubLink": "https://github.com/Fozkoo/ArecoBusMovile",
    "webLink": "https:/arecobus.netlify.app"
  },
  {
    "titleProyect": "Klendar",
    "description": "Klendar es un calendario para gestionar eventos de manera sencilla, inspirada en Google Calendar.",
    "img1": klendar1,
    "img2": klendar2,
    "img3": klendar3,
    "techUses1": reactLogo,
    "techUses2": tailwindLogo,
    "techUses3": typescriptLogo,
    "techUses4": springBootLogo,
    "gitHubLink": "https://github.com/Fozkoo/calendarFrontend",
    "webLink": "https://poo-dev.unsada.edu.ar:3003/login"
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
    "gitHubLink": "https://github.com/Fozkoo/SistemaRegistro",
    "webLink": ""
  },
  
]



export default { stackImages, toolsImages, totalData, imgSupport, otherLogos, argImagen, englishImagen };

