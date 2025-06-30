interface ProjectBoxProps {
    picture: string;
    title: string;
    date: string;
    skills: string;
    description: string;
    link: string;
    imgSide: string;
}

function ProjectBox({picture, title, date, skills, description, link, imgSide}: ProjectBoxProps) {
    return (
        <div>
            <div className="grid grid-cols-2 gap-[1em] max-xl:hidden bg-slate-300 dark:bg-slate-700 p-[1em] rounded-4xl justify-items-center items-center">
                { imgSide == "left" ? <img src={picture} className="rounded-4xl m-[2em] self-center"/> : "" }
                <div className="pb-0">
                    <h2 className="font-[Offside] text-[24px] text-center font-bold p-0">{title}</h2>
                    <div className="text-center"><i>{date}</i></div>
                    <div className="text-center"><b>Relevant Skills:</b> {skills}</div>
                    <div className="text-center mt-[1em]">
                        <p className="mb-[1em]">{description}</p>
                        { link === "" ? "" : <p><a href={link} target="_blank" className="duration-200 text-blue-600 hover:text-blue-400 dark:text-blue-300">Project Repository</a></p>}
                    </div>
                </div>
                { imgSide == "right" ? <img src={picture} className="rounded-4xl m-[2em] self-center"/> : "" }
            </div>

            <div className="xl:hidden grid grid-cols-1 gap-[1em] bg-slate-300 dark:bg-slate-700 p-[1em] rounded-4xl justify-items-center items-center">
                <img src={picture} className="row-span-2 rounded-4xl"/>
                <div>
                    <h2 className="font-[Offside] text-[24px] text-center font-bold p-0">{title}</h2>
                    <div className="text-center"><i>{date}</i></div>
                    <div className="text-center"><b>Relevant Skills:</b> {skills}</div>
                </div>
                <div className="text-center mt-[1em]">
                        <p className="mb-[1em]">{description}</p>
                        { link === "" ? "" : <p><a href={link} target="_blank" className="duration-200 text-blue-600 hover:text-blue-400 dark:text-blue-300">Project Repository</a></p>}
                </div>
            </div>
        </div>
    );
}

export default ProjectBox