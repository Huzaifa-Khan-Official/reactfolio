import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaLinkedinIn, FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import expressIcon from "../assets/expressjs-icon.png";

// for project 1
import project1Img1 from '../assets/Project1/1.png'
import project1Img2 from '../assets/Project1/2.png'
import project1Img3 from '../assets/Project1/3.png'
import project1Img4 from '../assets/Project1/4.png'
import project1Img5 from '../assets/Project1/5.png'
import project1Img6 from '../assets/Project1/6.png'
import project1Img7 from '../assets/Project1/7.png'
import project1Img8 from '../assets/Project1/8.png'

// for project 2
import project2Img1 from '../assets/Project2/1.png'
import project2Img2 from '../assets/Project2/2.png'
import project2Img3 from '../assets/Project2/3.png'
import project2Img4 from '../assets/Project2/4.png'
import project2Img5 from '../assets/Project2/5.png'
import project2Img6 from '../assets/Project2/6.png'
import project2Img7 from '../assets/Project2/7.png'

// for project 3
import project3Img1 from '../assets/Project3/1.png'
import project3Img2 from '../assets/Project3/2.png'
import project3Img3 from '../assets/Project3/3.png'
import project3Img4 from '../assets/Project3/4.png'
import project3Img5 from '../assets/Project3/5.png'

// for project 4
import project4Img1 from '../assets/Project4/1.png'
import project4Img2 from '../assets/Project4/2.png'
import project4Img3 from '../assets/Project4/3.png'
import project4Img4 from '../assets/Project4/4.png'

// for project 5
import project5Img1 from '../assets/Project5/1.png'
import project5Img2 from '../assets/Project5/2.png'
import project5Img3 from '../assets/Project5/3.png'
import project5Img4 from '../assets/Project5/4.png'
import project5Img5 from '../assets/Project5/5.png'

// socialIcons
import { FaFacebookF } from "react-icons/fa";

// lightModeImg
import lightModeImg from '../assets/lightModeImg.png'
import nightModeImg from '../assets/nightModeImg.png'

// institutesImages
import schoolLogo from '../assets/schoolLogo.png'
import collegeLogo from '../assets/collegeLogo.png'
import universityLogo from '../assets/universityLogo.png'
import smitLogo from '../assets/smitLogo.png'
import digiskillsLogo from '../assets/digiskillsLogo.png'

// navbarLogo
import navbarImg from '../assets/navbarLogo.png'
import { SiMongodb } from "react-icons/si";


const skillsSubTitle = "Crazy full stack developer who wants to explore every tech stack";

// name
const name = "Huzaifa Khan";

// navbarLogo
const navbarLogo = navbarImg;

// skillsIcons
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
        icon: <FaBootstrap />,
        title: "Bootstrap"
    },
    {
        icon: <IoLogoJavascript />,
        title: "JavaScript"
    },
    {
        icon: <IoLogoFirebase />,
        title: "firebase"
    },
    {
        icon: <RiReactjsLine />,
        title: "reactjs"
    },
    {
        icon: <TbBrandNextjs />,
        title: "Nextjs"
    },
    {
        icon: <SiMongodb />,
        title: "MongoDB"
    },
    {
        icon: <img src={expressIcon} alt="expressjs" />,
        title: "nodejs"
    },
    {
        icon: <FaNodeJs />,
        title: "nodejs"
    },
];

// education
const education = [
    {
        img: universityLogo,
        instituteName: "University of Karachi",
        degreeName: "Bachelor of Computer Science",
        duration: "January 2024 - December 2027"
    },
    {
        img: collegeLogo,
        instituteName: "Govt. College For Men Nazimabad",
        degreeName: "Intermediate in Science General Group",
        duration: "November 2021 - October 2023"
    },
    {
        img: schoolLogo,
        instituteName: "Mumtaz Vision Academy",
        degreeName: "Matriculation in Science Group",
        duration: "March 2019 - October 2021"
    }
]

// resumeLink
const resume = "https://drive.google.com/file/d/1cEj9nfYDevORTpV87cuMd3WKexi7Lxfd/view?usp=sharing";

