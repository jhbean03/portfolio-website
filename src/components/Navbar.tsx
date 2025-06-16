function Navbar() {
  return (
    <div className="grid grid-cols-2 m-[1.5em]">
      <div className="grid font-[Offside] text-[40px] font-bold">JACKSON BEAN</div>
      <ul className="grid grid-cols-5 items-center justify-items-center">
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Coursework</li>
        <li>Resume</li>
      </ul>
    </div>
  )
}

export default Navbar