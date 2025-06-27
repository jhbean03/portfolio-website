interface ProjectBoxProps {
    picture: string;
    title: string;
    description: string;
    imgSide: string;
}

function ProjectBox({picture, title, description, imgSide}: ProjectBoxProps) {
    return (
        <div>
            <div className="grid grid-cols-2 grid-rows-[1fr_2fr] max-xl:hidden bg-slate-300 dark:bg-slate-700 p-[1em] rounded-4xl justify-items-center">
                { imgSide == "left" ? <img src={picture} className="row-span-2 rounded-4xl"/> : "" }
                <div>
                    <h2 className="font-[Offside] text-[24px] text-center font-bold p-0">{title}</h2>
                    <div className="text-center"><i>May 2025</i></div>
                </div>
                { imgSide == "right" ? <img src={picture} className="row-span-2 rounded-4xl"/> : "" }
                <div>{description}</div>
            </div>
            <div className="xl:hidden grid grid-cols-1 bg-slate-300 dark:bg-slate-700 p-[1em] rounded-4xl justify-items-center items-center gap-[1em]">
                <img src={picture} className="row-span-2 rounded-4xl"/>
                <div>
                    <h2 className="font-[Offside] text-[24px] text-center font-bold p-0">{title}</h2>
                    <div className="text-center"><i>May 2025</i></div>
                </div>
                <div>{description}</div>
            </div>
        </div>
    );
}

export default ProjectBox