import { FiMoon, FiSun } from "react-icons/fi";

interface NavbarProps {
  theme: boolean
  setTheme: Function
}

function Navbar({theme, setTheme}: NavbarProps) {

  return (
    <nav className="flex sticky top-[0] left-[0] z-1 items-center justify-between p-[1.5rem_3.5rem] m-[0] bg-slate-200 dark:bg-slate-800 shadow-[0_3px_5px_rgba(0,_0,_0,_0.3)]">
      <div className="font-[Offside] text-[40px] font-bold text-black dark:text-slate-200">JACKSON BEAN</div>
      <ul className="flex items-center gap-[1.9rem] text-[20px] font-bold">
        <li><a href="#about" className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300">About Me</a></li>
        <li><a href="#skills" className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300">Skills</a></li>
        <li><a href="#projects" className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300">Projects</a></li>
        <li><a href="#coursework" className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300">Coursework</a></li>
        <li><a href="#resume" className="duration-200 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300">Resume</a></li>
        <li className="">
          <button className="p-[0.75rem] bg-slate-300 dark:bg-slate-700 duration-200 hover:bg-slate-400 dark:hover:bg-slate-500 rounded-xl"
            onClick = { () => {
              setTheme(!theme);
            }}
          >
            {theme ? <FiMoon/> : <FiSun style={{ color: "white" }}/>}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;