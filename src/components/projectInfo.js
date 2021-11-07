//need to use filesystem somewhere down the line
import dc1 from ".././images/project/digitalCloset/dc1.PNG";
import dc2 from ".././images/project/digitalCloset/dc2.PNG";
import dc3 from ".././images/project/digitalCloset/dc3.PNG";
import dc4 from ".././images/project/digitalCloset/dc4.PNG";
import dc5 from ".././images/project/digitalCloset/dc5.PNG";
import jat1 from ".././images/project/applicationTracker/jat1.PNG";
import jat2 from ".././images/project/applicationTracker/jat2.PNG";
import td1 from ".././images/project/stickyNote/td1.PNG";

const projectInfo = [
  {
    image: [dc1, dc2, dc3, dc4, dc5],
    video: "https://player.vimeo.com/video/639334937?h=5ce8d67c41&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    title: "Digital Closet",
    description: "Full stack app that helps users dress stylishly.",
    details: "The main goal of Digital Closet is to help users dress stylishly. It aims to do so by allowing users to catalogue and organize their clothes digitally and by providing them with outfit recommendations based on the clothes they have in their digital closet. \n This app is a result of a frustration I had while living in South Korea. ",
    github: "https://github.com/stephwuh/digitalCloset",
    tech: "React, Redux, Cloudinary, Node.js, Express, Bcrypt, Sequelize ORM, PostgreSQL"
  },
  {
    image: [jat1, jat2],
    video: "",
    title: "Job Application Tracker",
    description: "Allows users to track their job applications",
    details: "",
    github: "https://github.com/stephwuh/khaki-apps",
    tech: "React, Material UI, Bootstrap, Jest, React Testing Library, JSON Server"
  },
  {
    image: [td1],
    video: "",
    title: "Stick Note To-do List",
    description:
      "Users are able to create, save, and delete to-do items in the form of stick notes",
    details:
      "I wanted to make a to-list app that was a bit more visually appealing",
    github: "https://github.com/stephwuh/Sticky-Note-Todo-List",
    tech: "JavaScript, Node.js, Express"
  },
];

export default projectInfo;
