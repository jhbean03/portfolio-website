function Navbar() {
  return (
    <nav className={`flex sticky top-[0] left-[0] z-1 items-center justify-between p-[1.5rem_3.5rem] m-[0] bg-slate-200 shadow-[0_3px_5px_rgba(0,_0,_0,_0.3)]`}>
      <div className="font-[Offside] text-[40px] font-bold">JACKSON BEAN</div>
      <ul className="flex gap-[1.9rem] text-[20px] font-bold">
        <li><a href="#about" className="hover:text-blue-600">About Me</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#coursework" className="hover:text-blue-600">Coursework</a></li>
        <li><a href="#resume" className="hover:text-blue-600">Resume</a></li>
      </ul>
    </nav>
  )
}

export default Navbar