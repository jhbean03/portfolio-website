interface SemesterBoxProps {
    semesterName: string;
    courses: {number: string, name: string}[];
}

const renderCourses = (courses: {number: string, name: string}[]) => {
    const courseElems: any[] = [];
    courses.forEach( (course) => {
        courseElems.push(<div className="self-start"><b>{course.number} - </b> {course.name}</div>)
    });
    return courseElems;
}

function SemesterBox({semesterName, courses}: SemesterBoxProps) {
    return (
        <div className="bg-slate-300 dark:bg-slate-700 p-[1em] rounded-4xl flex flex-col items-center">
            <h2 className="font-[Offside] text-[24px] text-center font-bold mb-[0.5em]">{semesterName}</h2>
            <div className="flex flex-col max-md:gap-x-[0.5em] gap-y-[1em] self-start">
                {renderCourses(courses)}
            </div>
        </div>
    )
}

export default SemesterBox