import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinFill,
} from "@remixicon/react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "#home",
  },
  {
    id: 2,
    label: "About me",
    href: "#about",
  },
  {
    id: 3,
    label: "Resume",
    href: "#resume",
  },
  {
    id: 4,
    label: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    label: "Contact",
    href: "#contact",
  },
];

export const heroIcons = [
  {
    id: 1,
    icon: RiLinkedinFill,
    link: "https://www.linkedin.com/in/abhishek-chowdhury-93927b278/",
  },
  {
    id: 2,
    icon: RiFacebookBoxFill,
    link: "https://www.facebook.com/abhishek.chowdhury.7792052",
  },
  {
    id: 3,
    icon: RiGithubFill,
    link: "https://github.com/Abhishek213-013",
  },
];


export const aboutItems = [
  {
    id: 1,
    label: "React & Next.js development",
  },
  {
    id: 2,
    label: "JavaScript",
  },
  {
    id: 3,
    label: "Responsive design & CSS frameworks",
  },
  {
    id: 4,
    label: "API integration & state management",
  },
  {
    id: 5,
    label: "Performance optimization",
  },
];

export const ResumeItems = [
  {
    id: 1,
    title: "Experience",
    list: [
      {
        role: "Mentor",
        label: "MU Programming Olympiad",
        time: "2023 & 2025",
      },
      {
        label: "Mentor",
        role: "MU SWE ACM",
        time: "2023-2024",
      },
    ],
  },
  {
    id: 2,
    title: "Education",
    list: [
      {
        label: "Metropolitan University, Sylhet",
        role: "Software Engineering",
        time: "2022-2025",
      },
      {
        label: "Murarichand College, Sylhet",
        role: "Higher Secondary Certificate",
        time: "2020",
      },
      {
        label: "Sylhet Govt. Pilot High School",
        role: "Secondary School Certificate",
        time: "2018",
      },
    ],
  },
];

export const ProjectsItems = [
  {
    id: 1,
    title: "MediBook",
    src: "/images/MediBook.jpg",
    text: "Frontend project built as a medium for Doctors and Patients to communicate. Manage appointments, dashboards for patients, and dashboard, working hour management for Doctors. Used Next.js, TypeScript.",
    link: "https://github.com/Abhishek213-013/MediBook",
    demo: "https://medi-book-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "BBMS",
    src: "/images/BBMS.png",
    text: "Blood Bank Management System is a website. Where a patient or donor can manage their blood donations and the collection system. With proper database integration and location scouting for suitable match.",
    link: "https://github.com/Abhishek213-013/BBMS/tree/main/BBMS",
    demo: "https://bbms-demo.vercel.app/", // replace if you have an actual demo
  },
  {
    id: 3,
    title: "Portfolio 3",
    src: "/images/portfolio-3.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus asperiores, quia adipisci repellendus",
    link: "https://github.com/Abhishek213-013/Portfolio-3",
    demo: "https://portfolio3-demo.vercel.app/", // placeholder
  },
  {
    id: 4,
    title: "Portfolio 4",
    src: "/images/portfolio-4.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus asperiores, quia adipisci repellendus",
    link: "https://github.com/Abhishek213-013/Portfolio-4",
    demo: "https://portfolio4-demo.vercel.app/", // placeholder
  },
];



export const contactItems = [
  {
    id: 1,
    label: "Email:",
    link: "abhishekchowdhury054@gmail.com",
  },
  {
    id: 2,
    label: "Phone:",
    link: "+880 1842 376477",
  },
  {
    id: 3,
    label: "Location:",
    link: "84/A Evergreen, Raynogor, Sylhet",
  },
];