// professionalExperience
const professionalExperience = [
    {
        img: smitLogo,
        name: "Saylani Mass IT Training Program",
        role: "Trainer Assistant for Web & Mobile App Development Course",
        duration: "January 2024 - May 2024 (5 Months)",
        certified: false
    },
    {
        img: smitLogo,
        name: "Saylani Mass IT Training Program",
        role: "Web & Mobile App Development Course",
        duration: "June 2023 - Continue",
        certified: false
    },
    {
        img: smitLogo,
        name: "Saylani Mass IT Training Program",
        role: "Programming Essentials in Python",
        duration: "December 2021 - March 2022",
        certified: true
    },
    {
        img: digiskillsLogo,
        name: "DigiSkills",
        role: "COMMUNICATION AND SOFT SKILLS",
        duration: "July 2022 - October 2022",
        certified: true
    },
]

// skillsList
const skillsList = [
    "Develop highly interactive Front end / User Interfaces for your websites.",
    "Integration of third party services such as Firebase.",
    "Easily create responsive sites."
]

// servicesList
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

// portfolio
const portfolio = [
    {
        images: [
            project1Img1,
            project1Img2,
            project1Img3,
            project1Img4,
            project1Img5,
            project1Img6,
            project1Img7,
            project1Img8,
        ],
        title: "RestaurantHub",
        description: "Streamlined restaurant website with easy navigation. Explore restaurants and menus, sign in to securely add items to your cart. Admins enjoy intuitive management, adding restaurants, and CRUD operations on menu items. Elevate your dining experience with RestaurantHub.",
        link: "https://restauranthub.vercel.app/"
    },
    {
        images: [
            project2Img1,
            project2Img2,
            project2Img3,
            project2Img4,
            project2Img5,
            project2Img6,
            project2Img7,
        ],
        title: "Dentist Website",
        description: "I have created a dentist website using React and Firebase, where users can perform CRUD operations on patient data after logging in. The website also provides daily and monthly data views. Additionally, users can manage pre-received amounts of patients through CRUD operations.",
        link: "https://react-dentist-website.vercel.app/"
    },
    {
        images: [
            project3Img1,
            project3Img2,
            project3Img3,
            project3Img4,
            project3Img5,
        ],
        title: "Blogging Website",
        description: "I've built a responsive blog website with JavaScript for seamless data operations using Firebase. Security is a top priority, leveraging Firebase features to protect user data. The focus is on delivering a precise, secure, and user-friendly blogging experience.",
        link: "https://blogging-website-huzaifa.vercel.app/"
    },
    {
        images: [
            project4Img1,
            project4Img2,
            project4Img3,
            project4Img4,
        ],
        title: "Todo Website",
        description: "I have developed a fully responsive todo website that efficiently stores data for each user, and authentication is implemented using Firebase, ensuring secure access to user accounts. Users can perform CRUD operations on todos within the website, enhancing productivity within the platform.",
        link: "https://firebase-todo-huzaifa.vercel.app/"
    },
    {
        images: [
            project5Img1,
            project5Img2,
            project5Img3,
            project5Img4,
            project5Img5,
        ],
        title: "Web Agency",
        description: "This website depicts a web agency's homepage. The website highlights the agency’s services, which include refreshing design, speed optimization, and full customization. The website also features testimonials from satisfied clients and a call to action to download the agency’s app.",
        link: "https://next-agency-web.vercel.app/"
    },
]

// contact
const contact = {
    number: "+923492089094",
    email: "huzaifakhanofficial01@gmail.com",
    location: "Metroville S.I.T.E. Karachi."
}

// socialLinks
const socialLinks = [
    {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/profile.php?id=100090157283290"
    },
    {
        icon: <FaGithub />,
        link: "https://github.com/Huzaifa-Khan-Official"
    },
    {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/huzaifa-khan-officia/"
    }
]

const themes = {
    lightModeImg,
    nightModeImg
}

export { skillsSubTitle, skillsIcons, skillsList, servicesList, portfolio, contact, socialLinks, name, themes, education, professionalExperience, resume, navbarLogo }