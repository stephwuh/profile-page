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
    title: "Digital Closet",
    description: "Full stack app that helps users dress stylishly.",
    details: "",
    github: "https://github.com/stephwuh/digitalCloset",
  },
  {
    image: [jat1, jat2],
    title: "Job Application Tracker",
    description: "Allows users to track their job applications",
    details: "",
    github: "https://github.com/stephwuh/khaki-apps",
  },
  {
    image: [td1],
    title: "Stick Note To-do List",
    description:
      "Users are able to create, save, and delete to-do items in the form of stick notes",
    details:
      "I wanted to make a to-list app that was a bit more visually appealing",
    github: "https://github.com/stephwuh/Sticky-Note-Todo-List",
  },
];

export default projectInfo;
