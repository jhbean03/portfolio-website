import SemesterBox from "./SemesterBox.tsx"
import WorkBox from "./WorkBox.tsx"

function Experience() {

    const RESEARCH_INTERN_POSITIONS = [
        {title: "Cognitive Systems Engineering Researcher", department: "The Ohio State University College of Industrial and Systems Engineering", location: "Columbus, OH", 
            date: "May 2024 - September 2024", skills: "C++, Visual Studio, Xcode, Python, Cognitive Systems Engineering", descriptionPoints: [
            "Worked with the Cognitive Systems Engineering Lab (CSEL) to develop two new contingency plans for UAMs",
            "Developed C++ code to run more than 40 simulations that enacted parameter-determined flight pathing",
            "Plotted results of simulations on six dynamic charts and graphs using Python with Pyplot Dash"
        ]},
        {title: "Biomedical Informatics Researcher", department: "The Ohio State University Department of Biomedical Informatics", location: "Columbus, OH", 
            date: "May 2023 - August 2023", skills: "Machine Learning, Artificial Intelligence, Python, R, Health Data", descriptionPoints: [
            "Developed machine learning code in Python to read over one million instances of patient data from Google Cloud and classify outcomes with more than 80% accuracy",
            "Analyzed code results using R and Python with Matplotlib and presented findings at a poster session with over 60 professors within the department in attendance"
        ]},
    ]

    const TEACHING_POSITIONS = [
        {title: "Student Instructional Associate", department: "The Ohio State University College of Arts and Sciences", location: "Columbus, OH", date: "August 2024 - Present", 
            skills: "", descriptionPoints: [
            "Teach Business Algebra twice a week to 72 students divided into two separate sections",
            "Answer at least 20 weekly questions about course material in a concise and understandable manner",
            "Prepare, grade, and proctor 10 weekly quizzes and four monthly exams over semester-long course content"
        ]},
        {title: "Grader (CSE 2421)", department: "The Ohio State University College of Engineering", location: "Columbus, OH", date: "January 2025 - May 2025", 
            skills: "", descriptionPoints: [
            "Worked as a grader for Systems I (CSE 2421)",
            "Graded and provided feedback on student programming projects written in C and AT&T x86 assembly language",
            "Held office hours twice a week to answer any questions from students and assist with completiton of programming projects"
        ]},
        {title: "Teaching Assistant (ENGR 1282.01H)", department: "The Ohio State University College of Engineering", location: "Columbus, OH", date: "August 2024 - December 2024", 
            skills: "", descriptionPoints: [
            "Worked as an undergraduate teaching assistant for Fundamentals of Engineering for Honors I Lab (ENGR 1282.01H)",
            "Helped answer any questions students had with regard to the lab experiences both in-person and through email",
            "Graded various forms of technical communication (lab reports, memos, abstracts) in a thorough and timely manner"
        ]},
        {title: "Grader (CSE 2231)", department: "The Ohio State University College of Engineering", location: "Columbus, OH", date: "May 2024 - August 2024", 
            skills: "", descriptionPoints: [
            "Worked as a grader for Software II (CSE 2231)",
            "Graded and provided feedback on student programming projects written in Java",
            "Held office hours twice a week to answer any questions from students and assist with completiton of programming projects"
        ]},
        {title: "Teaching Assistant (ENGR 1182)", department: "The Ohio State University College of Engineering", location: "Columbus, OH", date: "August 2023 - May 2024", 
            skills: "", descriptionPoints: [
            "Worked as an undergraduate teaching assistant for Fundamentals of Engineering II (ENGR 1182)",
            "Provided important feedback on various graphics assignments and reports submitted by students, helping them to learn more about technical communication",
            "Graded assignments in a timely manner and helped students to understand the feedback received"
        ]},
    ]

    const SEMESTERS = [
        {semesterName: "Spring 2026", courses: [
            {number: "CSE 5911", name: "Capstone Design: Software Applications"},
            {number: "CSE 5474", name: "Software Security"},
            {number: "CSE 3321", name: "Automata and Formal Languages"},
            {number: "MATH 4578", name: "Discrete Mathematical Models"},
            {number: "MATH 4581", name: "Abstract Algebra II"},
        ]},
        {semesterName: "Autumn 2025", courses: [
            {number: "CSE 3231", name: "Software Engineering Techniques"},
            {number: "CSE 3232", name: "Software Requirements Analysis"},
            {number: "CSE 3241", name: "Introduction to Database Systems"},
            {number: "CSE 3461", name: "Computer Networking and Internet Technologies"},
            {number: "CSE 3341", name: "Principles of Programming Languages"},
            {number: "MATH 4580", name: "Abstract Algebra I"},
        ]},
        {semesterName: "Spring 2025", courses: [
            {number: "CSE 3901", name: "Project: Design, Development, and Documentation of Web Applications"},
            {number: "CSE 3521", name: "Survey of Artificial Intelligence I: Basic Techniques"},
            {number: "CSE 2431", name: "Systems II: Introduction to Operating Systems"},
            {number: "MATH 4548", name: "Introductory Analysis II"},
            {number: "STAT 4202", name: "Introduction to Mathematical Statistics II"},
        ]},
        {semesterName: "Autumn 2024", courses: [
            {number: "CSE 2421", name: "Systems I: Introduction to Low-Level Programming and Computer Organization"},
            {number: "CSE 2331", name: "Foundations II: Data Structures and Algorithms"},
            {number: "MATH 4547", name: "Introductory Analysis I"},
            {number: "STAT 4201", name: "Introduction to Mathematical Statistics I"},
            {number: "CSE 2501", name: "Social, Ethical, and Professional Issues in Computing"},
            {number: "MATH 1295", name: "Introductory Seminar"},
        ]},
        {semesterName: "Spring 2024", courses: [
            {number: "CSE 2231", name: "Software II: Software Development and Design"},
            {number: "CSE 2321", name: "Foundations I: Discrete Structures"},
            {number: "ECE 2060", name: "Introduction to Digital Logic"},
            {number: "MATH 3345H", name: "Foundations of Higher Mathematics"},
            {number: "PHILOS 1332", name: "Ethics in the Professions: Introduction to Engineering Ethics"},
        ]},
        {semesterName: "Autumn 2023", courses: [
            {number: "CSE 2221", name: "Software I: Software Components"},
            {number: "ECE 2020", name: "Introduction to Analog Systems and Circuits"},
            {number: "MATH 3607", name: "Beginning Scientific Computing"},
            {number: "ENGLISH 2220", name: "Introduction to Shakespeare"},
        ]},
        {semesterName: "Spring 2023", courses: [
            {number: "PHYSICS 1251", name: "E&M, Waves, Optics, Modern Physics"},
            {number: "STAT 3450.01", name: "Basic Statistics for Engineers"},
            {number: "PSYCH 1100H", name: "Introduction to Psychology"},
            {number: "CHEM 2520", name: "Organic Chemistry II"},
            {number: "BIOMEDE 2800", name: "Anatomy for Engineers"},
        ]},
        {semesterName: "Autumn 2022", courses: [
            {number: "MECHENG 2040", name: "Statics and Introduction to Mechanics of Materials"},
            {number: "CHEM 2510", name: "Organic Chemistry I"},
            {number: "CHEM 2540", name: "Organic Chemistry Laboratory I"},
            {number: "BIOLOGY 1113H", name: "Biological Sciences: Energy Transfer and Development"},
            {number: "BIOMEDE 2000", name: "Introduction to Biomedical Engineering"},
            {number: "BIOMEDE 2001", name: "Professional Development"},
        ]},
        {semesterName: "Spring 2022", courses: [
            {number: "ENGR 1282.01H", name: "Fundamentals of Engineering for Honors II - Robotics"},
            {number: "ENGR 2367.01H", name: "Technical Communication"},
            {number: "ENGR 1196", name: "Minority Engineering Program Seminar"},
            {number: "MATH 2415", name: "Ordinary and Partial Differential Equations"},
            {number: "CHEM 1220", name: "General Chemistry II"},
            {number: "THEATRE 2100", name: "Introduction to Theatre"},
        ]},
        {semesterName: "Autumn 2021", courses: [
            {number: "ENGR 1281.01H", name: "Fundamentals of Engineering for Honors I"},
            {number: "MATH 2568", name: "Linear Algebra"},
            {number: "CHEM 1210", name: "General Chemistry I"},
            {number: "ENGR 1100.15", name: "Introduction to Ohio State and Engineering"},
            {number: "ARTSSCI 1137.16", name: "First-Year Seminar"},
        ]},
    ];

    const renderWork = (positions: {title: string, department: string, location: string, date: string, skills: string, descriptionPoints: string[]}[]) => {
        const workBoxElems: any[] = [];
        let counter = 0;
        positions.forEach( (position) => {
            counter++;
            workBoxElems.push(<WorkBox title={position.title} department={position.department} location={position.location} date={position.date} skills={position.skills} 
                descriptionPoints={position.descriptionPoints} last={counter == positions.length && positions === TEACHING_POSITIONS}/>)
        });
        return workBoxElems;
    }

    const renderSemesters = () => {
        const semesterBoxElems: any[] = [];
        SEMESTERS.forEach( (semester) => {
            semesterBoxElems.push(<SemesterBox semesterName={semester.semesterName} courses={semester.courses}/>);
        });
        return semesterBoxElems;
    }

    return (
        <div>
            {/* Computer Display */}
            <div className="max-lg:hidden flex flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-200 dark:bg-slate-800 w-[70%] ml-auto mr-auto mt-[5em] mb-[5em] rounded-4xl p-[2em] animate-fadeIn scroll-smooth">
                <h1 className="font-[Offside] text-[40px] text-center font-bold">Experience</h1>
                <p className="text-center">
                    Below is a list of all the work experience I have related to computer science, programming, software development, and general engineering/mathematics education, as well 
                    as a list of all the <a href="#coursework" className="duration-200 text-blue-600 hover:text-blue-400 dark:text-blue-300">coursework</a> I have completed at Ohio 
                    State while pursuing my Bachelors of Science in Computer Science and Engineering.
                </p>

                <h2 className="font-[Offside] text-[24px] text-center font-bold">Research Experience</h2>
                <div className="flex flex-col gap-[2em]">
                    {renderWork(RESEARCH_INTERN_POSITIONS)}
                </div>

                <h2 className="font-[Offside] text-[24px] text-center font-bold">Teaching Experience</h2>
                <div className="flex flex-col gap-[2em]">
                    {renderWork(TEACHING_POSITIONS)}
                </div>

                <h2 className="font-[Offside] text-[24px] text-center font-bold">Coursework</h2>
                <h3 className="text-[18px] text-center font-bold">Cumulative GPA: 4.00/4.00</h3>
                <div className="grid xl:grid-cols-2 max-xl:grid-cols-1 gap-[2em]">
                    {renderSemesters()}
                </div>
            </div>

            {/* Mobile Display */}
            <div className="lg:hidden flex 2xl:flex-row flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-100 dark:bg-slate-900 w-[100%] ml-auto mr-auto animate-fadeIn p-[1.5em] scroll-smooth">
                <h1 className="font-[Offside] text-[40px] text-center font-bold">Experience</h1>
                <p className="text-center">
                    Below is a list of all the work experience I have related to computer science, programming, software development, and general engineering/mathematics education, as well 
                    as a list of all the <a href="#coursework-mobile" className="duration-200 text-blue-600 hover:text-blue-400 dark:text-blue-300">coursework</a> I have completed at Ohio 
                    State while pursuing my Bachelors of Science in Computer Science and Engineering.
                </p>

                <h2 className="font-[Offside] text-[24px] text-center font-bold">Research Experience</h2>
                <div className="flex flex-col gap-[2em]">
                    {renderWork(RESEARCH_INTERN_POSITIONS)}
                </div>

                <h2 className="font-[Offside] text-[24px] text-center font-bold">Teaching Experience</h2>
                <div className="flex flex-col gap-[2em]">
                    {renderWork(TEACHING_POSITIONS)}
                </div>

                <div className="mb-[2.5em]" id="coursework-mobile">
                    <hr></hr>
                </div>

                <h2 className="font-[Offside] text-[24px] text-center font-bold">Coursework</h2>
                <h3 className="text-[18px] text-center font-bold">Cumulative GPA: 4.00/4.00</h3>
                <div className="grid xl:grid-cols-2 max-xl:grid-cols-1 gap-[2em]">
                    {renderSemesters()}
                </div>
            </div>
        </div>
    )
}

export default Experience