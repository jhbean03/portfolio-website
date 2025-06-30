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
import x86Logo from '../assets/x86.png'
import rubyLogo from '../assets/ruby.png'
import railsLogo from '../assets/rails.png'
import matlabLogo from '../assets/matlab.png'
import SkillBox from './SkillBox.tsx'

const LANGS = [
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
    {icon: x86Logo, text: "x86 Assembly"},
    {icon: rubyLogo, text: "Ruby"},
    {icon: railsLogo, text: "Rails"},
    {icon: matlabLogo, text: "MATLAB"},
];

const SKILLS = [
    "Data Structures and Algorithms",
    "Discrete Mathematics",
    "Predictive Statistics",
    "GNU Debugger (GDB)",
    "Breadboards",
    "SOLIDWORKS",
    "Microsoft Excel",
    "Technical Drawings",
    "Experimental Design",
    "OnShape",
    "Technical Communication",
    "Arduino",
    "Data Analysis",
    "Oscilloscope",
    "Spectrophotometry",
    "Gel Electrophoresis",
    "Health Data Management",
    "Jupyter Notebook (with Ohio Supercomputer)",
    "Total Internal Reflection Fluorescence (TIRF) Microscopy",
    "XML",
    "RSS",
    "Linux/UNIX",
    "Digital Circuits",
    "Analog Circuits",
    "Personal Computer Building",
    "Makefile"
];

const renderLangs = () => {
    const langBoxElems: any[] = [];
    LANGS.forEach((lang) => {
        langBoxElems.push(<SkillBox icon={lang.icon} text={lang.text}/>);
    })
    return langBoxElems
}

const renderSkills = () => {
    const skillElems: any[] = [];
    SKILLS.forEach((skill) => {
        skillElems.push(<div className="text-center pb-[2em]">{skill}</div>)
    })
    return skillElems
}

function Skills() {
    return (
        <div>
            {/* Computer Display */}
            <div className="max-lg:hidden flex flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-200 dark:bg-slate-800 w-[70%] ml-auto mr-auto mt-[5em] mb-[5em] rounded-4xl p-[2em] animate-fadeIn">
                <h1 className="font-[Offside] text-[40px] text-center font-bold">Skills</h1>
                <p className="text-center">
                    Below is a list of relevant skills, tools, and programming languages I have used throughout my various projects and coursework.
                </p>
                <h2 className="font-[Offside] text-[24px] text-center font-bold pt-[1em]">Programming Languages, Libraries, and Frameworks</h2>
                <div className="flex flex-row flex-wrap gap-[2em] justify-center font-[Offside]">
                    {renderLangs()}
                </div>
                <h2 className="font-[Offside] text-[24px] text-center font-bold pt-[1em]">General Skills</h2>
                <div className="grid grid-cols-3 max-lg:grid-cols-1 justify-items-center">
                    {renderSkills()}
                </div>
            </div>

            {/* Mobile Display */}
            <div className="lg:hidden flex 2xl:flex-row flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-100 dark:bg-slate-900 w-[100%] ml-auto mr-auto animate-fadeIn p-[1.5em]">
                <h1 className="font-[Offside] text-[40px] text-center font-bold">Skills</h1>
                <p className="text-center">
                    Below is a list of relevant skills, tools, and programming languages I have used throughout my various projects and coursework.
                </p>
                <h2 className="font-[Offside] text-[24px] text-center font-bold pt-[1em]">Programming Languages, Libraries, and Frameworks</h2>
                <div className="flex flex-row flex-wrap gap-[2em] justify-center font-[Offside]">
                    {renderLangs()}
                </div>
                <h2 className="font-[Offside] text-[24px] text-center font-bold pt-[1em]">General Skills</h2>
                <div className="grid grid-cols-3 max-lg:grid-cols-1 justify-items-center">
                    {renderSkills()}
                </div>
            </div>
        </div>
    )
}

export default Skills