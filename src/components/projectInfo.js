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

    details: "The main goal of Digital Closet is to help users dress stylishly. It aims to do so by allowing users to catalogue and organize their clothes digitally and by providing them with outfit recommendations based on the clothes they have in their digital closet. \n This app is a result of a frustration I had while living in South Korea. Wanting to dress stylishly but lacking the fashion sense, I thought it would be nice to have a personal stylist who picks out stylish clothes for you. Not having the money nor the connections for that however, I instead envisioned a web app that manages the users' closet and helps pick out clothes for them. Fast forward, I was able to make that a reality after going through a web development bootcamp and acquiring the necessary knowledge and tools to build one.",

    github: "https://github.com/stephwuh/digitalCloset",

    website: "https://digital-closet.herokuapp.com/",

    tech: "React, Redux, Cloudinary, Node.js, Express, Bcrypt, Sequelize ORM, PostgreSQL",

    features: "Upload and save images of clothes. \n Group images to form outfits and save for future reference. \n Provides weather information to help plan outfits. \n Provides outfit recommendations based on clothes in user's digital closet."
  },
  {
    image: [jat1, jat2],
    video: "",
    title: "Job Application Tracker",
    description: "Allows users to track their job applications.",
    details: "I worked on this seemingly simple project to practice test driven development and unit testing with Jest and React Testing Library, as well as practice using Bootstrap to easily apply styling and mobile responsiveness. \n Regarding test driven development, I made sure to adhere to the following process: (1) write failing unit tests of test cases based on software requirements using the arrange-act-assert pattern, (2) write production code to make the unit test pass, (3) refactor to eliminate duplicate code, etc. (4) repeat steps 1~3. \n Each unit test tests for a specific behavior, whether it's making sure the input text box renders as planned or testing to see if the filter function works properly. In order to drown out noise that might affect the outcome of the test, I isolate each test so they are not dependent on each other and control for external dependencies using mock data and functions.",
    github: "https://github.com/stephwuh/khaki-apps",
    website: "https://job-app-trkr.herokuapp.com/",
    tech: "React, Material UI, Bootstrap, Jest, Express, React Testing Library",
    features: "Create, save, delete job applications. \n Get an overview of all job applications from the job application board. \n Filter saved job applications from job application board with filter buttons or text inputed by the user."
  },
  {
    image: [td1],
    video: "",
    title: "Stick Note To-do List",
    description:
      "Users are able to create, save, and delete to-do items in the form of stick notes.",
    details:
      "As my very first project, I wanted to make a to-list app that was a bit more visually appealing.",
    github: "https://github.com/stephwuh/Sticky-Note-Todo-List",
    website: "https://sticky-note-to-do-list.herokuapp.com/",
    tech: "JavaScript, Node.js, Express",
    features: "Create, save, cross off, and delete to-do items"
  },
];

export default projectInfo;
