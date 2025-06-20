import reactLogo from '../assets/react.svg'
import typescriptLogo from '../assets/typescript.png'
import javascriptLogo from '../assets/javascript.png'
import htmlLogo from '../assets/html.png'
import tailwindLogo from '../assets/tailwind.png'
import cssLogo from '../assets/css.png'
import javaLogo from '../assets/java.png'
import cLogo from '../assets/c.png'
import cppLogo from '../assets/c++.png'
import gitLogo from '../assets/git.png'
import pythonLogo from '../assets/python.png'
import SkillBox from './SkillBox.tsx'

const SKILLS = [
    {icon: reactLogo, text: "React"},
    {icon: typescriptLogo, text: "TypeScript"},
    {icon: javascriptLogo, text: "JavaScript"},
    {icon: htmlLogo, text: "HTML"},
    {icon: tailwindLogo, text: "Tailwind CSS"},
    {icon: cssLogo, text: "CSS"},
    {icon: javaLogo, text: "Java"},
    {icon: cLogo, text: "C"},
    {icon: cppLogo, text: "C++"},
    {icon: gitLogo, text: "Git"},
    {icon: pythonLogo, text: "Python"},
]

const renderSkills = () => {
    const skillBoxElems: any[] = [];
    SKILLS.forEach((skill) => {
        skillBoxElems.push(<SkillBox icon={skill.icon} text={skill.text}/>);
    })
    return skillBoxElems
}

function Skills() {
    return (
        <div className="flex flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-200 dark:bg-slate-800 w-[70%] ml-auto mr-auto mt-[5em] rounded-4xl p-[2em]">
            <h1 className="font-[Offside] text-[40px] text-center font-bold">Skills</h1>
            <p className="text-center">
                Below is a list of relevant skills, tools, and programming languages I have used throughout my various projects and coursework.
            </p>
            <div className="grid 2xl:grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-[2em] justify-items-center font-[Offside]">
                {renderSkills()}
            </div>
        </div>
    )
}

export default Skills