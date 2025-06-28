import ProjectBox from "./ProjectBox.tsx"
import redesignedPortfolioImg from "../assets/redesignedPortfolio.png"
import apiImg from "../assets/apiImg.png"
import travelImg from "../assets/travelImg.png"
import curriculumImg from "../assets/curriculum.png"
import portfolioImg from "../assets/portfolio.png"
import robotImg from "../assets/robot.png"
import checkerImg from "../assets/checkers.png"

const PROJECTS = [
    {picture: redesignedPortfolioImg, title: "Redesigned Portfolio Website", date: "June 2025 - Present", skills: "React, TypeScript, Tailwind CSS", 
        description: "Starting in the summer of 2025, I began development of a new portfolio site that describes who I am as a person, what my career aspirations are"
        + "and any relevant projects I have completed during my time studying computer science. This portfolio was built using industry-standard tools such as React and Typescript, "
        + "along with Tailwind CSS for ease of styling.", link: ""},
    {picture: apiImg, title: "Full-Stack Employee Skill Search", date: "March 2025 - May 2025", skills: "React, TypeScript, APIs, MongoDB, Tailwind CSS", 
        description: "Using Express.js and TypeScript, I constructed a backend with HTTPS routes to read and write information to a database I set up in MongoDB. "
        + "With React and TypeScript, I was then able to create a dynamic and easy-to-use interface for employee skill searching.", link: "https://github.com/jhbean03/FullStackAPI"},
    {picture: travelImg, title: "Travel Expense Manager Web Application", date: "April 2025", skills: "Ruby on Rails, JavaScript, Sass", 
        description: "For my web development projects class, me and a group of four others created a web application using Ruby on Rails which tracked various expenses made "
        + "during multiple trips. The application was focused on how best to split up the expenses between any given number of travellers and stored user information securely "
        + "within a database.", link: ""},
    {picture: curriculumImg, title: "Computer Science Curriculum Visualization", date: "March 2025", skills: "JavaScript, Middleman, Sass", 
        description: "For my web development projects class, me and a group of four others created a web application using JavaScript and the Middleman static site generator. "
        + "This web application used dynamic visuals to give the user an easy-to-understand prerequisite chain for all of the courses they would need to take for Computer Science "
        + "at Ohio State.", link: ""},
    {picture: portfolioImg, title: "Original Portfolio Website", date: "May 2024 - June 2025", skills: "HTML, CSS, Javascript", 
        description: "My original portfolio website, which I began development on in the summer of 2024, was one of my first major web development projects. It not only served as a "
        + "platform for all of my projects and skills, but it also served as an introduction to very foundational web tools such as advanced HTML/CSS as well as JavaScript.", 
        link: "https://github.com/jhbean03/jhbean03.github.io"},
    {picture: robotImg, title: "Fundamentals of Engineering Honors Robot Project", date: "February 2022 - April 2022", skills: "C++, Makefile", 
        description: "As a part of Ohio State's First-Year Engineering course sequence, our second project was to build a robot capable of carrying out a given list of tasks, such "
        + "as moving an item or flipping a switch. I worked with a group of three other students and I was in charge of writing a majority of the code for the robot, which was in C++.", 
        link: ""},
    {picture: checkerImg, title: "Fundamentals of Engineering Honors Software Design Project", date: "February 2022 - April 2022", skills: "C++, Makefile", 
        description: "As a part of Ohio State's First-Year Engineering course sequence, our first project was to build a software-based deliverable in the form of a game. I worked " 
        + "with one other student and we both wrote the logic for the game itself, the AI opponent, and the board design, all of which was written in C++.", 
        link: ""},
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
            <p className="text-center">
                Below is a list of all of the projects I have completed related to programming and computer science. Note that some projects may not have a publicly available GitHub
                repository if they were completed as a project for a class.
            </p>
            <div className="flex flex-col gap-[2em]">
                {renderProjects()}
            </div>
        </div>
    )
}

export default Projects