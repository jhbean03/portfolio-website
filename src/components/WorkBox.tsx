interface WorkBoxProps {
    title: string;
    department: string;
    location: string;
    date: string;
    skills: string;
    descriptionPoints: string[];
    last: boolean;
}

const renderPoints = (descriptionPoints: string[]) => {
    const pointElems: any[] = [];
    descriptionPoints.forEach( (point) => {
        pointElems.push(<li className="m-[0.5em]">{point}</li>);
    });
    return pointElems;
}

function WorkBox({title, department, location, date, skills, descriptionPoints, last}: WorkBoxProps) {
    return (
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[1em] bg-slate-300 dark:bg-slate-700 p-[1em] rounded-4xl justify-items-center items-center">
            <div>
                <h2 className="font-[Offside] text-[24px] text-center font-bold p-0">{title}</h2>
                <div className="text-center"><i>{department}</i></div>
                { last ? <div className="text-center" id="coursework"><i>{location}</i></div> : <div className="text-center"><i>{location}</i></div>}
                <div className="text-center"><i>{date}</i></div>
                { skills == "" ? "" : <div className="text-center"><b>Relevant Skills:</b> {skills}</div>}
            </div>
            <div>
                <ul className="list-disc">{renderPoints(descriptionPoints)}</ul>
            </div>
        </div>
    );
}

export default WorkBox