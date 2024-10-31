import img1 from "..//assets/html-edit-1.svg"
import img2 from "..//assets/css-edit-1.svg"
import img3 from "..//assets/java-edit-1.svg"
import img4 from "..//assets/javascript-edit-1.svg"
import img5 from "..//assets/typescript-edit-1.svg"
import img6 from "..//assets/mysql-edit-1.svg"

import reactLogo from "..//assets/react-edit-1.svg"
import tailwindLogo from "..//assets/tailwindcss-edit-1.svg"
import img9 from "..//assets/boostrap-edit-1.svg"
import springBootLogo from "..//assets/springboot-edit-1.svg"
import ionicLogo from "..//assets/ionic-edit-1.svg"

import img12 from "..//assets/git-edit-1.svg"
import img13 from "..//assets/github-edit-1.svg"
import img14 from "..//assets/postman.svg"
import img15 from "..//assets/trello.svg"
import img16 from "..//assets/figma-icon.svg"
import img17 from "..//assets/excalidraw-edit-1.svg"

import image1ArecoBus from "..//assets/arecobusimagen1.jpg"
import image2ArecoBus from "..//assets/arecobusimagen2.jpg"
import image3ArecoBus from "..//assets/arecobusimagen3.jpg"


const stackImages = [
  { src: img1, alt: "HTML", group: "lenguajes" },
  { src: img2, alt: "CSS", group: "lenguajes" },
  { src: img3, alt: "Java", group: "lenguajes" },
  { src: img4, alt: "JavaScript", group: "lenguajes" },
  { src: img5, alt: "MySQL", group: "lenguajes" },
  { src: img6, alt: "TypeScript", group: "lenguajes" },
  { src: reactLogo, alt: "React", group: "frameworks" },
  { src: tailwindLogo, alt: "Tailwind CSS", group: "frameworks" },
  { src: img9, alt: "Bootstrap", group: "frameworks" },
  { src: springBootLogo, alt: "Spring Boot", group: "frameworks" },
  { src: ionicLogo, alt: "Ionic", group: "frameworks" }
];

const toolsImages = [
  { src: img12, alt: "Git", group: "tools" },
  { src: img13, alt: "GitHub", group: "tools" },
  { src: img14, alt: "Postman", group: "tools" },
  { src: img15, alt: "Trello", group: "tools" },
  { src: img16, alt: "Figma", group: "tools" },
  { src: img17, alt: "Excalidraw", group: "tools" }
];

const imagesArecobus = [
  { src: image1ArecoBus, alt: "Arecobus" },
  { src: image2ArecoBus, alt: "Arecobus" },
  { src: image3ArecoBus, alt: "Arecobus" },
]



const totalData = [

  {
    "titleProyect": "ArecoBUS",
    "description": "Proyecto que recopila la informacion de los distintos buses que operan en San Antonio de Areco.",
    "img1": image1ArecoBus,
    "img2": image2ArecoBus,
    "img3": image3ArecoBus,
    "techUses1": reactLogo,
    "techUses2": tailwindLogo,
    "techUses3": springBootLogo,
    "techUses4": ionicLogo,
  },
  {
    "titleProyect": "Prueba",
    "description": "loremasdasdasdasd as",
    "img1": image1ArecoBus,
    "img2": image2ArecoBus,
    "img3": image3ArecoBus,
    "techUses1": reactLogo,
    "techUses2": tailwindLogo,
    "techUses3": springBootLogo,
    "techUses4": ionicLogo,
  }
]



export default { stackImages, toolsImages, imagesArecobus, totalData }

