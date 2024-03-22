import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

const skillsSubTitle = "Crazy full stack developer who wants to explore every tech stack";

const skillsIcons = [
    {
        icon: <FaHtml5 />,
        title: "Html-5"
    },
    {
        icon: <FaCss3Alt />,
        title: "css3"
    },
    {
        icon: <IoLogoJavascript />,
        title: "JavaScript"
    },
    {
        icon: <RiReactjsLine />,
        title: "reactjs"
    },
    {
        icon: <IoLogoFirebase />,
        title: "firebase"
    },
    {
        icon: <TbBrandNextjs />,
        title: "Nextjs"
    },
];

const skillsList = [
    "Develop highly interactive Front end / User Interfaces for your websites.",
    "Integration of third party services such as Firebase.",
    "Easily create responsive sites."
]

const servicesList = [
    {
        title: "Website Development",
        description: "Create responsive and interactive websites for individuals, businesses, or organizations using your skills in HTML5, CSS3, JavaScript, and Bootstrap. Ensure that the websites are mobile-friendly and optimized for various devices and screen sizes."
    },
    {
        title: "Frontend Development",
        description: "Specialize in frontend development by building user interfaces (UIs) and user experiences (UX) using HTML5, CSS3, JavaScript, and React.js. Develop single-page applications (SPAs) and ensure they are fast, responsive, and accessible."
    },
    {
        title: "Custom Web Applications",
        description: "Utilize React.js along with backend technologies (like Node.js, Express.js, or others) to develop custom web applications. Use Firebase for real-time data syncing and backend services, such as authentication, databases, and hosting."
    },
    {
        title: "Web Hosting and Deployment",
        description: "Assist clients in deploying their websites and web applications to hosting platforms such as Firebase Hosting, Netlify, or traditional web servers. Optimize website performance and ensure secure connections (HTTPS)."
    },
    {
        title: "Maintenance and Updates",
        description: "Offer maintenance services to keep websites and web applications up-to-date with security patches, performance improvements, and feature enhancements. Provide regular backups and monitoring for uptime."
    },
    {
        title: "Responsive Design Audits",
        description: "Evaluate existing websites for responsiveness across devices and browsers. Provide recommendations and implement improvements using CSS3 media queries and responsive design principles."
    },
    {
        title: "Integration with APIs",
        description: "Integrate third-party APIs (such as social media APIs, or data APIs) into web applications using JavaScript and frameworks like React.js. Ensure secure and efficient data exchange between systems."
    },
]

export { skillsSubTitle, skillsIcons, skillsList, servicesList }