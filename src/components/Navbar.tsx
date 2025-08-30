import { FiMoon, FiSun } from "react-icons/fi";
import { useState } from 'react';
import resumePDF from '../assets/JacksonBean.pdf'

interface NavbarProps {
  theme: boolean
  setTheme: Function
  setInfo: Function
}

function Navbar({theme, setTheme, setInfo}: NavbarProps) {
  const [toggleNav, setToggleNav] = useState(true);

  return (
    <nav className="flex sticky top-[0] left-[0] z-1 items-center justify-between p-[1.5rem_3.5rem] m-[0] bg-slate-200 dark:bg-slate-800 shadow-[0_3px_5px_rgba(0,_0,_0,_0.3)]">
      <div className="font-[Offside] text-[40px] max-lg:text-[24px] font-bold text-black dark:text-slate-200">JACKSON BEAN</div>
      <ul id="nav-links" className={`flex items-center gap-[1.9rem] text-[20px] font-bold max-lg:absolute max-lg:right-0 max-lg:h-[50em] max-lg:top-[4.2em] max-lg:pt-[3em]
      max-lg:bg-[rgba(226,232,240,0.8)] max-lg:dark:bg-[rgba(29,41,61,0.8)] max-lg:flex-col max-lg:w-[100%] ${toggleNav ? "max-lg:translate-x-full" : "max-lg:translate-x-0"} 
      max-lg:transition-transform max-lg:duration-500 max-lg:ease-in`}>
        <li><a className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer"
          onClick = { () => {
            setInfo("home");
            setToggleNav(!toggleNav);
            window.scrollTo(0, 0);
          }}
        >Home</a></li>
        <li><a className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer"
          onClick = { () => {
            setInfo("about");
            setToggleNav(!toggleNav);
            window.scrollTo(0, 0);
          }}
        >About Me</a></li>
        <li><a className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer"
          onClick = { () => {
            setInfo("skills");
            setToggleNav(!toggleNav);
            window.scrollTo(0, 0);
          }}
        >Skills</a></li>
        <li><a className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer"
          onClick = { () => {
            setInfo("projects");
            setToggleNav(!toggleNav);
            window.scrollTo(0, 0);
          }}
        >Projects</a></li>
        <li><a className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer"
          onClick = { () => {
            setInfo("experience");
            setToggleNav(!toggleNav);
            window.scrollTo(0, 0);
          }}
        >Experience</a></li>
        <li>
          <a href={resumePDF} target="_blank" className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer"
            onClick = { () => {
              setToggleNav(!toggleNav);
            }}
          >
            Resume
          </a>
        </li>
        <li>
          <button className="p-[0.75rem] bg-slate-300 dark:bg-slate-700 duration-200 hover:bg-slate-400 dark:hover:bg-slate-500 rounded-xl"
            onClick = { () => {
              theme ? localStorage.setItem("theme", "false") : localStorage.setItem("theme", "true");
              setTheme(!theme);
            }}
          >
            {theme ? <FiMoon/> : <FiSun style={{ color: "white" }}/>}
          </button>
        </li>
      </ul>
      <div className="hidden max-lg:block cursor-pointer"
        onClick = { () => {
          setToggleNav(!toggleNav);
        }}
      >
        <div className="w-[25px] h-[3px] m-[5px] bg-black dark:bg-slate-200"></div>
        <div className="w-[25px] h-[3px] m-[5px] bg-black dark:bg-slate-200"></div>
        <div className="w-[25px] h-[3px] m-[5px] bg-black dark:bg-slate-200"></div>
      </div>
    </nav>
  )
}

export default Navbar;