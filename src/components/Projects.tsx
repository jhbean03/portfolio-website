import ProjectBox from "./ProjectBox"
import redesignedPortfolioImg from "../assets/redesignedPortfolio.png"
import apiImg from "../assets/apiImg.png"
import travelImg from "../assets/travelImg.png"

const PROJECTS = [
    {picture: redesignedPortfolioImg, title: "Redesigned Portfolio", date: "June 2025 - Present", skills: "React, TypeScript, Tailwind CSS", 
        description: "Starting in the summer of 2025, I began development of a new portfolio site that describes who I am as a person, what my career aspirations are"
        + "and any relevant projects I have completed during my time studying computer science.", link: ""},
    {picture: apiImg, title: "Full-Stack Employee Skill Search", date: "May 2025", skills: "React, TypeScript, APIs, MongoDB, Tailwind CSS", 
        description: "Using Express.js and TypeScript, I constructed a backend with HTTPS routes to read and write information to a database I set up in MongoDB. "
        + "With React and TypeScript, I was then able to create a dynamic and easy-to-use interface for employee skill searching.", link: "https://github.com/jhbean03/FullStackAPI"},
    {picture: travelImg, title: "Travel Expense Calculator", date: "April 2025", skills: "Ruby on Rails, JavaScript, Sass", 
        description: "For my web development projects class, me and a group of 4 others created a web application using Ruby on Rails which tracked various expenses made "
        + "during multiple trips. The application was focused on how best to split up the expenses between any given number of travellers and stored user information securely "
        + "within a database.", link: ""},
];

const renderProjects = () => {
    const projectBoxElems: any[] = [];
    let counter = 0;
    PROJECTS.forEach((project) => {
        let imgSide = "";
        counter % 2 == 0 ? imgSide = "right" : imgSide = "left";
        counter++;

        projectBoxElems.push(<ProjectBox picture={project.picture} title={project.title} date={project.date} 
            skills={project.skills} description={project.description} link={project.link} imgSide={imgSide}/>);
    });
    return projectBoxElems;
}

function Projects() {
    return (
        <div className="flex flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-200 dark:bg-slate-800 w-[70%] ml-auto mr-auto mt-[5em] mb-[5em] rounded-4xl p-[2em] animate-fadeIn">
            <h1 className="font-[Offside] text-[40px] text-center font-bold">Projects</h1>
            <div className="flex flex-col gap-[2em]">
                {renderProjects()}
            </div>
        </div>
    )
}

export default Projects