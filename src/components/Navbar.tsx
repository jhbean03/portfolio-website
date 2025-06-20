import { FiMoon, FiSun } from "react-icons/fi";
import { useState } from 'react'

interface NavbarProps {
  theme: boolean
  setTheme: Function
  setInfo: Function
}

function Navbar({theme, setTheme, setInfo}: NavbarProps) {
  const [toggleNav, setToggleNav] = useState(true);

  return (
    <nav className="flex sticky top-[0] left-[0] z-1 items-center justify-between p-[1.5rem_3.5rem] m-[0] bg-slate-200 dark:bg-slate-800 shadow-[0_3px_5px_rgba(0,_0,_0,_0.3)]">
      <div className="font-[Offside] text-[40px] font-bold text-black dark:text-slate-200">JACKSON BEAN</div>
      <ul id="nav-links" className={`flex items-center gap-[1.9rem] text-[20px] font-bold max-lg:absolute max-lg:right-0 max-lg:h-[42em] max-lg:top-[5.4em] 
      max-lg:bg-slate-200 max-lg:dark:bg-slate-800 max-lg:flex-col max-lg:w-[35%] max-lg:translate-x-${toggleNav ? "full" : "0"} max-lg:transition-transform max-lg:duration-500 
      max-lg:ease-in`}>
        <li><a className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer"
          onClick = { () => {
            setInfo("home");
            setToggleNav(!toggleNav);
          }}
        >Home</a></li>
        <li><a className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer"
          onClick = { () => {
            setInfo("about");
            setToggleNav(!toggleNav);
          }}
        >About Me</a></li>
        <li><a className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer"
          onClick = { () => {
            setInfo("skills");
            setToggleNav(!toggleNav);
          }}
        >Skills</a></li>
        <li><a className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer"
          onClick = { () => {
            setInfo("projects");
            setToggleNav(!toggleNav);
          }}
        >Projects</a></li>
        <li><a className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer"
          onClick = { () => {
            setInfo("coursework");
            setToggleNav(!toggleNav);
          }}
        >Coursework</a></li>
        <li><a className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer"
          onClick = { () => {
            setInfo("resume");
            setToggleNav(!toggleNav);
          }}
        >Resume</a></li>
        <li>
          <button className="p-[0.75rem] bg-slate-300 dark:bg-slate-700 duration-200 hover:bg-slate-400 dark:hover:bg-slate-500 rounded-xl"
            onClick = { () => {
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
          console.log(toggleNav);
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