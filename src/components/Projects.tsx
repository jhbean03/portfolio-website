import ProjectBox from "./ProjectBox"
import apiImg from "../assets/apiImg.png"

const PROJECTS = [
    {picture: apiImg, title: "Full-Stack Employee Skill Search", description: "Something meaningful will go here eventually."},
    {picture: apiImg, title: "Full-Stack Employee Skill Search", description: "Something meaningful will go here eventually."}
];

const renderProjects = () => {
    const projectBoxElems: any[] = [];
    let counter = 0;
    PROJECTS.forEach((project) => {
        let imgSide = "";
        counter % 2 == 0 ? imgSide = "right" : imgSide = "left";
        counter++;

        projectBoxElems.push(<ProjectBox picture={project.picture} title={project.title} description={project.description} imgSide={imgSide}/>);
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