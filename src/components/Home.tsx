import portrait from '../assets/jackson.jpg';
import { FaLinkedin, FaGithub } from "react-icons/fa";


function Home() {
    return (
        <div>
            {/* Computer Display */}
            <div className="max-lg:hidden flex 2xl:flex-row flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-200 dark:bg-slate-800 w-[70%] ml-auto mr-auto mt-[5em] mb-[5em] rounded-4xl p-[2em] animate-fadeIn">
                <img src={portrait} className="h-[27rem] w-auto rounded-4xl object-cover"/>
                <div className="flex flex-col gap-[2em] p-[1em]">
                    <h1 className="font-[Offside] text-[40px] font-bold">Welcome!</h1>
                    <p>
                        Hi! My name is Jackson, and I am an Honors Computer Science & Engineering (CSE) and Theoretical Mathematics undegraduate at THE Ohio State University!
                        This is my portfolio website which contains information about my professional goals, my personal interests, my skills, some of the projects I am
                        currently working on and have worked on in the past, and coursework I have completed. The latest version of my resume is included as well if you would
                        like to contact me with any questions regarding my work!
                    </p>
                    <div className="flex flex-row gap-[2em]">
                        <a href="https://www.linkedin.com/in/jackson-bean-158274239/" target="_blank"><FaLinkedin size={40}/></a>
                        <a href="https://github.com/jhbean03" target="_blank"><FaGithub size={40}/></a>
                    </div>
                </div>
            </div>

            {/* Mobile Display */}
            <div className="lg:hidden flex 2xl:flex-row flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-100 dark:bg-slate-900 w-[100%] ml-auto mr-auto animate-fadeIn">
                <img src={portrait} className="h-[27rem] w-auto object-cover"/>
                <div className="flex flex-col gap-[2em] p-[1em]">
                    <h1 className="font-[Offside] text-[40px] text-center font-bold">Welcome!</h1>
                    <p className="pr-[0.5em] pl-[0.5em] pb-[0.5em]">
                        Hi! My name is Jackson, and I am an Honors Computer Science & Engineering (CSE) and Theoretical Mathematics undegraduate at THE Ohio State University!
                        This is my portfolio website which contains information about my professional goals, my personal interests, my skills, some of the projects I am
                        currently working on and have worked on in the past, and coursework I have completed. The latest version of my resume is included as well if you would
                        like to contact me with any questions regarding my work!
                    </p>
                    <div className="flex flex-row gap-[2em] justify-center">
                        <a href="https://www.linkedin.com/in/jackson-bean-158274239/" target="_blank"><FaLinkedin size={40}/></a>
                        <a href="https://github.com/jhbean03" target="_blank"><FaGithub size={40}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home